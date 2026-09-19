import type { Lesson } from "../schema";
import {
  badBetter,
  bangla,
  callout,
  checklist,
  examples,
  fix,
  patterns,
  phraseBank,
  prose,
  quiz,
  table,
} from "../builders";

/**
 * Vocabulary is taught as chunks you can say, never as lists of rare words.
 * The Band 6.0–6.5 ceiling is visible in every example: natural, useful,
 * speakable English.
 */
export const vocabularyLessons: Lesson[] = [
  {
    slug: "how-to-learn-vocabulary",
    track: "vocabulary",
    order: 1,
    title: "How to learn vocabulary you can actually say",
    banglaTitle: "যে শব্দগুলো মুখে বলা যায়",
    summary:
      "Learning in chunks, learning spoken forms, and the three-word rule that beats memorising word lists.",
    level: 2,
    minutes: 8,
    goals: [
      "Learn vocabulary in collocations, not single words",
      "Choose words you can pronounce under pressure",
      "Build a personal word bank from your own answers",
    ],
    examUse: "Lexical resource is scored on natural, flexible use — not on the number of rare words you know.",
    tags: ["vocabulary", "method", "collocations"],
    blocks: [
      bangla(
        "শব্দ মুখস্থ নয়, ব্যবহার শেখা",
        [
          "শব্দ আলাদা করে মুখস্থ করলে বলার সময় বেরোয় না। মস্তিষ্ক বাক্যের সাথে রাখে, তাই 'memorable' নয় — 'a memorable experience' মুখস্থ করুন।",
          "যে শব্দ আপনি নিশ্চিতভাবে উচ্চারণ করতে পারেন না, সেটি ব্যবহার করবেন না। কঠিন শব্দের চেয়ে সহজ কিন্তু সঠিক শব্দ ভালো নম্বর পায়।",
          "নিজের উত্তর থেকে শব্দ সংগ্রহ করুন — নিজের জীবনের বাক্যে শব্দ বসালে সেটি সহজে মনে থাকে।",
        ],
        "Learn chunks, not words. Use only what you can pronounce confidently.",
      ),
      table(
        "Word lists vs chunks",
        ["Word-list approach", "Chunk approach", "Why better"],
        [
          ["improve", "improve my speaking", "Tells you which object follows"],
          ["heavy", "heavy traffic", "A collocation you can use in a Part 3 answer"],
          ["take", "take an exam, take part in", "Two different ideas, learned correctly"],
          ["suggest", "suggest doing something", "Learns the grammar at the same time"],
        ],
      ),
      examples("Chunks doing the work in answers", [
        { text: "The traffic is heavy in the morning, so I usually leave early.", note: "heavy traffic — one chunk, natural and easy." },
        { text: "It's within walking distance, which is why I never take a rickshaw.", note: "within walking distance." },
        { text: "I've got into the habit of reading before bed.", note: "get into the habit of + -ing." },
        { text: "It's a bit out of the way, but worth the trip.", note: "Two natural chunks in one sentence." },
      ]),
      checklist("The daily ten-minute routine", [
        "Collect three chunks a day — from a lesson, an article or a video",
        "Say each one aloud five times (pronunciation comes from speaking, not reading)",
        "Build one sentence about your own life with each chunk",
        "Use all three in a practice answer the next day",
      ]),
      badBetter("What not to do", [
        fix(
          "Memorising 'Band 9 word lists' the week before the test.",
          "Learning fifteen chunks a week that you can say without hesitating.",
          "You are assessed on natural use under pressure. A half-remembered rare word costs more than it earns.",
        ),
        fix(
          "Writing words with Bangla meanings only.",
          "Writing the word, one collocation and one sentence from your own life.",
          "Meaning-only lists produce recognition; collocation lists produce speech.",
        ),
        fix(
          "Using the same adjective for everything: nice, good, beautiful.",
          "Three precise alternatives: pleasant, well-organised, welcoming.",
          "Repetition is what limits lexical resource at Band 6 — replacements are the fastest fix.",
        ),
      ]),
      quiz("Which is the better learning item?", [
        {
          question: "Which pair will help you most in the test?",
          options: [
            "'advantage' + 'সুবিধা'",
            "'take advantage of' + 'take advantage of the free classes'",
            "'advantageous' + 'লাভজনক'",
          ],
          answer: 1,
          explain: "Chunks come with grammar and register built in, and you can drop them straight into an answer.",
        },
      ]),
      callout(
        "tip",
        "The three-word rule",
        "If you cannot use a new word inside a three-word phrase, you do not know it well enough to use it under exam pressure. Learn it in a phrase or leave it out.",
      ),
    ],
    practice: [
      "Pick five chunks from this track and say one sentence about your own life with each.",
      "Record a Part 1 answer and count how many words you repeated; choose replacements for the top three.",
    ],
  },
  {
    slug: "upgrading-simple-words",
    track: "vocabulary",
    order: 2,
    title: "Upgrading simple words — without becoming unnatural",
    banglaTitle: "সহজ শব্দের স্বাভাবিক উন্নতি",
    summary:
      "good, nice, big, happy and very — the five words that appear most in Band 6 answers, and the natural replacements that fit speaking.",
    level: 2,
    minutes: 9,
    goals: [
      "Replace five overused words with precise, pronounceable alternatives",
      "Understand register: formal vs spoken choices",
      "Avoid the trap of replacing one vague word with another",
    ],
    examUse: "Repetition of 'good / nice / very' is the most common lexical limitation at Band 6.",
    tags: ["vocabulary", "word choice", "band 6"],
    blocks: [
      bangla(
        "কেন এই পাঁচ শব্দ",
        [
          "'good', 'nice', 'big', 'happy' আর 'very' — এই পাঁচটি শব্দ প্রায় প্রতিটি ৬.০ উত্তরে বারবার আসে। এগুলো ভুল নয়, কিন্তু একই শব্দ চারবার বললে vocabulary সীমিত মনে হয়।",
          "প্রতিস্থাপন শব্দ অবশ্যই স্বাভাবিক হতে হবে — 'magnificent' ভারী শোনায়, কিন্তু 'really useful' স্বাভাবিক।",
          "নিয়ম: নতুন শব্দটি এমন হতে হবে যা আপনি দ্রুত বলতে পারবেন এবং যেটি ওই বিষয়ের সাথে স্বাভাবিকভাবে যায়।",
        ],
        "Replace with words you can pronounce easily and that fit the noun naturally.",
      ),
      table(
        "Upgrades that actually sound natural",
        ["Overused", "Natural upgrades", "Example"],
        [
          ["good", "useful, well-organised, reliable, effective", "It's a useful app, mainly because it works offline."],
          ["nice", "pleasant, welcoming, well-kept", "The neighbours are welcoming, which made moving easier."],
          ["big", "large, spacious, major, significant", "It's a major road, so it's busy most of the day."],
          ["happy", "pleased, relieved, delighted, content", "I was relieved more than happy, honestly."],
          ["very + adjective", "really, particularly, especially", "It was particularly useful before my exams."],
        ],
      ),
      examples("Upgraded answers in context", [
        { text: "The market is useful for daily shopping, though it gets crowded after five.", note: "useful instead of good." },
        { text: "My neighbours are welcoming — they brought food when we moved in.", note: "welcoming plus a specific detail." },
        { text: "It was a significant change for my family, mainly financially.", note: "significant, with a specific dimension." },
        { text: "I felt relieved when the results came out.", note: "precise feeling instead of 'happy'." },
      ]),
      badBetter("Upgrade vs over-upgrade", [
        fix(
          "It was a magnificent, splendid, exceptional experience.",
          "It was a really memorable day — mainly because everyone was there.",
          "Stacked adjectives replace meaning. One precise word plus a reason beats three heavy ones.",
        ),
        fix(
          "The food was good, the place was good, the people were good.",
          "The food was excellent, the place was quiet, and the people were friendly.",
          "Same structure, three precise adjectives — this alone raises lexical resource noticeably.",
        ),
        fix("I am delightful about the result.", "I'm delighted with the result.", "Collocation matters as much as the word: 'delighted with'."),
      ]),
      patterns("Upgrade patterns", [
        { label: "Useful", template: "It's useful for ___ , especially when ___ .", example: "It's useful for revision, especially when I'm short of time." },
        { label: "Significant", template: "It made a significant difference to ___ .", example: "It made a significant difference to how I study." },
        { label: "Relieved", template: "I felt relieved rather than ___ .", example: "I felt relieved rather than excited, honestly." },
      ]),
      callout(
        "tip",
        "Three words, three replacements",
        "Choose the three words you overuse most, learn two replacements for each, and use them deliberately for a week. That is a realistic vocabulary programme.",
      ),
    ],
    practice: [
      "Record a Part 1 answer, count the number of 'good / nice / very', then re-record with replacements.",
      "Describe your home town using five upgraded adjectives without repeating any.",
    ],
  },
  {
    slug: "collocations-and-chunks",
    track: "vocabulary",
    order: 3,
    title: "Collocations and chunks — sounding natural in three words",
    banglaTitle: "কোলোকেশন ও চাঙ্ক",
    summary:
      "Why 'heavy traffic' sounds right and 'strong traffic' does not, with the collocation groups that cover most speaking topics.",
    level: 3,
    minutes: 9,
    goals: [
      "Recognise and use the most common collocation patterns",
      "Replace single words with ready-made chunks in answers",
      "Notice collocation errors in your own speaking",
    ],
    examUse: "Natural collocations are one of the clearest markers of Band 6.5 lexical resource.",
    tags: ["vocabulary", "collocations", "natural English"],
    blocks: [
      bangla(
        "কোলোকেশন কী",
        [
          "কিছু শব্দ জোড়া লাগানো স্বাভাবিক, কিছু নয়। যেমন traffic-এর সাথে heavy বসে, strong নয়; 'make a decision' হয়, 'do a decision' হয় না।",
          "এই জোড়াগুলো নিয়ম দিয়ে শেখা যায় না — চাঙ্ক হিসেবে মুখস্থ করতে হয়, আর ব্যবহার করতে হয়।",
          "সুবিধা: চাঙ্ক ব্যবহার করলে বাক্য দ্রুত তৈরি হয় এবং ভুলও কম হয়, কারণ জোড়াটা আগেই ঠিক আছে।",
        ],
        "Learn word partners, not single words: heavy traffic, make a decision, take part in.",
      ),
      phraseBank("Chunks by function", [
        {
          label: "Describing places",
          note: "Use these in Part 1 home questions and Part 2 place answers.",
          items: ["a busy area", "within walking distance", "gets crowded in the evening", "a bit out of the way", "plenty of green space"],
        },
        {
          label: "Describing people",
          note: "Personality words need evidence; follow each with a short example.",
          items: ["down to earth", "a good sense of humour", "gets on well with everyone", "hard-working but relaxed", "someone you can rely on"],
        },
        {
          label: "Talking about habits",
          items: ["get into the habit of", "make time for", "keep up with", "fall out of the habit", "on a regular basis"],
        },
        {
          label: "Discussing problems and change",
          note: "Part 3 workhorses.",
          items: ["a growing problem", "take steps to reduce", "make a real difference", "put pressure on", "a major shift in attitudes"],
        },
      ]),
      examples("Chunks inside answers", [
        { text: "The area is quiet, and there's plenty of green space, which I appreciate.", note: "Two chunks in one sentence." },
        { text: "I've got into the habit of walking after dinner.", note: "get into the habit of + -ing." },
        { text: "Traffic is a growing problem, and it puts pressure on everything else.", note: "Two Part 3 chunks." },
        { text: "He's very down to earth, despite doing quite well for himself.", note: "Person chunk with contrast." },
      ]),
      badBetter("Collocations learners get wrong", [
        fix("strong traffic", "heavy traffic", "Traffic is 'heavy', 'light' or 'bad' — not strong."),
        fix("do a decision", "make a decision", "'Make' goes with decision, mistake, progress and effort; 'do' goes with homework, research and exercise."),
        fix("give an exam", "take an exam", "In English you take or sit an exam, and pass or fail it. 'Give' is a direct translation."),
      ]),
      table(
        "make vs do",
        ["make", "do"],
        [
          ["make a decision, make progress, make a mistake, make an effort", "do homework, do research, do exercise, do the shopping"],
          ["make money, make a difference", "do a favour, do business"],
        ],
      ),
      callout(
        "tip",
        "One chunk per answer, deliberately",
        "Pick a chunk before you start speaking and find a natural place for it. Using chunks on purpose is how they become automatic.",
      ),
    ],
    practice: [
      "Take five chunks from the phrase banks above and say a sentence in which each sounds natural.",
      "Describe a problem in your city using three collocations from this lesson.",
    ],
  },
];
