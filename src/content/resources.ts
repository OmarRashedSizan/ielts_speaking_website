/**
 * Resources: printable-in-spirit checklists, study plans, reference tables and
 * FAQ answers. Rendered by the same block renderer as lessons, so a resource
 * can hold anything a lesson can — and new resources are added by appending an
 * object here.
 */
import type { Resource } from "./schema";
import {
  badBetter,
  bangla,
  callout,
  checklist,
  compare,
  examples,
  fix,
  flow,
  noteGrid,
  patterns,
  prose,
  steps,
  table,
} from "./builders";

export const resources: Resource[] = [
  {
    slug: "speaking-checklist",
    title: "One-page speaking checklist",
    banglaTitle: "এক পাতার স্পিকিং চেকলিস্ট",
    kind: "checklist",
    minutes: 5,
    summary:
      "Keep this open while you practise. It covers what to do before, during and after answering a question.",
    blocks: [
      prose(
        "How to use this checklist",
        [
          "Read it once before practice, then keep it beside you. Tick each line mentally as you speak — after a week you will not need it.",
          "The point is not perfection. The point is that no answer ends the same way it used to: short, vague and unplanned.",
        ],
      ),
      checklist("Before you answer", [
        "Do I understand what is being asked — yes/no, why, comparison, opinion?",
        "Which pattern fits: Answer → Reason → Small detail, or Answer → Reason → Example → Extra detail?",
        "What is my first sentence going to be?",
        "Which tense does this question want — present, past or future?",
      ]),
      checklist("While you speak", [
        "Answer the question in sentence one, without repeating it word for word.",
        "Give a reason with 'because', 'mainly because' or 'the main reason is'.",
        "Add one small, specific detail — a time, a place, a name, a number.",
        "Use at least one connector that is not 'and' or 'because'.",
        "If a word does not come, reformulate instead of stopping: 'I mean…', 'what I'm trying to say is…'",
        "Finish the sentence you started, even if it is simpler than you planned.",
      ]),
      checklist("Afterwards — 30 seconds of reflection", [
        "Did any answer last less than 20 seconds?",
        "Which question made me pause for more than three seconds, and why?",
        "Which repeated word should I replace in the next attempt?",
        "Which single structure will I use more next time?",
      ]),
      callout(
        "key",
        "The one rule that matters most",
        "Don't memorise answers. Learn how to build answers — answer, reason, detail, example. The pattern stays; the content changes with the question.",
      ),
    ],
  },

  {
    slug: "30-day-study-plan",
    title: "30-day study plan (Band 6.0 → 6.5)",
    banglaTitle: "৩০ দিনের স্টাডি প্ল্যান",
    kind: "plan",
    minutes: 12,
    summary:
      "A realistic four-week schedule for someone studying or working full-time: 45–60 minutes a day, six days a week.",
    blocks: [
      bangla(
        "কেন এই প্ল্যান",
        [
          "প্রতিদিন ৪৫–৬০ মিনিটই যথেষ্ট, যদি কাজের ধরন ঠিক থাকে। শুধু পড়ে গেলে speaking বাড়ে না — প্রতিদিন অন্তত ১০ মিনিট জোরে বলতে হবে।",
          "সপ্তাহে একদিন বিশ্রাম রাখুন। প্রতি সপ্তাহের শেষে মক টেস্টের একটি অংশ দিন।",
        ],
        "45–60 minutes a day, six days a week, with at least 10 minutes of actual speaking.",
      ),
      steps("Week 1 — Understand the test and build the smallest pattern", [
        {
          title: "Day 1–2",
          detail:
            "Read Speaking Overview and 'How Part 1 works'. Learn the Answer → Reason → Small detail pattern by heart as a pattern, not as an answer.",
        },
        {
          title: "Day 3–4",
          detail: "Work through ten Part 1 topics from the topic bank, speaking every answer aloud.",
        },
        {
          title: "Day 5",
          detail:
            "Grammar: present simple, past simple, present perfect. Do the speaking exercises, not the tables.",
        },
        {
          title: "Day 6",
          detail: "Part 1 practice session: 12 questions, about 35 seconds each, recorded.",
        },
      ]),
      steps("Week 2 — Part 2 and the story engine", [
        {
          title: "Day 8–9",
          detail:
            "Universal story engine: SETTING → BACKGROUND → MAIN EVENT → DETAILS → FEELING → RESULT → WHY IT MATTERS.",
        },
        {
          title: "Day 10–11",
          detail:
            "Three cue cards from different categories — person, place, experience. Full 1-minute preparation, 2-minute talk.",
        },
        {
          title: "Day 12",
          detail:
            "One-minute preparation: practise the WHO / WHERE / WHEN / WHAT / WHY / FEELING / DETAIL / RESULT note sheet.",
        },
        {
          title: "Day 13",
          detail:
            "Listen back. Mark one place where you ran dry and decide what you would say there next time.",
        },
      ]),
      steps("Week 3 — Part 3 and flexible speaking", [
        {
          title: "Day 15–16",
          detail:
            "Part 3 sentence toolkit: opinion, reason, explanation, example, contrast, comparison.",
        },
        {
          title: "Day 17–18",
          detail:
            "Six answer architectures. Practise six question types: Why, Opinion, Comparison, Past vs present, Future, Advantages.",
        },
        {
          title: "Day 19",
          detail:
            "Idea engine: practise the eleven dimensions and the eleven Part 3 lenses on two unfamiliar questions.",
        },
        {
          title: "Day 20",
          detail: "Fluency training: 60-second answers with no pause longer than two seconds.",
        },
      ]),
      steps("Week 4 — Exam conditions and revision", [
        {
          title: "Day 22–23",
          detail:
            "Full mock test: Part 1, Part 2 and Part 3 without stopping. Evaluate afterwards, never during.",
        },
        {
          title: "Day 24",
          detail:
            "Mistake library: revise the fifteen mistakes you actually make, then re-record the same answers.",
        },
        {
          title: "Day 25–26",
          detail:
            "Pronunciation pass: word stress, sentence stress, final consonants and -ed endings.",
        },
        {
          title: "Day 27–29",
          detail: "Two more mock tests on different days. Compare the recordings; never memorise them.",
        },
        {
          title: "Day 30",
          detail:
            "Light revision only: checklists, quick revision cards, exam-day routine. Speak for ten minutes, then stop.",
        },
      ]),
      noteGrid("Rules for the whole month", [
        {
          label: "Speak every day",
          detail: "Even ten minutes. Reading silently does not move a speaking score.",
        },
        {
          label: "Record once a day",
          detail: "Listening to yourself is the fastest way to spot repeated words and paused endings.",
        },
        {
          label: "One topic, two levels",
          detail:
            "Answer again at Band 6.5 standard using the same ideas but better structure and detail.",
        },
        {
          label: "Never memorise a full answer",
          detail: "Memorise patterns and vocabulary only. Paragraphs do not survive contact with the real question.",
        },
      ]),
    ],
  },

  {
    slug: "question-patterns",
    title: "Answer pattern reference",
    banglaTitle: "উত্তর গঠনের রেফারেন্স",
    kind: "reference",
    minutes: 8,
    summary:
      "Every core answer pattern in one place: Part 1, Part 2 and Part 3, with the situation each one fits.",
    blocks: [
      table(
        "Part 1 patterns",
        ["Question type", "Pattern", "Example opening"],
        [
          ["Yes / No", "Direct answer → reason → small detail", "Yes, I do — mainly because…"],
          [
            "Yes / No (negative)",
            "Direct answer → why not → what instead",
            "Not really, to be honest. I don't get much time, because…",
          ],
          ["WH question", "Direct answer → one reason → one detail", "I usually go on Fridays, mostly to relax…"],
          ["Preference", "Preference → reason → condition", "I'd rather walk, because the traffic is…"],
          ["Frequency", "Frequency → routine → feeling", "Almost every day. It's become part of my routine…"],
          [
            "Extension",
            "Answer → reason → example → extra detail",
            "I'd say coffee — though for me it's more about the ritual than the taste…",
          ],
        ],
      ),
      table(
        "Part 2 story arc",
        ["Step", "What you say", "Approximate time"],
        [
          ["Setting", "Where and when it happened", "15 seconds"],
          ["Background", "Who was there, what the situation was", "20 seconds"],
          ["Main event", "What actually happened", "30 seconds"],
          ["Details", "One or two specific details", "20 seconds"],
          ["Feeling", "How you felt at the time", "15 seconds"],
          ["Result", "What changed afterwards", "15 seconds"],
          ["Why it matters", "What it means to you now", "15 seconds"],
        ],
      ),
      table(
        "Part 3 architectures",
        ["Situation", "Architecture", "Shape"],
        [
          ["Simple why or opinion", "Basic extension", "Direct → reason → explanation → example"],
          ["Two-sided question", "Balanced view", "One side → other side → interaction → position"],
          ["Change over time", "Past vs present", "Before → now → reason → evaluation"],
          ["Society-level issue", "Cause and effect chain", "Cause → mechanism → effect → who is affected"],
          ["Problem question", "Problem and solution", "Problem → who feels it → measure → feasibility"],
          ["Speculation", "Prediction with conditions", "Trend → prediction → condition → counter-trend"],
        ],
      ),
      patterns("Sentence patterns worth owning", [
        {
          label: "Opinion + reason",
          template: "I'd say ___ , mainly because ___ .",
          example: "I'd say it depends on the teacher, mainly because a good one changes everything.",
        },
        {
          label: "Opinion + explanation",
          template: "The main reason I ___ is ___ .",
          example: "The main reason I go there is that it's ten minutes from home.",
        },
        {
          label: "Contrast",
          template: "___ , whereas ___ .",
          example: "Villages are quiet, whereas cities never fully settle down.",
        },
        {
          label: "Concession",
          template: "Even though ___ , ___ .",
          example: "Even though it's expensive, I still think it's worth it.",
        },
        {
          label: "Hypothesis",
          template: "If I could ___ , I'd ___ , because ___ .",
          example: "If I could change one thing, I'd fix the footpaths, because walking isn't safe here.",
        },
        {
          label: "Prediction",
          template: "I'd probably ___ unless ___ .",
          example: "I'd probably study abroad unless I get a good offer here.",
        },
        {
          label: "Balanced close",
          template: "That said, ___ . / On balance, I'd say ___ .",
          example: "That said, it doesn't apply to everyone. On balance, I'd say the benefits outweigh the problems.",
        },
      ]),
    ],
  },

  {
    slug: "cue-card-strategy",
    title: "Cue card strategy sheet",
    banglaTitle: "কিউ কার্ড স্ট্র্যাটেজি",
    kind: "reference",
    minutes: 7,
    summary:
      "What to write in the one-minute preparation, how to fill two minutes, and how to save yourself if you get stuck.",
    blocks: [
      prose(
        "The first 15 seconds of preparation",
        [
          "Read the card twice. Underline the four bullets. Then decide one thing only: which story shape does this card want — person, place, object, event, experience, activity, skill, media or plan?",
          "Choosing the shape early prevents the most common Part 2 problem: a wandering answer with no structure.",
        ],
      ),
      noteGrid("The note sheet: eight words, not sentences", [
        { label: "WHO", detail: "The person or people involved. Just a name or a relationship." },
        { label: "WHERE", detail: "One location: 'rooftop', 'university library', 'Cox's Bazar'." },
        { label: "WHEN", detail: "A rough time: '2023', 'last Eid', 'when I was ten'." },
        { label: "WHAT", detail: "The main event in three words." },
        { label: "WHY", detail: "Why it mattered. This becomes your ending." },
        { label: "FEELING", detail: "One adjective: nervous, proud, relieved, embarrassed." },
        { label: "DETAIL", detail: "One concrete detail — a sound, a number, something somebody said." },
        { label: "RESULT", detail: "What changed afterwards." },
      ]),
      steps("Speaking for two minutes without running dry", [
        {
          title: "Minute 1 — setting and background",
          detail:
            "Say where and when, who was there, and what the situation was. Keep moving; do not describe the weather.",
        },
        {
          title: "Minute 1.5 — details and feeling",
          detail:
            "Add the specific detail from your notes, then say how you felt at the time. Feelings are easy to extend into reasons.",
        },
        {
          title: "Minute 2 — result and why it matters",
          detail:
            "Say what changed afterwards and why the story matters to you now. This is the part most candidates skip.",
        },
      ]),
      flow(
        [
          "Repeat your last idea in different words — this buys three seconds without a silence.",
          "Add a comparison: 'it was different from what I expected'.",
          "Add a person: 'my cousin was there too, and…'",
          "Add a feeling: 'honestly, I was a bit nervous at that point'.",
          "Close the story: 'and that's why I still remember it'.",
        ],
        {
          title: "If you go blank mid-answer",
          note: "Any one of these keeps the answer alive. You do not need all five.",
        },
      ),
      compare(
        "Band 6.0 vs Band 6.5 cue-card answers (characteristics)",
        {
          label: "Band 6.0 — what it typically sounds like",
          tone: "danger",
          bullets: [
            "All four bullets answered, but briefly",
            "Mostly simple sentences with a few connectors",
            "Some specific detail mixed with general statements",
            "Ends when the ideas run out",
          ],
        },
        {
          label: "Band 6.5 — what it typically sounds like",
          tone: "brand",
          bullets: [
            "Bullets answered and connected into one story",
            "A mix of simple, compound and complex sentences",
            "Consistent specific detail plus one reflection",
            "Ends deliberately, explaining why it matters",
          ],
        },
      ),
      callout(
        "tip",
        "One idea is better than four",
        "A single well-developed memory with real detail always beats four half-finished ones. Depth reads as fluency.",
      ),
    ],
  },

  {
    slug: "self-evaluation-guide",
    title: "Self-evaluation guide",
    banglaTitle: "নিজের মূল্যায়ন গাইড",
    kind: "checklist",
    minutes: 9,
    summary:
      "How to judge your own recording honestly across the four criteria — and which five things to fix first.",
    blocks: [
      prose(
        "Judge in this order",
        [
          "Listen once without judging, just to hear the whole answer. Listen a second time with a pen. Do not listen a third time to punish yourself — that is not practice.",
          "Mark a problem only if you can name the fix. 'I need better vocabulary' is not a fix. 'I said good four times; next time I'll use useful, well-organised and pleasant' is a fix.",
        ],
      ),
      table(
        "What to listen for",
        ["Criterion", "Question to ask yourself", "Typical of Band 6.0", "Typical of Band 6.5"],
        [
          [
            "Fluency",
            "Were there silences longer than three seconds?",
            "Some hesitation, mostly recoverable",
            "Occasional hesitation; ideas keep flowing",
          ],
          [
            "Grammar",
            "Did I use more than one tense and one complex sentence?",
            "Simple and some compound sentences",
            "Simple, compound and some complex sentences",
          ],
          [
            "Vocabulary",
            "Did I repeat any word more than three times?",
            "Adequate but repetitive",
            "Varied, with some natural collocations",
          ],
          [
            "Pronunciation",
            "Could a stranger understand every word?",
            "Generally clear, some sounds dropped",
            "Clear and easy to follow throughout",
          ],
          [
            "Development",
            "Did I answer the whys, or only the whats?",
            "Bullets answered, explanations weak",
            "Ideas extended with reasons and examples",
          ],
        ],
        "A simplified teaching summary of what examiners listen for — not the official published band descriptors.",
      ),
      checklist("The five fixes that raise a score fastest", [
        "Answer length: every Part 1 answer 20–30 seconds, not five.",
        "One reason per answer, signalled by a connector other than 'and'.",
        "One concrete detail per answer: a name, a time, a place, a number.",
        "One contrast per Part 3 answer: 'whereas', 'even though', 'that said'.",
        "One reformulation instead of silence when a word does not come.",
      ]),
      examples(
        "Turning a vague note into a real fix",
        [
          {
            text: "Vague: 'My grammar was bad.'",
            note: "Fix: 'I said “I am living here since 2019” three times. Drill have been living + since.'",
          },
          {
            text: "Vague: 'I need better vocabulary.'",
            note: "Fix: 'I used “nice” six times. Next attempt: pleasant, well-organised, welcoming.'",
          },
          {
            text: "Vague: 'I paused a lot.'",
            note: "Fix: 'I paused before the second Part 3 question. Plan: start with the pattern, then add an example.'",
          },
        ],
      ),
      callout(
        "warn",
        "No single answer guarantees a band",
        "Self-evaluation is a teaching tool, not an examiner's report. Use it to find the next thing to practise — never to predict a score from one recording.",
      ),
    ],
  },

  {
    slug: "faq",
    title: "Common questions",
    banglaTitle: "সাধারণ প্রশ্নোত্তর",
    kind: "faq",
    minutes: 6,
    summary: "Short answers to the questions Bangladeshi candidates ask most often before their test.",
    blocks: [
      examples("About the test", [
        {
          text: "How long is the speaking test?",
          note: "About 11–14 minutes: Part 1 (4–5 minutes), Part 2 (3–4 minutes including one minute of preparation), Part 3 (4–5 minutes).",
        },
        {
          text: "Can I choose my Part 2 topic?",
          note: "No. You get one cue card. You can adapt your content — the same story often fits two or three different cards.",
        },
        {
          text: "Will the examiner interrupt me?",
          note: "Politely, yes, in Parts 1 and 3. That is time management, not a judgement on your answer.",
        },
        {
          text: "Does my accent matter?",
          note: "No. The criterion is intelligibility — whether the examiner understands you easily.",
        },
      ]),
      examples("About preparation", [
        {
          text: "Should I memorise answers?",
          note: "No. Examiners are trained to notice memorised responses, and a memorised answer usually does not answer the question. Learn patterns, not paragraphs.",
        },
        {
          text: "How long should a Part 1 answer be?",
          note: "Two to four sentences: direct answer, reason, one small detail.",
        },
        {
          text: "Is difficult vocabulary a good idea?",
          note: "Not unless you control it. At Band 6.0–6.5, accurate and natural beats difficult and misused.",
        },
        {
          text: "What if I don't understand the question?",
          note: "Ask once, politely: 'Sorry, could you repeat that?' It costs nothing and is far better than answering the wrong question.",
        },
      ]),
      examples("About this platform", [
        {
          text: "Do I need an account?",
          note: "No. Progress is stored in your own browser, so clearing browser data clears your progress.",
        },
        {
          text: "Is the AI evaluation a real examiner?",
          note: "No. It gives per-criterion feedback and practice suggestions. You can also disable it and use self-evaluation only.",
        },
        {
          text: "How much content is there?",
          note: "Around 40 Part 1 topics, 19 Part 2 categories with fully worked cue cards, 19 Part 3 question types and a 90-entry mistake library — all searchable.",
        },
      ]),
    ],
  },

  {
    slug: "common-mistakes-summary",
    title: "Bangladeshi learner mistakes — quick summary",
    banglaTitle: "সাধারণ ভুলের সারসংক্ষেপ",
    kind: "reference",
    minutes: 10,
    summary:
      "Fifteen errors that appear again and again in Bangladeshi candidates' speaking tests, with the correction and the reason.",
    blocks: [
      bangla(
        "এই তালিকা কীভাবে ব্যবহার করবেন",
        [
          "এই ভুলগুলো প্রায় সবার হয়, কারণ বাংলা ভাষার গঠন ইংরেজির সঙ্গে সব জায়গায় মেলে না। ভুলগুলো চিনে ফেললে নিজেই নিজের উত্তর সংশোধন করতে পারবেন।",
          "প্রতিটি প্যাটার্ন একবার করে জোরে বলে দেখুন — শুধু পড়ে গেলে মুখস্থ থাকবে না।",
        ],
        "Recognise the pattern, then drill the correction out loud.",
      ),
      table(
        "Fifteen mistakes worth knowing by heart",
        ["❌ What we say", "✅ Natural English", "Why"],
        [
          ["I am living here since 2019.", "I've been living here since 2019.", "A continuing situation needs the present perfect."],
          ["I didn't went there.", "I didn't go there.", "After 'didn't', use the base verb."],
          ["People is friendly.", "People are friendly.", "'People' is plural."],
          ["He said me he was busy.", "He told me he was busy.", "tell + person; say + something."],
          ["I am agree.", "I agree.", "'Agree' is a verb."],
          ["It was very much good.", "It was really good.", "'Very much' does not modify adjectives."],
          ["I gave the exam.", "I took the exam.", "'পরীক্ষা দেওয়া' = take an exam."],
          ["I have much tension.", "I'm quite stressed.", "'Tension' means strained relations."],
          ["We discussed about it.", "We discussed it.", "'Discuss' takes no preposition."],
          ["I reached to the station.", "I reached the station.", "'Reach' is transitive."],
          ["My cousin brother.", "My cousin.", "English 'cousin' covers both."],
          ["Please repeat again.", "Could you repeat that?", "'Repeat' already means again."],
          ["I was in tension.", "I was nervous.", "Use 'nervous' or 'stressed'."],
          ["Full family went.", "The whole family went.", "'Full family' is a direct translation."],
          ["I like very much the food.", "I really like the food.", "Adverbs do not sit before the object."],
        ],
        "Every entry also lives in the searchable mistake library, with a Bangla note.",
      ),
      badBetter(
        "One habit to break this week",
        [
          fix(
            "Every answer starts with 'Actually…' and contains a second 'Actually' in the middle.",
            "Vary your openings: 'To be honest…', 'I'd say…', 'In my case…' — or just answer directly.",
            "A repeated opening is one of the clearest signs of a rehearsed answer, and it spends time you could use on content.",
          ),
          fix(
            "Ending every answer with 'So, it is very good.'",
            "End with the reason: '…which is why I still go there every week.'",
            "A concrete close is development; a generic close merely repeats your first sentence.",
          ),
        ],
      ),
      callout(
        "tip",
        "Fix one thing at a time",
        "Choose three mistakes from this page that you actually make. Drill those for a week. A long list of errors you never practise changes nothing.",
      ),
    ],
  },
  {
    slug: "final-week-revision-plan",
    title: "Final-week revision plan",
    banglaTitle: "শেষ সপ্তাহের রিভিশন প্ল্যান",
    kind: "plan",
    minutes: 8,
    summary:
      "The last seven days before your test: what to revise, what to stop doing, and how to arrive calm.",
    blocks: [
      bangla(
        "শেষ সপ্তাহে কী করবেন",
        [
          "শেষ সপ্তাহে নতুন কিছু শেখার চেষ্টা করবেন না। যা শিখেছেন তা যেন মুখে আসে, সেটাই এখন লক্ষ্য।",
          "প্রতিদিন একবার মক টেস্টের একটি অংশ দিন, এবং প্রতিদিন অন্তত ২০ মিনিট জোরে বলুন।",
          "পরীক্ষার আগের দিন বেশি প্র্যাকটিস করবেন না। গলা বিশ্রাম দিন, তালিকা দেখে ঘুমান।",
        ],
        "Revise what you already control. Do not add new vocabulary in the final week.",
      ),
      steps("Day by day", [
        {
          title: "Day 7 — Part 1 fast pass",
          detail:
            "Twenty Part 1 questions, 30 seconds each, timed. Goal: no answer under 20 seconds and no two answers with the same opening.",
        },
        {
          title: "Day 6 — Part 2 story engine",
          detail:
            "Three cue cards, full two minutes each. Write only the eight keywords before each one. Listen back once.",
        },
        {
          title: "Day 5 — Part 3 structures",
          detail:
            "Six question types, one answer each, using a different architecture for every answer.",
        },
        {
          title: "Day 4 — Full mock test",
          detail:
            "Complete Part 1 → 2 → 3 without stopping, then evaluate. Note the three biggest problems only.",
        },
        {
          title: "Day 3 — Fix the three problems",
          detail:
            "Search each problem in the mistake library, read the linked lesson, then re-record the same answers.",
        },
        {
          title: "Day 2 — Second full mock test",
          detail: "Repeat Day 4 with a different seed. Compare lengths and hesitation, not scores.",
        },
        {
          title: "Day 1 — Light revision, early night",
          detail:
            "Fifteen minutes: checklist, your own mistake list, and the exam-day routine. Then stop.",
        },
      ]),
      checklist("The night before", [
        "Confirm the test time, location or platform, and what ID you need",
        "Charge your headphones if the test is online",
        "Say five answers aloud, then stop — no late-night cramming",
        "Sleep. Fatigue costs fluency more than any missing word list",
      ]),
      checklist("In the exam room", [
        "Speak slightly slower than you feel like speaking",
        "If you do not understand, ask once: 'Sorry, could you repeat that?'",
        "Give a reason with every answer, even short ones",
        "If you go blank, use the note sheet order: who, where, when, what, feeling, result",
        "Finish sentences; do not restart them",
      ]),
      callout(
        "key",
        "Confidence is a technique",
        "Nerves are not the problem — unplanned nerves are. Having one pattern ready for every question type is what keeps you calm, and that is what the last four weeks built.",
      ),
    ],
  },
];