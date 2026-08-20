"use client";

import { useState } from "react";
import { ReflectionData } from "@/content/types";

export function ReflectionActivity({ data }: { data: ReflectionData }) {
  const [showSamples, setShowSamples] = useState(false);
  const [response, setResponse] = useState("");

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-1">
        Reflection
      </p>
      <p className="font-semibold text-base mb-3">{data.question}</p>
      {!showSamples ? (
        <button
          onClick={() => setShowSamples(true)}
          className="text-sm font-semibold underline mb-3"
          style={{ color: "var(--color-part1-accent)" }}
        >
          see example responses first
        </button>
      ) : (
        <div className="space-y-2 mb-3">
          {data.samples.map((s, i) => (
            <p key={i} className="text-sm italic text-[var(--color-muted)] rounded-lg bg-neutral-50 p-2">
              &ldquo;{s}&rdquo;
            </p>
          ))}
        </div>
      )}
      <textarea
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        rows={4}
        placeholder="Write your own response — a few sentences is plenty."
        className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-base focus:outline-none focus:ring-2"
      />
    </div>
  );
}
