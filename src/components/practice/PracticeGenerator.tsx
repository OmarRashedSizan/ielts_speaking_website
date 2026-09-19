"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  topicsByPart: { part: 1 | 2 | 3; topics: string[] }[];
}

const LEVELS = [
  { value: 1, label: "Level 1 · Foundation", detail: "Simple sentence building, familiar topics" },
  { value: 2, label: "Level 2 · Answer extension", detail: "Reason + example, no advanced vocabulary" },
  { value: 3, label: "Level 3 · Development", detail: "Longer answers, mixed structures" },
  { value: 4, label: "Level 4 · Flexible speaking", detail: "Unexpected questions, abstract topics" },
  { value: 5, label: "Level 5 · Mock conditions", detail: "Exam pressure, no preparation script" },
];

export default function PracticeGenerator({ topicsByPart }: Props) {
  const router = useRouter();
  const [part, setPart] = useState<1 | 2 | 3>(1);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [level, setLevel] = useState(2);
  const [count, setCount] = useState(5);

  const topics = useMemo(
    () => topicsByPart.find((entry) => entry.part === part)?.topics ?? [],
    [part, topicsByPart],
  );

  const toggleTopic = (topic: string) =>
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((item) => item !== topic) : [...prev, topic],
    );

  const start = () => {
    const params = new URLSearchParams();
    if (selectedTopics.length > 0) params.set("topics", selectedTopics.join(","));
    params.set("level", String(level));
    params.set("count", String(part === 2 ? Math.min(count, 3) : count));
    params.set("seed", Math.random().toString(36).slice(2, 7));
    router.push(`/practice/part-${part}?${params.toString()}`);
  };

  return (
    <section className="card p-5 sm:p-6">
      <header className="mb-5">
        <p className="eyebrow mb-1.5">Topic practice generator</p>
        <h2 className="text-xl">Build a practice set that fits your weakness</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Choose the part, the topics, the difficulty and how many questions. The generator builds a
          set from the same question bank examiners draw on — no two sessions are identical.
        </p>
      </header>

      <div className="space-y-6">
        <fieldset>
          <legend className="text-sm font-medium text-ink">1 · Which part?</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {([1, 2, 3] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={part === value}
                onClick={() => {
                  setPart(value);
                  setSelectedTopics([]);
                }}
                className={cn(
                  "rounded-[8px] border px-4 py-3 text-left transition-colors",
                  part === value
                    ? "border-brand-600 bg-brand-50"
                    : "border-line bg-paper hover:border-line-strong",
                )}
              >
                <span className="block font-medium text-ink">Part {value}</span>
                <span className="mt-0.5 block text-xs text-ink-muted">
                  {value === 1
                    ? "Interview · 20–30s answers"
                    : value === 2
                      ? "Cue card · 2 minutes"
                      : "Discussion · 40–60s answers"}
                </span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-ink">
            2 · Topics{" "}
            <span className="text-ink-muted">
              ({selectedTopics.length === 0 ? "all topics" : `${selectedTopics.length} selected`})
            </span>
          </legend>
          <div className="mt-2 flex max-h-56 flex-wrap gap-1.5 overflow-y-auto rounded-[6px] border border-line bg-canvas-deep p-3">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                aria-pressed={selectedTopics.includes(topic)}
                onClick={() => toggleTopic(topic)}
                className={cn(
                  "rounded-[4px] border px-2 py-1 text-xs transition-colors",
                  selectedTopics.includes(topic)
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-line bg-paper text-ink-soft hover:border-line-strong",
                )}
              >
                {topic}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-ink">3 · Difficulty</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {LEVELS.map((entry) => (
              <button
                key={entry.value}
                type="button"
                aria-pressed={level === entry.value}
                onClick={() => setLevel(entry.value)}
                className={cn(
                  "rounded-[8px] border px-3 py-2.5 text-left transition-colors",
                  level === entry.value
                    ? "border-brand-600 bg-brand-50"
                    : "border-line bg-paper hover:border-line-strong",
                )}
              >
                <span className="block text-sm font-medium text-ink">{entry.label}</span>
                <span className="mt-0.5 block text-xs text-ink-muted">{entry.detail}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-ink">4 · How many questions?</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {(part === 2 ? [1, 2, 3] : [3, 5, 8, 10]).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={count === value}
                onClick={() => setCount(value)}
                className={cn(
                  "h-11 w-14 rounded-[8px] border text-sm font-medium transition-colors",
                  count === value
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-line bg-paper text-ink-soft hover:border-line-strong",
                )}
              >
                {value}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-wrap items-center gap-3 border-t border-line pt-5">
          <button type="button" className="btn btn-primary" onClick={start}>
            Generate practice set
          </button>
          <span className="text-xs text-ink-muted">
            Part {part} · {selectedTopics.length === 0 ? "all topics" : selectedTopics.join(", ")} ·
            level {level} · {part === 2 ? Math.min(count, 3) : count} questions
          </span>
        </div>
      </div>
    </section>
  );
}
