import type { SearchDoc, SearchResult } from "./types";

/**
 * Dependency-free ranked search.
 *
 * The corpus is a few thousand short documents (lessons, questions, cue cards,
 * mistakes), so an inverted index would be over-engineering. Instead we keep a
 * pre-computed lowercase haystack per document and score with a weighted
 * term-match model: title hits count far more than body hits, exact phrase
 * matches get a bonus, and prefix matches on the final term help as-you-type
 * queries ("how to answer why questi…").
 */

const STOP_WORDS = new Set([
  "the", "a", "an", "of", "to", "in", "and", "or", "for", "on", "is", "are",
  "do", "does", "i", "my", "me", "how", "what", "kore", "kivabe",
]);

export function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s'-]+/gu, " ")
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

function scoreDoc(doc: SearchDoc, terms: string[], phrase: string): number {
  let score = 0;
  const title = doc.title.toLowerCase();
  const subtitle = doc.subtitle.toLowerCase();

  if (phrase.length > 3 && doc.haystack.includes(phrase)) score += 26;
  if (phrase.length > 3 && title.includes(phrase)) score += 22;

  for (const term of terms) {
    let hit = 0;
    if (title.startsWith(term)) hit += 14;
    else if (title.includes(term)) hit += 10;
    if (subtitle.includes(term)) hit += 4;
    const occurrences = doc.haystack.split(term).length - 1;
    if (occurrences > 0) hit += Math.min(6, occurrences * 1.5);
    if (hit === 0) return 0; // every term must appear somewhere
    score += hit;
  }

  // Small, stable tie-breaker preferences so the most useful kinds float up.
  if (doc.kind === "lesson") score += 3;
  if (doc.kind === "question-type") score += 2;
  return score;
}

function makeSnippet(doc: SearchDoc, terms: string[]): string | undefined {
  const source = doc.body || doc.subtitle;
  if (!source) return undefined;
  const lower = source.toLowerCase();
  let best = -1;
  for (const term of terms) {
    const at = lower.indexOf(term);
    if (at >= 0 && (best === -1 || at < best)) best = at;
  }
  if (best === -1) return source.slice(0, 130);
  const start = Math.max(0, best - 45);
  const end = Math.min(source.length, best + 105);
  return `${start > 0 ? "…" : ""}${source.slice(start, end).trim()}${end < source.length ? "…" : ""}`;
}

export function search(
  docs: readonly SearchDoc[],
  query: string,
  limit = 24,
): SearchResult[] {
  const phrase = query.trim().toLowerCase();
  const terms = tokenize(query);
  if (terms.length === 0 && phrase.length < 3) return [];

  const results: SearchResult[] = [];
  for (const doc of docs) {
    const score = scoreDoc(doc, terms.length ? terms : [phrase], phrase);
    if (score > 0) {
      results.push({ ...doc, score, snippet: makeSnippet(doc, terms.length ? terms : [phrase]) });
    }
  }

  return results
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}
