// SECURITY: Correct answers are intentionally removed from this browser file.
// Scoring is performed by Firebase Cloud Functions after submission.
// questions.js
const questions = [

{
  id: 1,
  section: "Vocabulary",
  instruction: "Look at the illustration and choose the correct word.",
  image: "Q1.png",
  options: ["とまります", "まがります", "わたります"],
  marks: 4
},
{
  id: 2,
  section: "Vocabulary",
  instruction: "Look at the illustration and choose the correct word.",
  image: "Q2.png",
  options: ["かみ", "てがみ", "コピー"],
  marks: 4
},
{
  id: 3,
  section: "Vocabulary",
  instruction: "Look at the illustration and choose the correct word.",
  image: "Q3.png",
  options: ["つけます", "かけます", "はります"],
  marks: 4
},
{
  id: 4,
  section: "Vocabulary",
   instruction: "Look at the illustration and choose the correct word.",
  image: "Q4.png",
  options: ["ハンカチ", "バンカチ", "パジャマ"],
  marks: 4
},
{
  id: 5,
  section: "Vocabulary",
   instruction: "Look at the illustration and choose the correct word.",
  image: "Q5.png",
  options: ["あげます", "やきます", "いためます"],
  marks: 4
},
{
  id: 6,
  section: "Vocabulary",
   instruction: "Look at the illustration and choose the correct word.",
  image: "Q6.png",
  options: ["父", "母", "祖父"],
  marks: 4
},
{
  id: 7,
  section: "Vocabulary",
   instruction: "Look at the illustration and choose the correct word.",
  image: "Q7.png",
  options: ["かいしゃ", "アパート", "スーパー"],
  marks: 4
},
{
  id: 8,
  section: "Grammar",
  instruction: "Read the sentence and choose the word that fits in ( ) the most.",
  question: "毎日家でテレビを_________。",
  options: ["借ります", "買います", "見ます"],
  marks: 4
},
{
  id: 9,
  section: "Grammar",
  instruction: "Read the sentence and choose the word that fits in ( ) the most.",
  question: "A : このきかいの使いかたは__________すぎて、ぜんぜん使えません。",
  options: ["ふくざつ", "ふくざつで", "ふくざつな"],
  marks: 4
},
{
  id: 10,
  section: "Grammar",
  instruction: "Read the sentence and choose the word that fits in ( ) the most.",
  question: "毎週、おそくまでしごとを_______、ご飯を食べます 。",
  options: ["持って", "して", "食べて"],
  marks: 4
},
{
  id: 11,
  section: "Grammar",
  instruction: "How do you write the underlined kanji word in hiragana?",
  subtitle: "Choose the correct one.",
  question: "私は１９９８<span style='text-decoration:underline;'>年</span>、に生まれました。",
  options: ["とし", "ねん", "がつ"],
  marks: 4
},
{
  id: 12,
  section: "Grammar",
  instruction: "How do you write the underlined kanji word in hiragana?",
  subtitle: "Choose the correct one.",
  question: "この町はお寺がたくさんあって<span style='text-decoration:underline;'>有名</span>なところです。",
  options: ["ゆうめ", "ゆめい", "ゆうめい"],
  marks: 4
},
{
  id: 13,
  instruction: "How do you write the underlined kanji word in hiragana?",
  subtitle: "Choose the correct one.",
  question: "旅行のとききれいで、りっぱな<span style='text-decoration:underline;'>旅館</span>にとまりました。",
  options: ["りょうかん", "りゅかん", "りょかん"],
  marks: 4
},
{
  id: 14,
  section: "Grammar",
  instruction: "Read the sentence and choose the word that fits in ( ) the most.",
  question: "あした9時にかいしゃの門の前、(   　)いっしょに行きましょう。",
  options: ["止まって", "待って", "集まって"],
  marks: 5
},
{
  id: 15,
  section: "Grammar",
  instruction: "Read the sentence and choose the word that fits in ( ) the most.",
  question: "こののみものは（    ）そうです。",
    options: ["おいし", "おいしく", "おいしかった"],
  marks: 5
},
{
  id: 16,
  section: "Grammar",
  instruction: "Read the sentence and choose the word that fits in ( ) the most.",
  question: "来週、( 　 　)とごはんをたべます。",
  options: ["家族", "会社", "料理"],
  marks: 5
},
{
  id: 17,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",

  dialog: `クマール：もしもし、エミさん。今、どこですか。<br>
エミ：今、さくらビルのまえに...........。<br>
クマール：さくらビルですか。駅の近くですか。<br>
エミ：はい。駅のとなりです。<br>
クマール：わかりました。今、行きます。`,

  options: [
    "います",
    "いきます",
    "まちます"
  ],
  marks: 5
},
{
  id: 18,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",

  dialog: `クマール：今日のひるごはん、何を………………。<br>
エミ：そばが食べたいです。<br>
クマール：じゃあ、「さくらそば」に行って食べませんか。<br>
エミ：いいですね。そうしましょう。<br>`,

  options: [
    "食べますか",
    "飲みますか",
    "買いますか"
  ],
  marks: 5
},
{
  id: 19,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
クマール：夏休みは、どこへ行きましたか。<br>
エミ：大阪へ行きました。<br>
クマール：大阪は、どうでしたか。<br>
エミ：とても………………、楽しかったです。`,
  options: [
    "にぎやかな",
    "にぎやかで",
    "にぎやかに"
  ],
  marks: 5
},
{
  id: 20,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
クマール：日曜日のイベント、楽しみですね。<br>
エミ：そうですね。でも、雨のとき、どうなりますか。<br>
クマール：雨が………………、イベントは中止になります。<br>
エミ：そうですか。晴れるといいですね。<br>
クマール：そうですね。`,
  options: [
    "ふって",
    "ふると",
    "ふったら"
  ],
  marks: 5
},
{
  id: 21,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
マリア：アリさん、京都へ行きましたか。<br>
アリ：いいえ、まだです。<br>
マリア：じゃあ、大阪には行きましたか。<br>
アリ：はい、もう………………。<br>
マリア：そうですか。大阪はどうでしたか。<br>
アリ：とても楽しかったです。`,
  options: [
    "行きます",
    "行きました",
    "行きません"
  ],
  marks: 5
},
{
  id: 22,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
マリア：わあ、この建物は大きくて、きれいですね。<br>
アリ：そうですね。とても古い建物ですよ。<br>
マリア：いつごろ作られたんですか。<br>
アリ：この建物は、16世紀にてんのうによって………………。<br>
マリア：そうなんですか。歴史がある建物なんですね。<br>
アリ：はい。今もたくさんの人が見に来るそうですよ。`,
  options: [
    "作るそうです",
    "作ったそうです",
    "作られたそうです"
  ],
  marks: 5
},
{
  id: 23,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：バナナ、..........<br>
B：はい、ありがとうございます。`,
  options: [
    "ください",
    "いいです",
    "どうも"
  ],
  marks: 5
},
{
  id: 24,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A:............。<br> 
B: はい。
`,
  options: [
    "どうぞ",
    "すみません",
    "ごめんください"
  ],
  marks: 5
},
{
  id: 25,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
マリア：アリさん、お帰りなさい。<br>
アリ：.............。ひこうきが少し遅れました。<br>
マリア：だいじょうぶですよ。お疲れさまでした。ツアーはどうでしたか。<br>
アリ：とても楽しかったです。でも、少し疲れました。<br>
マリア：そうですか。今日はゆっくり休んでくださいね。`,
  options: [
    "おまたせしました",
    "おつかれさまでした",
    "おせわになりました"
  ],
  marks: 5
},
{
  id: 26,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
サトウ：キムさん、もう一杯コーヒーはいかがですか。<br>
キム：ありがとうございます。でも、今日は………………。<br>
サトウ：そうですか。<br>
キム：はい。もう十分いただきました。<br>
サトウ：わかりました。
`,
  options: [
    "しつれいします",
    "えんりょします",
    "おねがいします"
  ],
  marks: 5
},
{
  id: 24,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A : 来週からずっと雨そうですね。<br>
B : そうですね、せんたくにぜんぜんできませんね。<br>
A : __________。
`,
  options: [
    "いやになりますね",
    "まんぞくですね",
    "しあわせになりますね"
  ],
  marks: 5
},
{
  id: 24,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：明日、しけんがある________どうして勉強していないの<br>
B：これからします。
`,
  options: [
    "から",
    "なら",
    "のに"
  ],
  marks: 5
},
{
  id: 25,
  section: "Listening",
  question: `Listen to the conversation and choose the correct answer.<br>
  A company employee is talking in the cafe with a staff member who is leaving the company. What will the man drink?`,
  audio: "Q2.mp3",
  options: [
    { image: "L11.png" },
    { image: "L12.png" },
    { image: "L13.png" }
  ],
  marks: 5
},
{
  id: 26,
  section: "Listening",
  question: "  A company employee is calling the company to explain why he will be late. Why will the man be late?  ",
  audio: "Q1.mp3",
  options: [
    { image: "L21.png" },
    { image: "L22.png" },
    { image: "L23.png" }
  ],
  marks: 5
},
{
  id: 27,
  section: "Listening",
  question: "Listen to the conversation and choose the correct answer. What will the women borrow?？",
  audio: "Q3.mp3",
  options: [
    { image: "L31.png" },
    { image: "L32.png" },
    { image: "L33.png" }
  ],
  marks: 5
},
{
  id: 28,
  section: "Listening",
  question: "Listen to the conversation between a customer sending a package at a convenience store and the store staff. When will the parcel delever?",
  audio: "Q4.mp3",
  options: [
   "8月4日",
    "8月5日",
    "8月６日"
  ],
  marks: 5
},
{
  id: 29,
  section: "Listening",
  question: "Kumaru-san is asking Emi-san where it would be better to buy a mobile phone. Where will Emi-san buy the mobile phone？",
  audio: "Q5.mp3",
  options: [
    { image: "L51.png" },
    { image: "L52.png" },
    { image: "L53.png" }
  ],
  marks: 5
},
{
  id: 30,
  section: "Listening",
  question: "What will the woman bring?",
  audio: "Q6.mp3",
  options: [
    { image: "L61.png" },
    { image: "L62.png" },
    { image: "L63.png" }
  ],
  marks: 5
},
{
  type: "double",
  id: "31",
  section: "Listening",
  question: `Listen to the conversation between a passenger and a station staff member.<br>
             (a) What time will the passenger take the train?<br>
             (b) Which platform will the passenger board the train from?`,
  audio: "Q7.mp3",
  parts: [
    {
      title: "(a)",
      options: [
                "14:15",
                "14:45",
                "15:15"
      ],
      marks: 6
    },

    {
      title: "(b)",
      options:[
       { image: "L71.png" },
       { image: "L72.png" },
       { image: "L73.png" }

      ],
      marks:5
    }

  ]
},
{
  type: "double",
  id: "32-33",
  section: "Listening",
 question: `You will hear a doctor explaining the medicine and giving advice to a patient. Listen to the conversation and answer the questions below..<br>
             (a) How many will he take?<br>
             (b) What advice does the doctor give the patient?`,
  audio: "Q8.mp3",
  parts: [
    {
      title: "(a)",
      options: [
       { image: "L81.png" },
       { image: "L82.png" },
       { image: "L83.png" }
      ],
      marks: 6
    },
    {
      title: "(b)",
      options: [
       { image: "L811.png" },
       { image: "L821.png" },
       { image: "L831.png" }
      ],
      marks: 6
    }
  ]
},
{
  type: "double",
  id: "34-35",
  section: "Listening",
  question: `You will hear a company officer explaining what to do during an earthquake. Listen to the conversation and answer the questions below.<br>
             (a) What should do during an earthquake?<br>
             (b) What should you do after the earthquake stops?`,
  audio: "Q9.mp3",
  parts: [
    {
      title: "(a)",
      options: [
        { image: "L91.png" },
        { image: "L92.png" },
        { image: "L93.png" }
             ],
      marks: 6
    },
    {
      title: "(b)",
      options: [
        { image: "L911.png" },
        { image: "L921.png" },
        { image: "L931.png" }
      ],
      marks: 6
    }
  ]
},
{
  type: "double",
  id: "36-37",
  section: "Reading",
  question: "Read the Passage and Answer the Following Questions",
  image: "RQ1.png",
  parts: [
    {
      title: "(a) 何をしましたか？",
      options: [
        { image: "R11.png" },
        { image: "R12.png" },
        { image: "R13.png" }
      ],
      marks: 6
    },
    {
      title: "(b) 何をかいましたか",
      options: [
        { image: "R21.png" },
        { image: "R22.png" },
        { image: "R23.png" }
      ],
      marks: 6
    }
  ]
},
{
  type: "double",
  id: "38-39",
  section: "Reading",
  question: "Read the Passage and Answer the Following Questions",
  image: "RQ2.png",
  parts: [
    {
      title: "(a) だれにプレゼントをあげましたか？",
      options: [
     　 "マリヤ",
        "あき",
        "ナット"
      ],
      marks: 7
    },
    {
      title: "(b) プレゼントは何ですか？",
      options: [
　　　　 { image: "R31.png" },
        { image: "R32.png" },
        { image: "R33.png" }　
       ],
      marks: 6
    }
  ]
},
{
  type: "double",
  id: "40-41",
  section: "Reading",
  question: "Read the Passage and Answer the Following Questions",
  image: "RQ3.png",
  parts: [
    {
      title: "(a) イベントはどこですか？",
      options: [
        "さくらセンター",
        "タイ料理店",
        "みどり小学校"
      ],
      marks: 7
    },
    {
      title: "(b) 学生はまず何をしましたか？",
      options: [
        "タイ料理",
        "あいさつ",
        "やきそばの作り方"
      ],
      marks: 7
    }
  ]
},
{
  type: "double",
  id: "42-43",
  section: "Reading",
  question: "Read the Passage and Answer the Following Questions",
  image: "RQ4.png",
  parts: [
    {
      title: "(a) どこですか？",
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
      marks: 7
    },
    {
      title: "(b) いくらですか？",
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
      marks: 6
    }
  ]
},
{
  type: "double",
  id: "44-45",
  section: "Reading",
  question: "Read the Passage and Answer the Following Questions",
  image: "RQ5.png",
  parts: [
    {
      title: "(a) いつですか？",
      options: [
        "12月5日",
        "12月7日",
        "12月14日"
      ],
      marks: 6
    },
    {
      title: "(b) 何を持って行きますかか？",
      options: [
        "料理",
        "飲み物",
        "ケーキ"
      ],
      marks: 6
    }
  ]
},
{
  type: "double",
  id: "46-47",
  section: "Reading",
  question: "Read the Passage and Answer the Following Questions",
  image: "RQ6.png",
  parts: [
    {
      title: "(a) どうすると、アイスクリームがもらえますか？",
      options: [
        "ごはんを食べる",
        "ちゅうもんする",
        "クーポンを持って行く"
      ],
      marks: 6
    },
    {
      title: "(b) いつ見せますか？",
      options: [
        "ご注文のとき",
        "会計のとき",
        "土曜日と日曜日"
      ],
      marks: 6
    }
  ]
}
]
