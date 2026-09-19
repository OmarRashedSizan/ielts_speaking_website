export type SearchKind =
  | "lesson"
  | "topic"
  | "question"
  | "cue-cards"
  | "question-type"
  | "mistake"
  | "resource"
  | "page";

export interface SearchDoc {
  id: string;
  kind: SearchKind;
  title: string;
  /** Secondary line, e.g. topic name or track. */
  subtitle: string;
  href: string;
  /** Extra searchable text: bangla translation, answer, tags. */
  body: string;
  /** Pre-computed lowercase haystack for fast matching. */
  haystack: string;
  part?: 1 | 2 | 3;
  tags?: string[];
}

export interface SearchResult extends SearchDoc {
  score: number;
  /** Best matching line for display. */
  snippet?: string;
}

export const KIND_LABEL: Record<SearchKind, string> = {
  lesson: "Lesson",
  topic: "Topic",
  question: "Practice question",
  "cue-cards": "Cue card",
  "question-type": "Part 3 question type",
  mistake: "Mistake",
  resource: "Resource",
  page: "Page",
};
