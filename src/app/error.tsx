"use client";

import Link from "next/link";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="shell py-20">
      <p className="eyebrow mb-3">Something broke</p>
      <h1>We could not load this page</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Your progress and notes are stored on this device, so nothing has been lost. Try again — and
        if it keeps happening, reload the page.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" className="btn btn-primary" onClick={reset}>
          Try again
        </button>
        <Link href="/" className="btn btn-secondary">
          Back home
        </Link>
      </div>
    </div>
  );
}
