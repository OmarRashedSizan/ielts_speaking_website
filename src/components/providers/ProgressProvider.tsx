"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  EMPTY_PROGRESS,
  STORAGE_KEY,
  type MockEntry,
  type PracticeEntry,
  type ProgressState,
  computeStreak,
  lessonRef,
  todayKey,
} from "@/lib/progress/types";

interface ProgressContextValue {
  state: ProgressState;
  /** False during the first client render, before localStorage is read. */
  hydrated: boolean;
  streak: number;
  isLessonComplete: (track: string, slug: string) => boolean;
  toggleLessonComplete: (track: string, slug: string) => void;
  registerVisit: (track: string, slug: string) => void;
  recordPractice: (entry: Omit<PracticeEntry, "id" | "at">) => void;
  recordMock: (entry: Omit<MockEntry, "id" | "at">) => void;
  toggleSavedCueCard: (id: string) => void;
  toggleSavedQuestion: (id: string) => void;
  toggleMistakeMastered: (id: string) => void;
  savePrepNote: (id: string, note: string) => void;
  reset: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

function makeId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function sanitize(raw: unknown): ProgressState {
  if (!raw || typeof raw !== "object") return EMPTY_PROGRESS;
  const value = raw as Partial<ProgressState>;
  return {
    version: 1,
    completedLessons: Array.isArray(value.completedLessons) ? value.completedLessons : [],
    visits: value.visits && typeof value.visits === "object" ? value.visits : {},
    savedCueCards: Array.isArray(value.savedCueCards) ? value.savedCueCards : [],
    savedQuestions: Array.isArray(value.savedQuestions) ? value.savedQuestions : [],
    masteredMistakes: Array.isArray(value.masteredMistakes) ? value.masteredMistakes : [],
    practice: Array.isArray(value.practice) ? value.practice : [],
    mocks: Array.isArray(value.mocks) ? value.mocks : [],
    streakDays: Array.isArray(value.streakDays) ? value.streakDays : [],
    lastActiveDay: typeof value.lastActiveDay === "string" ? value.lastActiveDay : null,
    prepNotes:
      value.prepNotes && typeof value.prepNotes === "object" ? value.prepNotes : {},
  };
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(EMPTY_PROGRESS);
  const [hydrated, setHydrated] = useState(false);
  const writeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ---- load ---------------------------------------------------------------
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setState(sanitize(JSON.parse(stored)));
    } catch {
      // Corrupt or unavailable storage must never break the app.
      setState(EMPTY_PROGRESS);
    } finally {
      setHydrated(true);
    }
  }, []);

  // ---- persist (debounced) ------------------------------------------------
  useEffect(() => {
    if (!hydrated) return;
    if (writeTimer.current) clearTimeout(writeTimer.current);
    writeTimer.current = setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {
        /* storage full / private mode — progress stays in memory */
      }
    }, 220);
    return () => {
      if (writeTimer.current) clearTimeout(writeTimer.current);
    };
  }, [state, hydrated]);

  const touchDay = useCallback((draft: ProgressState): ProgressState => {
    const today = todayKey();
    if (draft.lastActiveDay === today) return draft;
    const days = draft.streakDays.includes(today)
      ? draft.streakDays
      : [...draft.streakDays, today].slice(-400);
    return { ...draft, streakDays: days, lastActiveDay: today };
  }, []);

  const update = useCallback(
    (fn: (draft: ProgressState) => ProgressState) =>
      setState((prev) => {
        const next = touchDay(fn(prev));
        return next;
      }),
    [touchDay],
  );

  const isLessonComplete = useCallback(
    (track: string, slug: string) => state.completedLessons.includes(lessonRef(track, slug)),
    [state.completedLessons],
  );

  const value = useMemo<ProgressContextValue>(
    () => ({
      state,
      hydrated,
      streak: computeStreak(state.streakDays),
      isLessonComplete,
      toggleLessonComplete: (track, slug) =>
        update((draft) => {
          const ref = lessonRef(track, slug);
          const has = draft.completedLessons.includes(ref);
          return {
            ...draft,
            completedLessons: has
              ? draft.completedLessons.filter((r) => r !== ref)
              : [...draft.completedLessons, ref],
          };
        }),
      registerVisit: (track, slug) =>
        update((draft) => {
          const ref = lessonRef(track, slug);
          return { ...draft, visits: { ...draft.visits, [ref]: (draft.visits[ref] ?? 0) + 1 } };
        }),
      recordPractice: (entry) =>
        update((draft) => ({
          ...draft,
          practice: [{ ...entry, id: makeId(), at: new Date().toISOString() }, ...draft.practice].slice(
            0,
            400,
          ),
        })),
      recordMock: (entry) =>
        update((draft) => ({
          ...draft,
          mocks: [{ ...entry, id: makeId(), at: new Date().toISOString() }, ...draft.mocks].slice(0, 60),
        })),
      toggleSavedCueCard: (id) =>
        update((draft) => ({
          ...draft,
          savedCueCards: draft.savedCueCards.includes(id)
            ? draft.savedCueCards.filter((x) => x !== id)
            : [...draft.savedCueCards, id],
        })),
      toggleSavedQuestion: (id) =>
        update((draft) => ({
          ...draft,
          savedQuestions: draft.savedQuestions.includes(id)
            ? draft.savedQuestions.filter((x) => x !== id)
            : [...draft.savedQuestions, id],
        })),
      toggleMistakeMastered: (id) =>
        update((draft) => ({
          ...draft,
          masteredMistakes: draft.masteredMistakes.includes(id)
            ? draft.masteredMistakes.filter((x) => x !== id)
            : [...draft.masteredMistakes, id],
        })),
      savePrepNote: (id, note) =>
        update((draft) => ({ ...draft, prepNotes: { ...draft.prepNotes, [id]: note } })),
      reset: () => setState(EMPTY_PROGRESS),
    }),
    [state, hydrated, isLessonComplete, update],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used inside <ProgressProvider>");
  }
  return context;
}
