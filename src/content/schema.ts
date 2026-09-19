/**
 * Domain model for the whole platform.
 *
 * The application is content-driven: lessons, topics, cue cards, question
 * banks, the mistake library and resources are all plain typed data. Pages are
 * generic renderers over these shapes, so new content can be added without
 * touching the application code (see docs/architecture.md).
 *
 * Colours, spacing and typography live in `src/app/globals.css` (design
 * tokens). Nothing in this file depends on React.
 */

/* -------------------------------------------------------------------------- */
/* Shared primitives                                                           */
/* -------------------------------------------------------------------------- */

/** Progressive difficulty ladder. */
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

/** Exam part a piece of content belongs to. `0` = general/strategy. */
export type ExamPart = 0 | 1 | 2 | 3;

export type Tone = "key" | "tip" | "warn" | "bangla" | "quote";

export interface Correction {
  /** What learners actually say (wrong or unnatural). */
  wrong: string;
  /** The natural, Band 6–6.5 appropriate version. */
  right: string;
  /** Why — the teaching moment. */
  why: string;
}

export interface VocabItem {
  word: string;
  pos:
    | "noun"
    | "verb"
    | "adjective"
    | "adverb"
    | "phrase"
    | "collocation"
    | "phrasal verb";
  /** Bangla meaning, short. */
  bangla: string;
  /** A natural spoken sentence using it. */
  example: string;
}

export interface PhraseItem {
  phrase: string;
  bangla: string;
  example: string;
}

/* -------------------------------------------------------------------------- */
/* Lesson blocks — the render units                                            */
/* -------------------------------------------------------------------------- */

