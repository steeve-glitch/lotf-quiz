"use client";

import { useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Chapter } from "@/content/types";
import { PartTheme } from "@/lib/partTheme";
import { SetChatContext } from "@/components/chat/SetChatContext";
import { VocabularyActivity } from "@/components/activities/VocabularyActivity";
import { CloseReadingActivity } from "@/components/activities/CloseReadingActivity";
import { SymbolTracker } from "@/components/activities/SymbolTracker";
import { CharacterArcTracker } from "@/components/activities/CharacterArcTracker";
import { ParagraphBuilder } from "@/components/activities/ParagraphBuilder";
import { ReflectionActivity } from "@/components/activities/ReflectionActivity";
import { TriviaChallenge } from "@/components/activities/TriviaChallenge";
import { SavageStampede } from "./SavageStampede";

interface Step {
  id: string;
  label: string;
  content: ReactNode;
}

export function ChapterFlow({
  chapter,
  theme,
  alreadyComplete,
  nextHref,
  nextLabel,
}: {
  chapter: Chapter;
  theme: PartTheme;
  alreadyComplete: boolean;
  nextHref: string;
  nextLabel: string;
}) {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [showStampede, setShowStampede] = useState(false);
  const [saving, setSaving] = useState(false);

  const steps: Step[] = [
    {
      id: "intro",
      label: "This chapter",
      content: (
        <div className="space-y-6">
          <section className="torn-card grain rounded-xl border border-[var(--color-border)] bg-white p-5">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-2">
              What happens
            </h2>
            <p className="text-base leading-relaxed">{chapter.summary}</p>
          </section>
          <section
            className="rounded-xl p-5 border-l-4"
            style={{ background: theme.accentSoft, borderColor: theme.accent }}
          >
            <p className="italic text-xl font-display" style={{ color: theme.ink }}>
              &ldquo;{chapter.quote.text}&rdquo;
            </p>
            <p className="text-sm mt-2 text-[var(--color-muted)]">{chapter.quote.context}</p>
          </section>
        </div>
      ),
    },
    { id: "vocabulary", label: "Vocabulary", content: <VocabularyActivity terms={chapter.vocabulary} /> },
    { id: "close-reading", label: "Close reading", content: <CloseReadingActivity passages={chapter.closeReading} /> },
    { id: "symbols", label: "Symbol tracker", content: <SymbolTracker updates={chapter.symbolUpdates} /> },
    { id: "characters", label: "Character tracker", content: <CharacterArcTracker updates={chapter.characterUpdates} /> },
    ...(chapter.paragraphBuilder
      ? [{ id: "paragraph", label: "Write about it", content: <ParagraphBuilder data={chapter.paragraphBuilder} /> }]
      : []),
    { id: "reflection", label: "Reflect", content: <ReflectionActivity data={chapter.reflection} /> },
    ...(chapter.trivia.length > 0
      ? [{ id: "trivia", label: "Quick trivia", content: <TriviaChallenge questions={chapter.trivia} /> }]
      : []),
  ];

  const step = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;

  async function handleFinish() {
    if (alreadyComplete) {
      router.push(nextHref);
      return;
    }
    setSaving(true);
    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId: chapter.id }),
      });
    } finally {
      setSaving(false);
      setShowStampede(true);
    }
  }

  if (showStampede) {
    return <SavageStampede onDone={() => router.push(nextHref)} />;
  }

  return (
    <div>
      <SetChatContext unitId={chapter.id} />

      {/* Progress dots */}
      <div className="flex items-center gap-1.5 mb-6">
        {steps.map((s, i) => (
          <div
            key={s.id}
            className="h-1.5 flex-1 rounded-full transition-colors"
            style={{ background: i <= stepIndex ? theme.accent : "var(--color-border)" }}
            title={s.label}
          />
        ))}
      </div>

      <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: theme.accent }}>
        Step {stepIndex + 1} of {steps.length} · {step.label}
      </p>

      <div className="mb-8">{step.content}</div>

      <div className="flex items-center justify-between gap-3 pb-10">
        <button
          onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
          disabled={stepIndex === 0}
          className="text-base font-semibold text-[var(--color-muted)] disabled:opacity-30 px-2"
        >
          ← Back
        </button>

        {!isLast ? (
          <button
            onClick={() => setStepIndex((i) => i + 1)}
            className="rounded-xl px-6 py-3 text-base font-semibold text-white shadow-sm"
            style={{ background: theme.accent }}
          >
            Next →
          </button>
        ) : (
          <button
            onClick={handleFinish}
            disabled={saving}
            className="rounded-xl px-6 py-3 text-base font-semibold text-white shadow-sm disabled:opacity-60"
            style={{ background: theme.accent }}
          >
            {saving ? "Saving…" : alreadyComplete ? nextLabel : "Finish chapter →"}
          </button>
        )}
      </div>
    </div>
  );
}
