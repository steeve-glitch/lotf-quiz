"use client";

import { useState, useMemo } from "react";
import { CloseReadingPassage } from "@/content/types";
import { seededShuffle } from "@/lib/shuffle";

export function CloseReadingActivity({ passages }: { passages: CloseReadingPassage[] }) {
  return (
    <div className="space-y-8">
      {passages.map((p, i) => (
        <PassageCard key={i} passage={p} index={i} />
      ))}
    </div>
  );
}

function PassageCard({ passage, index }: { passage: CloseReadingPassage; index: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  // Seeded on the question text so the order is stable per-question (same on
  // server and client, no hydration mismatch) but not always correct-answer-first.
  const options = useMemo(() => seededShuffle(passage.options, passage.question), [passage]);

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-2">
        Close reading {index + 1}
      </p>
      <p className="italic text-base text-[var(--color-ink)] mb-4 leading-relaxed">&ldquo;{passage.passage}&rdquo;</p>
      <p className="font-semibold text-base mb-3">{passage.question}</p>
      <div className="space-y-2">
        {options.map((opt, i) => {
          const isSelected = selected === i;
          const showFeedback = selected !== null && isSelected;
          return (
            <button
              key={i}
              onClick={() => setSelected(i)}
              disabled={selected !== null}
              className={`w-full text-left rounded-lg border px-4 py-3 text-base transition ${
                isSelected
                  ? opt.isCorrect
                    ? "border-emerald-400 bg-emerald-50"
                    : "border-red-300 bg-red-50"
                  : "border-[var(--color-border)] hover:border-[var(--color-part1-accent)] disabled:hover:border-[var(--color-border)]"
              }`}
            >
              {opt.text}
              {showFeedback && <p className="mt-2 text-sm text-[var(--color-muted)]">{opt.feedback}</p>}
            </button>
          );
        })}
      </div>
      {selected !== null && options[selected].isCorrect && (
        <div className="mt-4 rounded-lg bg-[var(--color-part1-accent-soft)] px-4 py-3 text-base">
          <span className="font-semibold">Deeper insight: </span>
          {passage.insight}
        </div>
      )}
    </div>
  );
}
