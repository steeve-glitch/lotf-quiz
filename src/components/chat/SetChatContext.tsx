"use client";

import { useEffect } from "react";
import { useChatbot } from "./ChatbotContext";

/** Renders nothing — just points the chatbot at the current unit on mount. */
export function SetChatContext({ unitId }: { unitId: string }) {
  const { setUnitId } = useChatbot();
  useEffect(() => {
    setUnitId(unitId);
  }, [unitId, setUnitId]);
  return null;
}
