/**
 * Higher-level builders for the topic / category / question-type systems.
 * These keep the large content files short and consistent.
 */
import type {
  Correction,
  CueCard,
  MistakeCategory,
  MistakeEntry,
  Part1Topic,
  Part2Category,
  Part3QuestionType,
  PhraseItem,
  TopicQuestion,
  VocabItem,
} from "./schema";

/** Part 1 question entry. Deep fields are optional so topics can be expanded
 *  over time without breaking existing content. */
export const q = (
  question: string,
  banglaText: string,
  examinerIntent: string,
  ideaSeeds: string[],
  pattern: [template: string, example: string],
  band6: string,
  band65?: string,
  corrections?: Correction[],
  alternatives?: string[],
  practice?: string[],
): TopicQuestion => ({
  question,
  bangla: banglaText,
  examinerIntent,
  ideaSeeds,
  pattern: { template: pattern[0], example: pattern[1] },
  band6,
  band65: band65 ?? "",
  corrections: corrections ?? [],
  alternatives: alternatives ?? [],
  practice: practice ?? [],
});

export const topic = (input: Omit<Part1Topic, "tags"> & { tags?: string[] }): Part1Topic => ({
  ...input,
  tags: input.tags ?? [],
});

export const cat = (input: Part2Category): Part2Category => input;

export const qtype = (input: Part3QuestionType): Part3QuestionType => input;

export const mist = (
  id: string,
  category: MistakeCategory,
  topicLabel: string,
  wrong: string,
  right: string,
  why: string,
  banglaText: string,
  frequency: MistakeEntry["frequency"] = "common",
  more?: { wrong: string; right: string }[],
  detect?: string,
): MistakeEntry => ({
  id,
  category,
  topic: topicLabel,
  wrong,
  right,
  why,
  bangla: banglaText,
  frequency,
  more,
  detect,
});

export const cue = (
  id: string,
  topicLabel: string,
  banglaTopic: string,
  prompt: string,
  bullets: string[],
  level: CueCard["level"],
  sourcePath: string,
): CueCard => ({ id, topic: topicLabel, banglaTopic, prompt, bullets, level, sourcePath });

export type { VocabItem, PhraseItem };

/* -------------------------------------------------------------------------- */
/* Small item builders                                                         */
/* -------------------------------------------------------------------------- */
/* Re-exported from `builders.ts` so topic files can import everything they    */
/* need from a single module. */
export { fix, phrase, vocab } from "./builders";
