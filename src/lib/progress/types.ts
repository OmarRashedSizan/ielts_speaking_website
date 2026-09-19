/**
 * Progress domain model.
 *
 * Design decision: learning progress is owned by the learner's device
 * (localStorage) until authentication exists. The shape below is deliberately
 * database-friendly — every field maps 1:1 to a future table/column so the
 * client store can be synced to Postgres without a migration of concepts.
 * See docs/architecture.md → "Progress architecture".
 */

export const SKILLS = [
  "fluency",
  "vocabulary",
  "grammar",
  "pronunciation",
  "development",
] as const;

export type SkillId = (typeof SKILLS)[number];

export interface PracticeEntry {
  id: string;
  /** ISO timestamp. */
  at: string;
  part: 1 | 2 | 3;
  questionId: string;
  question: string;
  secondsSpoken: number;
  wordCount: number;
  /** Self-evaluation, 1–5 per criterion (0 = skipped). */
  scores: Partial<Record<SkillId, number>>;
}

export interface MockEntry {
  id: string;
  at: string;
  /** Cue card / topic used for Part 2 of the mock. */
  cueCardId: string;
  totalSeconds: number;
  /** Per-criterion self-rating, 1–5. */
  scores: Partial<Record<SkillId, number>>;
  notes?: string;
}

export interface ProgressState {
  version: 1;
  /** Lesson refs in "track/slug" form. */
  completedLessons: string[];
  /** lesson ref -> number of times opened (helps recommend revision). */
  visits: Record<string, number>;
  savedCueCards: string[];
  savedQuestions: string[];
  masteredMistakes: string[];
  practice: PracticeEntry[];
  mocks: MockEntry[];
  streakDays: string[];
  lastActiveDay: string | null;
  /** Free-form notes the learner writes in the Part 2 preparation pad. */
  prepNotes: Record<string, string>;
}

export const EMPTY_PROGRESS: ProgressState = {
  version: 1,
  completedLessons: [],
  visits: {},
  savedCueCards: [],
  savedQuestions: [],
  masteredMistakes: [],
  practice: [],
  mocks: [],
  streakDays: [],
  lastActiveDay: null,
  prepNotes: {},
};

export const STORAGE_KEY = "bolte-shikhi.progress.v1";

export function lessonRef(track: string, slug: string): string {
  return `${track}/${slug}`;
}

export function todayKey(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

/** Streak maths: consecutive calendar days ending today (Bangladesh time is
 *  UTC+6, so we rely on the browser's local date via `todayKey`). */
export function computeStreak(days: string[], today = todayKey()): number {
  if (days.length === 0) return 0;
  const set = new Set(days);
  let streak = 0;
  const cursor = new Date(`${today}T00:00:00Z`);
  for (let i = 0; i < 400; i += 1) {
    const key = cursor.toISOString().slice(0, 10);
    if (set.has(key)) {
      streak += 1;
    } else if (i > 0) {
      break;
    }
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  return streak;
}
