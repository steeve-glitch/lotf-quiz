import Link from "next/link";
import type { ClientSession } from "@/lib/session-types";

export function SiteNav({ session }: { session: ClientSession | null }) {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-paper)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-display text-lg text-[var(--color-part1-ink)]">
          Lord of the Flies
        </Link>
        {session && (
          <div className="flex items-center gap-4 text-sm text-[var(--color-muted)]">
            {session.role === "teacher" && (
              <Link href="/admin" className="font-medium hover:underline">
                Dashboard
              </Link>
            )}
            <span>{session.name.split(" ")[0]}</span>
            <a href="/api/auth/logout" className="hover:underline">
              Sign out
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
