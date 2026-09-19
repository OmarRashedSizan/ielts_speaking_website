import type { Lesson } from "../schema";
import {
  badBetter,
  bangla,
  callout,
  checklist,
  examples,
  fix,
  flow,
  noteGrid,
  patterns,
  phraseBank,
  prose,
  quiz,
  steps,
  table,
} from "../builders";

/**
 * The strategy track is the idea engine: eleven idea dimensions, the Part 3
 * lenses, a thinking method that replaces translation, and recovery tactics
 * for the moments when the mind goes blank.
 */
export const strategyLessons: Lesson[] = [
  {
    slug: "idont-know-what-to-say",
    track: "strategy",
    order: 1,
    title: "“I don't know what to say” — installing the idea engine",
    banglaTitle: "মাথায় কিছু আসছে না — আইডিয়া ইঞ্জিন",
    summary:
      "Eleven idea dimensions and eleven Part 3 lenses. When you have no idea, you do not need inspiration — you need a checklist.",
    level: 3,
    minutes: 12,
    goals: [
      "Use the eleven idea dimensions to generate content on any topic",
      "Apply the Part 3 lenses to move from personal to societal answers",
      "Speak for 60 seconds on a topic you have never considered",
    ],
    examUse: "Idea generation is the skill that prevents silence — and silence is the most visible fluency problem.",
    tags: ["strategy", "ideas", "fluency"],
    blocks: [
      prose("The blank mind is a missing checklist", [
        "Learners freeze less often than they think because of language, and more often because they are trying to find an original opinion in three seconds. Examiners do not want originality. They want developed, clear, natural English on a familiar human subject.",
        "So the fix is mechanical: when nothing comes, walk down a list of dimensions. Person, place, time, reason, experience, feeling, benefit, problem, change, example, future. Each one is a question you can answer in a short sentence, and eleven short sentences is two minutes of speech.",
      ]),
      bangla(
        "এগারোটি মাত্রা — একটার পর একটা",
        [
          "মাথা খালি মনে হলে ভাববেন না 'আমার মত কী'। বরং তালিকা ধরে এগিয়ে যান: কে (PERSON), কোথায় (PLACE), কখন (TIME), কেন (REASON), অভিজ্ঞতা (EXPERIENCE), অনুভূতি (FEELING), লাভ (BENEFIT), সমস্যা (PROBLEM), পরিবর্তন (CHANGE), উদাহরণ (EXAMPLE), ভবিষ্যৎ (FUTURE)।",
          "প্রতিটি মাত্রা এক-দুই বাক্য দেয়। এগারোটি মাত্রা মানে দুই মিনিট কথা বলার মতো উপাদান — এজন্য আসল প্রতিভা লাগে না, শুধু তালিকা লাগে।",
        ],
        "আইডিয়া খোঁজার দরকার নেই — তালিকা ধরে হাঁটলেই আইডিয়া বেরিয়ে আসে।",
      ),
      noteGrid("The eleven idea dimensions", [
        { label: "PERSON", detail: "Who is involved? 'Most of my friends…', 'My father's generation…', 'Children especially…'" },
        { label: "PLACE", detail: "Where does this happen? City, village, school, workplace, home, online." },
        { label: "TIME", detail: "When? Weekdays, exam season, winter, ten years ago, at night." },
        { label: "REASON", detail: "Why? Money, time, culture, convenience, habit, technology." },
        { label: "EXPERIENCE", detail: "What have you seen? One real moment, briefly told." },
        { label: "FEELING", detail: "What do people feel? Annoyed, proud, relieved, uncomfortable, excited." },
        { label: "BENEFIT", detail: "What does it give? Time, money, health, freedom, connection." },
        { label: "PROBLEM", detail: "What goes wrong? Cost, unfairness, waste, stress, unreliability." },
        { label: "CHANGE", detail: "How is it different now? 'It used to be…', 'Since a few years ago…'" },
        { label: "EXAMPLE", detail: "One concrete instance — a person, place, price, or number." },
        { label: "FUTURE", detail: "Where is it heading? 'I'd expect…', 'It might well…'" },
      ]),
      table(
        "The Part 3 lenses — from personal to societal",
        ["Lens", "Question to ask", "Typical content"],
        [
          ["Individual", "What does this mean for one person?", "Time, cost, stress, personal choice"],
          ["Family", "How does it affect families?", "Routines, care, disagreements, shared habits"],
          ["Education", "What role does schooling play?", "Curriculum, teachers, early habits"],
          ["Work", "How does employment change?", "Skills, hours, job security"],
          ["Business", "Who profits, who pays?", "Costs, competition, marketing"],
          ["Society", "What happens across a community?", "Norms, inequality, trust"],
          ["Government", "What could policy do?", "Funding, regulation, incentives"],
          ["Technology", "What tools are involved?", "Apps, automation, access"],
          ["Environment", "What is the cost to the environment?", "Energy, waste, transport"],
          ["Economy", "What is the financial effect?", "Prices, wages, growth, inequality"],
          ["Future", "How will this look in 10–20 years?", "Prediction, adaptation, uncertainty"],
        ],
      ),
      steps("The 60-second rescue routine", [
        { title: "1. Say one framing sentence", detail: "“That's an interesting question — I'd say it depends a lot on the person.” Buys you three seconds." },
        { title: "2. Choose three dimensions", detail: "Not eleven. Pick REASON, EXAMPLE and FEELING, for example. Three dimensions fill an answer." },
        { title: "3. Speak one sentence per dimension", detail: "Simple sentences are fine. Structure beats eloquence here." },
        { title: "4. Close with a lens", detail: "Finish with 'From the government's side…' or 'For families especially…' — a clear ending." },
      ]),
      examples("Idea generation on a genuinely unfamiliar topic", [
        {
          text: "Question: “Should museums be free?” — REASON: “Cost is the main barrier for students.” EXAMPLE: “The national museum charges about twenty taka for students, which is nothing, but the transport isn't.” PROBLEM: “The real issue is maintenance — free entry has to be funded from somewhere.”",
          note: "Three dimensions produce a full answer without any specialist knowledge.",
        },
        {
          text: "Question: “Is it better to be self-employed?” — CHANGE: “It's become much more common here in the last five years, mostly because online work pays in dollars.” BENEFIT: “You control your hours.” PROBLEM: “There's no safety net, and the income is uneven.”",
          note: "No personal experience needed — the dimensions supply the reasoning.",
        },
      ]),
      badBetter("Replacing the freeze with a method", [
        fix(
          "Silence while searching for the perfect opinion.",
          "“That's an interesting question — I'd say it depends on the person.” Then start dimension one.",
          "A framing sentence is not filler; it is a genuine thinking move and it keeps your fluency score intact.",
        ),
        fix(
          "Answering only from personal experience: “I don't have a car, so I don't know.”",
          "Moving to a lens: “For people who commute daily, though, the cost adds up quickly.”",
          "Part 3 asks about people in general. 'I don't know' is not required — reasoning is.",
        ),
        fix(
          "Trying to say something clever.",
          "Saying something clear, specific and ordinary.",
          "Band 6.5 is reached with clear, developed, ordinary ideas in good English — not with brilliant ideas in broken English.",
        ),
      ]),
      checklist("When your mind goes blank", [
        "Say one framing sentence out loud, immediately",
        "Choose three dimensions from the eleven",
        "Speak one sentence per dimension",
        "Close with one of the eleven lenses",
      ]),
      callout(
        "tip",
        "Practise with topics you dislike",
        "The idea engine is only tested on unfamiliar ground. Practise with 'boring' topics — bicycle lanes, museum funding, handwriting, packaging — and you will find that the dimensions work there too.",
      ),
    ],
    practice: [
      "Choose three random Part 3 questions and generate answers using three different dimensions each.",
      "Time yourself generating sixty seconds of content on a topic you have never discussed before.",
    ],
  },

  {
    slug: "thinking-in-english",
    track: "strategy",
    order: 2,
    title: "Thinking in English — stop translating from Bangla",
    banglaTitle: "বাংলা থেকে অনুবাদ না করে ইংরেজিতে ভাবা",
    summary:
      "Word-by-word translation is the main cause of pauses and unnatural sentences. Here is the four-step replacement: idea → simple structure → key vocabulary → speak → extend.",
    level: 3,
    minutes: 10,
    goals: [
      "Recognise the signs of internal translation",
      "Use the four-step thinking method instead",
      "Practise with Bangla-idea prompts and report the sentence, not the sentence's source",
    ],
    examUse: "Translation costs two seconds per sentence, and that delay is what produces long pauses.",
    tags: ["strategy", "translation", "fluency"],
    blocks: [
      prose("Why translation fails under time pressure", [
        "Translating means holding a Bangla sentence in your head, converting each word, then arranging the result in English word order. That works slowly and produces Bangla-shaped English: 'I am going to market for buying fish' instead of 'I'm going to the market to buy fish'.",
        "The alternative is to think in the target language from the beginning, which does not mean thinking in perfect English. It means choosing a simple English structure first and putting your idea into it. Simple structure plus real ideas sounds far more fluent than complex structure plus translated ideas.",
      ]),
      bangla(
        "অনুবাদ বনাম ইংরেজিতে ভাবা",
        [
          "বাংলা বাক্য মাথায় রেখে শব্দ ধরে ধরে অনুবাদ করলে দুই সমস্যা হয়: সময় নষ্ট হয় এবং বাক্য বাংলা ধাঁচের হয়ে যায় — 'I am going to market for buying fish'।",
          "বদলে যা করবেন: প্রথমে সহজ ইংরেজি কাঠামো বেছে নিন, তারপর বিষয়টি তার ভিতরে বসান। সহজ কাঠামো + সত্যিকারের আইডিয়া = স্বাভাবিক শোনায়।",
          "চর্চার নিয়ম: টপিক ভাবুন বাংলায়, কিন্তু বাক্য বানান ইংরেজিতে — অনুবাদ করবেন না, রূপান্তর করবেন।",
        ],
        "ভাবনা বাংলায় হতে পারে, বাক্য ইংরেজিতে তৈরি হবে — মাঝখানে অনুবাদ নয়।",
      ),
      flow(
        ["IDEA (in Bangla or English)", "SIMPLE STRUCTURE", "KEY VOCABULARY", "SPEAK", "EXTEND"],
        {
          title: "The four-step replacement",
          note: "Structure comes before vocabulary. Choosing the frame first is what stops the translation habit.",
        },
      ),
      table(
        "Signs you are translating, and what to say instead",
        ["Translated English", "Natural version", "What went wrong"],
        [
          ["I am going to market for buying fish.", "I'm going to the market to buy fish.", "'For buying' instead of the infinitive of purpose."],
          ["He is my cousin brother.", "He's my cousin.", "A Bangla phrase translated word for word."],
          ["I am living here since ten years.", "I've lived here for ten years.", "Bangla tense pattern carried into English."],
          ["Today's weather is very much hot.", "It's really hot today.", "'Very much hot' — adverb translation."],
          ["I have no mind to study.", "I don't feel like studying.", "Idiom translated literally."],
          ["Give me one minute, I am coming.", "Hang on a second, I'll be right there.", "Direct command structure; also wrong tense for the future."],
        ],
      ),
      examples("Same idea, two routes", [
        {
          text: "Bangla idea: “আমার মনে হয় সরকারের উচিত বাসের সংখ্যা বাড়ানো।” Translation route: “I think government should increase the number of buses for the people.” Structure route: “I'd say the government should run more buses — it's the cheapest way to cut traffic.”",
          note: "The structure route is shorter, more natural and took less time to build.",
        },
        {
          text: "Bangla idea: “ছোটবেলায় আমরা মাঠে খেলতাম।” Translation route: “In my small age we were playing in the field.” Structure route: “When I was young, we used to play in the field — there was an empty plot behind our building.”",
          note: "Structure first: 'When I was young, we used to…'. Everything else attaches to it.",
        },
      ]),
      steps("The method, in practice", [
        { title: "1. Get the idea, not the sentence", detail: "Hold the meaning, not the Bangla wording. Most of the trouble comes from trying to preserve the Bangla sentence." },
        { title: "2. Pick a frame you already own", detail: "“I'd say… because…”, “When I was…, we used to…”, “The main reason is…”. A frame you can say without thinking." },
        { title: "3. Insert key vocabulary", detail: "Two or three content words: 'buses', 'traffic', 'cheaper'. The frame supplies the grammar." },
        { title: "4. Speak, then extend", detail: "Add one more sentence with 'which means' or 'for example'. Extension is easier than construction." },
      ]),
      badBetter("Breaking the translation habit", [
        fix(
          "Thinking of a complex English sentence, then trying to say it.",
          "Thinking of a simple English sentence you can definitely say, then saying it.",
          "Ambition in sentence length is the main cause of mid-sentence collapse.",
        ),
        fix(
          "Searching for the exact English equivalent of a Bangla word.",
          "Describing the idea in simpler English: 'a kind of small shop', 'it's like a big market'.",
          "Approximation is a valued speaking skill. Examiners reward the description, not the dictionary match.",
        ),
        fix(
          "Planning in Bangla, then converting.",
          "Practising the same five patterns until they are automatic, then using them as the thinking surface.",
          "You cannot eliminate Bangla from your head; you can reduce the work by owning the frames.",
        ),
      ]),
      quiz("Which is the thinking-in-English habit?", [
        {
          question: "You want to say something your English cannot quite express. What is the better move?",
          options: [
            "Translate each word from Bangla.",
            "Switch to a simpler English description of the same idea.",
            "Stay silent until the right word comes.",
          ],
          answer: 1,
          explain: "Approximation keeps fluency and still communicates. Silence and translation both cost you more.",
        },
      ]),
      checklist("A two-week de-translation routine", [
        "Learn five frames by heart and use them daily",
        "Record one answer a day and mark any sentence that sounds translated",
        "Rewrite each translated sentence as a simple frame, and say it aloud",
        "Practise describing objects around you when you cannot find a word",
      ]),
      callout(
        "tip",
        "Your Bangla is not the problem",
        "The goal is not to stop thinking in Bangla — that takes years. The goal is to stop producing sentences by translation. Speak from frames you own, and the translation layer quietly disappears from your speaking.",
      ),
    ],
    practice: [
      "Take five Bangla ideas about your day and say each one in a frame you already own.",
      "Record a 60-second answer and mark every sentence that sounds like a translation, then re-record it.",
    ],
  },

  {
    slug: "handling-unfamiliar-topics",
    track: "strategy",
    order: 3,
    title: "Handling unfamiliar topics",
    banglaTitle: "অপরিচিত বিষয় কীভাবে সামলাবেন",
    summary:
      "When a question is outside your experience, you do not need to invent. Redirect to the nearest real experience, use the lenses, and keep the English strong.",
    level: 4,
    minutes: 10,
    goals: [
      "Redirect an unfamiliar question to a topic you can talk about",
      "Answer hypothetical questions without experience",
      "Use three recovery phrases that buy time without losing marks",
    ],
    examUse: "Even strong candidates get a question they cannot answer from experience — the difference is how they recover.",
    tags: ["strategy", "recovery", "unfamiliar topics"],
    blocks: [
      bangla(
        "অপরিচিত প্রশ্নে তিনটি কৌশল",
        [
          "১) সামনের সত্যি অভিজ্ঞতায় ঘুরিয়ে নিন: 'I haven't done that myself, but something similar happened —'।",
          "২) অনুমান করুন: 'I'd guess…', 'Based on what I've seen, probably…' — অনুমান করা সম্পূর্ণ বৈধ, শুধু জানতে হবে সেটি অনুমান।",
          "৩) সমাজের দিকে ঘুরিয়ে নিন: 'I can't speak for everyone, but for people in my area…'।",
        ],
        "অভিজ্ঞতা না থাকলেও ভাষা ভালো রাখা যায় — সেটাই আসল পরীক্ষা।",
      ),
      phraseBank("Recovery phrases, grouped by purpose", [
        {
          label: "Admitting without weakness",
          note: "Say it once, briefly, and move immediately into content.",
          items: [
            "I haven't experienced that myself, but…",
            "I don't know much about it, though from what I've seen…",
            "That's not something I've done, so I'll go with what I'd expect…",
          ],
        },
        {
          label: "Speculating on purpose",
          items: [
            "I'd guess that…",
            "My feeling is that it probably…",
            "If I had to say, I'd imagine…",
            "Based on what I've seen, most people would…",
          ],
        },
        {
          label: "Redirecting to the nearest experience",
          items: [
            "Something similar happened to me when…",
            "I've never been, but the closest thing was…",
            "The nearest comparison I can think of is…",
          ],
        },
        {
          label: "Moving to a societal level",
          items: [
            "I can't speak for everyone, but in my area…",
            "For people who do have that experience…",
            "It probably depends on the person, though generally…",
          ],
        },
      ]),
      examples("Recovering from three hard questions", [
        {
          text: "Q: “Describe a time you sailed a boat.” — “I've never sailed, honestly — the closest thing would be a river trip we took as children, which was terrifying in a very small way. I remember the boat leaning and everyone grabbing the sides.”",
          note: "Admission, redirection, and a specific detail.",
        },
        {
          text: "Q: “How do you think AI will change farming?” — “I don't know much about farming, but based on what I've seen with other technology, the pattern is usually the same: it saves time for larger farms first, and smaller farmers get it later when it's cheaper.”",
          note: "Honest ignorance, then a general principle — a legitimate and strong move.",
        },
        {
          text: "Q: “What is the role of theatre in modern society?” — “I've never been to the theatre, though I'd imagine it's a bit like live music — the point is being in a room with other people at the same time, which is exactly what screens can't do.”",
          note: "Analogy from a known experience to an unknown one.",
        },
      ]),
      noteGrid("The three-step recovery model", [
        { label: "Step 1 — Acknowledge", detail: "One short, calm sentence. Never apologise twice, and never say 'sorry, my English is weak'." },
        { label: "Step 2 — Redirect or speculate", detail: "Move to the nearest real experience, or reason out loud from a general principle." },
        { label: "Step 3 — Close normally", detail: "Finish with a lens or a balanced close, exactly as you would for a familiar question." },
      ]),
      badBetter("Recovery done badly", [
        fix(
          "“Sorry, I don't know. Next question please.”",
          "“I don't know much about that, though I'd guess… — based on what I've seen with similar things.”",
          "You are never required to know facts. You are required to speak. Speculation is speaking.",
        ),
        fix(
          "Inventing a detailed false experience.",
          "Describing the nearest genuine experience and saying so.",
          "Invention collapses under follow-up questions, and it is the reason learners run out of content halfway through.",
        ),
        fix(
          "Apologising repeatedly for vocabulary gaps.",
          "Describing the word you mean instead of naming it: 'a kind of public transport, smaller than a bus'.",
          "Descriptions demonstrate lexical flexibility. Apologies demonstrate nothing and reduce fluency.",
        ),
      ]),
      quiz("Which response is strongest?", [
        {
          question: "You are asked about a hobby you have never tried.",
          options: [
            "“I don't know anything about that.”",
            "“I've never tried it, but the closest thing is cycling, which I do most weekends — and I'd guess they feel similar in terms of freedom.”",
            "“Yes, I do that hobby. It is very nice.”",
          ],
          answer: 1,
          explain: "Honest, redirected to a real experience, and it includes a reasoned guess.",
        },
      ]),
      callout(
        "tip",
        "Prepare three stories that can go anywhere",
        "One story about a person who helped you, one about a challenge, and one about a place you return to. Between them they can be adapted to most cue cards — and adaptation is much safer than invention.",
      ),
    ],
    practice: [
      "Take three questions you genuinely cannot answer from experience and use the three-step recovery aloud.",
      "Practise redirecting one of your real stories into three different Part 2 cards.",
    ],
  },
];
