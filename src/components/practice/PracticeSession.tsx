"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SpeakingTimer, { type TimerPhase } from "./SpeakingTimer";
import SelfEvaluation, { type SelfEvaluationValue } from "./SelfEvaluation";
import EvaluationPanel from "./EvaluationPanel";
import { useProgress } from "@/components/providers/ProgressProvider";
import { useAudioRecorder } from "@/hooks/useAudioRecorder";
import { useSpeechToText } from "@/hooks/useSpeechToText";
import type { EvaluationResult } from "@/lib/practice/evaluate";
import { Badge, Meter } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export interface PracticeItem {
  id: string;
  question: string;
  helper?: string;
  bullets?: string[];
  pattern?: string;
  sourcePath?: string;
}

interface Props {
  part: 1 | 2 | 3;
  items: PracticeItem[];
  speakSeconds: number;
  prepSeconds?: number;
  /** Shown above the session, e.g. the generated set description. */
  contextLabel?: string;
}

type Step = "brief" | "prepare" | "speak" | "review" | "feedback";

const STEP_LABELS: Record<Step, string> = {
  brief: "Read the question",
  prepare: "Prepare",
  speak: "Speak",
  review: "Review & self-evaluate",
  feedback: "Feedback",
};

export default function PracticeSession({
  part,
  items,
  speakSeconds,
  prepSeconds,
  contextLabel,
}: Props) {
  const { recordPractice, savePrepNote, state } = useProgress();
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState<Step>(prepSeconds ? "prepare" : "speak");
  const [transcript, setTranscript] = useState("");
  const [secondsSpoken, setSecondsSpoken] = useState(0);
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [evaluating, setEvaluating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recordVoice, setRecordVoice] = useState(false);
  const [completed, setCompleted] = useState<
    { question: string; seconds: number; scores: SelfEvaluationValue["scores"] }[]
  >([]);
  const [notes, setNotes] = useState("");
  const speakStartedAt = useRef<number | null>(null);

  const recorder = useAudioRecorder();
  const item = items[index];
  const dictation = useSpeechToText((text) =>
    setTranscript((prev) => `${prev}${prev ? " " : ""}${text}`),
  );

  const savedNote = item ? (state.prepNotes[item.id] ?? "") : "";

  useEffect(() => {
    setNotes(savedNote);
  }, [savedNote]);

  const phases = useMemo<TimerPhase[]>(() => {
    const list: TimerPhase[] = [];
    if (prepSeconds) {
      list.push({
        id: "prepare",
        label: "1-minute preparation",
        seconds: prepSeconds,
        hint: "Write keywords only — WHO / WHERE / WHEN / WHAT / WHY / FEELING. No full sentences.",
      });
    }
    list.push({
      id: "speak",
      label: part === 2 ? "Speaking (aim 1:45–2:00)" : "Your answer",
      seconds: speakSeconds,
      hint:
        part === 1
          ? "Answer → reason → small detail. Keep it to 20–30 seconds."
          : part === 2
            ? "Setting → background → main event → details → feeling → result → why it matters."
            : "Opinion → reason → example → (contrast). 40–60 seconds is plenty.",
    });
    return list;
  }, [part, prepSeconds, speakSeconds]);

  // Track real speaking time so feedback uses what actually happened.
  useEffect(() => {
    if (step === "speak") speakStartedAt.current = Date.now();
    if (step !== "speak") speakStartedAt.current = null;
  }, [step, index]);

  const stopSpeaking = useCallback((target: number) => {
    const startedAt = speakStartedAt.current;
    const elapsed = startedAt ? Math.round((Date.now() - startedAt) / 1000) : 0;
    const measured = elapsed > 0 ? Math.min(target, Math.max(5, elapsed)) : target;
    setSecondsSpoken(measured);
    recorder.stop();
    setStep("review");
  }, [recorder]);

  const reset = useCallback((nextIndex?: number) => {
    setTranscript("");
    setSecondsSpoken(0);
    setResult(null);
    setError(null);
    speakStartedAt.current = null;
    if (typeof nextIndex === "number") setIndex(nextIndex);
    setStep(prepSeconds ? "prepare" : "speak");
  }, [prepSeconds]);

  const submitForFeedback = async (selfEval?: SelfEvaluationValue) => {
    if (!item) return;
    if (transcript.trim().length < 10) {
      setError("Write at least one full sentence so the feedback has something to analyse.");
      return;
    }
    setEvaluating(true);
    setError(null);
    try {
      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          transcript,
          secondsSpoken: Math.max(5, secondsSpoken || speakSeconds),
          part,
          question: item.question,
        }),
      });
      const data = (await response.json()) as EvaluationResult | { error: string };
      if (!response.ok || "error" in data) {
        throw new Error("error" in data ? data.error : "Evaluation failed");
      }
      setResult(data);
      setStep("feedback");
      recordPractice({
        part,
        questionId: item.id,
        question: item.question,
        secondsSpoken: Math.max(5, secondsSpoken || speakSeconds),
        wordCount: transcript.trim().split(/\s+/).length,
        scores: selfEval?.scores ?? {},
      });
      setCompleted((prev) => [
        ...prev,
        {
          question: item.question,
          seconds: Math.max(5, secondsSpoken || speakSeconds),
          scores: selfEval?.scores ?? {},
        },
      ]);
    } catch (caught) {
      setError(
        caught instanceof Error && caught.message !== "Evaluation failed"
          ? caught.message
          : "We could not analyse that answer. Check your connection and try again — your answer text is still here.",
      );
    } finally {
      setEvaluating(false);
    }
  };

  if (!item) {
    return (
      <div className="card p-6">
        <h3 className="text-lg">No questions in this set</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Try a different topic or difficulty — or let the generator build a fresh set.
        </p>
        <Link href="/practice" className="btn btn-primary btn-sm mt-4">
          Open the practice generator
        </Link>
      </div>
    );
  }

  const stepIndex = ["brief", "prepare", "speak", "review", "feedback"].indexOf(step);
  const finished = completed.length >= items.length;

  return (
    <div className="space-y-5">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Badge tone="brand">Part {part}</Badge>
          <span className="text-sm text-ink-soft">
            Question {index + 1} of {items.length}
          </span>
          {contextLabel ? <span className="text-xs text-ink-muted">· {contextLabel}</span> : null}
        </div>
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span>{STEP_LABELS[step]}</span>
          <span className="hidden sm:inline">· step {stepIndex + 1}/5</span>
        </div>
      </header>

      <Meter value={((index + (finished ? 1 : 0)) / items.length) * 100} label="Session progress" />

      <article className="rounded-lg border border-line-strong bg-paper p-5 shadow-raise">
        <p className="eyebrow mb-2">
          {item.helper ? item.helper : part === 2 ? "Cue card" : "Examiner question"}
        </p>
        <h2 className="font-serif text-xl leading-snug">{item.question}</h2>
        {item.bullets?.length ? (
          <ul className="mt-3 space-y-1 text-sm text-ink-soft">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span aria-hidden="true">·</span>
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
        {item.pattern ? (
          <p className="mt-4 border-l-2 border-brand-300 bg-brand-50 px-3 py-2 text-sm text-ink">
            <span className="eyebrow mr-2">Structure</span>
            {item.pattern}
          </p>
        ) : null}
        {item.sourcePath ? (
          <Link href={item.sourcePath} className="btn btn-ghost btn-sm mt-3 -ml-2">
            Study this topic first →
          </Link>
        ) : null}
      </article>

      {step === "prepare" ? (
        <section className="space-y-4">
          <SpeakingTimer
            phases={[phases[0]]}
            onPhaseChange={(_, phaseIdx) => {
              if (phaseIdx === 0) setStep("speak");
            }}
            onComplete={() => setStep("speak")}
          />
          <div className="card p-5">
            <label htmlFor="prep-notes" className="text-sm font-medium text-ink">
              Your keyword notes (saved on this device)
            </label>
            <p className="mt-1 text-xs text-ink-muted">
              Keywords only. If you write sentences now, you will read them aloud instead of
              speaking.
            </p>
            <textarea
              id="prep-notes"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              onBlur={() => savePrepNote(item.id, notes)}
              rows={4}
              placeholder="cousin · Dhaka · last winter · funny incident · still laugh"
              className="mt-2 w-full resize-y rounded-[6px] border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-brand-400"
            />
            <button type="button" className="btn btn-primary btn-sm mt-3" onClick={() => setStep("speak")}>
              I am ready — start speaking
            </button>
          </div>
        </section>
      ) : null}

      {step === "speak" ? (
        <section className="space-y-4">
          <SpeakingTimer
            key={`${item.id}-speak`}
            phases={[phases[phases.length - 1]]}
            onComplete={() => stopSpeaking(speakSeconds)}
          />
          <div className="card flex flex-wrap items-center gap-3 p-4">
            {recorder.supported ? (
              <button
                type="button"
                className={cn("btn btn-sm", recorder.recording ? "btn-primary" : "btn-secondary")}
                onClick={() => (recorder.recording ? recorder.stop() : recorder.start())}
              >
                {recorder.recording ? "Stop recording" : "Record my voice (optional)"}
              </button>
            ) : (
              <span className="text-xs text-ink-muted">
                Voice recording is not supported in this browser — use your phone’s recorder app
                and listen back there.
              </span>
            )}
            <label className="flex items-center gap-2 text-xs text-ink-soft">
              <input
                type="checkbox"
                checked={recordVoice}
                onChange={(event) => setRecordVoice(event.target.checked)}
              />
              Remind me to record every answer
            </label>
            <button
              type="button"
              className="btn btn-ghost btn-sm ml-auto"
              onClick={() => stopSpeaking(speakSeconds)}
            >
              I have finished speaking →
            </button>
          </div>
          {recorder.error ? (
            <p className="rounded-[6px] border border-danger-100 bg-danger-50 px-3 py-2 text-xs text-danger-700">
              {recorder.error}
            </p>
          ) : null}
        </section>
      ) : null}

      {step === "review" ? (
        <section className="space-y-4">
          {recorder.audioUrl ? (
            <div className="card p-4">
              <p className="eyebrow mb-2">Listen back</p>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <audio controls src={recorder.audioUrl} className="w-full">
                Your browser cannot play this recording.
              </audio>
              <p className="mt-2 text-xs text-ink-muted">
                This audio stays on your device — it is never uploaded.
              </p>
            </div>
          ) : null}

          <div className="card p-5">
            <label htmlFor="transcript" className="text-sm font-medium text-ink">
              Write what you said (one or two sentences are enough)
            </label>
            <p className="mt-1 text-xs text-ink-muted">
              Type your answer so the feedback engine can analyse your English. Dictation works in
              Chrome and Edge.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {dictation.supported ? (
                <button
                  type="button"
                  className={cn("btn btn-sm", dictation.listening ? "btn-primary" : "btn-secondary")}
                  onClick={dictation.toggle}
                >
                  {dictation.listening ? "Stop dictation" : "Use voice dictation"}
                </button>
              ) : null}
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setTranscript("")}>
                Clear
              </button>
            </div>
            <textarea
              id="transcript"
              value={transcript}
              onChange={(event) => setTranscript(event.target.value)}
              rows={4}
              placeholder="I usually read before bed because it helps me relax after studying…"
              className="mt-3 w-full resize-y rounded-[6px] border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-brand-400"
            />
            {dictation.error ? (
              <p className="mt-2 text-xs text-danger-700">{dictation.error}</p>
            ) : null}
          </div>

          <SelfEvaluation
            onSubmit={(value) => {
              void submitForFeedback(value);
            }}
            submitLabel="Save evaluation and get feedback"
          />

          {error ? (
            <p className="rounded-[6px] border border-danger-100 bg-danger-50 px-3 py-2 text-sm text-danger-700">
              {error}
            </p>
          ) : null}
          {evaluating ? (
            <p className="text-sm text-ink-muted">Analysing your answer…</p>
          ) : null}
        </section>
      ) : null}

      {step === "feedback" && result ? (
        <section className="space-y-5">
          <EvaluationPanel
            result={result}
            onRetry={() => {
              reset(index);
            }}
          />
          <div className="flex flex-wrap gap-3">
            {index + 1 < items.length ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  recorder.clear();
                  reset(index + 1);
                }}
              >
                Next question →
              </button>
            ) : (
              <Link href="/progress" className="btn btn-primary">
                See this in my progress →
              </Link>
            )}
            <Link href="/practice" className="btn btn-secondary">
              Build a new practice set
            </Link>
          </div>
        </section>
      ) : null}

      {finished ? (
        <section className="rounded-lg border border-line bg-canvas-deep p-5">
          <h3 className="text-lg">Session summary</h3>
          <p className="mt-1 text-sm text-ink-soft">
            You answered {completed.length} question{completed.length > 1 ? "s" : ""} ·{" "}
            {completed.reduce((sum, entry) => sum + entry.seconds, 0)} seconds of speaking.
          </p>
          <ul className="mt-4 space-y-2">
            {completed.map((entry, entryIndex) => (
              <li key={`${entry.question}-${entryIndex}`} className="rounded-[6px] bg-paper px-3 py-2">
                <p className="text-sm text-ink">{entry.question}</p>
                <p className="mt-0.5 text-xs text-ink-muted">
                  {entry.seconds}s ·{" "}
                  {Object.entries(entry.scores).length > 0
                    ? Object.entries(entry.scores)
                        .map(([skill, score]) => `${skill} ${score}/5`)
                        .join(" · ")
                    : "no self-evaluation"}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                setCompleted([]);
                reset(0);
              }}
            >
              Run this set again
            </button>
            <Link href="/practice" className="btn btn-secondary btn-sm">
              New set
            </Link>
          </div>
        </section>
      ) : null}
    </div>
  );
}
