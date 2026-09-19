/** Editorial section wrapper: consistent vertical rhythm + max-width heading block. */
export default function Section({
  eyebrow,
  title,
  intro,
  children,
  action,
  tint = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  tint?: boolean;
}) {
  return (
    <section className={tint ? "border-y border-line tint-wash" : undefined}>
      <div className="shell py-14 lg:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
            <h2>{title}</h2>
            {intro ? <p className="mt-3 leading-relaxed text-ink-soft">{intro}</p> : null}
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
