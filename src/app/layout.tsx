import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { SiteNav } from "@/components/SiteNav";
import { SessionGate } from "@/components/student/SessionGate";
import { ChatbotProvider } from "@/components/chat/ChatbotContext";
import { Chatbot } from "@/components/chat/Chatbot";
import { getSession, toClientSession } from "@/lib/auth";
import type { ClientSession } from "@/lib/session-types";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lord of the Flies — Reading Companion",
    template: "%s — Lord of the Flies Companion",
  },
  description:
    "A reading companion for William Golding's Lord of the Flies — St John's School English Department",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let clientSession: ClientSession | null = null;
  try {
    const session = await getSession();
    clientSession = session ? toClientSession(session) : null;
  } catch (err) {
    if (typeof (err as { digest?: unknown })?.digest === "string") throw err;
    console.error("[layout] session verification failed:", err);
  }

  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteNav session={clientSession} />
        <SessionGate session={clientSession}>
          <ChatbotProvider>
            <div className="flex flex-col flex-1">{children}</div>
            <Chatbot />
          </ChatbotProvider>
        </SessionGate>
      </body>
    </html>
  );
}
