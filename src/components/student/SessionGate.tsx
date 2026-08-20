"use client";

import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { ClientSession } from "@/lib/session-types";

const AUTH_ERRORS: Record<string, string> = {
  domain: "Please sign in with your @students.stjohns.cl school account.",
  cancelled: "Sign-in was cancelled. Please try again.",
  token: "We couldn't verify your Google account. Please try again.",
  state: "Your sign-in session expired. Please try again.",
  expired: "Your sign-in session expired. Please try again.",
};

export function SessionGate({
  session,
  children,
}: {
  session: ClientSession | null;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Admin pages run their own guard (requireTeacher) and their own login screen.
  if (pathname.startsWith("/admin")) return <>{children}</>;

  if (!session)
    return (
      <Suspense fallback={null}>
        <SignInScreen next={pathname} />
      </Suspense>
    );

  return (
    <>
      {session.role === "teacher" && <PreviewBanner />}
      {children}
    </>
  );
}

function SignInScreen({ next }: { next: string }) {
  const params = useSearchParams();
  const error = params.get("auth_error");
  const message = error ? AUTH_ERRORS[error] ?? "Something went wrong. Please try again." : null;
  const href = `/api/auth/google/login?next=${encodeURIComponent(next)}`;

  return (
    <div
      className="min-h-[80vh] flex items-center justify-center px-4"
      style={{ background: "var(--color-part1-bg)" }}
    >
      <div className="w-full max-w-sm text-center rounded-2xl bg-[var(--color-paper)] border border-[var(--color-border)] p-8 shadow-sm">
        <h1 className="text-2xl text-[var(--color-part1-ink)]">Lord of the Flies</h1>
        <p className="text-[11px] font-semibold text-[var(--color-muted)] uppercase tracking-wider mt-1 mb-6">
          Reading Companion — St John&apos;s English Department
        </p>
        <p className="text-[var(--color-muted)] text-sm mb-7">
          Sign in with your Saint John&apos;s School account to start reading and tracking your progress.
        </p>

        {message && (
          <div className="mb-5 rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
            {message}
          </div>
        )}

        <a
          href={href}
          className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-sm hover:bg-neutral-50 transition"
        >
          <GoogleIcon />
          Sign in with Google
        </a>

        <p className="mt-5 text-xs text-[var(--color-muted)]">
          Use your <span className="font-medium">@students.stjohns.cl</span> account.
        </p>
      </div>
    </div>
  );
}

function PreviewBanner() {
  return (
    <div className="bg-amber-100 border-b border-amber-200 text-amber-900 text-xs sm:text-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-3">
        <span className="flex items-center gap-1.5">
          <span aria-hidden>👁</span>
          Previewing as a student — your progress here is excluded from the class dashboard.
        </span>
        <a href="/admin" className="font-semibold underline whitespace-nowrap hover:opacity-80">
          Exit preview
        </a>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.02-3.7H.96v2.34A9 9 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.98 10.72a5.4 5.4 0 0 1 0-3.44V4.94H.96a9 9 0 0 0 0 8.12l3.02-2.34z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.94l3.02 2.34C4.68 5.16 6.66 3.58 9 3.58z" />
    </svg>
  );
}
