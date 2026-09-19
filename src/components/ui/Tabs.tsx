"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  /** Optional short count/label shown next to the title. */
  meta?: string;
  content: React.ReactNode;
}

/** Accessible tabs (roving arrow keys, proper roles) used on topic pages. */
export default function Tabs({ items, dense = false }: { items: TabItem[]; dense?: boolean }) {
  const [active, setActive] = useState(items[0]?.id);
  const baseId = useId();
  const current = items.find((item) => item.id === active) ?? items[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Sections"
        className="no-scrollbar -mx-1 mb-6 flex gap-1 overflow-x-auto border-b border-line px-1"
      >
        {items.map((item) => {
          const selected = current?.id === item.id;
          return (
            <button
              key={item.id}
              id={`${baseId}-tab-${item.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => {
                const index = items.findIndex((entry) => entry.id === item.id);
                if (event.key === "ArrowRight") {
                  const next = items[(index + 1) % items.length];
                  if (next) setActive(next.id);
                }
                if (event.key === "ArrowLeft") {
                  const previous = items[(index - 1 + items.length) % items.length];
                  if (previous) setActive(previous.id);
                }
              }}
              className={cn(
                "shrink-0 whitespace-nowrap border-b-2 px-3 text-sm font-medium transition-colors",
                dense ? "py-2" : "py-2.5",
                selected
                  ? "border-brand-600 text-brand-700"
                  : "border-transparent text-ink-soft hover:text-ink",
              )}
            >
              {item.label}
              {item.meta ? (
                <span className="ml-2 text-xs font-normal text-ink-muted">{item.meta}</span>
              ) : null}
            </button>
          );
        })}
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          id={`${baseId}-panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${item.id}`}
          hidden={current?.id !== item.id}
          className="animate-rise"
        >
          {current?.id === item.id ? item.content : null}
        </div>
      ))}
    </div>
  );
}
