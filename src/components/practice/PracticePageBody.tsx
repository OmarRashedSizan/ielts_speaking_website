import Link from "next/link";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import PracticeSession, { type PracticeItem } from "./PracticeSession";
import { Badge } from "@/components/ui/primitives";

/** Shared server-side shell for Part 1 / 2 / 3 practice pages. */
export default function PracticePageBody({
  part,
  items,
  speakSeconds,
  prepSeconds,
  contextLabel,
  title,
  intro,
  lessonHref,
  topicsHref,
}: {
  part: 1 | 2 | 3;
  items: PracticeItem[];
  speakSeconds: number;
  prepSeconds?: number;
  contextLabel: string;
  title: string;
  intro: string;
  lessonHref: string;
  topicsHref: string;
}) {
  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Practice", href: "/practice" }, { label: `Part ${part}` }]}
      />
      <div className="mb-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="brand">Part {part} practice</Badge>
          <Badge>{items.length} questions in this set</Badge>
        </div>
        <h1 className="mt-5">{title}</h1>
        <p className="mt-4 leading-relaxed text-ink-soft">{intro}</p>
        <p className="mt-3 flex flex-wrap gap-4 text-sm">
          <Link href={lessonHref} className="text-brand-700 underline">
            Read the lesson first →
          </Link>
          <Link href={topicsHref} className="text-brand-700 underline">
            Browse topic banks →
          </Link>
          <Link href="/practice" className="text-brand-700 underline">
            Change topics / difficulty →
          </Link>
        </p>
      </div>

      <PracticeSession
        part={part}
        items={items}
        speakSeconds={speakSeconds}
        prepSeconds={prepSeconds}
        contextLabel={contextLabel}
      />
    </div>
  );
}
