import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import MistakeLibrary from "@/components/mistakes/MistakeLibrary";
import { mistakes } from "@/content";
import { contentStats } from "@/content";

export const metadata: Metadata = {
  title: "Mistake library — common Bangladeshi learner errors",
  description:
    "Searchable library of the mistakes Bangladeshi IELTS candidates make most: grammar, vocabulary, pronunciation, fluency, sentence structure, direct translation and repetition.",
};

export default async function MistakesPage({
  searchParams,
}: {
  searchParams: Promise<{ focus?: string }>;
}) {
  const query = await searchParams;
  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Mistake library" }]} />
      <div className="mb-8 max-w-3xl">
        <h1>Mistake library</h1>
        <p className="mt-4 leading-relaxed text-ink-soft">
          {contentStats.mistakes} entries, each with the wrong version, the natural version and why it
          matters. Tick “I have fixed this” once you stop making it in recorded practice — the library
          remembers, and your own practice feedback links back here automatically.
        </p>
      </div>
      <MistakeLibrary entries={mistakes} initialFocus={query.focus} />
    </div>
  );
}
