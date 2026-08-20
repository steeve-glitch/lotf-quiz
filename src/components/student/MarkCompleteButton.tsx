"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function MarkCompleteButton({
  unitId,
  alreadyComplete,
  nextHref,
  nextLabel,
}: {
  unitId: string;
  alreadyComplete: boolean;
  nextHref: string | null;
  nextLabel: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(alreadyComplete);

  async function handleClick() {
    if (done) {
      if (nextHref) router.push(nextHref);
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId }),
      });
      setDone(true);
      if (nextHref) router.push(nextHref);
      else router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="w-full sm:w-auto rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition disabled:opacity-60"
      style={{ background: "var(--color-part1-accent)" }}
    >
      {loading ? "Saving…" : done ? nextLabel : "Mark complete & continue →"}
    </button>
  );
}
