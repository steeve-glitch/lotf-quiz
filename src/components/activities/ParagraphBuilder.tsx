"use client";

import { useState } from "react";
import { ParagraphBuilderData } from "@/content/types";

export function ParagraphBuilder({ data }: { data: ParagraphBuilderData }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const step = data.steps[stepIndex];
  const done = stepIndex >= data.steps.length;

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-1">
        Paragraph builder
      </p>
      <p className="font-semibold text-sm mb-4">{data.focus}</p>

      {!done ? (
        <div>
          <div className="flex gap-1 mb-4">
            {data.steps.map((s, i) => (
              <div
                key={s.id}
                className="h-1.5 flex-1 rounded-full"
                style={{ background: i <= stepIndex ? "var(--color-part1-accent)" : "var(--color-border)" }}
              />
            ))}
          </div>
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--color-part1-accent)" }}>
            {step.label}
          </p>
          <p className="text-sm mt-1 mb-3">{step.instruction}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {step.guidedOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setAnswers((a) => ({ ...a, [step.id]: opt }))}
                className="text-xs rounded-full border border-[var(--color-border)] px-3 py-1.5 hover:border-[var(--color-part1-accent)]"
              >
                {opt.length > 60 ? opt.slice(0, 60) + "…" : opt}
              </button>
            ))}
          </div>
          <textarea
            value={answers[step.id] ?? ""}
            onChange={(e) => setAnswers((a) => ({ ...a, [step.id]: e.target.value }))}
            placeholder={step.placeholder}
            rows={3}
            className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm focus:outline-none focus:ring-2"
          />
          <div className="flex justify-between mt-3">
            <button
              onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
              disabled={stepIndex === 0}
              className="text-xs font-semibold text-[var(--color-muted)] disabled:opacity-40"
            >
              ← back
            </button>
            <button
              onClick={() => setStepIndex((i) => i + 1)}
              disabled={!answers[step.id]?.trim()}
              className="rounded-lg px-4 py-2 text-xs font-semibold text-white disabled:opacity-40"
              style={{ background: "var(--color-part1-accent)" }}
            >
              {stepIndex === data.steps.length - 1 ? "Finish" : "Next →"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="space-y-2 mb-4">
            {data.steps.map((s) => (
              <p key={s.id} className="text-sm">
                <span className="font-semibold">{s.label}: </span>
                {answers[s.id]}
              </p>
            ))}
          </div>
          <button
            onClick={() => setShowModel((v) => !v)}
            className="text-xs font-semibold underline"
            style={{ color: "var(--color-part1-accent)" }}
          >
            {showModel ? "hide model paragraph" : "compare with a model paragraph"}
          </button>
          {showModel && (
            <p className="mt-3 text-sm rounded-lg bg-[var(--color-part1-accent-soft)] p-3">
              {data.modelParagraph}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
