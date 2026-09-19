import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell py-20">
      <p className="eyebrow mb-3">404</p>
      <h1>That page is not here</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        The link may be old, or the lesson may have moved. Try the lesson library, the practice hub,
        or search with ⌘K.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/learn" className="btn btn-primary">
          Browse lessons
        </Link>
        <Link href="/practice" className="btn btn-secondary">
          Practise speaking
        </Link>
        <Link href="/" className="btn btn-ghost">
          Back home
        </Link>
      </div>
    </div>
  );
}
