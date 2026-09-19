/**
 * Content registry — the single entry point the application talks to.
 *
 * Pages never import individual content files; they import selectors from
 * here. That keeps the door open for swapping the storage layer (database,
 * CMS, MDX) without touching UI code.
 */
import type {
  CueCard,
  Lesson,
  Part1Topic,
  Part2Category,
  Part3QuestionType,
  PathStage,
  QuestionBankEntry,
  Resource,
} from "./schema";
import type { LessonMeta } from "@/lib/progress/selectors";

import { overviewLessons } from "./lessons/overview";
import { part1Lessons } from "./lessons/part1";
import { part2Lessons } from "./lessons/part2";
import { part3Lessons } from "./lessons/part3";
import { strategyLessons } from "./lessons/strategy";
import { grammarLessons } from "./lessons/grammar";
import { vocabularyLessons } from "./lessons/vocabulary";
import { fluencyLessons } from "./lessons/fluency";
import { pronunciationLessons } from "./lessons/pronunciation";
import { examLessons } from "./lessons/exam";

import { part1CoreTopics } from "./topics/part1-core";
import { part1MoreTopics } from "./topics/part1-more";
import { part2Categories as part2CoreCategories } from "./topics/part2-categories";
import { part2CategoriesMore } from "./topics/part2-categories-more";
import { part3Types as part3CoreTypes } from "./topics/part3-types";
import { part3TypesMore } from "./topics/part3-types-more";
import { mistakes } from "./mistakes";
import { resources } from "./resources";

/* -------------------------------------------------------------------------- */
/* Content collections                                                         */
/* -------------------------------------------------------------------------- */
/* Each collection is assembled from topic files so content can grow without   */
/* touching the registry: add a file, spread it here, done.                    */

/** Part 1 topic bank — 40+ topics with vocabulary, questions and models. */
export const part1Topics: Part1Topic[] = [...part1CoreTopics, ...part1MoreTopics];

/** Part 2 cue-card categories (story shapes and full cue cards). */
export const part2Categories: Part2Category[] = [...part2CoreCategories, ...part2CategoriesMore];

/** Part 3 question types, in teaching order. */
export const part3Types: Part3QuestionType[] = [...part3CoreTypes, ...part3TypesMore];

import { tracks } from "./tracks";
import { pathStages } from "./path";

export { tracks, pathStages };
export { trackById, TOTAL_TRACKS } from "./tracks";
export type { Track } from "./schema";

/* -------------------------------------------------------------------------- */
/* Lessons                                                                     */
/* -------------------------------------------------------------------------- */

export const lessons: Lesson[] = [
  ...overviewLessons,
  ...part1Lessons,
  ...part2Lessons,
  ...part3Lessons,
  ...strategyLessons,
  ...grammarLessons,
  ...vocabularyLessons,
  ...fluencyLessons,
  ...pronunciationLessons,
  ...examLessons,
];

const trackOrderIndex = new Map(tracks.map((track) => [track.id, track.order]));

export const lessonMeta: LessonMeta[] = lessons
  .map((lesson) => ({
    track: lesson.track,
    slug: lesson.slug,
    title: lesson.title,
    banglaTitle: lesson.banglaTitle,
    order: lesson.order,
    minutes: lesson.minutes,
    level: lesson.level,
    summary: lesson.summary,
    tags: lesson.tags,
    trackOrder: trackOrderIndex.get(lesson.track) ?? 99,
  }))
  .sort((a, b) => a.trackOrder - b.trackOrder || a.order - b.order);

export function lessonsForTrack(trackId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.track === trackId)
    .sort((a, b) => a.order - b.order);
}

export function lessonByRef(trackId: string, slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.track === trackId && lesson.slug === slug);
}

/** Previous / next inside the recommended sequence (track order, then lesson order). */
export function lessonNeighbours(
  trackId: string,
  slug: string,
): { previous?: LessonMeta; next?: LessonMeta } {
  const index = lessonMeta.findIndex((meta) => meta.track === trackId && meta.slug === slug);
  if (index === -1) return {};
  return { previous: lessonMeta[index - 1], next: lessonMeta[index + 1] };
}

/** Flat ordered lesson list for "continue learning" style links. */
export const orderedLessonRefs: string[] = lessonMeta.map(
  (meta) => `${meta.track}/${meta.slug}`,
);

/* -------------------------------------------------------------------------- */
/* Topics, cue cards and questions                                             */
/* -------------------------------------------------------------------------- */

export { mistakes, resources };

export function topicBySlug(slug: string): Part1Topic | undefined {
  return part1Topics.find((topic) => topic.slug === slug);
}

export function categoryBySlug(slug: string): Part2Category | undefined {
  return part2Categories.find((category) => category.slug === slug);
}

