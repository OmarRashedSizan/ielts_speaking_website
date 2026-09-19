import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import MockTest from "@/components/practice/MockTest";
import { Badge } from "@/components/ui/primitives";
import { buildMockTest } from "@/lib/practice/generator";
import { seededShuffle } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Full mock test — IELTS Speaking simulation",
  description:
    "Run a complete IELTS Speaking mock test: Part 1 interview, Part 2 cue card with preparation, Part 3 discussion, then a structured self-evaluation report.",
};

const SEEDS = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot"];

export default async function MockPage({
  searchParams,
}: {
  searchParams: Promise<{ seed?: string }>;
}) {
  const query = await searchParams;
  const seed = query.seed && /^[a-z0-9-]{3,12}$/i.test(query.seed) ? query.seed : "alpha";
  const data = buildMockTest(seed);
  const otherSeeds = seededShuffle(SEEDS, `mock-${seed}`).slice(0, 3);

  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Practice", href: "/practice" }, { label: "Mock test" }]} />
      <div className="mb-8 max-w-3xl">
        <Badge tone="brand">Full simulation</Badge>
        <h1 className="mt-5">Full IELTS Speaking mock test</h1>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Eleven to fourteen minutes, in exam order. Speak out loud, do not pause the timer, and let
          yourself make mistakes — the report at the end is what tells you where the marks are
          leaking.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/learn/exam/mock-test-guide" className="text-brand-700 underline">
            How to use mock tests properly →
          </Link>
          <Link href="/learn/exam/self-evaluation" className="text-brand-700 underline">
            Self-evaluation guide →
          </Link>
        </div>
        <p className="mt-4 text-xs text-ink-muted">
          Want a different test? Try seeds:{" "}
          {otherSeeds.map((value) => (
            <Link key={value} href={`/practice/mock?seed=${value}`} className="mr-2 underline">
              {value}
            </Link>
          ))}
        </p>
      </div>
      <MockTest data={data} seed={seed} />
    </div>
  );
}
