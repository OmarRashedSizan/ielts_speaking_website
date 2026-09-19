"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/** Search input shared by /search and the header search dialog. */
export default function SearchField({
  initialQuery = "",
  action = "/search",
  autoFocus = false,
  onQueryChange,
}: {
  initialQuery?: string;
  action?: string;
  autoFocus?: boolean;
  onQueryChange?: (value: string) => void;
}) {
  const [value, setValue] = useState(initialQuery);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  return (
    <form
      role="search"
      action={action}
      className="flex items-center gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        const query = value.trim();
        if (query) router.push(`${action}?q=${encodeURIComponent(query)}`);
      }}
    >
      <label className="sr-only" htmlFor="site-search">
        Search lessons, topics and mistakes
      </label>
      <input
        id="site-search"
        ref={inputRef}
        name="q"
        type="search"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          onQueryChange?.(event.target.value);
        }}
        placeholder="Search lessons, topics, cue cards, mistakes…"
        autoComplete="off"
        className="w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-ink outline-none placeholder:text-ink-muted focus:border-brand-500"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}
