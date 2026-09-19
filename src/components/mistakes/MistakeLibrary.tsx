"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { MistakeEntry } from "@/content/schema";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Badge, EmptyState } from "@/components/ui/primitives";
import { cn, unique } from "@/lib/utils";

const CATEGORY_LABELS: Record<string, string> = {
  grammar: "Grammar",
  vocabulary: "Vocabulary",
  pronunciation: "Pronunciation",
  fluency: "Fluency",
  structure: "Sentence structure",
  "word-choice": "Word choice",
  translation: "Direct translation",
  repetition: "Repetition",
};

const FREQUENCY_LABELS: Record<string, { label: string; tone: "danger" | "accent" | "neutral" }> = {
  "very-common": { label: "Very common", tone: "danger" },
  common: { label: "Common", tone: "accent" },
  occasional: { label: "Occasional", tone: "neutral" },
};

export default function MistakeLibrary({
  entries,
  initialFocus,
}: {
  entries: MistakeEntry[];
  initialFocus?: string;
}) {
  const { state, toggleMistakeMastered } = useProgress();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [showMastered, setShowMastered] = useState<"all" | "todo" | "mastered">("all");

  const categories = useMemo(() => ["all", ...unique(entries.map((entry) => entry.category))], [entries]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return entries.filter((entry) => {
      if (category !== "all" && entry.category !== category) return false;
      const mastered = state.masteredMistakes.includes(entry.id);
      if (showMastered === "mastered" && !mastered) return false;
      if (showMastered === "todo" && mastered) return false;
      if (!term) return true;
      return (
        entry.wrong.toLowerCase().includes(term) ||
        entry.right.toLowerCase().includes(term) ||
        entry.why.toLowerCase().includes(term) ||
        entry.topic.toLowerCase().includes(term) ||
        entry.bangla.includes(query.trim())
      );
    });
  }, [entries, query, category, showMastered, state.masteredMistakes]);

  const grouped = useMemo(() => {
    const groups = new Map<string, MistakeEntry[]>();
    for (const entry of filtered) {
      const list = groups.get(entry.category) ?? [];
      list.push(entry);
      groups.set(entry.category, list);
    }
    return Array.from(groups.entries());
  }, [filtered]);

  const masteredCount = state.masteredMistakes.length;

  return (
    <div className="space-y-5">
      <div className="card p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex-1">
            <span className="sr-only">Search mistakes</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search: articles, since / for, “I am agree”…"
              className="w-full rounded-[6px] border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-brand-400"
            />
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            aria-label="Filter by category"
            className="rounded-[6px] border border-line bg-paper px-3 py-2.5 text-sm"
          >
            {categories.map((value) => (
              <option key={value} value={value}>
                {value === "all" ? "All categories" : (CATEGORY_LABELS[value] ?? value)}
              </option>
            ))}
          </select>
          <select
            value={showMastered}
            onChange={(event) => setShowMastered(event.target.value as typeof showMastered)}
            aria-label="Filter by review status"
            className="rounded-[6px] border border-line bg-paper px-3 py-2.5 text-sm"
          >
            <option value="all">Everything</option>
            <option value="todo">Still to fix</option>
            <option value="mastered">Marked as fixed</option>
          </select>
        </div>
        <p className="mt-3 text-xs text-ink-muted">
          {filtered.length} of {entries.length} entries · {masteredCount} marked as fixed · tick the
          box when you stop making a mistake in your recorded practice answers.
        </p>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No mistakes match that search"
          body="Try a shorter keyword, or browse by category. The library covers grammar, vocabulary, pronunciation, fluency, structure, word choice, direct translation and repetition."
        />
      ) : null}

      {grouped.map(([group, items]) => (
        <section key={group}>
          <h2 className="mb-3 flex items-center gap-3 font-serif text-lg">
            {CATEGORY_LABELS[group] ?? group}
            <span className="text-xs font-normal text-ink-muted">{items.length}</span>
          </h2>
          <ul className="grid gap-3 lg:grid-cols-2">
            {items.map((entry) => {
              const mastered = state.masteredMistakes.includes(entry.id);
              const frequency = FREQUENCY_LABELS[entry.frequency];
              return (
                <li
                  key={entry.id}
                  id={entry.id}
                  className={cn(
                    "card p-4",
                    initialFocus === entry.id && "border-brand-400 shadow-raise",
                    mastered && "opacity-70",
                  )}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone={frequency?.tone ?? "neutral"}>{frequency?.label}</Badge>
                    <Badge>{entry.topic}</Badge>
                    <label className="ml-auto flex items-center gap-1.5 text-xs text-ink-muted">
                      <input
                        type="checkbox"
                        checked={mastered}
                        onChange={() => toggleMistakeMastered(entry.id)}
                      />
                      I have fixed this
                    </label>
                  </div>

                  <p className="mt-3 text-[15px]">
                    <span className="text-danger-700 line-through decoration-danger-300">
                      {entry.wrong}
                    </span>
                  </p>
                  <p className="mt-1 text-[15px] font-medium text-brand-700">→ {entry.right}</p>

                  <p className="mt-2.5 text-[13px] leading-relaxed text-ink-soft">{entry.why}</p>
                  <p className="bn-block mt-2 text-[13px]">{entry.bangla}</p>

                  {entry.more?.length ? (
                    <ul className="mt-3 space-y-1 border-t border-line pt-3 text-[13px]">
                      {entry.more.map((pair) => (
                        <li key={pair.wrong}>
                          <span className="text-danger-700">{pair.wrong}</span>
                          <span className="mx-1.5 text-ink-muted">→</span>
                          <span className="text-brand-700">{pair.right}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <p className="text-xs text-ink-muted">
        Related:{" "}
        <Link href="/learn/grammar" className="underline">
          Grammar for speaking
        </Link>{" "}
        ·{" "}
        <Link href="/learn/pronunciation" className="underline">
          Pronunciation
        </Link>{" "}
        ·{" "}
        <Link href="/practice/part-1" className="underline">
          Test yourself in practice
        </Link>
      </p>
    </div>
  );
}
