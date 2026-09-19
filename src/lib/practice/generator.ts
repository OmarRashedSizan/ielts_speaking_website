/**
 * Practice-set generator.
 *
 * Pure functions over the content registry: given a part, topic filter,
 * difficulty and count, produce a stable, repeatable set. Random-ish ordering
 * is seeded so a shared link reproduces the same session (and server/client
 * renders agree).
 */
import {
  cueCardBank,
  part1QuestionBank,
  part3QuestionBank,
  part1Topics,
} from "@/content";
import type { CueCard, QuestionBankEntry } from "@/content/schema";
import { seededShuffle } from "@/lib/utils";

export interface GeneratorInput {
  part: 1 | 2 | 3;
  /** Topic labels (empty = all topics). */
  topics: string[];
  /** Difficulty ceiling 1–5. */
  level: number;
  count: number;
  seed?: string;
}

const TOPIC_ALIASES: Record<string, string[]> = {
  studies: ["Studies", "School", "Education"],
  work: ["Work", "Studies"],
  technology: ["Technology", "Mobile phones", "Internet", "Social media"],
};

/** Normalises a topic label or slug so links written either way still match. */
function topicKey(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function matchesTopic(entry: { topic: string }, topics: string[]): boolean {
  if (topics.length === 0) return true;
  const entryKey = topicKey(entry.topic);
  return topics.some((topic) => {
    const requested = topicKey(topic);
    // Accept "school-places" style slugs as well as the exact label.
    if (entryKey.includes(requested) || requested.includes(entryKey)) return true;
    const aliases = TOPIC_ALIASES[requested] ?? [topic];
    return aliases.some((alias) => topicKey(alias) === entryKey);
  });
}

export function generateQuestionSet(
  input: GeneratorInput,
): { part: 1 | 3; questions: QuestionBankEntry[] } | { part: 2; cueCards: CueCard[] } {
  const seed = input.seed ?? `${input.part}-${input.topics.join(",")}-${input.level}-${input.count}`;

  if (input.part === 2) {
    const pool = cueCardBank.filter(
      (card) => matchesTopic(card, input.topics) && card.level <= Math.max(2, input.level + 1),
    );
    const fallback = cueCardBank.filter((card) => matchesTopic(card, input.topics));
    const cards = seededShuffle(pool.length >= 2 ? pool : fallback, seed).slice(0, input.count);
    return { part: 2, cueCards: cards };
  }

  const source = input.part === 1 ? part1QuestionBank : part3QuestionBank;
  const filtered = source.filter((entry) => matchesTopic(entry, input.topics));
  const byLevel = filtered.filter((entry) => entry.level <= input.level);
  const pool = byLevel.length >= Math.min(3, input.count) ? byLevel : filtered;
  const questions = seededShuffle(pool.length > 0 ? pool : source, seed).slice(0, input.count);
  return { part: input.part, questions };
}

/** Topic list for the generator UI (Part 1 topics + Part 3 type names). */
export function generatorTopics(part: 1 | 2 | 3): string[] {
  if (part === 1) return part1Topics.map((topic) => topic.title);
  if (part === 3) return Array.from(new Set(part3QuestionBank.map((entry) => entry.topic)));
  return Array.from(new Set(cueCardBank.map((card) => card.topic)));
}

export interface MockTest {
  part1: {
    area: string;
    questions: QuestionBankEntry[];
  }[];
  cueCard: CueCard | null;
  part3: { area: string; questions: QuestionBankEntry[] }[];
}

/**
 * Builds a full mock test: 3 Part 1 topic areas (4 questions each), one random
 * cue card, and 5 Part 3 questions drawn from two related areas.
 */
export function buildMockTest(seed: string): MockTest {
  const shuffledP1 = seededShuffle(part1QuestionBank, `${seed}-p1`);
  const areas: { area: string; questions: QuestionBankEntry[] }[] = [];
  for (const entry of shuffledP1) {
    const existing = areas.find((area) => area.area === entry.topic);
    if (existing) {
      if (existing.questions.length < 4) existing.questions.push(entry);
      continue;
    }
    if (areas.length < 3) {
      areas.push({ area: entry.topic, questions: [entry] });
    }
    if (areas.length === 3 && areas.every((area) => area.questions.length >= 4)) break;
  }

  const cards = seededShuffle(cueCardBank, `${seed}-card`);
  const cueCard = cards[0] ?? null;

  const shuffledP3 = seededShuffle(part3QuestionBank, `${seed}-p3`);
  const p3Areas: { area: string; questions: QuestionBankEntry[] }[] = [];
  for (const entry of shuffledP3) {
    const existing = p3Areas.find((area) => area.area === entry.topic);
    if (existing) {
      if (existing.questions.length < 3) existing.questions.push(entry);
      continue;
    }
    if (p3Areas.length < 2) p3Areas.push({ area: entry.topic, questions: [entry] });
    if (p3Areas.length === 2 && p3Areas.reduce((sum, a) => sum + a.questions.length, 0) >= 5) break;
  }

  return {
    part1: areas.filter((area) => area.questions.length > 0).slice(0, 3),
    cueCard,
    part3: p3Areas.slice(0, 2),
  };
}
