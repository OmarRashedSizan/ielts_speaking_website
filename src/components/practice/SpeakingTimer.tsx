"use client";

import { useEffect, useRef, useState } from "react";
import { cn, formatClock } from "@/lib/utils";

export type TimerPhase = {
  id: string;
  label: string;
  seconds: number;
  /** Guidance shown while this phase runs. */
  hint?: string;
  /** Count up (preparation) or count down (speaking). */
  mode?: "down" | "up";
};

interface Props {
  phases: TimerPhase[];
  onPhaseChange?: (phase: TimerPhase, index: number) => void;
  onComplete?: () => void;
  /** Start immediately when mounted (mock test flow). */
  autoStart?: boolean;
  compact?: boolean;
}

/**
 * Speaking timer used by every practice mode.
 *
 * Uses a wall-clock delta rather than counting interval ticks so it stays
 * accurate when the tab is backgrounded on a low-end phone — common among the
 * learners this platform is built for.
 */
export default function SpeakingTimer({
  phases,
  onPhaseChange,
  onComplete,
  autoStart = false,
  compact = false,
}: Props) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [running, setRunning] = useState(autoStart);
  const [elapsed, setElapsed] = useState(0);
  const startedAt = useRef<number | null>(null);
  const finishedRef = useRef(false);

  const phase = phases[phaseIndex];

  useEffect(() => {
    if (!running || !phase) return;
    if (startedAt.current === null) startedAt.current = Date.now() - elapsed * 1000;
    let frame = 0;
    const tick = () => {
      const seconds = Math.floor((Date.now() - (startedAt.current ?? Date.now())) / 1000);
      setElapsed(seconds);
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [running, phase, elapsed]);

  useEffect(() => {
    if (!phase) return;
    const limit = phase.seconds;
    if (elapsed >= limit) {
      if (phaseIndex < phases.length - 1) {
        const nextIndex = phaseIndex + 1;
        setPhaseIndex(nextIndex);
        setElapsed(0);
        startedAt.current = Date.now();
        onPhaseChange?.(phases[nextIndex], nextIndex);
      } else if (!finishedRef.current) {
        finishedRef.current = true;
        setRunning(false);
        onComplete?.();
      }
    }
  }, [elapsed, phase, phaseIndex, phases, onPhaseChange, onComplete]);

  if (!phase) return null;

  const remaining = Math.max(0, phase.seconds - elapsed);
  const progress = Math.min(100, (elapsed / phase.seconds) * 100);
  const display = phase.mode === "up" ? elapsed : remaining;
  const nearingEnd = phase.mode !== "up" && remaining <= 10;

  return (
    <div
      className={cn(
        "rounded-lg border border-line bg-paper p-4",
        compact ? "sm:p-4" : "sm:p-5",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="eyebrow">{phase.label}</p>
          <p className="mt-0.5 text-sm text-ink-soft">
            {phases.length > 1 ? `Stage ${phaseIndex + 1} of ${phases.length}` : "Timer"}
          </p>
        </div>
        <div
          className={cn(
            "font-serif text-4xl tabular-nums leading-none",
            nearingEnd ? "text-danger-500" : "text-ink",
          )}
          role="timer"
          aria-live="off"
        >
          {formatClock(display)}
        </div>
      </div>

      <div className="meter mt-4" aria-hidden="true">
        <span
          style={{
            width: `${progress}%`,
            background: nearingEnd ? "var(--color-danger-500)" : undefined,
          }}
        />
      </div>

      {phase.hint ? (
        <p className="mt-3 text-xs leading-relaxed text-ink-muted">{phase.hint}</p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => {
            if (running) {
              setRunning(false);
              startedAt.current = Date.now() - elapsed * 1000;
            } else {
              startedAt.current = Date.now() - elapsed * 1000;
              setRunning(true);
            }
          }}
        >
          {running ? "Pause" : elapsed > 0 ? "Resume" : "Start timer"}
        </button>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => {
            setRunning(false);
            setElapsed(0);
            startedAt.current = null;
          }}
        >
          Reset
        </button>
        {phases.length > 1 && phaseIndex < phases.length - 1 ? (
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => {
              const nextIndex = phaseIndex + 1;
              setPhaseIndex(nextIndex);
              setElapsed(0);
              startedAt.current = Date.now();
              onPhaseChange?.(phases[nextIndex], nextIndex);
            }}
          >
            Skip to {phases[phaseIndex + 1].label.toLowerCase()}
          </button>
        ) : null}
      </div>

      {!running && elapsed === 0 ? (
        <p className="mt-3 text-xs text-ink-muted">
          Tip: put the phone on a table, stand up, and speak as if the examiner were in front of
          you.
        </p>
      ) : null}
    </div>
  );
}
