# Lord of the Flies — Reading Companion

A self-paced reading companion for St John's School 10th graders working through
*Lord of the Flies*, used as support outside of school. Sequential chapter
unlocking, a per-chapter activity toolkit (close reading, symbol/character
trackers, vocabulary, paragraph builder, trivia), a Claude-powered Socratic
chatbot scoped to the chapter the student is on, and a teacher progress
dashboard. Live at `lotf.mrbell.app`.

## Sibling apps this reuses patterns from

- `~/projects/io-app` (io.mrbell.app) — Next.js + Cloudflare Workers + D1 +
  Drizzle pipeline, and the auth stack (dependency-free Google OAuth, signed
  session cookie, role-by-email-domain, teacher preview mode) is a near-verbatim
  copy, minus the `class` field (this is a single cohort, not multi-teacher).
- `~/projects/paragraph-app` — origin of the auth pattern io-app itself copies;
  and the "pedagogical content lives as typed TS modules in `src/content/`, not
  the DB" convention. Also the source of `src/app/icon.png` (the St John's
  crest, reused verbatim as this app's favicon via Next's file-based icon
  convention — no code needed beyond the file itself).
- `~/projects/1984` and `~/projects/salesman-app` — the reading-companion genre
  this replaces/upgrades (Firebase/Firestore/Gemini stack) for a previous book.
  Not code-shared — different stack entirely — but the activity-type toolkit
  (close reading MCQ, paragraph builder scaffold, chatbot panel) draws on their
  UX patterns.

## Dev quick reference

- `npm install`
- `cp .dev.vars.example .dev.vars` and fill in real values (see comments in that file)
- `npm run db:generate` then `npx wrangler d1 migrations apply lotf-companion --local` — schema changes
- `npm run dev` — local dev (better-sqlite3 against `local.db`)
- `npm run preview` — Workers-accurate preview (miniflare + local D1)
- `npm run deploy` — build + deploy to `lotf.mrbell.app`
- `npm run lint` / `npm run typecheck` — gates before any deploy

## Content status

**All 12 chapters are written**, across all three Parts, plus both Descent
Checkpoints (2 questions each). Each chapter follows the schema in
`src/content/types.ts`: summary, a quote, vocabulary, two close-reading MCQs
(auto-shuffled per question via `src/lib/shuffle.ts` — a seeded shuffle, not
`Math.random()`, so server/client render identically), symbol/character
tracker updates, an optional paragraph builder (Ch 1, 4, 9, 12 — spread across
the book's turning points), a reflection prompt, and trivia pulled from the
salvaged `trivia-bank.json`.

**Content was written from the author's own knowledge of the novel, not from
the source text directly** — most quotes were cross-checked against the
salvaged trivia bank's confirmed wording (itself independently generated) for
extra confidence, but a small number of minor, non-pivotal quotes (e.g. Ch 6's
"It's got teeth — and big black eyes") are lower-confidence paraphrase rather
than verified verbatim text. Worth a skim against a physical copy before
treating every quote as exact, particularly in Chapters 3, 6, and 7 where no
independently-confirmed source was available. The major, famous lines (Ch 1's
"ass-mar," Ch 2's "English are best at everything," Ch 5's Piggy speech, Ch 8's
"I'm not playing any longer," Ch 9's hunting chant, Ch 11's "law and rescue,"
Ch 12's closing line) are all cross-confirmed against the trivia bank and
high-confidence.

**Spoiler discipline:** every chapter was swept for references to plot that
hasn't happened yet *as of that chapter* — this was tightened once mid-build
after review caught a "not yet mentioned" symbol-tracker entry and several
close-reading insights that named things from later chapters (Jack "eventually
hunts other boys," Piggy's fate "becomes literally fatal," etc.). If new
chapters are ever added or edited, re-check for this pattern specifically —
it's an easy one to slip back into when writing analytical insight text.

## Status

Feature-complete for the whole book. Deployed and live.

**Before this can go live for real students:**
- Production secrets are set on the Worker (`wrangler secret list` to confirm)
  — `GOOGLE_OAUTH_CLIENT_ID`/`SECRET` reused from io-app's, `ANTHROPIC_API_KEY`
  reused from ielts's, fresh `AUTH_SECRET`/`ADMIN_PASSWORD` generated for this
  app specifically (see `.secrets-note/production-secrets.txt`, gitignored).
- **Steve still needs to confirm** `https://lotf.mrbell.app/api/auth/google/callback`
  is added as an authorized redirect URI on the shared `displacement-95b6f` GCP
  OAuth client — this was the one manual step outside CLI reach, and sign-in
  was confirmed working after it was added.
- Worth a teacher read-through of Chapters 3–12 before pointing real students
  at it, given the content-confidence caveat above.
