import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import PracticeGenerator from "@/components/practice/PracticeGenerator";
import { SectionHeading } from "@/components/ui/primitives";
import { generatorTopics } from "@/lib/practice/generator";

export const metadata: Metadata = {
  title: "Practice — timed IELTS Speaking sessions",
  description:
    "Generate a timed practice set for Part 1, Part 2 or Part 3: choose topics, difficulty and question count, then speak with a timer and get structured feedback.",
};

export default function PracticePage() {
  const topicsByPart = ([1, 2, 3] as const).map((part) => ({
    part,
    topics: generatorTopics(part),
  }));

  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Practice" }]} />
      <SectionHeading
        as="h1"
        eyebrow="Practice system"
        title="Speak out loud, then judge yourself honestly"
        intro="Reading answers does not build fluency. Every session here has a timer, a self-evaluation rubric and specific feedback on the English you actually produced — plus a voice recording you can listen back to."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <PracticeGenerator topicsByPart={topicsByPart} />

        <div className="space-y-5">
          <section className="card p-5">
            <p className="eyebrow mb-2">Full simulation</p>
            <h2 className="text-lg">Mock test</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Part 1 interview, Part 2 long turn with preparation, Part 3 discussion — run in exam
              order with a single clock and a report at the end.
            </p>
            <Link href="/practice/mock" className="btn btn-primary btn-sm mt-4">
              Take a full mock test
            </Link>
          </section>

          <section className="card p-5">
            <p className="eyebrow mb-2">How a session works</p>
            <ol className="space-y-2 text-sm text-ink-soft">
              <li>1. Read the question (or cue card).</li>
              <li>2. Prepare with keywords only — 1 minute max for Part 2.</li>
              <li>3. Speak with the timer running; record yourself if you can.</li>
              <li>4. Write the answer you gave, then self-evaluate with the rubric.</li>
              <li>5. Read the feedback and redo the question once, fixing one thing.</li>
            </ol>
          </section>

          <section className="card p-5">
            <p className="eyebrow mb-2">Progressive difficulty</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· <strong className="text-ink">Level 1:</strong> simple sentence building</li>
              <li>· <strong className="text-ink">Level 2:</strong> answer extension (reason + example)</li>
              <li>· <strong className="text-ink">Level 3:</strong> developed ideas and mixed structures</li>
              <li>· <strong className="text-ink">Level 4:</strong> unexpected, abstract questions</li>
              <li>· <strong className="text-ink">Level 5:</strong> mock conditions, no script</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
