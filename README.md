# AMIR — Digital, KI & Automatisierung

Business website for AMIR: services, solutions, portfolio, process, contact form and legal pages.
German at `/`, English at `/en`.

## Stack

| Concern   | Choice                                                                                      |
| --------- | ------------------------------------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, Cache Components, every page statically prerendered)                |
| Language  | TypeScript (strict)                                                                         |
| Styling   | Tailwind CSS v4, design tokens in `src/styles/tokens.css`                                   |
| Fonts     | Schibsted Grotesk + IBM Plex Mono via `next/font` (self-hosted, no runtime Google requests) |
| Form      | React Hook Form + Zod (one schema for client and server), Nodemailer over SMTP              |
| Tests     | Vitest + Testing Library (unit), Playwright + axe-core (end-to-end, accessibility)          |
| Hosting   | Vercel, functions pinned to Frankfurt (`vercel.json` → `fra1`)                              |

## Getting started

```bash
pnpm install
cp .env.example .env.local   # optional: fill in SMTP settings to test real delivery
pnpm dev                     # http://localhost:3000
```

## Scripts

| Command                            | Purpose                                                                                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------- |
| `pnpm dev`                         | Development server                                                                           |
| `pnpm build` / `pnpm start`        | Production build / serve it                                                                  |
| `pnpm lint`                        | ESLint                                                                                       |
| `pnpm typecheck`                   | Generates route types, then `tsc --noEmit`                                                   |
| `pnpm test` / `pnpm test:coverage` | Unit tests (coverage threshold 80 %)                                                         |
| `pnpm test:e2e`                    | Playwright against the production build (run `pnpm build` first)                             |
| `pnpm check:launch`                | Lists missing business/legal details and SMTP status; exits 1 while required data is missing |
| `pnpm brand:build`                 | Regenerates logo, social image and icons from `assets/brand/amir-logo-source.png`            |

## Project structure

```
src/
  app/(de)/…            German routes (root layout, lang="de")
  app/(en)/en/…         English routes (root layout, lang="en")
  app/api/inquiry/      Contact form endpoint (the only server-rendered route)
  views/                Page bodies shared by both languages (route files are thin wrappers)
  components/           UI by feature: layout, home, services, projects, contact, legal, ui
  content/de|en/        All page copy as typed data
  content/create-content.ts  Content shape + lookups; English must match German structurally
  i18n/                 Locales, route map + localized slugs, UI dictionaries
  config/site.ts        Business facts (name, address, email, legal) — single source
  lib/                  SEO helpers, structured data, inquiry handling, rate limiter, env
scripts/                check-launch, brand asset generation
tests/unit, tests/e2e
```

## Editing content

- **Business details** (company name, address, email, phone, VAT, founder, social links): `src/config/site.ts`.
  Unknown values stay `null`: public pages hide them, legal pages show a red “missing” marker.
  Never enter invented data.
- **Texts**: `src/content/de/*.ts` and `src/content/en/*.ts` (services, solutions, projects, FAQ, process, about, homepage, page intros).
  A unit test fails if the English content drifts structurally from the German (missing items, different list lengths).
- **UI labels** (navigation, buttons, form): `src/i18n/dictionaries/de.ts` and `en.ts` — the English file is type-checked against the German.
- **Portfolio**: `src/content/<locale>/projects.ts`. Each entry has a `type`:
  `client` (real client work), `demo` (built by AMIR as a demonstration) or `concept` (illustrative, nothing delivered).
  `verifiedResults` may only be filled for `client` projects with results the client has confirmed; the page never shows results otherwise.
  When adding a project, also add its English URL slug in `src/i18n/routes.ts` (`SLUGS.project`).

## SEO, GEO and AEO upkeep

- **Freshness**: `siteConfig.contentUpdated` (`src/config/site.ts`) drives the visible “Zuletzt aktualisiert / Last updated” line, `dateModified` in the structured data, the sitemap `lastmod` and `/llms.txt`. Bump it whenever page content changes; never leave it stale.
- **Titles and descriptions**: titles must stay ≤ 60 characters including the ` | AMIR` suffix, descriptions 70–160 characters; FAQ answers 40–62 words. `tests/unit/seo-quality.test.ts` enforces this for both languages.
- **Reference pages**: `/glossar` + `/en/glossary` (definitions, comparison table) and `/kosten` + `/en/costs` (price factors, deliberately no prices) live in `src/content/<locale>/glossary.ts` and `costs.ts`. Service pages cite external sources from `Service.sources` (https only).
- **Crawlers**: `src/app/robots.ts` names the main search and AI-answer bots; `src/app/llms.txt/route.ts` builds `/llms.txt` from the same content and route map.
- **Trust data**: founder, contact point, address, `sameAs` profiles and testimonials appear in the page and the schema automatically once they are filled in `siteConfig`. They are intentionally empty until real, verifiable information exists.
- Audit reports live in `docs/seo-audit/` (`-after` is the re-audit after these improvements).

## Hero video

