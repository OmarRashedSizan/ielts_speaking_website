/** Small, dependency-free helpers shared across the app. */

export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function percent(value: number, total: number): number {
  if (total <= 0) return 0;
  return clamp(Math.round((value / total) * 100), 0, 100);
}

/** Deterministic string hash — used for stable shuffles and gradient picks. */
export function hashString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

/** Seeded shuffle so "random" practice sets are stable across server renders. */
export function seededShuffle<T>(items: readonly T[], seed: string): T[] {
  const out = [...items];
  let state = hashString(seed) || 1;
  for (let i = out.length - 1; i > 0; i -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const j = state % (i + 1);
    const a = out[i];
    const b = out[j];
    out[i] = b;
    out[j] = a;
  }
  return out;
}

export function unique<T>(items: readonly T[]): T[] {
  return Array.from(new Set(items));
}

export function groupBy<T, K extends string>(
  items: readonly T[],
  key: (item: T) => K,
): Record<string, T[]> {
  const out: Record<string, T[]> = {};
  for (const item of items) {
    const k = key(item);
    (out[k] ??= []).push(item);
  }
  return out;
}

/** 95 → "1:35" for speaking timers. */
export function formatClock(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/** Rough syllable-backed estimate that keeps speech-rate feedback honest. */
export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export function sentenceSplit(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function titleCase(input: string): string {
  return input.replace(/\b\w/g, (c) => c.toUpperCase());
}

export const LEVEL_LABELS: Record<number, string> = {
  1: "Level 1 · Foundation",
  2: "Level 2 · Answer extension",
  3: "Level 3 · Development",
  4: "Level 4 · Flexible speaking",
  5: "Level 5 · Mock speaking",
};

export const LEVEL_SHORT: Record<number, string> = {
  1: "Foundation",
  2: "Extension",
  3: "Development",
  4: "Flexible",
  5: "Mock",
};

/** Tailwind class fragments kept in one place so badges stay consistent. */
export function levelClass(level: number): string {
  if (level <= 1) return "tag";
  if (level === 2) return "tag tag-brand";
  if (level === 3) return "tag tag-accent";
  return "tag";
}

export function banglaDigits(input: number | string): string {
  const map = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return String(input).replace(/\d/g, (d) => map[Number(d)] ?? d);
}
