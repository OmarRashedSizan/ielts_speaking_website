import type { Lesson } from "../schema";
import {
  badBetter,
  bangla,
  callout,
  checklist,
  examples,
  fix,
  noteGrid,
  patterns,
  prose,
  quiz,
  steps,
  table,
} from "../builders";

/**
 * The overview track. Nothing here teaches an answer: it teaches the test, the
 * scoring, and the method behind every other lesson in the platform.
 */
export const overviewLessons: Lesson[] = [
  {
    slug: "how-the-test-works",
    track: "overview",
    order: 1,
    title: "How the IELTS Speaking test works",
    banglaTitle: "স্পিকিং পরীক্ষা কীভাবে হয়",
    summary:
      "Eleven to fourteen minutes, three parts, one examiner. Here is exactly what happens in the room, and what is expected in each part.",
    level: 1,
    minutes: 7,
    goals: [
      "Describe the three parts and the time each one takes",
      "Understand what the examiner is doing during each part",
      "Know what you may and may not ask the examiner",
    ],
    examUse: "Knowing the shape of the test removes most of the fear before you speak a word.",
    tags: ["overview", "exam", "part 1", "part 2", "part 3"],
    blocks: [
      prose("Eleven to fourteen minutes, in three parts", [
        "The speaking test is a conversation with one examiner, recorded for quality control. Part 1 is four to five minutes of everyday questions about familiar topics — your home, your work or studies, your habits. Part 2 gives you a cue card, one minute to prepare, and up to two minutes to speak alone. Part 3 is four to five minutes of discussion questions connected to your Part 2 topic, but at a general, societal level.",
        "The examiner is not testing your knowledge. Each part tests something different: Part 1 tests whether you can answer naturally and develop a small answer; Part 2 tests whether you can sustain a long turn and organise it; Part 3 tests whether you can reason, compare and speculate.",
      ]),
      bangla(
        "পরীক্ষার তিনটি অংশ",
        [
          "Part 1 (৪–৫ মিনিট): পরিচিত বিষয়ে সহজ প্রশ্ন — বাসা, পড়াশোনা, কাজ, অভ্যাস। প্রতিটি উত্তরে কারণ ও একটি ছোট বিস্তারিত যোগ করলেই ভালো।",
          "Part 2 (১ মিনিট প্রস্তুতি + ২ মিনিট বলা): একটি কার্ড দেওয়া হয়; এক মিনিটে নোট নিয়ে দুই মিনিট একা বলতে হয়। এখানেই বেশিরভাগ শিক্ষার্থী আটকে যায়।",
          "Part 3 (৪–৫ মিনিট): Part 2-এর বিষয় নিয়ে সমাজ, সরকার, ভবিষ্যৎ নিয়ে আলোচনা। এখানে মত, কারণ, তুলনা — এগুলো দরকার।",
        ],
        "Part 1 = সহজ উত্তর, Part 2 = দীর্ঘ গল্প, Part 3 = গভীর আলোচনা।",
      ),
      table(
        "What each part asks of you",
        ["Part", "Time", "What you do", "What it tests"],
        [
          ["Part 1", "4–5 min", "Answer short questions about familiar topics", "Natural, developed short answers"],
          ["Part 2", "1 min + up to 2 min", "Speak alone from a cue card", "Sustaining and organising a long turn"],
          ["Part 3", "4–5 min", "Discuss broader questions on the Part 2 theme", "Reasoning, comparison, speculation"],
        ],
      ),
      steps("What actually happens in the room", [
        {
          title: "1. Identity check",
          detail:
            "The examiner confirms your name and checks your ID. This is not assessed — it is admin.",
        },
        {
          title: "2. Part 1 — familiar topics",
          detail:
            "Four to five minutes. The examiner may change topic two or three times, and will stop you if an answer runs too long.",
        },
        {
          title: "3. Part 2 — your long turn",
          detail:
            "You get a cue card, a pencil and one minute to write notes. You speak for up to two minutes; the examiner stops you politely when time is up.",
        },
        {
          title: "4. Part 3 — the discussion",
          detail:
            "Questions connect to your Part 2 topic but move to society level: causes, effects, comparisons, opinions and the future.",
        },
        {
          title: "5. The examiner's closing line",
          detail:
            "You are told the test has finished. Nothing you say after that point is scored.",
        },
      ]),
      examples("Things you are allowed to say", [
        {
          text: "“Sorry, could you repeat that?”",
          note: "Allowed. Asking once costs you nothing — answering the wrong question costs a lot.",
        },
        {
          text: "“Do you mean in my country, or generally?”",
          note: "Allowed, and it shows you understood the question had two possible readings.",
        },
        {
          text: "“I've never really thought about that, but I'd guess…”",
          note: "Allowed. Honest speculation is a normal speaking skill.",
        },
        {
          text: "“Can I talk about my brother instead?”",
          note: "Allowed in Part 2 if the card asks for 'a person' — the examiner will not penalise you.",
        },
      ]),
      quiz("Quick check", [
        {
          question: "How long do you have to prepare in Part 2?",
          options: ["30 seconds", "1 minute", "2 minutes"],
          answer: 1,
          explain: "One minute with paper and pencil, then up to two minutes of speaking.",
        },
        {
          question: "Are Part 3 questions about your personal life?",
          options: ["Yes, only personal", "No — they are general and societal", "Only about your city"],
          answer: 1,
          explain:
            "Part 3 moves from the personal topic to broader questions about people, society and the future.",
        },
      ]),
      checklist("What to bring mentally", [
        "Expect to be interrupted in Part 1 — it means you were talking enough",
        "Expect the examiner to look neutral; that is their training, not a reaction to you",
        "Expect Part 3 questions to feel harder; they are designed to stretch you",
        "Plan to speak for the full time, not to finish early",
      ]),
      callout(
        "tip",
        "The examiner wants you to do well",
        "Every examiner is trained to help you reach your best performance. They will slow down, repeat a question, and give you time. Nothing in the test is a trick.",
      ),
    ],
    practice: [
      "Say out loud, in English, what happens in each of the three parts.",
      "Answer two Part 1 questions deliberately, using one small detail in each.",
    ],
  },

  {
    slug: "what-examiners-score",
    track: "overview",
    order: 2,
    title: "What examiners actually score",
    banglaTitle: "পরীক্ষক কী মাপেন",
    summary:
      "Four criteria, each worth 25%. Understanding them changes how you practise, because each one has its own fix.",
    level: 1,
    minutes: 8,
    goals: [
      "Name the four criteria and what each one covers",
      "Recognise which criterion your last answer was weakest in",
      "Practise in a way that targets one criterion at a time",
    ],
    examUse: "Half the frustration in speaking practice comes from not knowing which of the four criteria you are failing.",
    tags: ["overview", "criteria", "scoring"],
    blocks: [
      prose("Four criteria, 25% each", [
        "Fluency and Coherence asks whether you can keep speaking and whether your ideas connect. Lexical Resource asks whether your vocabulary is varied and natural. Grammatical Range and Accuracy asks whether your sentences vary and whether the grammar is correct. Pronunciation asks how easily you are understood.",
        "Notice what is not in the list: accent, confidence, exam technique, or how interesting your answers are. This matters because it tells you where to spend your practice time — and where not to.",
      ]),
      bangla(
        "চারটি মানদণ্ড",
        [
          "Fluency & Coherence (২৫%): আটকে না গিয়ে বলা এবং আইডিয়া জোড়া লাগানো।",
          "Lexical Resource (২৫%): শব্দের বৈচিত্র্য ও স্বাভাবিকতা — কঠিন শব্দ নয়, বরং সঠিক ও প্রাসঙ্গিক শব্দ।",
          "Grammatical Range & Accuracy (২৫%): বাক্যের বৈচিত্র্য (সহজ, মিশ্র, জটিল) এবং ভুলের পরিমাণ।",
          "Pronunciation (২৫%): আপনি কতটা সহজে বোঝা যাচ্ছেন এবং stress ও intonation ঠিক আছে কি না — accent নয়।",
        ],
        "চারটিই সমান গুরুত্বপূর্ণ, তাই শুধু শব্দ নয় — চারটি আলাদাভাবে অনুশীলন করুন।",
      ),
      noteGrid(
        "Each criterion and its practical fix",
        [
          {
            label: "Fluency & Coherence",
            detail: "Fix: answer with a structure (answer → reason → detail) so you always know the next sentence.",
          },
          {
            label: "Lexical Resource",
            detail: "Fix: collect three collocations a day instead of word lists, and replace your three most repeated adjectives.",
          },
          {
            label: "Grammatical Range & Accuracy",
            detail: "Fix: mix short and long sentences, and use one relative clause or conditional per answer.",
          },
          {
            label: "Pronunciation",
            detail: "Fix: word stress and final consonants — the two things that make you hardest to understand.",
          },
        ],
      ),
      table(
        "What raises a score, and what is wasted effort",
        ["Helps", "Is wasted effort"],
        [
          ["Answering with a reason and a small detail", "Learning a list of rare words you cannot pronounce"],
          ["Linking ideas with connectors you control", "Memorising a model answer the examiner has heard before"],
          ["Correct tenses in longer sentences", "Speaking fast to sound fluent"],
          ["Clear word stress and endings", "Changing your accent"],
        ],
      ),
      badBetter("Reading the criteria the wrong way", [
        fix(
          "“I need Band 9 vocabulary.”",
          "“I need vocabulary that is varied, natural and appropriate to the question.”",
          "Lexical resource is judged on range and precision in context, not on word rarity.",
        ),
        fix(
          "“I should never make a grammar mistake.”",
          "“I should speak in longer structures accurately enough that mistakes do not obscure meaning.”",
          "Both range and accuracy are assessed; avoiding complex sentences entirely caps your range.",
        ),
        fix(
          "“I need to sound British.”",
          "“I need to be understood the first time, with clear stress and endings.”",
          "Accent is not assessed. Intelligibility and features such as stress and intonation are.",
        ),
      ]),
      callout(
        "tip",
        "Practise one criterion per session",
        "Choose fluency for today's session and ignore everything else. Tomorrow, take accuracy. Trying to improve everything at once is why learners plateau.",
      ),
    ],
    practice: [
      "Record one Part 1 answer, then listen three times: once for fluency, once for vocabulary, once for grammar.",
      "Name the criterion you were weakest in, and write one fix for the next recording.",
    ],
  },

  {
    slug: "what-band-6-6-5-means",
    track: "overview",
    order: 3,
    title: "What Band 6.0 and Band 6.5 look like in practice",
    banglaTitle: "ব্যান্ড ৬.০ ও ৬.৫ ব্যবহারিকভাবে কেমন",
    summary:
      "The difference is rarely vocabulary. It is usually development, control and how consistently you sustain an answer.",
    level: 1,
    minutes: 9,
    goals: [
      "Describe the difference between a Band 6 and a Band 6.5 answer",
      "Set a realistic target for your own practice",
      "Avoid the two habits that cap most learners at 6.0",
    ],
    examUse: "Target setting changes practice behaviour: a 6.5 answer is a developed, controlled version of what you can already do.",
    tags: ["overview", "band 6", "band 6.5", "targets"],
    blocks: [
      prose("A short, honest explanation", [
        "A Band 6.0 answer is usually understandable, answers the question, and uses simple structures with some errors. It tends to stop after one idea, and the vocabulary repeats. A Band 6.5 answer does the same job, but keeps going — it adds a reason and a specific detail, uses a wider range of sentence structures, and errors do not interfere with meaning.",
        "The most common reason learners stay at 6.0 is not a weakness in English. It is under-development: they answer a two-minute question in twenty seconds. The second most common is repetition, especially of 'because', 'good', 'very' and 'I think'.",
      ]),
      bangla(
        "৬.০ বনাম ৬.৫ — মূল পার্থক্য",
        [
          "৬.০: উত্তর বোঝা যায়, প্রশ্নের উত্তর হয়, কিন্তু এক আইডিয়া বলেই থেমে যায়; শব্দ বারবার একই; ভুল থাকে যা মাঝে মাঝে অর্থ ঘোলাটে করে।",
          "৬.৫: একই প্রশ্নের উত্তর দেয়, কিন্তু কারণ, উদাহরণ আর বিস্তারিত যোগ করে চালিয়ে যায়; বাক্যের ধরন বদলায়; ভুল থাকলেও অর্থ পরিষ্কার থাকে।",
          "সবচেয়ে বড় সমস্যা শব্দ নয়, সংক্ষিপ্ততা — দুই মিনিটের প্রশ্নের উত্তর বিশ সেকেন্ডে শেষ করে ফেললে ৬.৫ অসম্ভব।",
        ],
        "৬.৫ = বিকশিত, নিয়ন্ত্রিত উত্তর — নতুন কঠিন শব্দ নয়।",
      ),
      table(
        "Same question, two answers",
        ["Question", "Band 6.0 answer", "Band 6.5 answer"],
        [
          [
            "Do you like your hometown?",
            "Yes, I like it. It is a good place. There are many people and the food is nice.",
            "Yes, I do, mainly because it's small enough that everything is close by. For instance, I can walk to the market in five minutes, which I couldn't do if I lived in the city.",
          ],
          [
            "Why do people learn English?",
            "Because it is important for job. Many people want good job.",
            "Mostly for work, I'd say — a lot of companies expect it now. Though for students it's often about studying abroad, which is a slightly different motivation.",
          ],
        ],
      ),
      noteGrid("The four gaps that matter most at this level", [
        {
          label: "Development",
          detail: "One idea with no detail versus one idea plus a reason and an example. This is the biggest single gap.",
        },
        {
          label: "Range",
          detail: "Nothing but simple sentences versus simple sentences joined by because, although, which means.",
        },
        {
          label: "Repetition",
          detail: "'good, nice, very, because, I think' repeated versus a small set of precise alternatives used naturally.",
        },
        {
          label: "Consistency",
          detail: "One good answer followed by three short ones versus the same standard across all three parts.",
        },
      ]),
      badBetter("Two habits that cap learners at 6.0", [
        fix(
          "Answering as briefly as possible to avoid mistakes.",
          "Answering fully, with simple accurate structures, and letting the answer take its time.",
          "Short answers reduce your opportunity to demonstrate range — you cannot be rewarded for what you did not say.",
        ),
        fix(
          "Memorising impressive sentences and inserting them wherever they fit.",
          "Building every answer from the same pattern: direct answer → reason → detail → short close.",
          "Rehearsed sentences rarely match the question, and examiners notice the sudden change in style.",
        ),
      ]),
      checklist("Your 6.5 checklist for any answer", [
        "Did I answer the question directly in the first sentence?",
        "Did I give a reason — and not the same one every time?",
        "Did I add one specific detail (a place, a time, a number, a person)?",
        "Did I use at least one connector other than 'because'?",
        "Did I speak for a reasonable length rather than stopping at the first idea?",
      ]),
      callout(
        "tip",
        "Use this as a description, not a promise",
        "Nothing here guarantees a score. These are the characteristics that distinguish a 6.0 from a 6.5 answer in most cases — and the reason the rest of this platform teaches development rather than decoration.",
      ),
    ],
    practice: [
      "Take the Band 6.0 answer above and rebuild it out loud using the 6.5 pattern.",
      "Answer three Part 1 questions with the 6.5 checklist in front of you.",
    ],
  },

  {
    slug: "how-to-use-this-platform",
    track: "overview",
    order: 4,
    title: "How to use this platform",
    banglaTitle: "এই প্ল্যাটফর্ম কীভাবে ব্যবহার করবেন",
    summary:
      "A 30-day route through the site: what to read, what to speak, what to record, and in what order — so you never waste a session.",
    level: 1,
    minutes: 7,
    goals: [
      "Follow a 30-minute daily session structure",
      "Know which section to open for each problem you have",
      "Use the progress page to decide what comes next",
    ],
    examUse: "Reading about speaking does not raise a score; speaking does. This lesson makes sure most of your time is spent speaking.",
    tags: ["overview", "study plan", "practice"],
    blocks: [
      bangla(
        "প্রতিদিনের ৩০ মিনিট",
        [
          "১০ মিনিট পড়া: একটি লেসন বা একটি টপিক — শুধু একটি, বেশি নয়।",
          "১৫ মিনিট বলা: টাইমার ধরে অনুশীলন করুন; উত্তর রেকর্ড করুন, নইলে নিজের ভুল ধরা পড়ে না।",
          "৫ মিনিট মূল্যায়ন: রেকর্ডিং শুনে তিনটি নির্দিষ্ট সমস্যা আর তিনটি সমাধান লিখুন।",
        ],
        "পড়া ১০ মিনিট, বলা ১৫ মিনিট, মূল্যায়ন ৫ মিনিট — এই অনুপাতটাই সবচেয়ে কাজের।",
      ),
      steps("The 30-day route", [
        {
          title: "Days 1–4: understand the test",
          detail:
            "Overview track, then Part 1. Learn the direct-answer pattern and record two short sessions.",
        },
        {
          title: "Days 5–12: build Part 1",
          detail:
            "Two topics a day with vocabulary and questions, plus one timed Part 1 set. Start your mistake log.",
        },
        {
          title: "Days 13–20: the story engine",
          detail:
            "Part 2 lessons and cue cards. One full cue card a day, with the preparation minute timed.",
        },
        {
          title: "Days 21–26: discussion skills",
          detail:
            "Part 3 question types, the sentence toolkit, and two full mock tests with the feedback report.",
        },
        {
          title: "Days 27–30: consolidation",
          detail:
            "Mistake library revision, the final-week plan from Resources, and one last full mock under exam conditions.",
        },
      ]),
      table(
        "Open this when…",
        ["When you have this problem", "Go here"],
        [
          ["“I don't know what to say”", "Strategy track: I don't know what to say"],
          ["“I translate from Bangla in my head”", "Strategy track: thinking in English"],
          ["“My answer stops after one sentence”", "Part 1: extending answers"],
          ["“I can't fill two minutes in Part 2”", "Part 2: the story engine"],
          ["“Part 3 questions feel impossible”", "Part 3: answer architectures"],
          ["“I repeat the same words”", "Vocabulary: upgrading simple words"],
          ["“I keep making grammar mistakes”", "Grammar for Speaking (start with tenses)"],
          ["“I go blank and stay silent”", "Fluency: thinking while speaking"],
          ["“People don't understand part of what I say”", "Pronunciation: intelligibility first"],
        ],
      ),
      noteGrid("Rules of practice that actually matter", [
        {
          label: "Always speak aloud",
          detail: "Silent reading creates recognition, not production. Your mouth needs the repetition, not your eyes.",
        },
        {
          label: "Always use a timer",
          detail: "Exam pressure is part of the skill. Practising without time teaches you a pace you cannot keep.",
        },
        {
          label: "Always record something",
          detail: "You cannot correct what you cannot hear. One recording per session is enough.",
        },
        {
          label: "Never memorise a model answer",
          detail: "Use models to see the pattern, then build your own answers about your own life. That is the whole method.",
        },
      ]),
      checklist("Your first session, right now", [
        "Open Part 1: how Part 1 works and read it once",
        "Pick one Part 1 topic that you could talk about for a minute",
        "Record a timed 45-second answer to two of its questions",
        "Listen once, write two problems and two fixes",
        "Mark this lesson complete and check the progress page",
      ]),
      callout(
        "tip",
        "Don't memorise answers. Learn how to build answers.",
        "Every model answer on this site is a demonstration of a pattern. Copy the structure, never the sentence — the examiner is listening to whether you can build, not whether you can recite.",
      ),
    ],
    practice: [
      "Complete the five-step first session above, today rather than tomorrow.",
      "Write your own 30-day plan using the route in this lesson, with the days that suit your schedule.",
    ],
  },
];
