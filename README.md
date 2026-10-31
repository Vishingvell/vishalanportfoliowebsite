# Vishalan Karunanithi — Portfolio

Next.js App Router portfolio with a sunset Ink & Wash visual system. Uses React Server Components by default and a small client component for the wishing well. No database or analytics.

## Run and verify

Use Node 20.9 or newer. Run `npm ci`, `npm run dev`, then open localhost:3000. Checks: `npm run lint`, `npm run typecheck`, `npm run build`.

## Content and routes

Verified personal facts live in `src/content/portfolio.ts`. `/` is the portfolio; `/connect` offers public links and a phone-free vCard; `/resume` gives recruiters education, work, projects and skills. The original resume PDF must never enter `public/` because it contains a phone number. A public PDF download remains disabled.

`/tap/[token]` and its `/contact` download are dynamic server routes. They require server-only Vercel environment variables. See [NFC_SETUP.md](./NFC_SETUP.md) for card setup and privacy limitations. Keep `.env.local` ignored and never use NEXT_PUBLIC_ variables for NFC secrets.

The existing Vercel project is `vishalan-portfolio`. Preserve its project and team linkage. Production uses native Next.js defaults; no extra database, paid service or custom build output is required.

## Route smoke tests

With a local production server running, run `npm run test:routes`. To also verify valid NFC access, supply `TEST_NFC_TOKEN` and `TEST_NFC_PHONE` matching dummy server values. Never put production NFC secrets into test files. `TEST_BASE_URL` can point to a separately approved deployment.
