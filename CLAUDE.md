# Lord of the Flies — Reading Companion

A self-paced reading companion for St John's School 10th graders working through
*Lord of the Flies*, used as support outside of school. Sequential chapter
unlocking, a per-chapter activity toolkit (close reading, symbol/character
trackers, vocabulary with Spanish glosses, paragraph builder, trivia), a
Claude-powered Socratic chatbot scoped to the chapter the student is on, and a
teacher progress dashboard.

## Sibling apps this reuses patterns from

- `~/projects/io-app` (io.mrbell.app) — Next.js + Cloudflare Workers + D1 +
  Drizzle pipeline, and the auth stack (dependency-free Google OAuth, signed
  session cookie, role-by-email-domain, teacher preview mode) is a near-verbatim
  copy, minus the `class` field (this is a single cohort, not multi-teacher).
- `~/projects/paragraph-app` — origin of the auth pattern io-app itself copies;
  and the "pedagogical content lives as typed TS modules in `src/content/`, not
  the DB" convention.
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

## Status (Phase 1)

Scaffolded and built: auth, D1 schema, sequential unlock across
Pre-Reading → Part 1 (Ch 1–4) → Checkpoint I → Part 2 (Ch 5–9) → Checkpoint II →
Part 3 (Ch 10–12), the full activity-type toolkit, the Claude chatbot, and the
teacher dashboard. **Only Chapters 1–2 have content written** — Chapters 3–12 and
Checkpoint II's remaining detail are Phase 2, after Steve reviews the format/tone
of Ch 1–2. Chapters without content render a "coming soon" placeholder rather
than 404ing, so the unlock chain and dashboard already reflect the full book.

**Before this can go live for real students:**
- D1 database `lotf-companion` created (id `4a91cf92-0132-468c-83bd-24fe3a0e7204`);
  migrations need to be generated and applied (`--remote`) before first deploy.
- `.dev.vars` needs real secrets — reuse the `displacement-95b6f` GCP OAuth
  client (same one paragraph-app/io-app use) but **Steve needs to add
  `https://lotf.mrbell.app/api/auth/google/callback` as an authorized redirect
  URI on that client in the GCP console** — no CLI access to do this directly.
  Also needs a fresh `AUTH_SECRET` (not shared with the sibling apps) and a real
  `ANTHROPIC_API_KEY`.
- `git init` not yet needed — this repo (`lotf-quiz`, renamed in spirit to the
  companion) already has git history; the old Vite trivia app was removed and
  its EN question bank salvaged into `src/content/trivia-bank.json`.
