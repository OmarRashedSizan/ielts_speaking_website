"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { tracks } from "@/content/tracks";
import SearchDialog from "./SearchDialog";

interface NavItem {
  label: string;
  href: string;
  bangla?: string;
  description?: string;
}

interface NavGroup {
  label: string;
  href: string;
  items: NavItem[];
}

const NAV: NavGroup[] = [
  {
    label: "Learn",
    href: "/learn",
    items: [
      ...tracks.map((track) => ({
        label: track.title,
        href: `/learn/${track.id}`,
        bangla: track.banglaTitle,
        description: track.blurb,
      })),
      {
        label: "Learning path",
        href: "/path",
        bangla: "শেখার ক্রম",
        description: "The recommended 17-stage sequence from overview to mock tests.",
      },
    ],
  },
  {
    label: "Practice",
    href: "/practice",
    items: [
      {
        label: "Practice hub",
        href: "/practice",
        bangla: "প্র্যাকটিস",
        description: "Timers, self-evaluation and recorded answer history.",
      },
      {
        label: "Part 1 practice",
        href: "/practice/part-1",
        bangla: "পার্ট ১",
        description: "Short answers: direct answer + reason + detail.",
      },
      {
        label: "Part 2 practice",
        href: "/practice/part-2",
        bangla: "পার্ট ২",
        description: "Cue card, 1-minute preparation, 2-minute speaking.",
      },
      {
        label: "Part 3 practice",
        href: "/practice/part-3",
        bangla: "পার্ট ৩",
        description: "Discussion answers with opinion, reason and example.",
      },
      {
        label: "Full mock test",
        href: "/practice/mock",
        bangla: "মক টেস্ট",
        description: "A complete 11–14 minute simulated speaking test.",
      },
    ],
  },
  {
    label: "Topics",
    href: "/topics/part-1",
    items: [
      {
        label: "Part 1 topics",
        href: "/topics/part-1",
        bangla: "৪০টি টপিক",
        description: "Vocabulary, questions, idea seeds and model answers.",
      },
      {
        label: "Part 2 cue cards",
        href: "/topics/part-2",
        bangla: "কিউ কার্ড",
        description: "23 cue-card categories with idea lenses and models.",
      },
      {
        label: "Part 3 question types",
        href: "/topics/part-3",
        bangla: "১৮ ধরনের প্রশ্ন",
        description: "Structure, patterns and worked examples for every type.",
      },
    ],
  },
  { label: "My progress", href: "/progress", items: [] },
  { label: "Mistakes", href: "/mistakes", items: [] },
  { label: "Resources", href: "/resources", items: [] },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  // Close menus on route change so mobile users are not left in a stale state.
  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) setOpenGroup(null);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/92 backdrop-blur-[6px]">
      <div className="shell flex h-16 items-center gap-3">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Bolte Shikhi — home">
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-[8px] bg-brand-700 font-serif text-[15px] font-semibold text-white"
          >
            BS
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[17px] font-semibold tracking-tight">
              Bolte Shikhi
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
              IELTS Speaking
            </span>
          </span>
        </Link>

        <nav
          ref={navRef}
          aria-label="Main"
          className="ml-auto hidden items-center gap-0.5 lg:flex"
        >
          {NAV.map((group) => {
            const active = isActive(group.href) || group.items.some((i) => isActive(i.href));
            if (group.items.length === 0) {
              return (
                <Link
                  key={group.label}
                  href={group.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-[6px] px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-soft hover:bg-canvas-deep hover:text-ink",
                  )}
                >
                  {group.label}
                </Link>
              );
            }
            const open = openGroup === group.label;
            return (
              <div key={group.label} className="relative">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenGroup(open ? null : group.label)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-[6px] px-3 py-2 text-sm font-medium transition-colors",
                    active || open
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-soft hover:bg-canvas-deep hover:text-ink",
                  )}
                >
                  {group.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                    <path
                      d="M1 3.5 5 7l4-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                {open ? (
                  <div className="animate-rise absolute left-0 top-[calc(100%+6px)] w-[22rem] rounded-lg border border-line bg-paper p-2 shadow-pop">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-[6px] px-3 py-2.5 hover:bg-canvas-deep"
                      >
                        <span className="flex items-baseline justify-between gap-3">
                          <span className="text-sm font-medium text-ink">{item.label}</span>
                          {item.bangla ? (
                            <span className="bn text-[11px] text-ink-muted">{item.bangla}</span>
                          ) : null}
                        </span>
                        {item.description ? (
                          <span className="mt-0.5 block text-xs leading-snug text-ink-muted">
                            {item.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="hidden items-center gap-2 rounded-[6px] border border-line bg-paper px-3 py-2 text-xs text-ink-muted transition-colors hover:border-line-strong hover:text-ink sm:flex"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true">
              <circle cx="6" cy="6" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="m9.5 9.5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Search lessons, topics, questions
            <kbd className="rounded-[4px] border border-line bg-canvas-deep px-1.5 py-0.5 font-sans text-[10px]">
              ⌘K
            </kbd>
          </button>
          <button
            type="button"
            aria-label="Open search"
            onClick={() => setSearchOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-[6px] border border-line bg-paper text-ink-soft sm:hidden"
          >
            <svg width="15" height="15" viewBox="0 0 14 14" aria-hidden="true">
              <circle cx="6" cy="6" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="m9.5 9.5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <Link href="/practice" className="btn btn-primary hidden btn-sm sm:inline-flex">
            Start practising
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-[6px] border border-line bg-paper lg:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              {mobileOpen ? (
                <path
                  d="M3 3l10 10M13 3 3 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2 4h12M2 8h12M2 12h12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="animate-rise max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden">
          <nav aria-label="Mobile" className="shell py-4">
            {NAV.map((group) => (
              <div key={group.label} className="border-b border-line py-3 last:border-0">
                <Link
                  href={group.href}
                  className="flex items-center justify-between text-sm font-semibold text-ink"
                >
                  {group.label}
                  <span aria-hidden="true" className="text-ink-muted">
                    →
                  </span>
                </Link>
                {group.items.length > 0 ? (
                  <ul className="mt-2 space-y-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-baseline justify-between gap-3 rounded-[6px] px-2 py-2 text-sm text-ink-soft hover:bg-canvas-deep"
                        >
                          {item.label}
                          {item.bangla ? (
                            <span className="bn text-[11px] text-ink-muted">{item.bangla}</span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            <Link href="/practice" className="btn btn-primary mt-4 w-full">
              Start practising
            </Link>
          </nav>
        </div>
      ) : null}

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
