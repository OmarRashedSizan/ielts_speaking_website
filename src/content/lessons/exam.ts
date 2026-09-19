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
 * Exam skills. Everything here is preparation for the room: what the bands
 * look like, how to evaluate yourself honestly, how to rehearse a full test,
 * and what to do on the morning.
 */
export const examLessons: Lesson[] = [
  {
    slug: "band-6-vs-6-5",
    track: "exam",
    order: 1,
    title: "Band 6.0 vs Band 6.5 — the characteristics",
    banglaTitle: "ব্যান্ড ৬.০ বনাম ৬.৫ — বৈশিষ্ট্য",
    summary:
      "A simplified teaching summary of what separates the two bands, criterion by criterion, with the specific habit that closes the gap.",
    level: 3,
    minutes: 10,
    goals: [
      "Describe the characteristics of a 6.0 and a 6.5 answer in each criterion",
      "Identify which criterion is holding you back",
      "Practise the one habit that most often closes the 6.0 → 6.5 gap",
    ],
    examUse: "This is a teaching summary, not the official published descriptors — it is written to be actionable.",
    tags: ["exam", "band 6", "band 6.5", "criteria"],
    blocks: [
      prose("A note before the table", [
        "What follows is a simplified summary written for teaching, not the official published band descriptors. The real descriptors are longer, more technical and describe performance across many answers. This table describes the difference you can actually hear when a 6.0 answer and a 6.5 answer are played side by side.",
        "One thing is true across every criterion: a 6.5 is not a 6.0 with harder vocabulary. It is a 6.0 that has been developed, connected and controlled.",
      ]),
      table(
        "The four criteria, side by side (simplified teaching summary)",
        ["Criterion", "Typical at 6.0", "Typical at 6.5"],
        [
          [
            "Fluency & Coherence",
            "Speaks at length but with noticeable pauses; ideas linked with basic connectors like 'because' and 'and'",
            "Usually keeps going without long pauses; links ideas with a range of connectors such as 'which means', 'whereas', 'that said'",
          ],
          [
            "Lexical Resource",
            "Enough vocabulary for the topic; repetition of common words; occasional inexact word choice",
            "Uses less common, natural vocabulary with some flexibility; can paraphrase when a word is missing",
          ],
          [
            "Grammatical Range & Accuracy",
            "Mixes simple and some complex structures; errors are frequent but meaning is usually clear",
            "Uses a wider range of complex structures; errors are occasional and rarely obscure meaning",
          ],
          [
            "Pronunciation",
            "Generally understandable; some words require effort from the listener; stress and intonation inconsistent",
            "Easy to understand throughout; word and sentence stress used effectively; intonation supports meaning",
          ],
        ],
      ),
      bangla(
        "সহজ ভাষায় পার্থক্য",
        [
          "৬.০ উত্তরে উত্তর দেওয়া হয়, কিন্তু থেমে থেমে; শব্দ বারবার একই; ভুল বেশি হলেও বোঝা যায়।",
          "৬.৫ উত্তরে উত্তরটি বিকশিত হয় — কারণ, উদাহরণ ও তুলনা যোগ হয়; শব্দ পরিবর্তন হয়; ভুল কম এবং অর্থ কখনও ঘোলা হয় না।",
          "সবচেয়ে বড় পার্থক্য শব্দভান্ডার নয়, বরং ধারাবাহিকতা ও বিকাশ — অর্থাৎ থামা কমানো এবং আইডিয়া এগিয়ে নিয়ে যাওয়া।",
        ],
        "৬.৫ = আরও বিকশিত, আরও সংযুক্ত, আরও নিয়ন্ত্রিত — কঠিন নয়।",
      ),
      badBetter("The same question at both levels", [
        fix(
          "6.0: “I like my city because it is good. There are many people and many shops. It is very nice place for living.”",
          "6.5: “I like living here mostly because everything's close by — the market is five minutes away, so I don't lose hours travelling. It's noisy in the evenings, though, which took me a while to get used to.”",
          "The 6.5 version adds a specific distance, a consequence and a limitation. Same idea, developed rather than repeated.",
        ),
        fix(
          "6.0: “People should do exercise because it is good for health. Everyone knows this.”",
          "6.5: “I'd say it comes down to time, mainly. Most people aren't against exercise — they just don't have a slot for it, so it's more about habit than motivation.”",
          "The 6.5 version explains a mechanism instead of restating an obvious fact.",
        ),
        fix(
          "6.0: “In past, people are not using mobile. Now everyone is using.”",
          "6.5: “It's changed a lot — ten years ago hardly anyone had a smartphone, whereas now you see them in every shop, even in villages.”",
          "Tense control plus a comparison. The content is the same; the accuracy and range are not.",
        ),
      ]),
      noteGrid("The one habit that closes the gap fastest", [
        {
          label: "Add a specific detail",
          detail: "A distance, a price, a time, a name, a frequency. Almost every 6.0 answer is short of one concrete detail.",
        },
        {
          label: "Add a consequence",
          detail: "'…which means…', '…so in practice…'. Consequences show reasoning and produce extra sentences naturally.",
        },
        {
          label: "Add a limitation",
          detail: "'…although it isn't always like that.', 'Except in winter, when…'. Balance is a 6.5 signature.",
        },
        {
          label: "Vary the connector",
          detail: "Replace the third 'because' with 'which means', 'since' or 'as a result'.",
        },
      ]),
      quiz("Which answer is closer to 6.5, and why?", [
        {
          question: "Question: “Do you prefer studying alone or with others?”",
          options: [
            "“Alone, because it is quiet and I can focus, and it is better for me.”",
            "“Alone, mostly — I get distracted when people are talking. Though if it's something really difficult, like maths, I'd rather work with a friend, because we end up explaining things to each other.”",
            "“I prefer alone study. Alone study is very good. It is better than group.”",
          ],
          answer: 1,
          explain:
            "It develops a position, gives a limitation, and adds a condition — that shape is what distinguishes a 6.5 answer.",
        },
      ]),
      callout(
        "tip",
        "Judge your own answers against characteristics, not a number",
        "Do not attempt to award yourself 6.5. Instead, ask which characteristics are present: development, connector range, error frequency, clarity. Then practise the missing characteristic.",
      ),
    ],
    practice: [
      "Record one answer, then read the table and mark which 6.0 characteristics are present.",
      "Re-record the same answer, adding one specific detail, one consequence and one limitation.",
    ],
  },

  {
    slug: "self-evaluation",
    track: "exam",
    order: 2,
    title: "How to evaluate your own speaking honestly",
    banglaTitle: "নিজের স্পিকিং কীভাবে মূল্যায়ন করবেন",
    summary:
      "A five-step listening routine that turns a recording into three concrete things to fix — without inventing a band score.",
    level: 4,
    minutes: 10,
    goals: [
      "Run a structured self-evaluation in under five minutes",
      "Mark only problems you can name a fix for",
      "Track progress across three criteria over a week",
      "Use the app's evaluation panel as a starting point, not a verdict",
    ],
    examUse: "Do this after every practice session; it is the fastest improvement loop available without a teacher.",
    tags: ["exam", "self-evaluation", "feedback", "practice"],
    blocks: [
      prose("Why self-evaluation beats guessing", [
        "Most learners finish a practice session with a feeling — 'that was bad' — and change nothing. A recording gives you evidence: where you paused, which words you repeated, which sentences collapsed.",
        "The rule is: mark a problem only if you can name the fix. 'I need better vocabulary' is not a fix. 'I said good four times; next attempt I'll use useful, well-organised and pleasant' is a fix.",
      ]),
      steps("The five-step routine (five minutes per recording)", [
        {
          title: "1. Listen once, no pen",
          detail:
            "Just hear it. Notice where you would have stopped listening if you were the examiner.",
        },
        {
          title: "2. Listen for structure",
          detail:
            "Write down the skeleton: did the answer have a position, a reason, an example, a close? Missing moves are your first list.",
        },
        {
          title: "3. Listen for repetition",
          detail:
            "Tally repeated words — connectors, adjectives, openers. Three or more of the same word is a fix.",
        },
        {
          title: "4. Listen for accuracy in the places that matter",
          detail:
            "Tenses in stories, subject-verb agreement, and articles are the three that recur. Count them, do not hunt for every error.",
        },
        {
          title: "5. Choose exactly three fixes",
          detail:
            "Write them as instructions: 'use which means at least twice', 'say the -ed endings', 'add one number or place per answer'.",
        },
      ]),
      table(
        "Turning observations into fixes",
        ["Observation", "Not a fix", "A fix"],
        [
          ["“My fluency is bad.”", "“Practise more.”", "“Pause only between ideas; use 'which means' to extend instead of stopping.”"],
          ["“I repeat 'good'.”", "“Learn better words.”", "“Say useful, well-organised and pleasant instead, in the next recording.”"],
          ["“I made grammar mistakes.”", "“Study grammar.”", "“Re-record with past tense only — everything happened last year.”"],
          ["“My answer was short.”", "“Speak longer.”", "“Add one example and one limitation; target 35 seconds per Part 3 question.”"],
        ],
      ),
      bangla(
        "ত্রুটি নয়, সংশোধন খুঁজুন",
        [
          "রেকর্ড শুনে শুধু সমস্যার নাম লিখলেই হবে না — প্রতিটি সমস্যার পাশে নির্দিষ্ট সংশোধন লিখতে হবে।",
          "যেমন: 'good চারবার বলেছি' → 'পরেরবার useful, well-organised, pleasant ব্যবহার করব'। এ ধরনের নির্দেশনা পরের রেকর্ডিংয়েই কাজে লাগে।",
          "একবারে তিনটির বেশি সংশোধন নেবেন না — বেশি নিলে কোনোটিই রপ্ত হয় না।",
        ],
        "সমস্যা + নির্দিষ্ট সংশোধন + সর্বোচ্চ তিনটি = কাজে লাগা মূল্যায়ন।",
      ),
      noteGrid("A one-page practice log", [
        { label: "Date", detail: "And how many minutes you actually spoke — not how long you studied." },
        { label: "Three fixes", detail: "Written as instructions, not complaints." },
        { label: "One thing that worked", detail: "Progress unnoticed is progress not repeated." },
        { label: "Re-recorded?", detail: "A tick or a cross. If the answer was never re-recorded, the fix is not learned yet." },
      ]),
      badBetter("Self-evaluation mistakes", [
        fix(
          "Listening once and feeling disappointed.",
          "Listening five times with a specific job each time.",
          "Each pass has one purpose. Trying to hear everything at once is why learners give up on self-evaluation.",
        ),
        fix(
          "Awarding yourself a band score.",
          "Recording which characteristics were present and which were missing.",
          "You cannot score your own speaking accurately, and a guessed number is misleading. Characteristics are actionable; numbers are not.",
        ),
        fix(
          "Listing ten problems.",
          "Choosing three fixes and re-recording once.",
          "Three fixes applied once beat ten fixes noted and forgotten.",
        ),
      ]),
      quiz("Which is a usable fix?", [
        {
          question: "Which of these can you act on in your next recording?",
          options: [
            "My English needs to be better.",
            "I paused seven times mid-sentence; next time I'll finish the sentence with a simpler word instead of stopping.",
            "I should study more vocabulary.",
          ],
          answer: 1,
          explain: "It names the behaviour, the moment and the replacement — so you can check whether you actually did it.",
        },
      ]),
      callout(
        "tip",
        "Keep the log for two weeks",
        "Three fixes a session, two weeks, one page. That is twenty-one specific improvements and a record of which ones stuck. Learners who keep the log improve faster than learners who practise more hours without one.",
      ),
    ],
    practice: [
      "Evaluate your most recent recording with the five-step routine and write three fixes.",
      "Re-record one answer applying a single fix, and compare the two versions side by side.",
    ],
  },

  {
    slug: "mock-test-guide",
    track: "exam",
    order: 3,
    title: "Mock tests — how to practise under real conditions",
    banglaTitle: "মক টেস্ট কীভাবে করবেন",
    summary:
      "How to run a full mock test properly, why a bad mock is not wasted, and how to convert the feedback report into next week's plan.",
    level: 4,
    minutes: 10,
    goals: [
      "Run a full mock test under realistic conditions",
      "Interpret the feedback report without overreacting to it",
      "Convert feedback into a one-week practice plan",
    ],
    examUse: "A mock test rehearses the sequence — three parts, timers, no stopping — which is a skill in itself.",
    tags: ["exam", "mock test", "practice"],
    blocks: [
      bangla(
        "মক টেস্টের নিয়ম",
        [
          "ফোন দূরে রাখুন, টাইমার চালু করুন, আর একবার শুরু করলে থামবেন না — না থেমে পুরো তিনটি অংশ শেষ করা নিজেই একটি দক্ষতা।",
          "একটি খারাপ মক টেস্ট নষ্ট হয় না; বরং সেখান থেকেই আসল দুর্বলতা ধরা পড়ে। ফলে পরের সপ্তাহে কী অনুশীলন করবেন সেটি স্পষ্ট হয়ে যায়।",
          "প্রতি সপ্তাহে একটির বেশি মক টেস্ট নয় — বাকি সময় নির্দিষ্ট দক্ষতার অনুশীলনে দিন।",
        ],
        "সপ্তাহে একবার পূর্ণ মক, বাকি সময় নির্দিষ্ট দুর্বলতার কাজ।",
      ),
      steps("Running the mock properly", [
        { title: "1. Set the scene", detail: "A quiet room, a phone or laptop with a timer, no notes except the cue card paper." },
        { title: "2. Part 1 — 4–5 topic areas", detail: "Do not pause between questions. If you need a second, take it silently, exactly as you would in the test." },
        { title: "3. Part 2 — the full minute", detail: "Set a one-minute timer for preparation, write seven keywords, then speak for the full two minutes." },
        { title: "4. Part 3 — 4–6 questions", detail: "Use a different architecture for each answer. Do not repeat the same three sentences." },
        { title: "5. Do not stop to correct the recording", detail: "Anything you stop to fix is practice, not a mock. Finish the whole test before evaluating." },
        { title: "6. Evaluate 20 minutes later", detail: "Wait, then listen with the self-evaluation routine. Distance reduces panic and improves accuracy." },
      ]),
      table(
        "What a mock test tells you — and what it does not",
        ["It does tell you", "It does not tell you"],
        [
          ["Whether you can sustain all three parts without stopping", "Your actual band score"],
          ["Which part you run out of ideas in", "Whether you will perform the same way on the day"],
          ["Which architecture you avoid because it is hard", "How an examiner will react to your accent"],
          ["Whether your timers are realistic for you", "Anything about your pronunciation that a machine cannot hear"],
        ],
      ),
      examples("Converting a report into a plan", [
        {
          text: "Report: “Part 2 answers stopped at 1:20; feeling and result were missing.” → Plan: “Next week, seven cue cards, each ending with a planned feeling-and-result sentence.”",
          note: "One observation becomes one concrete weekly drill.",
        },
        {
          text: "Report: “Repeated 'because' 11 times across the test.” → Plan: “Rewrite five answers replacing the second 'because' with 'which means' or 'since'; use them in Part 1 practice.”",
          note: "Repetition is measurable, so the fix can be checked next week.",
        },
        {
          text: "Report: “Comparison answers were short; solutions answers were strong.” → Plan: “Open the Part 3 comparison type, learn the Compare-Contrast-Conclude architecture, and drill it five times.”",
          note: "Weakness by question type gives a direct link to a specific lesson.",
        },
      ]),
      badBetter("Mock test habits to fix", [
        fix(
          "Pausing the timer to think.",
          "Taking the silence and continuing.",
          "The real test does not pause. Learning to recover from a two-second silence is part of the practice.",
        ),
        fix(
          "Doing five mock tests in one week.",
          "One full mock, then targeted practice on the weakest area.",
          "Mock tests diagnose; drills improve. More diagnosis without treatment does not change the result.",
        ),
        fix(
          "Reading the feedback and feeling judged.",
          "Reading it as a work order: three items, each with a lesson attached.",
          "The report is descriptive by design. It lists observations and fixes, never a score.",
        ),
      ]),
      checklist("One-week mock follow-up", [
        "Pick the three most frequent observations from the report",
        "Attach one lesson or drill to each observation",
        "Practise those three drills on five separate days",
        "Re-run the same mock seed a week later and compare the two reports",
      ]),
      callout(
        "tip",
        "Rehearse the transitions, not just the answers",
        "The hardest moments in a real test are the joins: the start, the move from Part 1 to Part 2, and the first Part 3 question. Practise those transitions deliberately — they are where fluency usually drops.",
      ),
    ],
    practice: [
      "Run one full mock test this week: Part 1, Part 2 with the preparation minute, Part 3, no stopping.",
      "Write a three-item plan from the feedback and schedule the drills across five days.",
    ],
  },

  {
    slug: "exam-day-routine",
    track: "exam",
    order: 4,
    title: "Exam-day routine",
    banglaTitle: "পরীক্ষার দিনের রুটিন",
    summary:
      "What to do in the twenty-four hours before, the ten minutes before, and the first thirty seconds of the test — plus what to do when something goes wrong.",
    level: 3,
    minutes: 9,
    goals: [
      "Prepare practically for the exam day",
      "Warm up your speaking before you enter the room",
      "Recover calmly from a bad start or a lost idea",
    ],
    examUse: "Most exam-day damage is caused by nerves, timing and silence — not by English ability.",
    tags: ["exam", "exam day", "routine", "nerves"],
    blocks: [
      bangla(
        "পরীক্ষার দিনের তিন ধাপ",
        [
          "আগের দিন: নতুন কিছু শিখবেন না। শুধু পরিচিত লেসন, নিজের নোট আর পছন্দের দুই-তিনটি উত্তরের রিভিশন দিন।",
          "পরীক্ষার দশ মিনিট আগে: জোরে ইংরেজিতে কথা বলুন — নিজের সম্পর্কে, আজকের সকাল নিয়ে — যাতে মুখ আর কান সক্রিয় হয়।",
          "প্রথম ৩০ সেকেন্ড: ধীরে, স্পষ্টভাবে বলুন; শুরুতে ভুল হলেও থামবেন না।",
        ],
        "আগের দিন নতুন নয় revision, আর পরীক্ষার আগে জোরে ইংরেজি বলা বাধ্যতামূলক।",
      ),
      steps("Twenty-four hours before", [
        { title: "Revise, do not learn", detail: "Re-read your own notes, the mistake library entries you saved, and three model patterns. New material raises anxiety." },
        { title: "Do one short practice", detail: "Two Part 1 questions and one cue card. Enough to feel the rhythm, not enough to tire you." },
        { title: "Prepare practically", detail: "ID, confirmation, arrival time, route, and a plan for arriving thirty minutes early." },
        { title: "Stop practising early", detail: "No speaking practice in the last few hours. Rest your voice and your attention." },
      ]),
      steps("Ten minutes before the test", [
        { title: "Warm up out loud", detail: "Speak English quietly for three minutes: describe the room, your journey, your breakfast. Your first sentence should not be your first English of the day." },
        { title: "Practise the three openers", detail: "'Yes, definitely — I'd say…', 'It depends a little — for me…', 'That's interesting — I've never thought about it, but I'd guess…'" },
        { title: "Breathe slowly", detail: "Four counts in, six counts out, five times. This lowers your speaking pace, which improves clarity." },
        { title: "Re-read your cue-card routine", detail: "Seven keywords, one minute. Having a step-by-step plan for Part 2 is the most calming thing you can carry into the room." },
      ]),
      table(
        "When something goes wrong",
        ["What happens", "What to do"],
        [
          ["You did not hear the question", "“Sorry, could you repeat that?” — once, politely. Nothing is lost."],
          ["You misunderstood the question", "Answer, then add: “Actually, I might have answered a slightly different question — could you check?” Examiners will clarify."],
          ["You lose your thread in Part 2", "Pause, look at your notes, and continue from the next keyword. A brief pause is far better than fabricating."],
          ["You make a grammar error", "Correct it once, briefly, then continue. Do not apologise."],
          ["You go blank in Part 3", "“That's an interesting question — I'd say it depends on the person.” Then start dimension one."],
          ["You run out of content early", "Add a limitation: 'That said, it isn't always like that.' Then add a change over time."],
          ["The examiner looks neutral", "That is their training, not a reaction. Keep going; do not try to make them smile."],
        ],
      ),
      examples("Recovery language, ready to use", [
        { text: "“Sorry, could you repeat that?”", note: "For a missed or unclear question." },
        { text: "“Let me think about that for a second —”", note: "Buys two seconds without silence." },
        { text: "“What I mean is…”", note: "Repairs a sentence that started badly." },
        { text: "“That's an interesting question — I'd guess…”", note: "Opens a hard Part 3 answer calmly." },
      ]),
      badBetter("Exam-day mistakes", [
        fix(
          "Learning a new list of vocabulary the night before.",
          "Reviewing your own notes and three patterns you already control.",
          "New material cannot be absorbed overnight, and half-remembered words reduce fluency the next morning.",
        ),
        fix(
          "Saving your first English sentence for the examiner's first question.",
          "Speaking English quietly for three minutes beforehand.",
          "A warm mouth and a warm ear make the first thirty seconds far more controlled.",
        ),
        fix(
          "Trying to hide an error and continuing as if nothing happened when the meaning is unclear.",
          "Repairing it once — 'what I mean is…' — then moving on.",
          "One clear repair protects your meaning score. Silence about a confusing error does not.",
        ),
      ]),
      checklist("The morning of the test", [
        "Eat something; fourteen minutes of speaking on an empty stomach is harder",
        "Do not rehearse full answers — warm-up only",
        "Arrive early enough to sit and breathe",
        "Bring the ID and confirmation you need, plus water",
        "Remember: the examiner wants you to do well",
      ]),
      callout(
        "tip",
        "You cannot control the questions, only the pattern",
        "On the day, the only guaranteed asset is your structure: answer, reason, detail; seven steps for Part 2; six architectures for Part 3. Whatever the questions turn out to be, those three tools still work.",
      ),
    ],
    practice: [
      "Write your own exam-day routine, with times, for the day before and the morning of the test.",
      "Practise the four recovery phrases aloud until they are automatic.",
    ],
  },
];
