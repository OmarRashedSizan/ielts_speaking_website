"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { KIND_LABEL, type SearchResult } from "@/lib/search/types";
import { cn } from "@/lib/utils";

const RECENT_KEY = "bolte-shikhi.recent-searches";

const SUGGESTIONS = [
  "how to answer why questions",
  "extend short answers",
  "part 2 cue card story",
  "because although",
  "articles mistake",
  "future prediction part 3",
];

export default function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [highlight, setHighlight] = useState(0);
  const [recent, setRecent] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 40);
      try {
        const stored = window.localStorage.getItem(RECENT_KEY);
        if (stored) setRecent(JSON.parse(stored).slice(0, 5));
      } catch {
        /* ignore */
      }
      return () => clearTimeout(timer);
    }
    setHighlight(0);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const term = query.trim();
    if (term.length < 2) {
      setResults([]);
      setStatus("idle");
      return;
    }
    const controller = new AbortController();
    setStatus("loading");
    const timer = setTimeout(async () => {
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(term)}`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("search failed");
        const data = (await response.json()) as { results: SearchResult[] };
        setResults(data.results);
        setHighlight(0);
        setStatus("ready");
      } catch (error) {
        if ((error as Error).name !== "AbortError") setStatus("error");
      }
    }, 160);
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [query, open]);

  const commit = (term: string) => {
    const next = [term, ...recent.filter((r) => r !== term)].slice(0, 5);
    setRecent(next);
    try {
      window.localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const grouped = useMemo(() => {
    const out: { kind: string; items: SearchResult[] }[] = [];
    for (const result of results) {
      const group = out.find((g) => g.kind === result.kind);
      if (group) group.items.push(result);
      else out.push({ kind: result.kind, items: [result] });
    }
    return out;
  }, [results]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (results.length === 0) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setHighlight((h) => (h + 1) % results.length);
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setHighlight((h) => (h - 1 + results.length) % results.length);
      }
      if (event.key === "Enter") {
        const target = results[highlight];
        if (target) {
          event.preventDefault();
          commit(query.trim());
          window.location.assign(target.href);
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, results, highlight, onClose, query]);

  useEffect(() => {
    const node = listRef.current?.querySelector<HTMLElement>(`[data-index="${highlight}"]`);
    node?.scrollIntoView({ block: "nearest" });
  }, [highlight]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search the platform"
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink/35 px-3 pt-[8vh] sm:px-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="animate-rise w-full max-w-2xl overflow-hidden rounded-xl border border-line bg-paper shadow-pop">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <svg width="15" height="15" viewBox="0 0 14 14" aria-hidden="true" className="text-ink-muted">
            <circle cx="6" cy="6" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="m9.5 9.5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try: how to answer why questions"
            aria-label="Search lessons, topics, questions and mistakes"
            className="w-full bg-transparent py-1 text-[15px] text-ink outline-none placeholder:text-ink-muted"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="rounded-[4px] border border-line px-2 py-1 text-[11px] text-ink-muted hover:text-ink"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[62vh] overflow-y-auto">
          {status === "idle" ? (
            <div className="p-4">
              {recent.length > 0 ? (
                <div className="mb-4">
                  <p className="eyebrow mb-2">Recent</p>
                  <div className="flex flex-wrap gap-2">
                    {recent.map((term) => (
                      <button
                        key={term}
                        type="button"
                        className="tag hover:border-line-strong"
                        onClick={() => setQuery(term)}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
              <p className="eyebrow mb-2">Try asking</p>
              <ul className="space-y-1">
                {SUGGESTIONS.map((suggestion) => (
                  <li key={suggestion}>
                    <button
                      type="button"
                      onClick={() => setQuery(suggestion)}
                      className="w-full rounded-[6px] px-3 py-2 text-left text-sm text-ink-soft hover:bg-canvas-deep hover:text-ink"
                    >
                      “{suggestion}”
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {status === "loading" && results.length === 0 ? (
            <div className="space-y-2 p-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse-soft h-12 rounded-[6px] bg-canvas-deep" />
              ))}
            </div>
          ) : null}

          {status === "error" ? (
            <div className="p-6 text-center text-sm text-ink-soft">
              Search is unavailable right now. Please try again, or browse{" "}
              <Link href="/learn" className="underline" onClick={onClose}>
                the lesson library
              </Link>
              .
            </div>
          ) : null}

          {status === "ready" && results.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-sm font-medium text-ink">
                No results for “{query.trim()}”
              </p>
              <p className="mx-auto mt-1 max-w-sm text-sm text-ink-soft">
                Try shorter words (“reason”, “part 2”, “articles”) or search in Bangla
                keywords like “grammar”.
              </p>
            </div>
          ) : null}

          {results.length > 0 ? (
            <ul ref={listRef} className="py-2">
              {grouped.map((group) => (
                <li key={group.kind}>
                  <p className="eyebrow px-4 py-2">{KIND_LABEL[group.items[0].kind as keyof typeof KIND_LABEL]}</p>
                  <ul>
                    {group.items.map((item) => {
                      const index = results.indexOf(item);
                      return (
                        <li key={item.id}>
                          <Link
                            href={item.href}
                            data-index={index}
                            onMouseEnter={() => setHighlight(index)}
                            onClick={() => commit(query.trim())}
                            className={cn(
                              "block px-4 py-2.5",
                              index === highlight ? "bg-brand-50" : "hover:bg-canvas-deep",
                            )}
                          >
                            <span className="flex items-center justify-between gap-3">
                              <span className="text-sm font-medium text-ink">{item.title}</span>
                              {item.part ? (
                                <span className="tag">Part {item.part}</span>
                              ) : null}
                            </span>
                            <span className="mt-0.5 block text-xs text-ink-muted">
                              {item.subtitle}
                            </span>
                            {item.snippet ? (
                              <span className="mt-1 block text-xs leading-snug text-ink-soft">
                                {item.snippet}
                              </span>
                            ) : null}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-line bg-canvas-deep px-4 py-2 text-[11px] text-ink-muted">
          <span>↑ ↓ to navigate · Enter to open · Esc to close</span>
          <span>{results.length > 0 ? `${results.length} results` : "Global search"}</span>
        </div>
      </div>
    </div>
  );
}
