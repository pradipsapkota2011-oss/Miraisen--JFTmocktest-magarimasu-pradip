import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut as firebaseSignOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import {
  firebaseConfig,
  LOGIN_PAGE,
  ADMIN_EMAIL
} from "./firebase-config.js";
import { TESTS } from "./answer-key-client.js";

function configLooksReady(){
  return firebaseConfig &&
    firebaseConfig.apiKey &&
    !String(firebaseConfig.apiKey).includes("PASTE_") &&
    firebaseConfig.projectId &&
    !String(firebaseConfig.projectId).includes("PASTE_");
}

if(!configLooksReady()){
  throw new Error("firebase-config.js मा सही Firebase configuration राख्नुहोस्।");
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function waitForAuth(){
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      unsubscribe();
      resolve(user || null);
    }, reject);
  });
}

export const securityReady = waitForAuth();

async function getAccessProfile(user = null){
  const current = user || auth.currentUser || await waitForAuth();
  if(!current) return null;
  const snap = await getDoc(doc(db, "users", current.uid));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

async function ensurePendingProfile(user){
  if(!user) return null;
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  if(snap.exists()) return { id: snap.id, ...snap.data() };

  const email = String(user.email || "").toLowerCase();
  const username = String(user.displayName || (email ? email.split("@")[0] : "Student")).trim();
  await setDoc(ref, {
    uid: user.uid,
    username,
    displayName: username,
    email,
    accessStatus: "pending",
    requestedAt: serverTimestamp(),
    createdAt: serverTimestamp(),
    accessUpdatedAt: serverTimestamp()
  });
  return { id: user.uid, uid: user.uid, username, displayName: username, email, accessStatus: "pending" };
}

async function requireApprovedUser(){
  const user = auth.currentUser || await waitForAuth();
  if(!user){
    const returnTo = encodeURIComponent(location.pathname.split("/").pop() || "index.html");
    location.href = `${LOGIN_PAGE}?return=${returnTo}`;
    return null;
  }

  let profile = await getAccessProfile(user);
  if(!profile) profile = await ensurePendingProfile(user);
  const status = String(profile?.accessStatus || "pending").toLowerCase();

  if(status !== "approved"){
    const message = status === "rejected"
      ? "तपाईंको Mock Test access request REJECT गरिएको छ। Admin लाई सम्पर्क गर्नुहोस्।"
      : status === "revoked"
        ? "तपाईंको Mock Test access REVOKE गरिएको छ। Admin लाई सम्पर्क गर्नुहोस्।"
        : "तपाईंको Mock Test access अझै PENDING छ। Miraisen Admin ले APPROVE गरेपछि मात्र Test खुल्छ।";
    const error = new Error(message);
    error.code = `access/${status}`;
    throw error;
  }

  return user;
}

async function startAttempt(testId){
  const user = await requireApprovedUser();
  if(!user) throw new Error("Login required.");
  const test = TESTS[String(testId || "")];
  if(!test) throw new Error("Unknown mock test.");

  const profile = await getAccessProfile(user);
  const email = String(user.email || profile?.email || "").toLowerCase();
  const username = String(profile?.username || user.displayName || (email ? email.split("@")[0] : "Student"));
  const clientStartedAtMs = Date.now();

  const ref = await addDoc(collection(db, "testAttempts"), {
    uid: user.uid,
    username,
    email,
    testId,
    status: "in_progress",
    questionCount: test.questionCount,
    totalItems: test.itemCount,
    startedAt: serverTimestamp(),
    clientStartedAtMs,
    submittedAt: null,
    gradingMode: "client-firestore"
  });

  return { attemptId: ref.id, testId, questionCount: test.questionCount, totalItems: test.itemCount };
}

function validOption(value, max){
  return Number.isInteger(value) && value >= 0 && value < max;
}

async function submitAttempt(payload){
  const user = await requireApprovedUser();
  if(!user) throw new Error("Login required.");

  const attemptId = String(payload?.attemptId || "");
  const testId = String(payload?.testId || "");
  const answers = payload?.answers;
  const test = TESTS[testId];

  if(!attemptId || !test || !Array.isArray(answers) || answers.length !== test.questionCount){
    throw new Error("Invalid submission payload.");
  }

  const attemptRef = doc(db, "testAttempts", attemptId);
  const snap = await getDoc(attemptRef);
  if(!snap.exists()) throw new Error("Attempt not found.");
  const attempt = snap.data();
  if(attempt.uid !== user.uid) throw new Error("This attempt belongs to another user.");
  if(attempt.testId !== testId) throw new Error("Test ID mismatch.");
  if(attempt.status !== "in_progress") throw new Error("This attempt was already submitted.");

  let correct = 0, wrong = 0, unanswered = 0;
  const correctAnswers = [];
  const normalizedAnswers = [];
  const itemResults = [];

  test.questions.forEach((q, qi) => {
    if(q.type === "double"){
      const incoming = Array.isArray(answers[qi]) ? answers[qi] : [];
      const normalized = [];
      const correctForQuestion = [];
      q.answers.forEach((right, pi) => {
        let selected = incoming[pi];
        if(!validOption(selected, q.optionCounts[pi])) selected = null;
        normalized.push(selected);
        correctForQuestion.push(right);
        if(selected === null){
          unanswered++;
          itemResults.push({questionIndex:qi, partIndex:pi, selected:null, correct:right, isCorrect:false});
        }else if(selected === right){
          correct++;
          itemResults.push({questionIndex:qi, partIndex:pi, selected, correct:right, isCorrect:true});
        }else{
          wrong++;
          itemResults.push({questionIndex:qi, partIndex:pi, selected, correct:right, isCorrect:false});
        }
      });
      normalizedAnswers.push(normalized);
      correctAnswers.push(correctForQuestion);
    }else{
      let selected = answers[qi];
      if(!validOption(selected, q.optionCounts)) selected = null;
      normalizedAnswers.push(selected);
      correctAnswers.push(q.answers);
      if(selected === null){
        unanswered++;
        itemResults.push({questionIndex:qi, partIndex:null, selected:null, correct:q.answers, isCorrect:false});
      }else if(selected === q.answers){
        correct++;
        itemResults.push({questionIndex:qi, partIndex:null, selected, correct:q.answers, isCorrect:true});
      }else{
        wrong++;
        itemResults.push({questionIndex:qi, partIndex:null, selected, correct:q.answers, isCorrect:false});
      }
    }
  });

  const totalItems = test.itemCount;
  const score = Math.round((correct / totalItems) * 250);
  const percentage = Math.round((correct / totalItems) * 100);
  const result = score >= 200 ? "PASS" : "FAIL";
  const durationSeconds = Math.max(0, Math.round((Date.now() - Number(attempt.clientStartedAtMs || Date.now())) / 1000));

  await updateDoc(attemptRef, {
    status: "submitted",
    submittedAt: serverTimestamp(),
    // Firestore does not allow an array to directly contain another array.
    // Double-part questions make normalizedAnswers nested, so store the
    // answer payload as JSON text instead. Admin score/history fields remain queryable.
    answersJson: JSON.stringify(normalizedAnswers),
    correct,
    wrong,
    unanswered,
    totalItems,
    score,
    percentage,
    result,
    durationSeconds,
    gradingMode: "client-firestore"
  });

  return { score, percentage, result, correct, wrong, unanswered, totalItems, durationSeconds, correctAnswers, itemResults };
}

async function logout(){
  await firebaseSignOut(auth);
  location.href = LOGIN_PAGE;
}

async function isAdmin(){
  const user = auth.currentUser || await waitForAuth();
  if(!user) return false;
  return String(user.email || "").toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

function mountUserBadge(){
  if(document.getElementById("jftSecureUserBadge")) return;
  const user = auth.currentUser;
  if(!user) return;

  const style = document.createElement("style");
  style.textContent = `
    #jftSecureUserBadge{position:fixed;right:12px;bottom:12px;z-index:9998;background:#fff;border:1px solid #ddd;border-radius:10px;box-shadow:0 3px 14px rgba(0,0,0,.18);font:12px Arial,sans-serif;padding:9px 10px;max-width:280px;color:#111}
    #jftSecureUserBadge b{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:240px}
    #jftSecureUserBadge button{margin-top:6px;border:0;border-radius:5px;padding:5px 9px;background:#222;color:#fff;cursor:pointer;font-weight:700}
  `;
  document.head.appendChild(style);

  const box = document.createElement("div");
  box.id = "jftSecureUserBadge";
  box.innerHTML = `<span>Logged in as</span><b></b><button type="button">Logout</button>`;
  box.querySelector("b").textContent = user.email || user.displayName || user.uid;
  box.querySelector("button").onclick = logout;
  document.body.appendChild(box);
}

window.jftSecurity = {
  app,
  auth,
  db,
  getAccessProfile,
  ensurePendingProfile,
  requireApprovedUser,
  startAttempt,
  submitAttempt,
  logout,
  isAdmin,
  mountUserBadge
};

export {
  app,
  auth,
  db,
  getAccessProfile,
  ensurePendingProfile,
  requireApprovedUser,
  startAttempt,
  submitAttempt,
  logout,
  isAdmin,
  mountUserBadge
};
