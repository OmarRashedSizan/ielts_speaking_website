import {
  SKILLS,
  computeStreak,
  lessonRef,
  type PracticeEntry,
  type ProgressState,
  type SkillId,
} from "./types";

/** Lightweight lesson metadata safe to serialise to the client. */
export interface LessonMeta {
  track: string;
  slug: string;
  title: string;
  banglaTitle: string;
  order: number;
  minutes: number;
  level: number;
  summary: string;
  tags: string[];
  /** Track position, used to order the learning path. */
  trackOrder: number;
}

const SKILL_BY_TRACK: Record<string, SkillId[]> = {
  grammar: ["grammar"],
  vocabulary: ["vocabulary"],
  fluency: ["fluency"],
  pronunciation: ["pronunciation"],
  overview: ["development"],
  part1: ["development", "fluency"],
  part2: ["development", "fluency"],
  part3: ["development", "grammar"],
  strategy: ["development", "fluency"],
  exam: ["development"],
};

export interface PartProgress {
  part: 1 | 2 | 3;
  label: string;
  percent: number;
  lessonsDone: number;
  lessonsTotal: number;
  practiceSessions: number;
}

export interface ProgressSummary {
  overallPercent: number;
  lessonsDone: number;
  lessonsTotal: number;
  parts: PartProgress[];
  skills: { id: SkillId; percent: number; evidence: string }[];
  streak: number;
  activeDays: number;
  speakingMinutes: number;
  practiceSessions: number;
  mocksTaken: number;
  lastActivity: string | null;
  weakAreas: { label: string; detail: string; href: string }[];
  recommended: { title: string; reason: string; href: string; kind: "lesson" | "practice" | "review" }[];
  nextLesson?: LessonMeta;
}

function completionFor(
  state: ProgressState,
  metas: LessonMeta[],
  filter: (meta: LessonMeta) => boolean,
): { done: number; total: number; percent: number } {
  const relevant = metas.filter(filter);
  if (relevant.length === 0) return { done: 0, total: 0, percent: 0 };
  const done = relevant.filter((meta) =>
    state.completedLessons.includes(lessonRef(meta.track, meta.slug)),
  ).length;
  return { done, total: relevant.length, percent: Math.round((done / relevant.length) * 100) };
}

function selfEvalAverage(
  practice: PracticeEntry[],
  skill: SkillId,
): { average: number; samples: number } {
  const values = practice
    .map((entry) => entry.scores?.[skill] ?? 0)
    .filter((value): value is number => typeof value === "number" && value > 0);
  if (values.length === 0) return { average: 0, samples: 0 };
  const sum = values.reduce((a, b) => a + b, 0);
  return { average: sum / values.length, samples: values.length };
}

