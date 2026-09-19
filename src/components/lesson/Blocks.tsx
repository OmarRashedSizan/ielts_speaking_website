import type {
  BanglaBlock,
  BadBetterBlock,
  CalloutBlock,
  ChecklistBlock,
  CompareBlock,
  CueCardBlock,
  ExamplesBlock,
  FlowBlock,
  LessonBlock,
  NoteGridBlock,
  PatternsBlock,
  PhraseBankBlock,
  ProseBlock,
  StepsBlock,
  TableBlock,
} from "@/content/schema";
import { cn } from "@/lib/utils";
import LessonQuiz from "./LessonQuiz";

/* -------------------------------------------------------------------------- */
/* Shared block chrome                                                         */
/* -------------------------------------------------------------------------- */

function BlockShell({
  id,
  label,
  title,
  intro,
  children,
  className,
}: {
  id?: string;
  label?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      {(label || title) && (
        <header className="mb-3">
          {label ? <p className="eyebrow mb-1.5">{label}</p> : null}
          {title ? <h3 className="text-[1.15rem]">{title}</h3> : null}
          {intro ? <p className="mt-2 text-sm text-ink-soft">{intro}</p> : null}
        </header>
      )}
      {children}
    </section>
  );
}

function toneClasses(tone: CalloutBlock["tone"]) {
  switch (tone) {
    case "tip":
      return "border-brand-200 bg-brand-50";
    case "warn":
      return "border-danger-100 bg-danger-50";
    case "bangla":
      return "border-line-strong bg-canvas-deep";
    case "quote":
      return "border-accent-200 bg-accent-50";
    default:
      return "border-line bg-paper";
  }
}

/* -------------------------------------------------------------------------- */
/* Individual blocks                                                           */
/* -------------------------------------------------------------------------- */

