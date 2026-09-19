import Link from "next/link";
import { cn, percent, clamp } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Text primitives                                                             */
/* -------------------------------------------------------------------------- */

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  action,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  /** Use "h1" when this heading titles the page itself. */
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:flex-col sm:items-center",
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "text-center")}>
        {eyebrow ? <Eyebrow className="mb-2">{eyebrow}</Eyebrow> : null}
        {as === "h1" ? <h1>{title}</h1> : <h2>{title}</h2>}
        {intro ? <p className="mt-3 text-ink-soft leading-relaxed">{intro}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function BanglaText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("bn", className)}>{children}</span>;
}

/* -------------------------------------------------------------------------- */
/* Data display                                                                */
/* -------------------------------------------------------------------------- */

export function Meter({
  value,
  label,
  hint,
  tone = "brand",
}: {
  value: number;
  label?: string;
  hint?: string;
  tone?: "brand" | "accent" | "danger";
}) {
  const safe = clamp(Math.round(value), 0, 100);
  const colour =
    tone === "accent"
      ? "var(--color-accent-400)"
      : tone === "danger"
        ? "var(--color-danger-500)"
        : "var(--color-brand-500)";
  return (
    <div>
      {label || hint ? (
        <div className="mb-1.5 flex items-baseline justify-between gap-3">
          {label ? <span className="text-sm font-medium text-ink">{label}</span> : null}
          <span className="text-xs font-medium tabular-nums text-ink-muted">
            {hint ?? `${safe}%`}
          </span>
        </div>
      ) : null}
      <div
        className="meter"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safe}
        aria-label={label ?? "Progress"}
      >
        <span style={{ width: `${safe}%`, background: colour }} />
      </div>
    </div>
  );
}

export function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="card p-4">
      <p className="eyebrow">{label}</p>
      <p className="mt-1.5 font-serif text-2xl leading-none text-ink">{value}</p>
      {sub ? <p className="mt-1.5 text-xs text-ink-muted">{sub}</p> : null}
    </div>
  );
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "accent" | "danger";
  className?: string;
}) {
  const tones = {
    neutral: "tag",
    brand: "tag tag-brand",
    accent: "tag tag-accent",
    danger: "tag tag-danger",
  } as const;
  return <span className={cn(tones[tone], className)}>{children}</span>;
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="card border-dashed p-6 text-center">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">{body}</p>
      {action ? <div className="mt-4 flex justify-center">{action}</div> : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Structure                                                                   */
/* -------------------------------------------------------------------------- */

export function Panel({
  title,
  eyebrow,
  children,
  action,
  className,
}: {
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("card p-5 sm:p-6", className)}>
      {title || eyebrow || action ? (
        <header className="mb-4 flex items-start justify-between gap-4">
          <div>
            {eyebrow ? <Eyebrow className="mb-1">{eyebrow}</Eyebrow> : null}
            {title ? <h3 className="text-lg">{title}</h3> : null}
          </div>
          {action}
        </header>
      ) : null}
      {children}
    </section>
  );
}

export function ProgressBarLegend({ value, total }: { value: number; total: number }) {
  return (
    <span className="text-xs tabular-nums text-ink-muted">
      {value}/{total} · {percent(value, total)}%
    </span>
  );
}

export function LinkRow({
  href,
  title,
  meta,
  description,
  right,
}: {
  href: string;
  title: string;
  meta?: React.ReactNode;
  description?: string;
  right?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="card card-interactive flex items-start gap-4 p-4 focus-visible:outline-offset-2"
    >
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-ink">{title}</span>
          {meta}
        </div>
        {description ? (
          <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{description}</p>
        ) : null}
      </div>
      <div className="flex shrink-0 items-center gap-3 text-ink-muted">{right}</div>
    </Link>
  );
}
