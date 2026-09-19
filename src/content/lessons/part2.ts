import type { Lesson } from "../schema";
import {
  badBetter,
  bangla,
  callout,
  checklist,
  cueCard,
  examples,
  fix,
  flow,
  noteGrid,
  patterns,
  prose,
  quiz,
  steps,
  table,
} from "../builders";

/**
 * Part 2 is a long turn, not a long answer. These lessons teach the story
 * engine: a fixed seven-step shape that adapts to any cue card, so a learner
 * never faces two minutes of silence with nothing planned.
 */
export const part2Lessons: Lesson[] = [
  {
    slug: "how-part-2-works",
    track: "part2",
    order: 1,
    title: "How Part 2 works — the long turn",
    banglaTitle: "Part 2 কীভাবে কাজ করে",
    summary:
      "One minute to prepare, up to two minutes to speak, one cue card. Why learners run dry, and the four things the examiner is listening for.",
    level: 1,
    minutes: 9,
    goals: [
      "Understand the cue card format and the preparation minute",
      "Name the four things an examiner listens for in a long turn",
      "Recognise why most learners stop after forty seconds",
    ],
    examUse: "Part 2 is the longest continuous speech in the test, and it carries the most obvious risk of silence.",
    tags: ["part 2", "cue card", "long turn"],
    blocks: [
      prose("What happens, minute by minute", [
        "The examiner hands you a cue card with a topic and four bullet points, gives you a pencil and paper, and starts a one-minute timer. You can make notes but you cannot ask the examiner what to say. After the minute, the examiner asks you to begin and lets you speak for up to two minutes. If you stop early, they may ask one short follow-up question, but that is not a rescue — the long turn is what is assessed.",
        "The cue card always has the same skeleton: a thing to describe, a when or where, a who, and an explanation of why it matters to you. That structure is predictable, which means it can be prepared in advance — not with memorised content, but with a story shape.",
      ]),
      bangla(
        "কার্ডের গঠন বোঝা জরুরি",
        [
          "প্রতিটি cue card-এ চারটি অংশ থাকে: কী (Describe a…), কখন/কোথায়, কার সঙ্গে, এবং কেন এটি আপনার কাছে গুরুত্বপূর্ণ।",
          "এক মিনিটে বাক্য নয়, শুধু শব্দ লিখুন — WHO, WHERE, WHEN, WHAT, WHY, FEELING, DETAIL। এতে দুই মিনিট বক্তৃতার রাস্তা তৈরি হয়।",
          "বেশিরভাগ শিক্ষার্থী ৪০ সেকেন্ডেই থেমে যান, কারণ তারা কার্ডের চারটি প্রশ্নের উত্তর দিয়ে ফেলেন এবং তারপর কী বলবেন জানেন না। সমাধান: আগেই গল্পের সাত ধাপ মুখস্থ করা — শব্দ নয়, কাঠামো।",
        ],
        "কার্ড = চারটি প্রশ্ন। দুই মিনিট = সাত ধাপের গল্প।",
      ),
      flow(
        ["Cue card", "1 minute of keywords", "Speak up to 2 minutes", "Optional short follow-up"],
        {
          title: "The Part 2 sequence",
          note: "You control steps two and three. Nothing else in the test gives you this much control over your own performance.",
        },
      ),
      table(
        "What examiners listen for in a long turn",
        ["Feature", "What it means", "How learners lose it"],
        [
          ["Sustaining the turn", "Speaking without long silences", "Finishing the four bullets in forty seconds and stopping"],
          ["Organisation", "A story with a beginning, middle and end", "Jumping between the past and present with no order"],
          ["Detail", "Specific names, places, times, feelings", "Generalisations: 'it was very nice and enjoyable'"],
          ["Language range", "Varied sentence types and vocabulary", "The same five adjectives repeated for two minutes"],
        ],
      ),
      examples("Why learners run dry — real examples", [
        {
          text: "“I want to talk about my friend. He is a good person. He is my best friend. He is very nice. I like him very much.”",
          note: "Forty seconds of adjectives with no event. There is nothing to extend because nothing happened.",
        },
        {
          text: "“I want to talk about my cousin Rahat. We grew up in the same building, and he taught me to ride a bicycle when I was about seven — I fell off four times, and he kept telling me it was fine.”",
          note: "One concrete event creates three more sentences automatically: what happened, what he said, how you felt.",
        },
      ]),
      steps("The four things to decide in your preparation minute", [
        { title: "1. The person, place or thing", detail: "Choose something you can talk about for two minutes, not something impressive." },
        { title: "2. One main event", detail: "A single moment or day — not a general description of years." },
        { title: "3. How you felt", detail: "Nervous, relieved, proud, surprised. Feelings are easy accurate sentences." },
        { title: "4. Why it mattered", detail: "A short closing thought that answers the last bullet and gives you a clean finish." },
      ]),
      quiz("Part 2 fundamentals", [
        {
          question: "You finish speaking after 50 seconds. What should you do?",
          options: ["Stop and wait", "Repeat your main points", "Use your pattern to continue with the event and the feeling"],
          answer: 2,
          explain:
            "The mistake happened in the preparation minute: no story was planned. Repeating points adds repetition, not length.",
        },
        {
          question: "Can you write full sentences in the preparation minute?",
          options: ["Yes, that is the best use of the minute", "No — keywords only", "Only in English, not Bangla"],
          answer: 1,
          explain:
            "You cannot read aloud convincingly. Keywords give structure; sentences waste the minute and tempt you to memorise.",
        },
      ]),
      callout(
        "tip",
        "Two minutes is longer than you think",
        "Do this once: set a timer and talk for two minutes about a familiar object in the room. You will run out at around ninety seconds. That gap is exactly what the story engine fills.",
      ),
    ],
    practice: [
      "Describe a common object in the room for two minutes without stopping, and time yourself.",
      "Take any cue card, decide the four things above in one minute, and speak for two minutes.",
    ],
  },

  {
    slug: "one-minute-preparation",
    track: "part2",
    order: 2,
    title: "The one-minute preparation minute",
    banglaTitle: "এক মিনিটের প্রস্তুতি",
    summary:
      "Sixty seconds decides how the next two minutes go. A fixed routine: choose, order, then note keywords — never sentences.",
    level: 2,
    minutes: 10,
    goals: [
      "Run a fixed sixty-second preparation routine",
      "Write notes that are usable while speaking",
      "Avoid the two traps: writing sentences, and choosing an unstoryable topic",
    ],
    examUse: "Learners who prepare badly lose the first thirty seconds of speaking to hesitation.",
    tags: ["part 2", "preparation", "notes"],
    blocks: [
      bangla(
        "৬০ সেকেন্ডের রুটিন",
        [
          "প্রথম ১০ সেকেন্ড: কার্ড পড়ুন এবং বোঝার জন্য একবার নিজেই প্রশ্ন করুন — 'Describe a…' মানে কী ধরনের গল্প লাগবে।",
          "পরের ২০ সেকেন্ড: একটি ঘটনা বেছে নিন (বছর বা মাস নয়, একটি নির্দিষ্ট দিন বা মুহূর্ত)।",
          "শেষ ৩০ সেকেন্ড: সাতটি কীওয়ার্ড লিখুন — WHO, WHERE, WHEN, WHAT, WHY, FEELING, DETAIL। পুরো বাক্য লিখবেন না, কারণ সময় থাকবে না এবং মুখস্থ শোনাবে।",
        ],
        "বেছে নিন → সাজান → শুধু কীওয়ার্ড লিখুন।",
      ),
      table(
        "Good notes vs bad notes",
        ["Bad note", "Why it fails", "Good note"],
        [
          ["“My friend is very good and helpful and I like him”", "A sentence you will try to read or memorise", "“Rahat — cousin — bicycle”"],
          ["“In 2015 I went to Dhaka…”", "Wastes time; you will forget the rest", "“when: age 7 — 2011”"],
          ["A list of ten adjectives", "Adjectives run out and repeat", "“event: fell 4 times — he said 'again'”"],
          ["Nothing at all", "No structure, so the first thirty seconds are lost", "Seven keywords, one per line"],
        ],
      ),
      steps("The routine, step by step", [
        {
          title: "0:00–0:10 — read and classify",
          detail:
            "Identify what kind of story the card wants: a person, a place, an event, an object, an experience, an activity or a skill.",
        },
        {
          title: "0:10–0:30 — choose your story",
          detail:
            "Pick something that happened, not something you feel. A specific day gives you sentences; a general opinion gives you adjectives.",
        },
        {
          title: "0:30–0:50 — write the seven keywords",
          detail:
            "WHO / WHERE / WHEN / WHAT / WHY / FEELING / DETAIL — one or two words each, in that vertical order.",
        },
        {
          title: "0:50–0:60 — mark the feeling",
          detail:
            "Add one word for the emotion and one for the result. These become your final sentences and give you a clean ending.",
        },
      ]),
      noteGrid("What each keyword becomes when you speak", [
        { label: "WHO", detail: "People and relationships: 'my cousin', 'a teacher I had in class nine'." },
        { label: "WHERE", detail: "Place and atmosphere: 'in our old building in Mirpur', 'a market that's always noisy'." },
        { label: "WHEN", detail: "A time, ideally with a reason: 'when I was about seven', 'the year before my exams'." },
        { label: "WHAT", detail: "The event itself, in order: 'first… then… in the end…'." },
        { label: "WHY", detail: "Why it mattered, or why you chose it." },
        { label: "FEELING", detail: "Nervous, relieved, embarrassed, proud — accurate, easy sentences." },
        { label: "DETAIL", detail: "One small specific thing that makes the story yours: a sound, a number, a phrase someone said." },
      ]),
      examples("A real preparation minute, reconstructed", [
        {
          text: "Card: “Describe a time you helped someone.” Notes: “cousin — exam prep — my room — last winter — maths — 3 weeks — wanted to give up — I felt useful — he passed”.",
          note: "Nine keywords. Every one becomes at least two sentences, which is how two minutes gets filled.",
        },
        {
          text: "Card: “Describe a place you like to visit.” Notes: “Shahid Minar — morning — Fridays — walk there — trees, quiet — calm — go when stressed”.",
          note: "The 'go when stressed' note guarantees a reason-and-feeling closing.",
        },
      ]),
      badBetter("Preparation mistakes", [
        fix(
          "Writing complete sentences to read while speaking.",
          "Writing seven keywords and speaking around them.",
          "Examiners can hear reading. Keywords force you to build sentences, which is exactly what is being assessed.",
        ),
        fix(
          "Choosing the most impressive topic you can think of.",
          "Choosing something you can describe in detail, however ordinary.",
          "An ordinary topic with specifics scores better than an impressive topic with generalities.",
        ),
        fix(
          "Ignoring the last bullet (“explain why…”) and running out of things to say.",
          "Planning the last bullet as your closing, with the feeling and the result.",
          "The last bullet is the natural end of the story — planning it gives you a clean finish at two minutes.",
        ),
      ]),
      checklist("Your preparation drill", [
        "Practise the routine three times with a real one-minute timer",
        "Use only keyword notes, never sentences",
        "Check that your notes include a feeling and a result",
        "Speak for a full two minutes after each preparation",
      ]),
      callout(
        "tip",
        "Keep the pen moving",
        "The minute passes quickly. Even if you only write four words, write in the fixed order — it keeps you from panicking, and by the end of the minute you will have a plan.",
      ),
    ],
    practice: [
      "Take three cue cards and run the 60-second routine on each, writing only keywords.",
      "Speak for two minutes from one set of notes, then check how many of the seven keywords you actually used.",
    ],
  },

  {
    slug: "part2-idea-generation",
    track: "part2",
    order: 3,
    title: "Story shapes — person, place, event, object, experience",
    banglaTitle: "গল্পের ধরন — ব্যক্তি, স্থান, ঘটনা, বস্তু, অভিজ্ঞতা",
    summary:
      "Every cue card belongs to one of five shapes. Identifying the shape tells you which story to tell before you write a single note.",
    level: 3,
    minutes: 11,
    goals: [
      "Classify any cue card into one of the five story shapes",
      "Choose the details that matter for each shape",
      "Adapt one real story to several different cards",
    ],
    examUse: "Classification removes the panic of the preparation minute: you know what kind of story is needed within ten seconds.",
    tags: ["part 2", "story shapes", "preparation"],
    blocks: [
      prose("Five shapes cover almost every card", [
        "A person card wants a relationship and a moment that shows character. A place card wants a physical description and the atmosphere, plus what you do there. An event card wants a sequence with a cause. An object card wants a description and a story of how it came to matter. An experience card is close to an event, but the emphasis is on what you learned or how you changed.",
        "The reason this matters is that each shape has different natural content. For a person card you need one anecdote; for a place card you need sensory description; for an event card you need a timeline. Choosing the right shape in the first ten seconds of preparation is what makes the remaining fifty seconds useful.",
      ]),
      bangla(
        "কার্ড দেখে ধরন চিনুন",
        [
          "ব্যক্তি: সম্পর্ক + একটি ঘটনা যেখানে তার চরিত্র বোঝা যায়। স্থান: চেহারা ও পরিবেশ + সেখানে আপনি কী করেন। ঘটনা: কারণ ও ধারাবাহিকতা।",
          "বস্তু: কী, কোথা থেকে এলো, কেন 중요। অভিজ্ঞতা: কী শিখলেন, কীভাবে বদলে গেলেন।",
          "একই বাস্তব ঘটনা অনেক কার্ডে খাটে — যেমন একটি শেখার ঘটনা 'a skill', 'a challenge', 'a person who helped you' — তিন ক্ষেত্রেই ব্যবহার করা যায়। তাই এটি আগে থেকে প্রস্তুত রাখা বুদ্ধিমানের কাজ।",
        ],
        "যে কার্ডই আসুক, প্রথমে ধরন চিনুন — তারপর সেই ধরনের গল্প সাজান।",
      ),
      noteGrid("The five shapes and their content", [
        {
          label: "Person",
          value: "who, relationship, character",
          detail: "Need: one moment that shows what they are like. Avoid: a list of adjectives with no event.",
        },
        {
          label: "Place",
          value: "where, description, atmosphere",
          detail: "Need: sensory detail — sound, light, smell — and what you do there. Avoid: 'it is very beautiful'.",
        },
        {
          label: "Event",
          value: "when, sequence, cause",
          detail: "Need: what led up to it and what happened next. Avoid: jumping to the ending.",
        },
        {
          label: "Object",
          value: "what, origin, why it matters",
          detail: "Need: how you got it and what it is used for. Avoid: describing its colour for two minutes.",
        },
        {
          label: "Experience",
          value: "what happened, what changed",
          detail: "Need: the difficulty and how you responded. Avoid: a summary with no scene.",
        },
      ]),
      table(
        "Adapting one real story", 
        ["Card", "How the same story fits"],
        [
          ["Describe a skill you learned", "The bicycle story: the process of learning, the falls, the moment it worked"],
          ["Describe a person who helped you", "The same story, centred on the cousin who taught you and how he encouraged you"],
          ["Describe a difficult thing you did", "The same story, focused on fear, failure and persistence"],
          ["Describe a childhood memory", "The same story told with a wide-lens opening: the street, the summer, the neighbours"],
          ["Describe something you are proud of", "The same story, but the closing emphasis is on the result and what it says about you"],
        ],
      ),
      examples("Shape-appropriate openings", [
        {
          text: "Person: “I'd like to talk about my cousin Rahat, who's four years older than me and the person I probably learned the most from.”",
          note: "Relationship first, then a claim the story will prove.",
        },
        {
          text: "Place: “There's a small tea stall near my old school — it's nothing special to look at, but it's where I spent almost every afternoon for three years.”",
          note: "A physical detail plus a habitual behaviour.",
        },
        {
          text: "Event: “It was the day before my first big exam, and everything went wrong at once.”",
          note: "A time anchor and a problem — the story is now inevitable.",
        },
      ]),
      badBetter("Shape errors", [
        fix(
          "Person card answered with adjectives: “He is kind, helpful, friendly, honest and very good.”",
          "Person card answered with a moment: “Once, when I'd lost my exam registration slip, he spent the whole day helping me reapply.”",
          "Character is shown through action. One moment does more than ten adjectives.",
        ),
        fix(
          "Place card answered with geography: “It is in the north, near the river, with trees and shops.”",
          "Place card answered with atmosphere: “In the morning it smells of tea and frying onions, and the noise of traffic fades as you go in.”",
          "Sensory description is what makes a place card feel real rather than listed.",
        ),
        fix(
          "Event card answered as a summary: “It was a very good day and I enjoyed it a lot.”",
          "Event card answered with a timeline: “We set off at six, missed the bus, and by the time we arrived it was already dark.”",
          "Events need sequence. Time markers create sentences automatically.",
        ),
      ]),
      quiz("Which shape is this card?", [
        {
          question: "“Describe something you own that is important to you.”",
          options: ["Place", "Object", "Experience"],
          answer: 1,
          explain: "An object card: describe it, say where it came from, and explain what it means to you.",
        },
        {
          question: "“Describe a time when you were surprised.”",
          options: ["Person", "Event/Experience", "Object"],
          answer: 1,
          explain: "It is an event with an emotional centre — the surprise is the point of the story.",
        },
      ]),
      callout(
        "tip",
        "Two stories are enough to start",
        "You do not need twenty stories for twenty cards. Prepare two detailed real stories well — one about a person who helped you, one about a challenge — and practise reshaping them. Most cards can be answered with one of them.",
      ),
    ],
    practice: [
      "Classify the nineteen Part 2 categories on this site by shape, and check your answers against the category pages.",
      "Take one real memory and practise opening it in the person, place and event shapes.",
    ],
  },

  {
    slug: "universal-story-engine",
    track: "part2",
    order: 4,
    title: "The story engine — SETTING → BACKGROUND → MAIN EVENT → DETAILS → FEELING → RESULT → WHY IT MATTERS",
    banglaTitle: "গল্পের ইঞ্জিন — সাত ধাপ",
    summary:
      "One seven-step engine that produces two minutes of structured speech from any cue card, and never runs out.",
    level: 3,
    minutes: 12,
    goals: [
      "Recall the seven steps in order without notes",
      "Convert a cue card into two minutes using the engine",
      "Keep the engine flexible rather than reciting it like a script",
    ],
    examUse: "This is the core Part 2 structure. It replaces the silence, the repetition and the early finish.",
    tags: ["part 2", "story engine", "structure"],
    blocks: [
      flow(
        [
          "SETTING — where and when",
          "BACKGROUND — who and what led up to it",
          "MAIN EVENT — what happened",
          "DETAILS — one or two specific things",
          "FEELING — how you felt",
          "RESULT — how it ended",
          "WHY IT MATTERS — what it means now",
        ],
        {
          title: "The seven-step story engine",
          note: "Each step is worth roughly 15–25 seconds of speech. Seven steps is more than two minutes of content — which is why you never run dry.",
        },
      ),
      bangla(
        "সাত ধাপ কীভাবে বলা যায়",
        [
          "SETTING: সময় ও স্থান দিয়ে শুরু করুন — 'It was the winter before my exams, and I was still living at home.'",
          "BACKGROUND: কে ছিলেন, কী পরিস্থিতি ছিল। MAIN EVENT: ঠিক কী ঘটল। DETAILS: এক-দুটি ছোট নির্দিষ্ট তথ্য।",
          "FEELING: কী অনুভব করলেন। RESULT: শেষে কী হলো। WHY IT MATTERS: আজ কেন এর অর্থ আছে।",
          "গুরুত্বপূর্ণ: ধাপগুলো শব্দে শব্দে মুখস্থ করবেন না — কেবল ক্রমটা মনে রাখুন; কীওয়ার্ড আপনার নিজের হবে।",
        ],
        "সাত ধাপ = দুই মিনিট। ক্রম মনে রাখুন, বাক্য নয়।",
      ),
      noteGrid("What each step sounds like", [
        { label: "SETTING", detail: "“It was the winter before my HSC exams, and I was sharing a room with my cousin.”" },
        { label: "BACKGROUND", detail: "“He'd already done the same exams two years earlier, so he knew exactly how I was feeling.”" },
        { label: "MAIN EVENT", detail: "“About three weeks before the exam, I completely lost my registration slip.”" },
        { label: "DETAILS", detail: "“It was in a plastic folder I'd used for everything — I checked it four times in one hour.”" },
        { label: "FEELING", detail: "“I panicked, honestly. I couldn't think about anything else for two days.”" },
        { label: "RESULT", detail: "“He came with me to the education board office and we got a duplicate issued.”" },
        { label: "WHY IT MATTERS", detail: "“It's the moment I understood that asking for help isn't weakness — and we're much closer now because of it.”" },
      ]),
      table(
        "Adapting the engine to each card type",
        ["Card type", "Where to put the emphasis"],
        [
          ["Person", "BACKGROUND and WHY IT MATTERS carry the weight; MAIN EVENT proves the character"],
          ["Place", "SETTING and DETAILS do the work; FEELING explains why you keep going back"],
          ["Event", "MAIN EVENT and RESULT are the spine; keep DETAILS vivid and short"],
          ["Object", "SETTING and BACKGROUND explain where it came from; RESULT and WHY IT MATTERS explain its value"],
          ["Experience", "FEELING and WHY IT MATTERS are the point; the event is the evidence"],
        ],
      ),
      examples("A full answer built from the engine", [
        {
          text: "SETTING: “It was the winter before my HSC exams, and I was still living at home with my parents.”",
          note: "Time + place + situation in one sentence.",
        },
        {
          text: "BACKGROUND: “My cousin Rahat had moved in with us that year because his college was closer to our house.”",
          note: "Who and why they were there.",
        },
        {
          text: "MAIN EVENT: “Three weeks before the first paper, I lost my registration slip — the one document I absolutely could not replace quickly.”",
          note: "The problem that drives the story.",
        },
        {
          text: "DETAILS: “I'd kept it in the same plastic folder as everything else, and I checked that folder four times in one hour.”",
          note: "One object and one repeated action — specific but simple to say.",
        },
        {
          text: "FEELING: “I panicked, honestly. I didn't tell my parents for two days because I was embarrassed.”",
          note: "Naming a feeling that is not flattering makes the answer sound real.",
        },
        {
          text: "RESULT: “Rahat took me to the board office on a Friday, and we got a duplicate issued in about four hours.”",
          note: "Concrete resolution with a time frame.",
        },
        {
          text: "WHY IT MATTERS: “Looking back, that's when I learned to ask for help early instead of hiding a problem — and it's why he's the person I go to first now.”",
          note: "A closing thought that answers the last bullet and completes the arc.",
        },
      ]),
      badBetter("Engine failures and repairs", [
        fix(
          "Stopping after the main event.",
          "Continuing through feeling, result and why it matters.",
          "Learners often tell the event and then stop, losing four of the seven steps — and about sixty seconds of speaking time.",
        ),
        fix(
          "Reciting the steps in an obviously mechanical way.",
          "Using the sequence as a plan while speaking naturally, with small connectors like 'and then', 'after that', 'so in the end'.",
          "The engine is a route, not a script. Nobody should hear its steps as headings.",
        ),
        fix(
          "Starting with WHY IT MATTERS and then going back.",
          "Starting with SETTING so the story has a place to happen.",
          "Chronological order is the easiest to sustain, and it helps you keep the tense consistent.",
        ),
      ]),
      checklist("Testing the engine", [
        "Say the seven steps from memory, in order, without looking",
        "Build a two-minute answer from a cue card using all seven",
        "Count which step you found hardest and practise that one next",
        "Re-record with a timer and check you did not lose the last two steps",
      ]),
      callout(
        "tip",
        "The last two steps are where marks hide",
        "'Feeling' and 'why it matters' are the two steps learners skip, and they are the two that demonstrate development. If you are ever short of time in your preparation minute, plan those two rather than the details.",
      ),
    ],
    practice: [
      "Write the seven steps from memory, then check against the flow chart above.",
      "Answer three different cue cards using the full engine, each with a two-minute timer.",
    ],
  },

  {
    slug: "keyword-notes",
    track: "part2",
    order: 5,
    title: "Keyword notes — WHO / WHERE / WHEN / WHAT / WHY / FEELING / DETAIL / RESULT",
    banglaTitle: "কীওয়ার্ড নোট",
    summary:
      "The eight-word note system that keeps a two-minute answer on track without turning into a script you read aloud.",
    level: 3,
    minutes: 9,
    goals: [
      "Write usable notes in the preparation minute",
      "Glance at notes without losing fluency",
      "Convert the eight keywords into the seven-step story engine",
    ],
    examUse: "Good notes are the difference between a calm long turn and a lost one.",
    tags: ["part 2", "notes", "preparation"],
    blocks: [
      bangla(
        "আটটি কীওয়ার্ড",
        [
          "WHO — কে/কার সঙ্গে। WHERE — কোথায়। WHEN — কখন। WHAT — কী ঘটল। WHY — কেন এটি বেছে নিলেন।",
          "FEELING — কেমন লাগল। DETAIL — একটি ছোট নির্দিষ্ট তথ্য। RESULT — শেষে কী হলো।",
          "নোটে শুধু শব্দ লিখুন, এক লাইনে একটি। বলার সময় একবার চোখ বুলিয়ে নিলেই যথেষ্ট — ঘন ঘন তাকালে fluency নষ্ট হয়।",
        ],
        "আট শব্দ, আট লাইন — এটাই দুই মিনিটের রাস্তা।",
      ),
      table(
        "The note sheet, filled in",
        ["Keyword", "Note written in 60 seconds", "Becomes when speaking"],
        [
          ["WHO", "Rahat / cousin", "“I'd like to talk about my cousin Rahat, who lived with us that year.”"],
          ["WHERE", "our house / Mirpur", "“We were in our old flat in Mirpur, sharing a room.”"],
          ["WHEN", "winter before HSC", "“It was the winter before my HSC exams.”"],
          ["WHAT", "lost registration slip", "“Three weeks before the exam I lost my registration slip.”"],
          ["WHY", "helped me fix it", "“The reason I remember it is what he did next.”"],
          ["FEELING", "panicked / embarrassed", "“I panicked, and honestly I felt embarrassed.”"],
          ["DETAIL", "plastic folder / board office", "“I kept it in a plastic folder I checked four times in an hour.”"],
          ["RESULT", "duplicate issued / closer now", "“We got a duplicate that Friday, and we've been closer since.”"],
        ],
      ),
      steps("How to use the notes while speaking", [
        { title: "Glance once at the start", detail: "Read the first two lines, then look up and begin. That is enough to launch the story." },
        { title: "Use the notes at transitions", detail: "A single glance between the main event and the feeling keeps you moving without losing eye contact." },
        { title: "Never read a note aloud", detail: "If you catch yourself reading a phrase, paraphrase it immediately in simpler words." },
        { title: "Add a last line", detail: "Write 'result' as your final keyword so your ending is planned rather than improvised." },
      ]),
      examples("Two note sheets, compared", [
        {
          text: "Notes: “My friend is very good and kind and he helped me and I am very happy and it was nice.”",
          note: "Sentence fragments with no structure. Speaking from these produces the same vague content.",
        },
        {
          text: "Notes: “WHO Rahat / WHERE Mirpur / WHEN winter HSC / WHAT lost slip / FEELING panic / DETAIL folder / RESULT duplicate / WHY closer”.",
          note: "Eight keywords. Every one triggers a sentence, and the sequence is already the story.",
        },
      ]),
      badBetter("Note-taking errors", [
        fix(
          "Writing in Bangla and translating while speaking.",
          "Writing keywords in English — even two words — so the sentence starts in English.",
          "Translating mid-answer is the main cause of long pauses and unnatural word order.",
        ),
        fix(
          "Filling the page with adjectives.",
          "Filling it with nouns and verbs: places, times, actions.",
          "Nouns and verbs generate sentences. Adjectives generate repetition.",
        ),
        fix(
          "Not writing the last two keywords because you are out of time.",
          "Always writing FEELING and RESULT, even if the middle is thin.",
          "A planned ending is what prevents the answer from collapsing at ninety seconds.",
        ),
      ]),
      checklist("Note drill", [
        "Use a real one-minute timer for three cue cards",
        "Write exactly eight keywords, no sentences",
        "Tick off each keyword as you use it while speaking",
        "Afterwards, count how many of the eight you actually covered",
      ]),
      callout(
        "tip",
        "The note sheet is a map, not a script",
        "When you speak from keywords, small changes are fine — you might reorder two steps or add a detail. That flexibility is exactly what makes an answer sound natural rather than recited.",
      ),
    ],
    practice: [
      "Complete five note sheets in one minute each, using exactly eight keywords.",
      "Record a two-minute answer from notes and mark which keywords you skipped.",
    ],
  },

  {
    slug: "adapting-the-story-engine",
    track: "part2",
    order: 7,
    title: "Adapting the story engine to any cue card",
    banglaTitle: "যে কার্ডই আসুক — ইঞ্জিন খাটানো",
    summary:
      "Six worked cue cards across the different shapes, showing which steps to expand, which to compress, and how to recover if you know nothing about the topic.",
    level: 4,
    minutes: 12,
    goals: [
      "Adjust emphasis for each of the five story shapes",
      "Compress or expand steps when time is short or long",
      "Recover from an unfamiliar cue card without losing fluency",
    ],
    examUse: "This is the lesson that turns the engine into a skill you can rely on under pressure.",
    tags: ["part 2", "adaptation", "cue cards"],
    blocks: [
      bangla(
        "কার্ড অনুযায়ী ধাপ বদলান",
        [
          "ব্যক্তি কার্ডে BACKGROUND আর WHY IT MATTERS বড় করুন — ঘটনা ছোট হলেও চলে। স্থান কার্ডে SETTING ও DETAILS-এ ইন্দ্রিয়ের বর্ণনা দিন।",
          "ঘটনা কার্ডে MAIN EVENT আর RESULT প্রধান — সময় ধরে ধরে বলুন। বস্তু কার্ডে উৎস আর তার অর্থ বোঝান।",
          "সময় কম থাকলে DETAILS ছোট করুন, কিন্তু FEELING ও WHY IT MATTERS কখনও বাদ দেবেন না।",
        ],
        "একই সাত ধাপ, কার্ড অনুযায়ী জোর বদলায়।",
      ),
      cueCard(
        "Worked card 1 — a person who helped you",
        "Describe a person who has helped you a lot.",
        [
          "who this person is",
          "how you know them",
          "what they did to help you",
          "and explain why you are grateful to them",
        ],
        [
          "WHO: cousin Rahat",
          "WHEN: winter before HSC",
          "WHAT: lost registration slip",
          "DETAIL: plastic folder / board office",
          "FEELING: panic, embarrassment",
          "RESULT: duplicate issued",
          "WHY: learned to ask for help",
        ],
        [
          "Setting: “It was the winter before my exams…”",
          "Background: who he is and why he was there",
          "Event: the problem and what he did",
          "Details: two specific things",
          "Feeling: honest emotion",
          "Result: how it ended",
          "Why it matters: what changed afterwards",
        ],
      ),
      table(
        "Six cards, six emphases",
        ["Cue card", "Expand", "Compress"],
        [
          ["A person who helped you", "BACKGROUND, WHY IT MATTERS", "DETAILS — one is enough"],
          ["A place you like to visit", "SETTING, DETAILS (senses)", "RESULT — brief"],
          ["An event you remember well", "MAIN EVENT, RESULT", "BACKGROUND — two sentences"],
          ["An object you value", "BACKGROUND (its origin)", "SETTING — one sentence"],
          ["A difficult experience", "FEELING, WHY IT MATTERS", "DETAILS — choose the one strongest"],
          ["A skill you learned", "MAIN EVENT (the process)", "FEELING — brief, then move on"],
        ],
      ),
      examples("Recovery language for an unfamiliar card", [
        {
          text: "“I don't know much about this, but I'll talk about the closest thing I've experienced —”",
          note: "Honest, quick, and it moves you into the story engine immediately.",
        },
        {
          text: "“I've never actually done this, so I'll describe what I'd do if I did.”",
          note: "Legitimate in Part 2 when the card asks about something you have not done.",
        },
        {
          text: "“There are two things I could talk about — I'll go with the one I remember better.”",
          note: "Buys two seconds and shows you are choosing, not hesitating.",
        },
      ]),
      badBetter("Adapting under pressure", [
        fix(
          "A place card answered with the person story because it is the story you know.",
          "Keep the same events but reframe the emphasis on the place: describe the room, the light, the noise.",
          "Adaptation means changing the lens, not abandoning the story — but the card must be answered.",
        ),
        fix(
          "Running out of content at ninety seconds and apologising.",
          "Adding a comparison or a change over time: “It's different now, because…”",
          "One comparison produces twenty more seconds honestly, without repetition.",
        ),
        fix(
          "Saying “I don't know” when the card is unfamiliar.",
          "Choosing the nearest real experience and naming that choice out loud.",
          "The examiner assesses your English, not whether you have had the experience.",
        ),
      ]),
      callout(
        "tip",
        "Prepare the shape, not the answer",
        "Before your test, write the seven steps on a card and practise switching emphasis between a person, a place and an event story. That single exercise covers most of the cue cards you could be given.",
      ),
    ],
    practice: [
      "Run six cue cards — one of each shape — using the engine with the emphasis shown in the table.",
      "Practise the recovery phrases aloud until they feel natural, then use one on an unfamiliar card.",
    ],
  },

  {
    slug: "part2-sentence-engineering",
    track: "part2",
    order: 6,
    title: "Sentence engineering for Part 2 — levels 1 to 4",
    banglaTitle: "Part 2-এর বাক্য প্রকৌশল — স্তর ১ থেকে ৪",
    summary:
      "Four levels of sentence construction, from a basic statement to a sentence that carries detail, contrast and feeling — built up one step at a time.",
    level: 4,
    minutes: 11,
    goals: [
      "Upgrade a plain statement through four levels of sentence construction",
      "Carry detail, contrast and feeling inside one sentence",
      "Know when to stop upgrading and keep the sentence simple",
    ],
    examUse: "Two minutes is a lot of sentences. Engineering them in levels is how you keep range high without losing accuracy.",
    tags: ["part 2", "sentences", "range", "level 4"],
    blocks: [
      prose("Why sentences, not vocabulary, carry a long turn", [
        "In two minutes you will speak roughly twenty to twenty-five sentences. If most of them are the same shape — subject, verb, object — the examiner hears a limited range even when the vocabulary is good. Upgrading sentences adds range and detail at the same time, and it costs no extra vocabulary.",
        "The four levels below are cumulative. Level 1 is the statement. Level 2 adds a circumstance (when, where, who with). Level 3 adds a relation (because, although, which means). Level 4 adds evaluation — feeling, comparison or hindsight — inside the same sentence. You do not need every sentence at level 4, but a long turn needs a few.",
      ]),
      bangla(
        "চার স্তরে বাক্য তৈরি",
        [
          "স্তর ১: সাধারণ বাক্য — 'We went to Cox's Bazar.' স্তর ২: সময়/স্থান/সঙ্গী যোগ — 'We went to Cox's Bazar with my cousins two winters ago.'",
          "স্তর ৩: কারণ বা বিপরীত যোগ — 'because it was the only time everyone was free', 'although it took eleven hours by bus'।",
          "স্তর ৪: মূল্যায়ন বা অনুভূতি যোগ — 'which turned out to be the best part of the year'। প্রতিটি বাক্যে স্তর ৪ দরকার নেই; দুই মিনিটে কয়েকটি থাকলেই যথেষ্ট।",
        ],
        "সহজ বাক্য থেকে ধীরে ধীরে তথ্য, কারণ ও অনুভূতি যোগ করুন — একবারে জটিল নয়।",
      ),
      table(
        "The four levels, applied to one sentence",
        ["Level", "Sentence", "What was added"],
        [
          ["1 — Statement", "We went to Cox's Bazar.", "The basic fact"],
          ["2 — Circumstance", "We went to Cox's Bazar with my cousins, the winter before my exams.", "Who with, and when"],
          ["3 — Relation", "We went to Cox's Bazar with my cousins the winter before my exams, because it was the only week everyone was free.", "Because + a reason"],
          ["4 — Evaluation", "We went to Cox's Bazar with my cousins the winter before my exams — it was the only week everyone was free — and although we argued constantly, it turned out to be the trip I remember best.", "Hindsight, contrast and feeling"],
        ],
      ),
      steps("Building a level-4 sentence without losing control", [
        { title: "Start with the fact", detail: "Say the simple sentence first, out loud. Never start with the clause." },
        { title: "Add one circumstance", detail: "One only: when, where, or who with. Two circumstances make the sentence hard to finish." },
        { title: "Add one relation", detail: "Because, although, which means — choose one. Never stack two connectors in the same sentence." },
        { title: "Add evaluation only if the sentence is already safe", detail: "A closing comment 'which I still think about' completes level 4." },
      ]),
      examples("Level-4 sentences from real answers", [
        {
          text: "“My uncle taught me to drive on an empty road outside the city, mostly because he thought I'd be safer learning away from traffic.”",
          note: "Circumstance + reason, one connector, fully controlled.",
        },
        {
          text: "“We'd booked the cheapest hotel, which turned out to be a mistake, although in fairness it did have the best view of the sea.”",
          note: "Evaluation + concession in a sentence that still has one main clause.",
        },
        {
          text: "“Even though I'd practised the same speech a dozen times, my voice was shaking when I stood up — and I've never told anyone that until now.”",
          note: "Concession, then a personal admission — the kind of sentence that makes a long turn memorable.",
        },
      ]),
      badBetter("Upgrading too far", [
        fix(
          "“I went to my uncle's house because it was a holiday because everyone was there because my cousin came from abroad.”",
          "“I went to my uncle's house that holiday — everyone was there, including my cousin, who'd just come back from abroad.”",
          "One connector per sentence. Chained 'because' clauses collapse accuracy even when the grammar is technically possible.",
        ),
        fix(
          "“Although it was expensive, but it was worth it, which means I'd do it again, and it was good.”",
          "“Although it was expensive, it was worth it — I'd do it again.”",
          "Never pair although with but, and stop when the sentence has said what it needed to say.",
        ),
        fix(
          "Making every sentence level 4.",
          "Mostly levels 1–2, with three or four level-4 sentences in two minutes.",
          "Range is judged across the turn, not per sentence. Constant complexity is where accuracy falls apart.",
        ),
      ]),
      checklist("Sentence audit after a Part 2 recording", [
        "How many sentences were level 1 only?",
        "Did I use at least three level-3 sentences with because, although or which?",
        "Did any sentence become so long that I lost the ending?",
        "Did I end the story with a level-4 evaluation sentence?",
      ]),
      callout(
        "tip",
        "Say the simple version first",
        "If a sentence is going to be complex, start it with the plain fact. 'We travelled by bus — and although it took eleven hours, it was the only option.' Starting with the clause is where most mid-sentence collapses begin.",
      ),
    ],
    practice: [
      "Take five simple sentences about your week and upgrade each to level 3, then two to level 4.",
      "Record a two-minute Part 2 answer and mark every sentence level. Aim for a mix, not uniformity.",
    ],
  },

];