export function ProseBlockView({ block }: { block: ProseBlock }) {
  return (
    <BlockShell label="Concept" title={block.title} className="prose-lesson max-w-[68ch]">
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
      {block.bullets?.length ? (
        <ul>
          {block.bullets.map((bullet) => (
            <li key={bullet.slice(0, 40)}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </BlockShell>
  );
}

export function BanglaBlockView({ block }: { block: BanglaBlock }) {
  return (
    <BlockShell
      label="বাংলায় ব্যাখ্যা"
      title={block.title}
      className="rounded-lg border border-line bg-paper p-5"
    >
      <div className="bn-block space-y-3 text-[15px]">
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      {block.takeaway ? (
        <p className="mt-4 border-t border-line pt-3 text-sm text-ink">
          <span className="eyebrow mr-2">In English</span>
          {block.takeaway}
        </p>
      ) : null}
    </BlockShell>
  );
}

export function ExamplesBlockView({ block }: { block: ExamplesBlock }) {
  return (
    <BlockShell label="English examples" title={block.title} intro={block.intro}>
      <ul className="space-y-2.5">
        {block.items.map((item) => (
          <li key={item.text.slice(0, 40)} className="answer-block text-[15px]">
            {item.text}
            {item.note ? (
              <span className="mt-1 block text-xs text-ink-muted">{item.note}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </BlockShell>
  );
}

export function BadBetterBlockView({ block }: { block: BadBetterBlock }) {
  return (
    <BlockShell label="Bad → Better" title={block.title} intro={block.intro}>
      <ol className="space-y-3">
        {block.items.map((item) => (
          <li
            key={item.wrong.slice(0, 40)}
            className="overflow-hidden rounded-lg border border-line bg-paper"
          >
            <p className="answer-block answer-block-weak rounded-none border-l-0 border-b border-line text-[15px]">
              <span className="mr-2 font-semibold text-danger-700">✗</span>
              {item.wrong}
            </p>
            <p className="answer-block rounded-none border-l-0 border-b border-line text-[15px]">
              <span className="mr-2 font-semibold text-brand-700">✓</span>
              {item.right}
            </p>
            <p className="px-4 py-2.5 text-[13px] leading-relaxed text-ink-soft">
              <span className="eyebrow mr-2">Why</span>
              {item.why}
            </p>
          </li>
        ))}
      </ol>
    </BlockShell>
  );
}

export function PatternsBlockView({ block }: { block: PatternsBlock }) {
  return (
    <BlockShell label="Sentence patterns" title={block.title} intro={block.intro}>
      <div className="grid gap-3 sm:grid-cols-2">
        {block.items.map((item) => (
          <div key={item.label} className="card p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-muted">
              {item.label}
            </p>
            <p className="mono-chip mt-2 inline-block max-w-full whitespace-pre-wrap break-words">
              {item.template}
            </p>
            {item.example ? (
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{item.example}</p>
            ) : null}
            {item.note ? (
              <p className="mt-2 text-xs text-ink-muted">{item.note}</p>
            ) : null}
          </div>
        ))}
      </div>
    </BlockShell>
  );
}

export function StepsBlockView({ block }: { block: StepsBlock }) {
  return (
    <BlockShell label="Step by step" title={block.title} intro={block.intro}>
      <ol className="space-y-3">
        {block.items.map((item, index) => (
          <li key={item.title} className="flex gap-4">
            <span
              aria-hidden="true"
              className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand-200 bg-brand-50 text-xs font-semibold text-brand-700"
            >
              {index + 1}
            </span>
            <div>
              <p className="font-medium text-ink">{item.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </BlockShell>
  );
}

export function TableBlockView({ block }: { block: TableBlock }) {
  return (
    <BlockShell label="Reference" title={block.title}>
      <div className="overflow-x-auto rounded-lg border border-line bg-paper">
        <table className="data-table min-w-[34rem]">
          <thead>
            <tr>
              {block.head.map((cell) => (
                <th key={cell} scope="col">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, index) => (
              <tr key={`${row[0]}-${index}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`} className={cellIndex === 0 ? "font-medium text-ink" : ""}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.caption ? (
        <p className="mt-2 text-xs text-ink-muted">{block.caption}</p>
      ) : null}
    </BlockShell>
  );
}

export function CalloutBlockView({ block }: { block: CalloutBlock }) {
  const icons: Record<CalloutBlock["tone"], string> = {
    key: "★",
    tip: "→",
    warn: "!",
    bangla: "অ",
    quote: "“",
  };
  return (
    <aside className={cn("rounded-lg border p-4 sm:p-5", toneClasses(block.tone))}>
      <p className="flex items-center gap-2 text-sm font-semibold text-ink">
        <span aria-hidden="true" className="grid h-5 w-5 place-items-center rounded-[4px] bg-paper text-[11px]">
          {icons[block.tone]}
        </span>
        {block.title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{block.body}</p>
      {block.example ? (
        <p className="mt-3 border-l-2 border-line-strong pl-3 text-sm italic text-ink">
          {block.example}
        </p>
      ) : null}
    </aside>
  );
}

export function ChecklistBlockView({ block }: { block: ChecklistBlock }) {
  return (
    <BlockShell label="Checklist" title={block.title}>
      <ul className="grid gap-2 sm:grid-cols-2">
        {block.items.map((item) => (
          <li
            key={item.slice(0, 40)}
            className="flex items-start gap-2.5 rounded-[6px] border border-line bg-paper px-3 py-2.5 text-sm text-ink-soft"
          >
            <span aria-hidden="true" className="mt-[3px] h-3.5 w-3.5 shrink-0 rounded-[3px] border border-line-strong" />
            {item}
          </li>
        ))}
      </ul>
      {block.note ? <p className="mt-3 text-xs text-ink-muted">{block.note}</p> : null}
    </BlockShell>
  );
}

export function CompareBlockView({ block }: { block: CompareBlock }) {
  const panel = (side: CompareBlock["left"]) => (
    <div
      className={cn(
        "rounded-lg border p-4 sm:p-5",
        side.tone === "danger" ? "border-danger-100 bg-danger-50" : "border-brand-200 bg-brand-50",
      )}
    >
      <p className="eyebrow mb-2">{side.label}</p>
      <ul className="space-y-2">
        {side.bullets.map((bullet) => (
          <li key={bullet.slice(0, 40)} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
            <span aria-hidden="true" className="text-ink-muted">
              ·
            </span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <BlockShell label="Comparison" title={block.title}>
      <div className="grid gap-3 md:grid-cols-2">
        {panel(block.left)}
        {panel(block.right)}
      </div>
    </BlockShell>
  );
}

export function FlowBlockView({ block }: { block: FlowBlock }) {
  const horizontal = block.direction === "horizontal";
  return (
    <BlockShell label="Framework" title={block.title}>
      <div
        className={cn(
          "rounded-lg border border-line bg-paper p-4",
          horizontal
            ? "flex flex-wrap items-center gap-x-2 gap-y-2"
            : "flex flex-col items-start gap-1.5",
        )}
      >
        {block.steps.map((step, index) => (
          <div key={step} className={cn(horizontal ? "flex items-center gap-2" : "w-full")}>
            <span className="inline-flex items-center rounded-[6px] border border-brand-200 bg-brand-50 px-2.5 py-1 text-sm font-medium text-brand-700">
              {step}
            </span>
            {index < block.steps.length - 1 ? (
              <span
                aria-hidden="true"
                className={cn(
                  "text-ink-muted",
                  horizontal ? "ml-1" : "ml-3 block text-xs leading-none",
                )}
              >
                {horizontal ? "→" : "↓"}
              </span>
            ) : null}
          </div>
        ))}
      </div>
      {block.note ? <p className="mt-2 text-xs text-ink-muted">{block.note}</p> : null}
    </BlockShell>
  );
}

export function CueCardBlockView({ block }: { block: CueCardBlock }) {
  return (
    <BlockShell label="Cue card" title={block.title}>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-line-strong bg-paper p-5 shadow-raise">
          <p className="eyebrow mb-2">Examiner hands you this</p>
          <p className="font-serif text-lg leading-snug text-ink">{block.prompt}</p>
          <p className="mt-3 text-sm font-medium text-ink-muted">You should say:</p>
          <ul className="mt-1 space-y-1 text-sm text-ink-soft">
            {block.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span aria-hidden="true">·</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          {block.prepNotes?.length ? (
            <div className="rounded-lg border border-line bg-canvas-deep p-4">
              <p className="eyebrow mb-2">1-minute notes (keywords only)</p>
              <ul className="grid grid-cols-2 gap-1.5 text-sm text-ink">
                {block.prepNotes.map((note) => (
                  <li key={note} className="rounded-[4px] bg-paper px-2 py-1">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {block.skeleton?.length ? (
            <div className="prose-lesson rounded-lg border border-line bg-paper p-4 text-sm">
              <p className="eyebrow mb-2">How those notes become sentences</p>
              <ol className="list-decimal pl-4">
                {block.skeleton.map((line) => (
                  <li key={line.slice(0, 30)}>{line}</li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>
      </div>
    </BlockShell>
  );
}

export function PhraseBankBlockView({ block }: { block: PhraseBankBlock }) {
  return (
    <BlockShell label="Phrase bank" title={block.title} intro={block.intro}>
      <div className="grid gap-3 sm:grid-cols-2">
        {block.groups.map((group) => (
          <div key={group.label} className="card p-4">
            <p className="text-sm font-semibold text-ink">{group.label}</p>
            {group.note ? (
              <p className="bn-block mt-1 text-xs">{group.note}</p>
            ) : null}
            <ul className="mt-2.5 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="mono-chip inline-block max-w-full break-words">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BlockShell>
  );
}

export function NoteGridBlockView({ block }: { block: NoteGridBlock }) {
  return (
    <BlockShell label="At a glance" title={block.title} intro={block.intro}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item) => (
          <div key={item.label} className="card p-4">
            <div className="flex items-baseline justify-between gap-2">
              <p className="font-medium text-ink">{item.label}</p>
              {item.value ? (
                <span className="font-serif text-lg text-brand-700">{item.value}</span>
              ) : null}
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
          </div>
        ))}
      </div>
    </BlockShell>
  );
}

/* -------------------------------------------------------------------------- */
/* Renderer                                                                    */
/* -------------------------------------------------------------------------- */

export default function LessonBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case "prose":
            return <ProseBlockView key={key} block={block} />;
          case "bangla":
            return <BanglaBlockView key={key} block={block} />;
          case "examples":
            return <ExamplesBlockView key={key} block={block} />;
          case "badBetter":
            return <BadBetterBlockView key={key} block={block} />;
          case "patterns":
            return <PatternsBlockView key={key} block={block} />;
          case "steps":
            return <StepsBlockView key={key} block={block} />;
          case "mistakes":
            return (
              <BadBetterBlockView
                key={key}
                block={{
                  type: "badBetter",
                  title: block.title,
                  intro: block.intro,
                  items: block.items,
                }}
              />
            );
          case "table":
            return <TableBlockView key={key} block={block} />;
          case "callout":
            return <CalloutBlockView key={key} block={block} />;
          case "checklist":
            return <ChecklistBlockView key={key} block={block} />;
          case "quiz":
            return <LessonQuiz key={key} block={block} />;
          case "compare":
            return <CompareBlockView key={key} block={block} />;
          case "flow":
            return <FlowBlockView key={key} block={block} />;
          case "cueCard":
            return <CueCardBlockView key={key} block={block} />;
          case "phraseBank":
            return <PhraseBankBlockView key={key} block={block} />;
          case "noteGrid":
            return <NoteGridBlockView key={key} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
