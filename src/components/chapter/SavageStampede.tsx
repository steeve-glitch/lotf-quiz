"use client";

import { useEffect } from "react";
import { Savage } from "./Savage";

const RUNNERS = [
  { delay: 0, top: "22%" },
  { delay: 0.12, top: "38%" },
  { delay: 0.05, top: "54%" },
  { delay: 0.2, top: "68%" },
  { delay: 0.16, top: "82%" },
];

export function SavageStampede({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2100);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center"
      style={{
        background: "var(--color-part3-ink)",
        animation: "stampede-overlay-in 0.2s ease-out both",
      }}
    >
      {RUNNERS.map((r, i) => (
        <Savage key={i} delay={r.delay} top={r.top} />
      ))}
      <div
        className="relative z-10 text-center px-6"
        style={{ animation: "stampede-banner-in 0.5s ease-out 0.35s both" }}
      >
        <p className="font-display text-3xl sm:text-4xl text-white uppercase tracking-widest">
          Chapter Complete
        </p>
        <p className="text-white/60 text-xs uppercase tracking-widest mt-2">The island moves on</p>
      </div>
    </div>
  );
}
