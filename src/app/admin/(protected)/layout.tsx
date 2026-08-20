import Link from "next/link";
import { requireTeacher } from "@/lib/auth";

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  await requireTeacher();

  return (
    <div className="min-h-screen" style={{ background: "var(--color-part1-bg)" }}>
      <header className="bg-white border-b border-[var(--color-border)] sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-6">
          <span className="leading-tight">
            <span className="block font-display text-lg text-[var(--color-part1-ink)]">
              Lord of the Flies · Dashboard
            </span>
            <span className="block text-[10px] text-[var(--color-muted)]">
              St John&apos;s English Department
            </span>
          </span>
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-medium text-[var(--color-ink)] hover:opacity-80 transition px-3 py-1.5 rounded-lg border border-[var(--color-border)] flex items-center gap-1.5"
            >
              <span aria-hidden>👁</span> Preview as student
            </Link>
            <a
              href="/api/auth/logout"
              className="text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)] transition px-3 py-1.5 rounded-lg border border-[var(--color-border)]"
            >
              Sign out
            </a>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">{children}</main>
    </div>
  );
}