The homepage hero shows a looping full-bleed background video (an abstract tunnel of golden light sparks) behind centered
text, with dark gradients so the text stays readable. It plays on its own, silently, and does not react to the mouse or to
scrolling. It starts after the page has loaded (it never delays first paint), pauses when the hero is scrolled out of view,
and is replaced by the still poster for visitors with _reduced motion_ or _data saver_.
Code: `src/components/home/VideoHero.tsx`.

The three highlights under the buttons (`hero.points` in `src/content/<locale>/home.ts`) are deliberately plain statements
without numbers: do not add statistics (e.g. "92 % less manual work") unless they are real and verifiable; a unit test
fails if a digit appears there.

The page palette follows the video: near-black page, white text, and gold (the logo's colour) as the accent, which matches the
video's sparks (`src/styles/tokens.css`).

**To replace the video:** keep your original somewhere outside the repository (it can be large; the current source was a
3840×2160, 60 fps, 20 s file of 111 MB). Browsers cannot play HEVC reliably, so encode to H.264 at web size. The current
clip is the first 10 s of the source, which loops seamlessly on its own (checked: the jump from last to first frame is as small
as any frame-to-frame change). For a clip that does not loop by itself, play it forward and then backward instead.

```bash
ffmpeg -i ORIGINAL.mp4 -t 10 -an -vf "scale=1280:-2,fps=30,format=yuv420p" -c:v libx264 -preset slow -crf 31 -movflags +faststart public/hero/hero-desktop.mp4
ffmpeg -i ORIGINAL.mp4 -t 10 -an -vf "scale=854:-2,fps=30,format=yuv420p" -c:v libx264 -preset slow -crf 32 -movflags +faststart public/hero/hero-mobile.mp4
ffmpeg -ss 0 -i ORIGINAL.mp4 -frames:v 1 -vf scale=1280:-2 -q:v 2 assets/hero/poster.jpg
node scripts/build-hero-assets.mjs
```

The poster is the loop's first frame. **Licence:** confirm that you may use the footage commercially on a business website
and whether it requires attribution (stock sites such as Pixabay or Pexels usually allow commercial use; check the licence
of the exact file) and add attribution if required.

## Languages and URLs

German is served without prefix (`/leistungen/webdesign`), English under `/en` with English slugs (`/en/services/web-design`).
All internal links are built with `href(routeKey, { slug, locale })` from `src/i18n/routes.ts`; content uses the German slug as its id.
The header switcher links to the equivalent page in the other language. Each language has its own root layout,
so switching language is a full page load. Pages emit `hreflang` alternates and the sitemap lists both languages.

To add a language: extend `LOCALES` in `src/i18n/config.ts`, add routes and slugs in `routes.ts`, add `dictionaries/<locale>.ts`,
`content/<locale>/`, and a route group `src/app/(<locale>)/<locale>/` mirroring the English one.

## Contact form

`POST /api/inquiry` validates with the shared Zod schema, applies a honeypot, a minimum fill time and a per-IP rate limit
(5 requests / 10 minutes), then sends a plain-text notification via SMTP with the visitor as `Reply-To`.

- **Not configured** (no SMTP variables): the API answers `503 NOT_CONFIGURED` and the form says the message was _not_ sent.
- **Delivery failure**: `502 DELIVERY_FAILED`; details are logged server-side without message contents.
- The success message is shown only after the SMTP server accepted the email.
- Inquiries are not stored anywhere else. No confirmation email is sent to the visitor (prevents abuse of the form as a mail relay).
- The rate limiter is in-memory, i.e. per serverless instance — best-effort. For stronger guarantees use a shared store (e.g. Upstash Redis) or Vercel Firewall rate limiting.

### SMTP setup

1. Create a mailbox (or app password) at your mail provider, e.g. `anfragen@your-domain.de`.
2. Set `SMTP_HOST`, `SMTP_PORT` (465 or 587), `SMTP_USER`, `SMTP_PASS`, `INQUIRY_FROM`, `INQUIRY_TO` in Vercel → Project → Settings → Environment Variables (Production and Preview).
3. Make sure SPF/DKIM for your domain allow the provider to send as `INQUIRY_FROM`.
4. Redeploy, submit a test inquiry, and check the inbox. `pnpm check:launch` shows whether the variables are recognised.
5. Name the mail provider in `siteConfig.legal.emailProvider` (privacy policy) and sign its data processing agreement.

## Deployment (Vercel)

1. Import the repository in Vercel (framework preset: Next.js, package manager: pnpm).
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain and the SMTP variables (see above).
3. Deploy. `vercel.json` pins server functions to Frankfurt (`fra1`).
4. Add the domain, then submit `https://<domain>/sitemap.xml` in Google Search Console.

## Security and privacy

- Security headers (HSTS, CSP, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) are set in `next.config.ts`.
- **CSP note:** the policy allows `'unsafe-inline'` for scripts instead of a per-request nonce. A nonce would force every page
  to render per request; the site loads no third-party scripts and stays fully static. If you ever add third-party scripts
  (analytics, chat widgets), switch to a nonce-based CSP in `proxy.ts` and add a consent manager first.
- No cookies, no analytics, no external embeds. The cookie page states this; add consent handling before introducing any of these.

## Before going live

See [docs/launch-checklist.md](docs/launch-checklist.md).
