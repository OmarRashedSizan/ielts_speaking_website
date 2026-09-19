import Link from "next/link";
import SiteHeaderlessSection from "@/components/home/Section";
import { Badge, Meter, SectionHeading } from "@/components/ui/primitives";
import { contentStats, tracks } from "@/content";
import { pathStages } from "@/content/path";

const PART_CARDS = [
  {
    part: "Part 1",
    href: "/learn/part1",
    bangla: "পরিচিতি ও ছোট প্রশ্ন",
    description:
      "4–5 minutes of familiar questions about you. Learn why a one-line answer fails and how to build answer → reason → detail every time.",
    bullets: ["YES/NO and WH question patterns", "Extending short answers", "40 topic question banks"],
  },
  {
    part: "Part 2",
    href: "/learn/part2",
    bangla: "কিউ কার্ড ও ২ মিনিট",
    description:
      "One minute to prepare, up to two minutes to speak. Learn the story engine that fills the time without memorising a script.",
    bullets: ["Universal story engine", "Sentence engineering ladder", "Keyword note-taking method"],
  },
  {
    part: "Part 3",
    href: "/learn/part3",
    bangla: "আলোচনা ও মতামত",
    description:
      "Abstract discussion questions. Learn the sentence toolkit and six answer architectures that fit almost any question.",
    bullets: ["18 question types", "Opinion → reason → example", "Speculation and hedging"],
  },
];

const SKILLS = [
  { label: "Grammar for speaking", href: "/learn/grammar", takeaway: "Tense, articles, agreement — as speaking tools" },
  { label: "Vocabulary", href: "/learn/vocabulary", takeaway: "Natural collocations, not “Band 9 words”" },
  { label: "Fluency", href: "/learn/fluency", takeaway: "Think while speaking, pause with purpose" },
  { label: "Pronunciation", href: "/learn/pronunciation", takeaway: "Intelligibility first, accent never" },
];

