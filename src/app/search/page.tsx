import type { Metadata } from "next";
import Link from "next/link";
import { getSearchIndex } from "@/lib/search";
import { search } from "@/lib/search/engine";
import { KIND_LABEL } from "@/lib/search/types";
import { Badge } from "@/components/ui/primitives";
import SearchField from "@/components/search/SearchField";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search every lesson, topic, cue card, question and mistake on Bolte Shikhi — for example “how to answer why questions”.",
};

const EXAMPLES = [
  "how to answer why questions",
  "cue card person",
  "present perfect",
  "actually",
  "fillers",
  "band 6 vs 6.5",
  "since for",
  "part 3 comparison",
];

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  const results = query.length >= 2 ? search(getSearchIndex(), query, 40) : [];

  const grouped = new Map<string, typeof results>();
  for (const result of results) {
    const list = grouped.get(result.kind) ?? [];
    list.push(result);
    grouped.set(result.kind, list);
  }

  return (
    <div className="shell py-10 md:py-14">
      <header className="max-w-2xl">
        <p className="eyebrow">Search</p>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-ink md:text-4xl">
          Find anything in the course
        </h1>
        <p className="mt-3 text-ink-soft">
          One index across lessons, topics, cue cards, Part 1 and Part 3 questions, the mistake
          library and the resources. Bangla titles are searchable too.
        </p>
      </header>

      <div className="mt-6 max-w-2xl">
        <SearchField initialQuery={query} action="/search" />
      </div>

      {query.length < 2 ? (
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
            Try one of these
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {EXAMPLES.map((example) => (
              <li key={example}>
                <Link href={`/search?q=${encodeURIComponent(example)}`} className="tag">
                  {example}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm text-ink-muted">
            Tip: searching in English works best for grammar terms (<em>present perfect</em>,
            <em> articles</em>), while Bangla searches work for meaning (<span className="bn">অনুশোচনা</span>).
          </p>
        </section>
      ) : results.length === 0 ? (
        <div className="mt-10 card p-6">
          <h2 className="font-medium text-ink">No results for “{query}”</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>• Check spelling, or try a shorter phrase.</li>
            <li>• Search in English for grammar patterns, or in Bangla for meaning.</li>
            <li>
              • Browse the{" "}
              <Link href="/learn" className="link">
                lesson library
              </Link>{" "}
              or the{" "}
              <Link href="/mistakes" className="link">
                mistake library
              </Link>
              .
            </li>
          </ul>
        </div>
      ) : (
        <div className="mt-10">
          <p className="text-sm text-ink-muted">
            {results.length} result{results.length === 1 ? "" : "s"} for “{query}”
          </p>
          <div className="mt-6 space-y-10">
            {[...grouped.entries()].map(([kind, items]) => (
              <section key={kind}>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                  {KIND_LABEL[kind as keyof typeof KIND_LABEL] ?? kind} · {items.length}
                </h2>
                <ul className="mt-3 space-y-3">
                  {items.map((result) => (
                    <li key={result.id}>
                      <Link
                        href={result.href}
                        className="card block p-4 transition-colors hover:border-line-strong"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-medium text-ink">{result.title}</span>
                          {result.part ? <Badge tone="neutral">Part {result.part}</Badge> : null}
                        </div>
                        <p className="mt-1 text-xs uppercase tracking-wide text-ink-muted">
                          {result.subtitle}
                        </p>
                        {result.snippet ? (
                          <p className="mt-2 text-sm text-ink-soft">{result.snippet}</p>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