export interface ProseBlock {
  type: "prose";
  title?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BanglaBlock {
  type: "bangla";
  title?: string;
  /** Bangla explanation paragraphs. Keep sentences short. */
  paragraphs: string[];
  /** Optional English takeaway under the Bangla. */
  takeaway?: string;
}

export interface ExamplesBlock {
  type: "examples";
  title?: string;
  intro?: string;
  items: { text: string; note?: string }[];
}

export interface BadBetterBlock {
  type: "badBetter";
  title?: string;
  intro?: string;
  items: Correction[];
}

export interface PatternsBlock {
  type: "patterns";
  title?: string;
  intro?: string;
  items: {
    label: string;
    /** Reusable template with slots, e.g. "I usually ___ when ___". */
    template: string;
    /** Filled-in natural example. */
    example?: string;
    note?: string;
  }[];
}

export interface StepsBlock {
  type: "steps";
  title?: string;
  intro?: string;
  items: { title: string; detail: string }[];
}

export interface MistakesBlock {
  type: "mistakes";
  title?: string;
  intro?: string;
  items: Correction[];
}

export interface TableBlock {
  type: "table";
  title?: string;
  caption?: string;
  head: string[];
  rows: string[][];
}

export interface CalloutBlock {
  type: "callout";
  tone: Tone;
  title: string;
  body: string;
  example?: string;
}

export interface ChecklistBlock {
  type: "checklist";
  title: string;
  note?: string;
  items: string[];
}

export interface QuizBlock {
  type: "quiz";
  title: string;
  intro?: string;
  items: {
    question: string;
    options: string[];
    /** Index of the correct option. */
    answer: number;
    explain: string;
  }[];
}

/** Side-by-side comparison — used for Band 6 vs 6.5 and bad/good notes. */
export interface CompareBlock {
  type: "compare";
  title?: string;
  left: { label: string; tone?: "danger" | "brand"; bullets: string[] };
  right: { label: string; tone?: "danger" | "brand"; bullets: string[] };
}

/** Arrow diagram: Idea → Structure → Sentence → … */
export interface FlowBlock {
  type: "flow";
  title?: string;
  steps: string[];
  note?: string;
  direction?: "vertical" | "horizontal";
}

export interface CueCardBlock {
  type: "cueCard";
  title: string;
  prompt: string;
  bullets: string[];
  /** Example 1-minute keyword notes. */
  prepNotes?: string[];
  /** Spoken skeleton the learner fills in. */
  skeleton?: string[];
}

export interface PhraseBankBlock {
  type: "phraseBank";
  title: string;
  intro?: string;
  groups: {
    label: string;
    items: string[];
    /** Bangla micro-guidance on when to use the group. */
    note?: string;
  }[];
}

export interface NoteGridBlock {
  type: "noteGrid";
  title: string;
  intro?: string;
  /** Short labelled cards — used for criteria, dimensions, checklists. */
  items: { label: string; value?: string; detail: string }[];
}

export type LessonBlock =
  | ProseBlock
  | BanglaBlock
  | ExamplesBlock
  | BadBetterBlock
  | PatternsBlock
  | StepsBlock
  | MistakesBlock
  | TableBlock
  | CalloutBlock
  | ChecklistBlock
  | QuizBlock
  | CompareBlock
  | FlowBlock
  | CueCardBlock
  | PhraseBankBlock
  | NoteGridBlock;

/* -------------------------------------------------------------------------- */
/* Lessons                                                                     */
/* -------------------------------------------------------------------------- */

export type TrackId =
  | "overview"
  | "part1"
  | "part2"
  | "part3"
  | "grammar"
  | "vocabulary"
  | "fluency"
  | "pronunciation"
  | "strategy"
  | "exam";

export interface Lesson {
  slug: string;
  track: TrackId;
  /** Order inside its track, starting at 1. */
  order: number;
  title: string;
  banglaTitle: string;
  summary: string;
  level: DifficultyLevel;
  /** Realistic reading time in minutes. */
  minutes: number;
  /** "What you will learn" */
  goals: string[];
  /** Where this shows up in the real exam. */
  examUse?: string;
  tags: string[];
  blocks: LessonBlock[];
  /** Extra speaking prompts attached to the lesson. */
  practice?: string[];
}

export interface Track {
  id: TrackId;
  title: string;
  banglaTitle: string;
  blurb: string;
  part: ExamPart;
  order: number;
  /** Short marker shown in navigation, e.g. "01". */
  code: string;
}

/* -------------------------------------------------------------------------- */
/* Part 1 topic system                                                         */
/* -------------------------------------------------------------------------- */

export interface TopicQuestion {
  question: string;
  /** Question meaning in Bangla. */
  bangla: string;
  /** What the examiner is really checking here. */
  examinerIntent: string;
  /** Thinking seeds so the learner is never blank. */
  ideaSeeds: string[];
  pattern: { template: string; example: string };
  band6: string;
  band65: string;
  corrections: Correction[];
  /** Natural alternatives for overused words in this question. */
  alternatives: string[];
  /** Extra examiner-style follow-ups. */
  practice: string[];
}

export interface Part1Topic {
  slug: string;
  title: string;
  banglaTitle: string;
  /** One line on why examiners love this topic. */
  summary: string;
  tags: string[];
  /** Topic vocabulary: useful, natural, not "fancy for the sake of it". */
  vocabulary: VocabItem[];
  phrases: PhraseItem[];
  questions: TopicQuestion[];
}

/* -------------------------------------------------------------------------- */
/* Part 2 category system                                                      */
/* -------------------------------------------------------------------------- */

export type StoryShape =
  | "person"
  | "place"
  | "object"
  | "event"
  | "experience"
  | "activity"
  | "skill"
  | "media"
  | "plan"
  | "problem"
  | "achievement"
  | "decision";

export interface Part2Category {
  slug: string;
  title: string;
  banglaTitle: string;
  shape: StoryShape;
  summary: string;
  /** Universal idea lens for this story shape. */
  ideaLens: { label: string; prompts: string[] };
  /** What kind of story works best here. */
  storyAdvice: string[];
  vocabulary: VocabItem[];
  structures: { template: string; example: string; note?: string }[];
  cueCards: {
    prompt: string;
    bullets: string[];
    prepNotes: string[];
    band6: string;
    band65: string;
    whyItWorks: string[];
  }[];
  corrections: Correction[];
  practiceCards: string[];
}

/* -------------------------------------------------------------------------- */
/* Part 3 question types                                                       */
/* -------------------------------------------------------------------------- */

export interface Part3QuestionType {
  slug: string;
  /** Position in the recommended teaching order. */
  order: number;
  title: string;
  banglaTitle: string;
  /** A representative examiner question. */
  sampleQuestion: string;
  /** What the question actually means. */
  meaning: string;
  /** What the examiner expects to hear. */
  examinerExpects: string[];
  /** Idea generation technique for this type. */
  ideaTechnique: { name: string; steps: string[] };
  /** Recommended answer architectures for this type. */
  structures: { name: string; outline: string; when: string }[];
  patterns: string[];
  worked: {
    question: string;
    breakdown: { label: string; text: string }[];
    band6: string;
    band65: string;
  };
  bangla: string[];
  corrections: Correction[];
  practice: string[];
}

/* -------------------------------------------------------------------------- */
/* Mistake library                                                             */
/* -------------------------------------------------------------------------- */

export const MISTAKE_CATEGORIES = [
  "grammar",
  "vocabulary",
  "pronunciation",
  "fluency",
  "structure",
  "word-choice",
  "translation",
  "repetition",
] as const;

export type MistakeCategory = (typeof MISTAKE_CATEGORIES)[number];

export interface MistakeEntry {
  id: string;
  category: MistakeCategory;
  /** Grouping label, e.g. "Tense", "Articles", "Bangla-influenced". */
  topic: string;
  wrong: string;
  right: string;
  why: string;
  bangla: string;
  /** Optional extra correct/incorrect pairs. */
  more?: { wrong: string; right: string }[];
  /** How often Bangladeshi learners make it. */
  frequency: "very-common" | "common" | "occasional";
  /**
   * Optional regex (case-insensitive, source form) used by the practice
   * evaluator to detect this mistake inside a learner transcript. The mistake
   * library therefore doubles as the error-detection rule set.
   */
  detect?: string;
}

/* -------------------------------------------------------------------------- */
/* Resources                                                                   */
/* -------------------------------------------------------------------------- */

export interface Resource {
  slug: string;
  title: string;
  banglaTitle: string;
  kind: "checklist" | "plan" | "reference" | "faq";
  summary: string;
  minutes: number;
  blocks: LessonBlock[];
}

/* -------------------------------------------------------------------------- */
/* Practice + progress                                                         */
/* -------------------------------------------------------------------------- */

export interface QuestionBankEntry {
  id: string;
  part: 1 | 2 | 3;
  topic: string;
  banglaTopic: string;
  question: string;
  /** Where the learner can study this question. */
  sourcePath: string;
  level: DifficultyLevel;
}

export interface CueCard {
  id: string;
  topic: string;
  banglaTopic: string;
  prompt: string;
  bullets: string[];
  level: DifficultyLevel;
  sourcePath: string;
}

/* -------------------------------------------------------------------------- */
/* Learning path                                                               */
/* -------------------------------------------------------------------------- */

export interface PathStage {
  id: string;
  order: number;
  title: string;
  banglaTitle: string;
  /** Why this stage exists and what it unlocks. */
  purpose: string;
  lessonRefs: { track: TrackId; slug: string }[];
  /** Human-readable stage outcome. */
  cta?: { label: string; href: string };
  outcome: string;
}
