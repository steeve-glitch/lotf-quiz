"use client";

import { useState, useMemo } from "react";
import { CheckpointQuestion } from "@/content/types";
import { seededShuffle } from "@/lib/shuffle";

export function CheckpointQuiz({
  questions,
  onAllCorrect,
}: {
  questions: CheckpointQuestion[];
  onAllCorrect: () => void;
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  // Seeded per-question so option order is stable (no hydration mismatch)
  // but not always correct-answer-first.
  const shuffled = useMemo(
    () => questions.map((q) => ({ ...q, options: seededShuffle(q.options, q.question) })),
    [questions],
  );

  const allAnswered = Object.keys(answers).length === shuffled.length;
  const allCorrect =
    allAnswered && shuffled.every((q, i) => q.options[answers[i]]?.isCorrect);

  return (
    <div className="space-y-6">
      {shuffled.map((q, qi) => (
        <div key={qi} className="rounded-xl border border-[var(--color-border)] bg-white p-5">
          <p className="font-semibold text-base mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, oi) => {
              const isSelected = answers[qi] === oi;
              const revealed = answers[qi] !== undefined;
              return (
                <button
                  key={oi}
                  disabled={revealed}
                  onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                  className={`w-full text-left rounded-lg border px-4 py-3 text-base transition ${
                    isSelected
                      ? opt.isCorrect
                        ? "border-emerald-400 bg-emerald-50"
                        : "border-red-300 bg-red-50"
                      : "border-[var(--color-border)] hover:border-[var(--color-part2-accent)] disabled:hover:border-[var(--color-border)]"
                  }`}
                >
                  {opt.text}
                  {isSelected && <p className="mt-2 text-sm text-[var(--color-muted)]">{opt.feedback}</p>}
                </button>
              );
            })}
          </div>
          {answers[qi] !== undefined && !q.options[answers[qi]].isCorrect && (
            <button
              onClick={() => setAnswers((a) => { const next = { ...a }; delete next[qi]; return next; })}
              className="text-sm font-semibold underline mt-3"
              style={{ color: "var(--color-part2-accent)" }}
            >
              try again
            </button>
          )}
        </div>
      ))}

      {allCorrect ? (
        <button
          onClick={onAllCorrect}
          className="w-full sm:w-auto rounded-xl px-6 py-3 text-base font-semibold text-white shadow-sm"
          style={{ background: "var(--color-part2-accent)" }}
        >
          Continue →
        </button>
      ) : (
        <p className="text-sm text-[var(--color-muted)]">
          Answer every question correctly to move on — retry any you miss.
        </p>
      )}
    </div>
  );
}
