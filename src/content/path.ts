import type { PathStage } from "./schema";

/**
 * The recommended learning sequence — the backbone of the "Start Learning"
 * experience. Stage order matches the curriculum design in docs/curriculum.md.
 *
 * Every `lessonRefs` entry is validated at build time (see
 * scripts/validate-content.mjs), so a renamed lesson can never silently break
 * the path.
 */
export const pathStages: PathStage[] = [
  {
    id: "understand-the-test",
    order: 1,
    title: "Understand the test",
    banglaTitle: "পরীক্ষাটা কী চায়, সেটা বুঝুন",
    purpose:
      "Before learning answers, learn what the examiner is measuring. Most learners lose marks simply because they never knew what Part 1, 2 and 3 are for.",
    outcome: "You can describe all three parts and the four scoring criteria in your own words.",
    lessonRefs: [
      { track: "overview", slug: "how-the-test-works" },
      { track: "overview", slug: "what-examiners-score" },
      { track: "overview", slug: "what-band-6-6-5-means" },
    ],
    cta: { label: "Start with the overview", href: "/learn/overview/how-the-test-works" },
  },
  {
    id: "sentence-building-basics",
    order: 2,
    title: "Sentence building basics",
    banglaTitle: "বাক্য বানানোর ভিত্তি",
    purpose:
      "If you cannot build a sentence, you cannot build an answer. This stage trains idea → simple sentence, without translating from Bangla.",
    outcome: "You can turn any idea into one correct English sentence within a few seconds.",
    lessonRefs: [
      { track: "strategy", slug: "thinking-in-english" },
      { track: "part1", slug: "part1-sentence-building" },
    ],
    cta: { label: "Train the thinking process", href: "/learn/strategy/thinking-in-english" },
  },
  {
    id: "part1-answer-structure",
    order: 3,
    title: "Part 1 answer structure",
    banglaTitle: "পার্ট ১-এর উত্তর গঠন",
    purpose:
      "Learn the answer → reason → detail pattern so you never give a one-line answer again.",
    outcome: "Every Part 1 answer you give has at least two developing sentences.",
    lessonRefs: [
      { track: "part1", slug: "how-part-1-works" },
      { track: "part1", slug: "answering-yes-no-questions" },
      { track: "part1", slug: "answering-wh-questions" },
      { track: "part1", slug: "extending-short-answers" },
    ],
    cta: { label: "Learn the YES/NO structure", href: "/learn/part1/answering-yes-no-questions" },
  },
  {
    id: "part1-topic-practice",
    order: 4,
    title: "Part 1 topic practice",
    banglaTitle: "পার্ট ১ টপিক প্র্যাকটিস",
    purpose:
      "Apply the structure to the 40 topics examiners actually use, with vocabulary, idea seeds and Band 6/6.5 models.",
    outcome: "You can answer any familiar Part 1 topic for 20–30 seconds without freezing.",
    lessonRefs: [],
    cta: { label: "Open Part 1 topics", href: "/topics/part-1" },
  },
  {
    id: "idea-generation",
    order: 5,
    title: "Idea generation",
    banglaTitle: "আইডিয়া বের করা",
    purpose:
      "The number one complaint — 'আমার idea আসছে না' — is a system problem, not a talent problem. Install the universal idea engine.",
    outcome: "You can produce three usable ideas for an unexpected question in ten seconds.",
    lessonRefs: [
      { track: "strategy", slug: "idont-know-what-to-say" },
      { track: "strategy", slug: "handling-unfamiliar-topics" },
    ],
    cta: { label: "Install the idea engine", href: "/learn/strategy/idont-know-what-to-say" },
  },
  {
    id: "part2-structure",
    order: 6,
    title: "Part 2 structure",
    banglaTitle: "পার্ট ২-এর গঠন",
    purpose:
      "Understand the cue card, the 1-minute preparation minute, and why most learners stop speaking after 45 seconds.",
    outcome: "You know exactly what to do in the preparation minute.",
    lessonRefs: [
      { track: "part2", slug: "how-part-2-works" },
      { track: "part2", slug: "part2-idea-generation" },
    ],
    cta: { label: "Understand Part 2", href: "/learn/part2/how-part-2-works" },
  },
  {
    id: "part2-story-building",
    order: 7,
    title: "Part 2 story building",
    banglaTitle: "পার্ট ২ স্টোরি তৈরি",
    purpose:
      "One story engine, thirteen cue-card shapes. Learn to grow a sentence step by step until it fills two minutes.",
    outcome: "You can expand 8 keywords into a 2-minute structured story.",
    lessonRefs: [
      { track: "part2", slug: "universal-story-engine" },
      { track: "part2", slug: "part2-sentence-engineering" },
      { track: "part2", slug: "one-minute-preparation" },
    ],
    cta: { label: "Learn the story engine", href: "/learn/part2/universal-story-engine" },
  },
  {
    id: "part2-cue-cards",
    order: 8,
    title: "Part 2 cue cards",
    banglaTitle: "পার্ট ২ কিউ কার্ড",
    purpose:
      "Practise across all 23 cue-card categories with a real timer: 1 minute to prepare, 2 minutes to speak.",
    outcome: "You can speak for 1:45–2:00 on most categories without running dry.",
    lessonRefs: [],
    cta: { label: "Open the cue-card bank", href: "/topics/part-2" },
  },
  {
    id: "part3-toolkit",
    order: 9,
    title: "Part 3 sentence toolkit",
    banglaTitle: "পার্ট ৩ সেন্টেন্স টুলকিট",
    purpose:
      "Part 3 is lost by learners who have ideas but no sentence frames. Learn the opinion, reason, contrast and speculation patterns.",
    outcome: "You can express an opinion, a reason and a contrast without searching for words.",
    lessonRefs: [{ track: "part3", slug: "part3-sentence-toolkit" }],
    cta: { label: "Open the sentence toolkit", href: "/learn/part3/part3-sentence-toolkit" },
  },
  {
    id: "part3-structures",
    order: 10,
    title: "Part 3 answer architecture",
    banglaTitle: "পার্ট ৩ উত্তরের কাঠামো",
    purpose:
      "Six reusable architectures cover almost every Part 3 question, including the abstract and hypothetical ones.",
    outcome: "You can pick the right structure in the first second of hearing a question.",
    lessonRefs: [
      { track: "part3", slug: "how-part-3-works" },
      { track: "part3", slug: "part3-answer-architecture" },
    ],
    cta: { label: "Learn the six structures", href: "/learn/part3/part3-answer-architecture" },
  },
  {
    id: "part3-question-types",
    order: 11,
    title: "Part 3 question types",
    banglaTitle: "পার্ট ৩ প্রশ্নের ধরন",
    purpose:
      "Why, opinion, comparison, future, cause/effect, solution, hypothetical, society-level — recognise the type, then answer it.",
    outcome: "You answer each of the eighteen Part 3 question types with a fitting structure.",
    lessonRefs: [],
    cta: { label: "Open the question-type trainer", href: "/topics/part-3" },
  },
  {
    id: "grammar-for-speaking",
    order: 12,
    title: "Grammar for speaking",
    banglaTitle: "স্পিকিং গ্রামার",
    purpose:
      "Grammar is a speaking tool: it lets you say more in one sentence. Learn the forms that Band 6–6.5 answers rely on.",
    outcome: "You control tense, articles, agreement and complex sentences well enough to stay clear.",
    lessonRefs: [
      { track: "grammar", slug: "present-simple" },
      { track: "grammar", slug: "past-simple" },
      { track: "grammar", slug: "present-perfect" },
      { track: "grammar", slug: "because-although" },
      { track: "grammar", slug: "relative-clauses" },
      { track: "grammar", slug: "comparing-things" },
      { track: "grammar", slug: "articles" },
      { track: "grammar", slug: "subject-verb-agreement" },
    ],
    cta: { label: "Open Grammar for Speaking", href: "/learn/grammar" },
  },
  {
    id: "vocabulary",
    order: 13,
    title: "Vocabulary that works when spoken",
    banglaTitle: "কথা বলার ভোকাবুলারি",
    purpose:
      "Replace 'good, nice, beautiful' with natural collocations you can actually pronounce under pressure.",
    outcome: "You use topic-specific words and collocations instead of repeating the same three adjectives.",
    lessonRefs: [
      { track: "vocabulary", slug: "how-to-learn-vocabulary" },
      { track: "vocabulary", slug: "upgrading-simple-words" },
      { track: "vocabulary", slug: "collocations-and-chunks" },
    ],
    cta: { label: "Start with simple word upgrades", href: "/learn/vocabulary/upgrading-simple-words" },
  },
  {
    id: "fluency",
    order: 14,
    title: "Fluency",
    banglaTitle: "ফ্লুয়েন্সি",
    purpose:
      "Fluency is not speed — it is keeping the answer moving while you think. Learn fillers, self-correction and linking.",
    outcome: "Your pauses become short and purposeful instead of silent and long.",
    lessonRefs: [
      { track: "fluency", slug: "what-fluency-means" },
      { track: "fluency", slug: "thinking-while-speaking" },
      { track: "fluency", slug: "natural-fillers" },
      { track: "fluency", slug: "self-correction" },
      { track: "fluency", slug: "connecting-ideas" },
    ],
    cta: { label: "Learn to think while speaking", href: "/learn/fluency/thinking-while-speaking" },
  },
  {
    id: "pronunciation",
    order: 15,
    title: "Pronunciation for intelligibility",
    banglaTitle: "বুঝিয়ে বলার উচ্চারণ",
    purpose:
      "You do not need a British accent. You need stress, endings and chunking that make you easy to understand.",
    outcome: "The examiner understands you the first time, without repeating questions.",
    lessonRefs: [
      { track: "pronunciation", slug: "intelligibility-not-accent" },
      { track: "pronunciation", slug: "word-stress" },
      { track: "pronunciation", slug: "final-consonants-and-endings" },
      { track: "pronunciation", slug: "bangla-speaker-sounds" },
    ],
    cta: { label: "Start with intelligibility", href: "/learn/pronunciation/intelligibility-not-accent" },
  },
  {
    id: "mock-tests",
    order: 16,
    title: "Mock tests",
    banglaTitle: "মক টেস্ট",
    purpose:
      "Put it all together under exam pressure: a 15-minute full mock with Part 1, 2 and 3 and a structured feedback report.",
    outcome: "You complete a full mock and identify your top three priorities.",
    lessonRefs: [{ track: "exam", slug: "mock-test-guide" }],
    cta: { label: "Take a mock test", href: "/practice/mock" },
  },
  {
    id: "final-revision",
    order: 17,
    title: "Final revision",
    banglaTitle: "ফাইনাল রিভিশন",
    purpose:
      "The week before the exam: revise structures, review your personal mistake list and run short daily drills.",
    outcome: "You walk into the test room knowing your structures and your weaknesses.",
    lessonRefs: [
      { track: "exam", slug: "band-6-vs-6-5" },
      { track: "exam", slug: "self-evaluation" },
      { track: "exam", slug: "exam-day-routine" },
    ],
    cta: { label: "Open the final-week plan", href: "/resources/final-week-revision-plan" },
  },
];