const LEARNER_PROBLEMS = [
  {
    problem: "“আমার idea আসছে না।”",
    solution: "The idea engine gives you twelve universal dimensions — person, place, feeling, benefit, problem — so any question has somewhere to go.",
    href: "/learn/strategy/idont-know-what-to-say",
    cta: "Install the idea engine",
  },
  {
    problem: "“কীভাবে sentence বড় করব?”",
    solution: "Sentence engineering: start with the core sentence, then add place, time, reason, detail and result — one step at a time.",
    href: "/learn/part2/part2-sentence-engineering",
    cta: "Learn sentence engineering",
  },
  {
    problem: "“Part 3-তে কীভাবে opinion দেব?”",
    solution: "A sentence toolkit with opinion, reason, contrast, cause-effect and speculation patterns you can say without thinking.",
    href: "/learn/part3/part3-sentence-toolkit",
    cta: "Open the toolkit",
  },
  {
    problem: "“Band 6 থেকে 6.5 কীভাবে যাব?”",
    solution: "Understand the difference in characteristics — development, consistency and flexibility — then fix one habit at a time.",
    href: "/learn/exam/band-6-vs-6-5",
    cta: "Compare 6 vs 6.5",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="border-b border-line bg-paper">
        <div className="shell grid gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="animate-rise">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="brand">For Bangladeshi learners</Badge>
              <Badge tone="accent">Target Band 6.0 – 6.5</Badge>
            </div>

            <h1 className="mt-6 max-w-2xl">
              Build IELTS Speaking skills — <em className="not-italic text-brand-700">don’t memorise answers.</em>
            </h1>

            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
              Learn how to think, build sentences, develop ideas and speak naturally for Band 6–6.5.
              Every lesson ends with something to say out loud.
            </p>
            <p className="bn-block mt-4 max-w-xl text-[15px]">
              মুখস্থ উত্তরের পেছনে সময় নষ্ট করবেন না। এখানে শিখবেন কীভাবে যেকোনো প্রশ্নে আইডিয়া বের
              করতে হয়, বাক্য তৈরি করতে হয় এবং উত্তর ধাপে ধাপে বড় করতে হয়।
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/learn/overview/how-the-test-works" className="btn btn-primary">
                Start learning
              </Link>
              <Link href="/practice" className="btn btn-secondary">
                Practice speaking
              </Link>
              <Link href="/path" className="btn btn-ghost">
                See the learning path →
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-4 border-t border-line pt-6 sm:grid-cols-4">
              {[
                { label: "Lessons", value: contentStats.lessons },
                { label: "Part 1 topics", value: contentStats.topics },
                { label: "Cue cards", value: contentStats.cueCards },
                { label: "Mistake entries", value: contentStats.mistakes },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="eyebrow">{stat.label}</dt>
                  <dd className="mt-1 font-serif text-2xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Sample dashboard preview — mirrors what learners see on /progress */}
          <aside className="card relative overflow-hidden p-5 shadow-raise sm:p-6">
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-600" aria-hidden="true" />
            <p className="eyebrow">Your speaking journey</p>
            <p className="mt-2 font-serif text-xl">Band 5.5 → target 6.5</p>
            <div className="mt-5 space-y-4">
              <Meter value={72} label="Part 1" hint="72%" />
              <Meter value={48} label="Part 2" hint="48%" tone="accent" />
              <Meter value={36} label="Part 3" hint="36%" tone="accent" />
              <Meter value={58} label="Grammar" hint="58%" />
              <Meter value={44} label="Vocabulary" hint="44%" tone="accent" />
            </div>
            <div className="mt-6 border-t border-line pt-4">
              <p className="eyebrow mb-2">Recommended next</p>
              <ul className="space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-brand-500">→</span>
                  Learn how to extend short answers
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-brand-500">→</span>
                  Practice reason + example (Part 3)
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-brand-500">→</span>
                  Part 2 idea generation drill
                </li>
              </ul>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-ink-muted">
              Illustrative example. Your real dashboard fills up as you complete lessons and record
              practice answers.
            </p>
          </aside>
        </div>
      </section>

      {/* ------------------------------------------------------- How it works */}
      <SiteHeaderlessSection
        eyebrow="How the platform works"
        title="Learn → Build → Practise → Improve"
        intro="Reading about speaking does not improve speaking. Every lesson produces a sentence you can say, and every practice session produces evidence you can act on."
      >
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "Learn",
              detail:
                "Understand what the examiner is measuring in each part, in simple English with Bangla explanation where it matters.",
            },
            {
              step: "Build",
              detail:
                "Use sentence patterns, structures and the story engine to construct answers — never to memorise them.",
            },
            {
              step: "Practise",
              detail:
                "Timed Part 1, Part 2 and Part 3 sessions with self-evaluation and specific feedback on what you actually said.",
            },
            {
              step: "Improve",
              detail:
                "Your dashboard shows weak areas and the next lesson. Fix one habit at a time until it becomes automatic.",
            },
          ].map((item, index) => (
            <li key={item.step} className="card relative p-5">
              <span
                aria-hidden="true"
                className="font-serif text-3xl text-brand-200"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-serif text-lg">{item.step}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
            </li>
          ))}
        </ol>
      </SiteHeaderlessSection>

      {/* ----------------------------------------------------------- The parts */}
      <SiteHeaderlessSection
        eyebrow="The three parts"
        title="Each part tests something different"
        intro="Part 1 tests whether you can develop a short answer. Part 2 tests whether you can organise a long one. Part 3 tests whether you can discuss ideas. Preparing them with the same method is the most common mistake."
        action={
          <Link href="/learn/overview/how-the-test-works" className="btn btn-secondary btn-sm">
            Start with the overview
          </Link>
        }
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {PART_CARDS.map((part) => (
            <Link key={part.part} href={part.href} className="card card-interactive flex flex-col p-6">
              <p className="font-serif text-xl">{part.part}</p>
              <p className="bn mt-1 text-sm text-ink-muted">{part.bangla}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{part.description}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
                {part.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden="true" className="text-brand-500">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <span className="mt-5 text-sm font-medium text-brand-700">Explore {part.part} →</span>
            </Link>
          ))}
        </div>
      </SiteHeaderlessSection>

      {/* ---------------------------------------------------------- Idea demo */}
      <section className="border-y border-line tint-wash">
        <div className="shell grid gap-10 py-14 lg:grid-cols-[1fr_1fr] lg:py-16">
          <div>
            <SectionHeading
              eyebrow="From one sentence to two minutes"
              title="Watch an answer get built, not memorised"
              intro="This is how every lesson works: the same idea, developed in four steps. Nothing here is a script to memorise — the structure is what you reuse."
            />
            <Link href="/learn/part2/part2-sentence-engineering" className="btn btn-primary mt-6">
              Learn sentence engineering
            </Link>
          </div>
          <ol className="space-y-3">
            {[
              { level: "Level 1", text: "I visited Cox’s Bazar.", note: "Core sentence — subject + verb + object." },
              {
                level: "Level 2",
                text: "I visited Cox’s Bazar with my friends.",
                note: "+ WHO — the company is what makes it a story.",
              },
              {
                level: "Level 3",
                text: "I visited Cox’s Bazar with my friends during a short winter holiday.",
                note: "+ WHEN — a time reference adds context.",
              },
              {
                level: "Level 4",
                text:
                  "I visited Cox’s Bazar with my friends during a short winter holiday, and it turned out to be one of the most enjoyable trips I had ever had.",
                note: "+ RESULT — the sentence now carries an opinion.",
              },
            ].map((item) => (
              <li key={item.level} className="card p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="eyebrow">{item.level}</span>
                  <span className="text-xs text-ink-muted">{item.note}</span>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-ink">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------- Skills */}
      <SiteHeaderlessSection
        eyebrow="Skills"
        title="Four skills that quietly decide your band"
        intro="Fluency is not speed, vocabulary is not rare words, grammar is not long sentences, and pronunciation is not a foreign accent. Learn what each one actually means in the exam."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill) => (
            <Link key={skill.href} href={skill.href} className="card card-interactive p-5">
              <p className="font-medium text-ink">{skill.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{skill.takeaway}</p>
              <span className="mt-4 inline-block text-sm text-brand-700">Open track →</span>
            </Link>
          ))}
        </div>
      </SiteHeaderlessSection>

      {/* -------------------------------------------------- Learner problems */}
      <section className="border-y border-line tint-wash">
        <div className="shell py-14">
          <SectionHeading
            eyebrow="Built around your actual questions"
            title="Every feature answers a real Bangladeshi learner problem"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {LEARNER_PROBLEMS.map((item) => (
              <article key={item.problem} className="card p-5">
                <p className="bn text-[17px] text-ink">{item.problem}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.solution}</p>
                <Link href={item.href} className="mt-4 inline-block text-sm font-medium text-brand-700">
                  {item.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Path strip */}
      <SiteHeaderlessSection
        eyebrow="Learning path"
        title="A sequence, so you never wonder what to do next"
        intro="Seventeen stages from understanding the test to taking full mock tests. Each stage unlocks the next skill."
        action={
          <Link href="/path" className="btn btn-secondary btn-sm">
            View the full path
          </Link>
        }
      >
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pathStages.slice(0, 9).map((stage) => (
            <li key={stage.id} className="flex gap-3 rounded-[8px] border border-line bg-paper p-4">
              <span
                aria-hidden="true"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand-200 bg-brand-50 text-xs font-semibold text-brand-700"
              >
                {stage.order}
              </span>
              <span>
                <span className="block text-sm font-medium text-ink">{stage.title}</span>
                <span className="mt-0.5 block text-xs text-ink-muted">{stage.outcome}</span>
              </span>
            </li>
          ))}
        </ol>
      </SiteHeaderlessSection>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="shell pb-16">
        <div className="rounded-xl border border-brand-200 bg-brand-50 p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow eyebrow-brand mb-2">Start where you are</p>
              <h2>Your first 30 minutes</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Read the test overview (8 min), learn the YES/NO answer structure (9 min), then
                record one Part 1 answer (10 min). That is the whole loop — and it repeats for every
                skill in this course.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/learn/overview/how-the-test-works" className="btn btn-primary">
                Start now
              </Link>
              <Link href="/practice/part-1" className="btn btn-secondary">
                Try Part 1 practice
              </Link>
            </div>
          </div>
          <p className="mt-8 text-xs text-ink-muted">
            {tracks.length} learning tracks · {contentStats.lessons} lessons · {contentStats.questions}{" "}
            practice questions · {contentStats.mistakes} mistake entries — and the content is plain
            data, so it keeps growing.
          </p>
        </div>
      </section>
    </>
  );
}