export function summariseProgress(
  state: ProgressState,
  metas: LessonMeta[],
): ProgressSummary {
  const lessonsTotal = metas.length;
  const lessonsDone = state.completedLessons.length;
  const practiceSessions = state.practice.length;
  const speakingSeconds = state.practice.reduce((sum, entry) => sum + entry.secondsSpoken, 0);
  const speakingMinutes = Math.round(speakingSeconds / 60);

  const partOfTrack: Record<string, 1 | 2 | 3> = { part1: 1, part2: 2, part3: 3 };
  const parts: PartProgress[] = ([1, 2, 3] as const).map((part) => {
    const trackId = `part${part}`;
    const { done, total } = completionFor(state, metas, (meta) => meta.track === trackId);
    const sessions = state.practice.filter((entry) => entry.part === part).length;
    // Lesson completion is the primary signal; real practice sessions add
    // evidence, capped so practise alone cannot fake full progress.
    const practiceBoost = Math.min(18, sessions * 3);
    const percent = Math.min(100, Math.round((done / Math.max(total, 1)) * 100 * 0.85) + practiceBoost);
    return {
      part,
      label: `Part ${part}`,
      percent: total === 0 ? practiceBoost : percent,
      lessonsDone: done,
      lessonsTotal: total,
      practiceSessions: sessions,
    };
  });

  const skills = SKILLS.map((skill) => {
    const relevant = metas.filter((meta) => (SKILL_BY_TRACK[meta.track] ?? []).includes(skill));
    const { percent: lessonPercent } = completionFor(state, metas, (meta) =>
      relevant.some((r) => r.track === meta.track && r.slug === meta.slug),
    );
    const { average, samples } = selfEvalAverage(state.practice, skill);
    const selfPercent = samples > 0 ? (average / 5) * 100 : null;
    const percent =
      selfPercent === null
        ? lessonPercent
        : Math.round(lessonPercent * 0.55 + selfPercent * 0.45);
    const evidence =
      samples > 0
        ? `${relevant.length} lessons · ${samples} self-evaluations`
        : `${relevant.length} lessons · no self-evaluation yet`;
    return { id: skill, percent, evidence };
  });

  const weakSkills = [...skills]
    .filter((skill) => skill.percent < 70)
    .sort((a, b) => a.percent - b.percent)
    .slice(0, 3);

  const weakAreas = weakSkills.map((skill) => ({
    label: skillLabel(skill.id),
    detail: skill.percent === 0 ? "Not started yet" : `${skill.percent}% — needs work`,
    href: skillHref(skill.id),
  }));

  const sortedMetas = [...metas].sort(
    (a, b) => a.trackOrder - b.trackOrder || a.order - b.order,
  );
  const nextLesson = sortedMetas.find(
    (meta) => !state.completedLessons.includes(lessonRef(meta.track, meta.slug)),
  );

  const recommended: ProgressSummary["recommended"] = [];
  if (nextLesson) {
    recommended.push({
      title: `Learn: ${nextLesson.title}`,
      reason: `Next in the recommended path · ${nextLesson.minutes} min · Part ${
        nextLesson.track === "part1" ? "1" : nextLesson.track === "part2" ? "2" : nextLesson.track === "part3" ? "3" : "—"
      }`,
      href: `/learn/${nextLesson.track}/${nextLesson.slug}`,
      kind: "lesson",
    });
  }

  const weakestPart = [...parts].sort((a, b) => a.percent - b.percent)[0];
  if (weakestPart && weakestPart.percent < 85) {
    recommended.push({
      title: `Practice ${weakestPart.label} out loud`,
      reason: `${weakestPart.lessonsDone}/${weakestPart.lessonsTotal} lessons · ${weakestPart.practiceSessions} recorded practice answers`,
      href: `/practice/part-${weakestPart.part}`,
      kind: "practice",
    });
  }

  const weakestSkill = weakSkills[0];
  if (weakestSkill) {
    recommended.push({
      title: `Review: ${skillLabel(weakestSkill.id)}`,
      reason: `Your lowest measured area (${weakestSkill.percent}%). Fix it with targeted lessons and drills.`,
      href: skillHref(weakestSkill.id),
      kind: "review",
    });
  }
  if (state.savedQuestions.length > 0) {
    recommended.push({
      title: `Re-answer ${state.savedQuestions.length} saved question${
        state.savedQuestions.length > 1 ? "s" : ""
      }`,
      reason: "Questions you flagged as difficult — redo them now that your structures are stronger.",
      href: "/practice/part-1",
      kind: "practice",
    });
  }

  return {
    overallPercent: Math.round(
      ((lessonsDone / Math.max(lessonsTotal, 1)) * 0.6 +
        Math.min(1, practiceSessions / 24) * 0.4) *
        100,
    ),
    lessonsDone,
    lessonsTotal,
    parts,
    skills,
    streak: computeStreak(state.streakDays),
    activeDays: state.streakDays.length,
    speakingMinutes,
    practiceSessions,
    mocksTaken: state.mocks.length,
    lastActivity: state.practice[0]?.at ?? state.mocks[0]?.at ?? null,
    weakAreas,
    recommended: recommended.slice(0, 4),
    nextLesson,
  };
}

export function skillLabel(skill: SkillId | string): string {
  switch (skill) {
    case "fluency":
      return "Fluency & Coherence";
    case "vocabulary":
      return "Lexical Resource (Vocabulary)";
    case "grammar":
      return "Grammatical Range & Accuracy";
    case "pronunciation":
      return "Pronunciation";
    case "development":
      return "Idea Development";
    default:
      return String(skill);
  }
}

export function skillHref(skill: SkillId | string): string {
  switch (skill) {
    case "grammar":
      return "/learn/grammar";
    case "vocabulary":
      return "/learn/vocabulary";
    case "fluency":
      return "/learn/fluency";
    case "pronunciation":
      return "/learn/pronunciation";
    case "development":
      return "/learn/strategy/idont-know-what-to-say";
    default:
      return "/learn";
  }
}