/** Part 3 question types sorted into the recommended teaching order. */
export const orderedPart3Types: Part3QuestionType[] = [...part3Types].sort(
  (a, b) => a.order - b.order,
);

export function questionTypeBySlug(slug: string): Part3QuestionType | undefined {
  return orderedPart3Types.find((type) => type.slug === slug);
}

export function resourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug);
}

/** Exam-style Part 1 questions flattened into one practice bank. */
export const part1QuestionBank: QuestionBankEntry[] = part1Topics.flatMap((topic) =>
  topic.questions.map((question, index) => ({
    id: `${topic.slug}-q${index + 1}`,
    part: 1 as const,
    topic: topic.title,
    banglaTopic: topic.banglaTitle,
    question: question.question,
    sourcePath: `/topics/part-1/${topic.slug}`,
    level: 1 as const,
  })),
);

/** Part 3 questions flattened from the question-type system. */
export const part3QuestionBank: QuestionBankEntry[] = orderedPart3Types.flatMap((type) => {
  const questions = [type.sampleQuestion, ...type.practice];
  return questions.map((question, index) => ({
    id: `${type.slug}-${index + 1}`,
    part: 3 as const,
    topic: type.title,
    banglaTopic: type.banglaTitle,
    question,
    sourcePath: `/topics/part-3/${type.slug}`,
    level: Math.min(5, Math.max(2, type.order > 12 ? 4 : 3)) as QuestionBankEntry["level"],
  }));
});

export const cueCardBank: CueCard[] = part2Categories.flatMap((category) =>
  category.cueCards.map((card, index) => ({
    id: `${category.slug}-card${index + 1}`,
    topic: category.title,
    banglaTopic: category.banglaTitle,
    prompt: card.prompt,
    bullets: card.bullets,
    level: Math.min(5, Math.max(2, index + 2)) as CueCard["level"],
    sourcePath: `/topics/part-2/${category.slug}`,
  })),
);

export const questionBank: QuestionBankEntry[] = [...part1QuestionBank, ...part3QuestionBank];

export function questionsForPart(part: 1 | 2 | 3): QuestionBankEntry[] {
  return questionBank.filter((entry) => entry.part === part);
}

export function topicsForQuestion(questionId: string): QuestionBankEntry | undefined {
  return questionBank.find((entry) => entry.id === questionId);
}

/* -------------------------------------------------------------------------- */
/* Content integrity (development only)                                        */
/* -------------------------------------------------------------------------- */

function assertUnique(label: string, values: string[]): void {
  const seen = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) {
      throw new Error(`[content] duplicate ${label}: "${value}"`);
    }
    seen.add(value);
  }
}

function validateContent(): string[] {
  const problems: string[] = [];
  try {
    assertUnique("lesson slug", lessons.map((lesson) => `${lesson.track}/${lesson.slug}`));
    assertUnique("part 1 topic slug", part1Topics.map((topic) => topic.slug));
    assertUnique("part 2 category slug", part2Categories.map((category) => category.slug));
    assertUnique("part 3 question type slug", part3Types.map((type) => type.slug));
    assertUnique("mistake id", mistakes.map((entry) => entry.id));
    assertUnique("resource slug", resources.map((resource) => resource.slug));
    assertUnique("question bank id", questionBank.map((entry) => entry.id));
  } catch (error) {
    problems.push((error as Error).message);
  }

  // every learning-path reference must resolve to a real lesson
  for (const stage of pathStages) {
    for (const ref of stage.lessonRefs) {
      if (!lessonByRef(ref.track, ref.slug)) {
        problems.push(
          `[content] learning path stage "${stage.id}" references missing lesson ${ref.track}/${ref.slug}`,
        );
      }
    }
  }

  // lessons must declare unique ordering inside their track
  for (const track of tracks) {
    const inTrack = lessonsForTrack(track.id);
    const orders = new Set<number>();
    for (const lesson of inTrack) {
      if (orders.has(lesson.order)) {
        problems.push(`[content] duplicate order ${lesson.order} in track ${track.id}`);
      }
      orders.add(lesson.order);
    }
  }
  return problems;
}

if (process.env.NODE_ENV !== "production") {
  const problems = validateContent();
  if (problems.length > 0) {
    // Fail loudly in development rather than shipping broken references.
    console.warn(problems.join("\n"));
  }
}

export const contentStats = {
  lessons: lessons.length,
  tracks: tracks.length,
  topics: part1Topics.length,
  categories: part2Categories.length,
  questionTypes: part3Types.length,
  questions: questionBank.length,
  cueCards: cueCardBank.length,
  mistakes: mistakes.length,
  resources: resources.length,
  stages: pathStages.length,
};

export type { Lesson, LessonMeta, Part1Topic, Part2Category, Part3QuestionType, PathStage, Resource };
