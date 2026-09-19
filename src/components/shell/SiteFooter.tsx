import Link from "next/link";

const COLUMNS = [
  {
    title: "Learn",
    links: [
      { label: "Speaking overview", href: "/learn/overview" },
      { label: "Part 1", href: "/learn/part1" },
      { label: "Part 2", href: "/learn/part2" },
      { label: "Part 3", href: "/learn/part3" },
      { label: "Idea engine", href: "/learn/strategy" },
      { label: "Learning path", href: "/path" },
    ],
  },
  {
    title: "Skills",
    links: [
      { label: "Grammar for speaking", href: "/learn/grammar" },
      { label: "Vocabulary", href: "/learn/vocabulary" },
      { label: "Fluency", href: "/learn/fluency" },
      { label: "Pronunciation", href: "/learn/pronunciation" },
      { label: "Band 6 vs 6.5", href: "/learn/exam/band-6-vs-6-5" },
      { label: "Mistake library", href: "/mistakes" },
    ],
  },
  {
    title: "Practise",
    links: [
      { label: "Practice hub", href: "/practice" },
      { label: "Part 1 practice", href: "/practice/part-1" },
      { label: "Part 2 practice", href: "/practice/part-2" },
      { label: "Part 3 practice", href: "/practice/part-3" },
      { label: "Full mock test", href: "/practice/mock" },
      { label: "My progress", href: "/progress" },
    ],
  },
  {
    title: "Topics",
    links: [
      { label: "Part 1 topic bank", href: "/topics/part-1" },
      { label: "Part 2 cue cards", href: "/topics/part-2" },
      { label: "Part 3 question types", href: "/topics/part-3" },
      { label: "Resources", href: "/resources" },
      { label: "Documents & roadmap", href: "/docs" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-paper">
      <div className="shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2.4fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="grid h-9 w-9 place-items-center rounded-[8px] bg-brand-700 font-serif text-[15px] font-semibold text-white"
              >
                BS
              </span>
              <span className="font-serif text-lg font-semibold">Bolte Shikhi</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              An IELTS Speaking course built for Bangladeshi learners targeting Band 6.0–6.5.
              Learn how answers are built — not memorised.
            </p>
            <p className="bn-block mt-4 max-w-sm text-sm">
              মুখস্থ নয় — শিখুন কীভাবে ভাবতে হয়, বাক্য বানাতে হয় আর উত্তর এগিয়ে নিতে হয়।
              আপনার লক্ষ্য Band 6.0–6.5।
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h2 className="eyebrow mb-3">{column.title}</h2>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-soft transition-colors hover:text-brand-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Bolte Shikhi · Educational use. IELTS is a registered
            trademark of its respective owners; this platform is unaffiliated.
          </p>
          <p>
            Band descriptors described here are simplified teaching summaries, not official
            score guarantees.
          </p>
        </div>
      </div>
    </footer>
  );
}
