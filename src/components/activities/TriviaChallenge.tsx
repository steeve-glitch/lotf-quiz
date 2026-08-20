"use client";

import { useState } from "react";
import { TriviaQuestion } from "@/content/types";

export function TriviaChallenge({ questions }: { questions: TriviaQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  if (questions.length === 0) return null;

  const score = Object.entries(answers).filter(
    ([i, choice]) => questions[Number(i)].correctAnswer === choice,
  ).length;

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
          Trivia challenge
        </p>
        {Object.keys(answers).length > 0 && (
          <span className="text-xs font-semibold" style={{ color: "var(--color-part1-accent)" }}>
            {score}/{Object.keys(answers).length} correct
          </span>
        )}
      </div>
      <div className="space-y-5">
        {questions.map((q, qi) => (
          <div key={qi}>
            <p className="text-sm font-semibold mb-2">{q.question}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {q.options.map((opt, oi) => {
                const chosen = answers[qi];
                const isChosen = chosen === oi;
                const revealed = chosen !== undefined;
                return (
                  <button
                    key={oi}
                    disabled={revealed}
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    className={`text-left text-sm rounded-lg border px-3 py-2 transition ${
                      revealed && oi === q.correctAnswer
                        ? "border-emerald-400 bg-emerald-50"
                        : revealed && isChosen
                          ? "border-red-300 bg-red-50"
                          : "border-[var(--color-border)] hover:border-[var(--color-part1-accent)] disabled:hover:border-[var(--color-border)]"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
