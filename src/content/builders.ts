/**
 * Content builders — a tiny authoring DSL.
 *
 * Writing lesson content as raw object literals is noisy and error-prone.
 * These factories keep authoring files readable while still producing the
 * validated shapes from `schema.ts`. They are plain functions (no React, no
 * side effects) so content can be rendered on the server, searched, or
 * exported to another format later.
 */
import type {
  BadBetterBlock,
  BanglaBlock,
  CalloutBlock,
  ChecklistBlock,
  CompareBlock,
  Correction,
  CueCardBlock,
  ExamplesBlock,
  FlowBlock,
  NoteGridBlock,
  PatternsBlock,
  PhraseBankBlock,
  PhraseItem,
  ProseBlock,
  QuizBlock,
  StepsBlock,
  TableBlock,
  Tone,
  VocabItem,
} from "./schema";

export const vocab = (
  word: string,
  pos: VocabItem["pos"],
  bangla: string,
  example: string,
): VocabItem => ({ word, pos, bangla, example });

export const phrase = (
  text: string,
  bangla: string,
  example: string,
): PhraseItem => ({ phrase: text, bangla, example });

export const fix = (wrong: string, right: string, why: string): Correction => ({
  wrong,
  right,
  why,
});

export const prose = (
  title: string | undefined,
  paragraphs: string[],
  bullets?: string[],
): ProseBlock => ({ type: "prose", title, paragraphs, bullets });

export const bangla = (
  title: string,
  paragraphs: string[],
  takeaway?: string,
): BanglaBlock => ({ type: "bangla", title, paragraphs, takeaway });

export const examples = (
  title: string,
  items: (string | { text: string; note?: string })[],
  intro?: string,
): ExamplesBlock => ({
  type: "examples",
  title,
  intro,
  items: items.map((item) =>
    typeof item === "string" ? { text: item } : item,
  ),
});

export const badBetter = (
  title: string,
  items: Correction[],
  intro?: string,
): BadBetterBlock => ({ type: "badBetter", title, items, intro });

export const patterns = (
  title: string,
  items: PatternsBlock["items"],
  intro?: string,
): PatternsBlock => ({ type: "patterns", title, items, intro });

export const steps = (
  title: string,
  items: StepsBlock["items"],
  intro?: string,
): StepsBlock => ({ type: "steps", title, items, intro });

export const mistakes = (
  title: string,
  items: Correction[],
  intro?: string,
): BadBetterBlock => ({ type: "badBetter", title, items, intro });

export const table = (
  title: string,
  head: string[],
  rows: string[][],
  caption?: string,
): TableBlock => ({ type: "table", title, head, rows, caption });

export const callout = (
  tone: Tone,
  title: string,
  body: string,
  example?: string,
): CalloutBlock => ({ type: "callout", tone, title, body, example });

export const checklist = (
  title: string,
  items: string[],
  note?: string,
): ChecklistBlock => ({ type: "checklist", title, items, note });

export const quiz = (
  title: string,
  items: QuizBlock["items"],
  intro?: string,
): QuizBlock => ({ type: "quiz", title, items, intro });

export const compare = (
  title: string,
  left: CompareBlock["left"],
  right: CompareBlock["right"],
): CompareBlock => ({ type: "compare", title, left, right });

export const flow = (
  stepsList: string[],
  options: { title?: string; note?: string; direction?: "vertical" | "horizontal" } = {},
): FlowBlock => ({
  type: "flow",
  title: options.title,
  steps: stepsList,
  note: options.note,
  direction: options.direction ?? "vertical",
});

export const cueCard = (
  title: string,
  prompt: string,
  bullets: string[],
  prepNotes?: string[],
  skeleton?: string[],
): CueCardBlock => ({ type: "cueCard", title, prompt, bullets, prepNotes, skeleton });

export const phraseBank = (
  title: string,
  groups: PhraseBankBlock["groups"],
  intro?: string,
): PhraseBankBlock => ({ type: "phraseBank", title, intro, groups });

export const noteGrid = (
  title: string,
  items: NoteGridBlock["items"],
  intro?: string,
): NoteGridBlock => ({ type: "noteGrid", title, items, intro });
