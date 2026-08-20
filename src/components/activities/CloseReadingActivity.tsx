"use client";

import { useState } from "react";
import { CloseReadingPassage } from "@/content/types";

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

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-2">
        Close reading {index + 1}
      </p>
      <p className="italic text-sm text-[var(--color-ink)] mb-4">&ldquo;{passage.passage}&rdquo;</p>
      <p className="font-semibold text-sm mb-3">{passage.question}</p>
      <div className="space-y-2">
        {passage.options.map((opt, i) => {
          const isSelected = selected === i;
          const showFeedback = selected !== null && isSelected;
          return (
            <button
              key={i}
              onClick={() => setSelected(i)}
              disabled={selected !== null}
              className={`w-full text-left rounded-lg border px-4 py-3 text-sm transition ${
                isSelected
                  ? opt.isCorrect
                    ? "border-emerald-400 bg-emerald-50"
                    : "border-red-300 bg-red-50"
                  : "border-[var(--color-border)] hover:border-[var(--color-part1-accent)] disabled:hover:border-[var(--color-border)]"
              }`}
            >
              {opt.text}
              {showFeedback && <p className="mt-2 text-xs text-[var(--color-muted)]">{opt.feedback}</p>}
            </button>
          );
        })}
      </div>
      {selected !== null && passage.options[selected].isCorrect && (
        <div className="mt-4 rounded-lg bg-[var(--color-part1-accent-soft)] px-4 py-3 text-sm">
          <span className="font-semibold">Deeper insight: </span>
          {passage.insight}
        </div>
      )}
    </div>
  );
}
