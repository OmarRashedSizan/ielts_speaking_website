import type { Metadata } from "next";
import PracticePageBody from "@/components/practice/PracticePageBody";
import { generateQuestionSet } from "@/lib/practice/generator";

export const metadata: Metadata = {
  title: "Part 2 practice — cue cards with 1-minute preparation",
  description:
    "Timed IELTS Speaking Part 2 practice: cue card, one minute of keyword preparation, two minutes of speaking, then self-evaluation and feedback.",
};

export default async function Part2PracticePage({
  searchParams,
}: {
  searchParams: Promise<{ topics?: string; level?: string; count?: string; seed?: string; focus?: string }>;
}) {
  const query = await searchParams;
  const topics = query.topics ? query.topics.split(",").filter(Boolean) : [];
  const level = Number(query.level ?? 3);
  const count = Math.min(3, Math.max(1, Number(query.count ?? 1)));

  const set = generateQuestionSet({
    part: 2,
    topics,
    level: Number.isNaN(level) ? 3 : level,
    count: Number.isNaN(count) ? 1 : count,
    seed: query.seed ?? "part2-default",
  });

  const cards = "cueCards" in set ? set.cueCards : [];
  const items = cards.map((card) => ({
    id: card.id,
    question: card.prompt,
    helper: `Cue card · ${card.topic}`,
    bullets: card.bullets,
    pattern: "Setting → background → main event → details → feeling → result → why it matters.",
    sourcePath: card.sourcePath,
  }));

  return (
    <PracticePageBody
      part={2}
      items={items}
      speakSeconds={120}
      prepSeconds={60}
      title="Part 2 practice"
      intro="One minute to prepare with keywords only, then up to two minutes of speaking. Aim for 1:45–2:00 of continuous speech that follows the story engine — not a memorised script."
      lessonHref="/learn/part2/one-minute-preparation"
      topicsHref="/topics/part-2"
      contextLabel={
        topics.length > 0
          ? `Cue cards: ${topics.join(", ")} · level ${level}`
          : `Random cue cards · level ${level}`
      }
    />
  );
}
