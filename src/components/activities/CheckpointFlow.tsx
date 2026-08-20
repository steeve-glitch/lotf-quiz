"use client";

import { useRouter } from "next/navigation";
import { CheckpointQuestion } from "@/content/types";
import { CheckpointQuiz } from "./CheckpointQuiz";

export function CheckpointFlow({
  unitId,
  questions,
  nextHref,
}: {
  unitId: string;
  questions: CheckpointQuestion[];
  nextHref: string;
}) {
  const router = useRouter();

  async function handleAllCorrect() {
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ unitId }),
    });
    router.push(nextHref);
  }

  return <CheckpointQuiz questions={questions} onAllCorrect={handleAllCorrect} />;
}
