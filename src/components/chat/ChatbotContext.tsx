"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ChatbotContextValue {
  isOpen: boolean;
  toggleChat: () => void;
  unitId: string;
  setUnitId: (id: string) => void;
}

const ChatbotContext = createContext<ChatbotContextValue | undefined>(undefined);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [unitId, setUnitId] = useState("pre-reading");

  return (
    <ChatbotContext.Provider
      value={{ isOpen, toggleChat: () => setIsOpen((v) => !v), unitId, setUnitId }}
    >
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const ctx = useContext(ChatbotContext);
  if (!ctx) throw new Error("useChatbot must be used within ChatbotProvider");
  return ctx;
}
