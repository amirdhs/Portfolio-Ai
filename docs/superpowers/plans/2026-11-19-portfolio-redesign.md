# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-skin amirdhs.com as a dark/neon-lime portfolio with a live three.js robot hero, depth-tilt cards, a depth-map portrait and glitch reveals, without changing URLs or SEO plumbing.

**Architecture:** Swap the colour tokens (all components already read them), add a small client-side effects layer (`src/components/fx`, pure maths in `src/lib/fx`), and a lazily loaded plain-three.js robot scene (`src/components/robot`, pure maths in `src/lib/robot`). Homepage sections are reordered and their copy switched to first person; inner pages pick the look up through shared components.

**Tech Stack:** Next.js 16.4 App Router, React 19.3, Tailwind v4, three@0.187.0 (+ @types/three@0.187.0), Vitest, Playwright + axe.

**Spec:** `docs/superpowers/specs/2026-11-19-portfolio-redesign-design.md`

## Global Constraints

- No route, slug, metadata, sitemap, structured-data or `llms.txt` changes.
- DE and EN copy changed together; inner-page wording unchanged; hero points contain no digits (existing test).
- First-load JS for `/` stays < 150 KB gz; `three` must only be reachable through a dynamic `import()` in a client component.
- LCP < 2.5 s, CLS < 0.1; the hero `<h1>` is server-rendered and visible without JS.
- Every animation honours `prefers-reduced-motion: reduce` (static result, no tilt, no glitch, robot replaced by the SVG still).
- Animate only `transform`, `opacity`, `clip-path`, `filter`.
- Text contrast ≥ 4.5:1 (body) on its surface; dark text on lime fill ≥ 4.5:1.
- Read `node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md` before using `next/dynamic` (`ssr: false` only inside client components).
- Do not commit the user's pre-existing changes to `.prettierignore`, `eslint.config.mjs`, `tsconfig.json`, `video/`. Commit only when Amir says so (work on branch `redesign/portfolio`).

## Review Focus

- WebGL unavailable (context creation throws/returns null) → SVG robot still shows, no console error loop. Test: Task 4 `RobotCanvas` falls back when `getContext` returns null.
- Touch / no hover pointer → robot idles, cards don't stick tilted. Test: Task 2 `resetTilt` on `pointerleave`/`pointercancel`.
- Hero scrolled away or tab hidden → render loop stops. Test: Task 4 scene `setActive(false)` stops `requestAnimationFrame`.
- No JS / crawler → glitch-revealed content is visible. Test: Task 2 e2e with JS disabled sees section headings.
- Window resize / high-DPR screens → canvas pixel ratio capped at 2 and resized. Test: Task 3 `capPixelRatio`.

---

### Task 1: Lime design tokens, base styles, white wordmark

**Files:**
- Modify: `src/styles/tokens.css`, `src/styles/global.css`, `src/components/ui/Button.tsx`, `src/components/ui/SectionHeading.tsx`, `src/components/cta/CtaBand.tsx`, `src/components/layout/SiteHeader.tsx`, `src/components/layout/LanguageSwitcher.tsx`, `src/views/ServiceDetailView.tsx`, `src/views/ContactView.tsx`, `src/components/layout/SiteFooter.tsx`, `scripts/build-brand-assets.mjs`
- Create: `public/brand/amir-wordmark-light.webp` (generated), `tests/unit/tokens.test.ts`

**Interfaces:**
- Produces: token names unchanged (`paper*`, `ink*`, `rule*`, `accent`, `on-accent`, `accent-hover`, `bronze*`, `gold*`, `night*`) so no component renames; new tokens `--color-lime` (fill), `--color-lime-ink` (lime as text on dark), `--color-grid` (grid-line light). New utility classes `.grid-floor` (CSS perspective grid), `.highlight` (lime box behind a word, dark text), `.scanlines` (overlay), `.slab` (full-bleed lime section with dark text).

- [ ] **Step 1: Write failing test** `tests/unit/tokens.test.ts`: parse `tokens.css`, convert oklch → sRGB relative luminance (inline helper in the test), assert `contrast(--color-on-accent, --color-accent) >= 4.5`, `contrast(--color-ink-2, --color-paper) >= 4.5`, `contrast(--color-lime-ink, --color-paper) >= 4.5`, and that `--color-accent` hue is between 110 and 140 (lime, not gold).
- [ ] **Step 2:** `pnpm vitest run tests/unit/tokens.test.ts` → FAIL (hue is 72).
- [ ] **Step 3:** Retune tokens: surfaces `oklch(13% 0.012 150)` family (paper-2 17%, paper-3 22%, rules 26%/36%, night 10%); accent/lime `oklch(91% 0.21 125)`; on-accent `oklch(16% 0.02 140)`; `bronze*`/`gold*` become lime-as-text aliases. Headline weights 700, display tracking −0.04em, `--text-hero` up to `8.5rem`. Replace gold radial glows in `.grain`/`.glow-center` with faint lime ones; `.panel:hover` border lime; `.text-shimmer` sweeps lime. Solid button = flat lime fill, dark text, lime glow on hover (drop the gradient). Replace the 8 hardcoded gold `oklch(...)` literals listed above. Add the four new utility classes. `SectionHeading` accent clause uses `.highlight` styling instead of `text-bronze`.
- [ ] **Step 4:** Extend `scripts/build-brand-assets.mjs` to write `amir-wordmark-light.webp` (sharp: greyscale → linear to near-white, keep alpha); run `pnpm brand:build`; header and footer import the light file.
- [ ] **Step 5:** `pnpm vitest run` and `pnpm typecheck` → PASS.

### Task 2: Effects layer — tilt, glitch reveal, reduced-motion hook

**Files:**
- Create: `src/lib/fx/tilt.ts`, `src/hooks/useReducedMotion.ts`, `src/components/fx/TiltCard.tsx`, `src/components/fx/GlitchReveal.tsx`, `tests/unit/tilt.test.ts`, `tests/e2e/effects.spec.ts`
- Modify: `src/styles/global.css` (glitch keyframes)

**Interfaces:**
- Produces:
  - `tiltFromPointer(clientX: number, clientY: number, rect: {left:number; top:number; width:number; height:number}, maxDeg?: number /* default 8 */): { rx: number; ry: number; px: number; py: number }` — `rx/ry` degrees clamped to ±maxDeg, `px/py` 0–1 pointer position (clamped).
  - `useReducedMotion(): boolean` (SSR-safe, false on server).
  - `<TiltCard as?: "div"|"article"|"li" className?: string children>` — client; sets CSS vars `--rx --ry --px --py` on pointermove, resets to 0 on `pointerleave`/`pointercancel`; renders a `.scanlines` overlay that brightens on hover; inert under reduced motion or `(hover: none)`.
  - `<GlitchReveal as?: keyof JSX.IntrinsicElements className? children>` — client; adds `data-revealed` once on first intersection (threshold 0.2); CSS plays a 450 ms clip-path slice + RGB-split `text-shadow` once. Content is visible by default: the hidden start state only applies under `html.js` (class set by an inline script in `RootDocument`) and `prefers-reduced-motion: no-preference`.

- [ ] **Step 1: Failing unit tests** `tilt.test.ts`: centre → `{rx:0, ry:0, px:0.5, py:0.5}`; top-left corner with maxDeg 8 → `rx: 8, ry: -8`; point outside rect clamps to ±8 and px/py to 0/1; zero-size rect returns zeros (no NaN).
- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement. **Step 4:** Run → PASS.
- [ ] **Step 5: e2e** `effects.spec.ts`: (a) with `javaScriptEnabled: false`, every `h2` on `/` and `/en` is visible; (b) with reduced motion, a `TiltCard` keeps `transform: none` after mouse moves; (c) on desktop Chromium, hovering a card then `mouse.move` off resets `--rx` to `0`.

### Task 3: Robot model and scene (plain three.js)

**Files:**
- Create: `src/lib/robot/motion.ts`, `src/components/robot/robot-model.ts`, `src/components/robot/robot-scene.ts`, `tests/unit/robot-motion.test.ts`
- Modify: `package.json` (add `three@0.187.0`, dev `@types/three@0.187.0`)

**Interfaces:**
- Produces:
  - `motion.ts` (no three import): `headTarget(px: number, py: number): { yaw: number; pitch: number }` (px/py in −1..1, yaw clamped ±0.6 rad, pitch ±0.35 rad); `damp(current: number, target: number, lambda: number, dt: number): number`; `waveAngle(t: number): number` (arm angle for t seconds after appear; 0 after 2.4 s); `scrollLean(progress: number): { rotY: number; posY: number }` (progress 0–1 clamped; 0 → zeros); `capPixelRatio(dpr: number): number` (min(dpr, 2), ≥1).
  - `buildRobot(THREE: typeof import("three")): { root: Group; head: Object3D; eyes: Mesh[]; armL: Object3D; armR: Object3D }` — rounded capsule body, visor head, lime emissive eyes and chest light, dark matte `MeshStandardMaterial`.
  - `createRobotScene(canvas: HTMLCanvasElement, THREE: typeof import("three")): { setPointer(px:number, py:number): void; setScroll(progress:number): void; setActive(active:boolean): void; resize(): void; dispose(): void }` — camera, lights, robot on a lime line-grid floor (`GridHelper` fading into fog), idle bob, head/eye tracking via `damp`, wave on start, renders only while active.

- [ ] **Step 1: Failing tests** `robot-motion.test.ts`: `headTarget(1, 0).yaw === 0.6`, `headTarget(-5, 0).yaw === -0.6`, `headTarget(0, 1).pitch` within ±0.35; `damp(0, 1, 10, 1/60)` between 0 and 1 and monotonic towards target; `waveAngle(3) === 0` and `waveAngle(0.6) !== 0`; `scrollLean(0)` → `{rotY:0,posY:0}`, `scrollLean(2)` equals `scrollLean(1)`; `capPixelRatio(3) === 2`, `capPixelRatio(0.5) === 1`.
- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement `motion.ts`, then `robot-model.ts` and `robot-scene.ts` using it. **Step 4:** Run → PASS; `pnpm typecheck` → PASS.

### Task 4: Robot hero component with fallback

**Files:**
- Create: `src/components/robot/RobotStill.tsx` (inline SVG of the same robot, server component), `src/components/robot/RobotCanvas.tsx` (client), `src/components/robot/RobotStage.tsx` (client wrapper using `next/dynamic` with `ssr: false` → `RobotCanvas`, `RobotStill` as `loading`), `tests/unit/robot-canvas.test.tsx`

**Interfaces:**
- Consumes: `createRobotScene`, `capPixelRatio` (Task 3), `useReducedMotion` (Task 2).
- Produces: `<RobotStage className?: string label: string />` — `label` is the accessible description (`role="img"` + `aria-label` on the wrapper; canvas `aria-hidden`).
- Behaviour: `RobotCanvas` imports `three` via `await import("three")` inside an effect; if reduced motion, or `canvas.getContext("webgl2")` is null, or the import/scene throws (logged once with `console.warn`) → render `RobotStill`. IntersectionObserver + `visibilitychange` drive `setActive`. Pointer listener on `window` (normalised to −1..1 against the hero rect); scroll progress = hero scrolled fraction. `dispose()` on unmount.

- [ ] **Step 1: Failing tests** `robot-canvas.test.tsx` (jsdom, mock `three` module): renders `RobotStill` (find by `data-testid="robot-still"`) when `HTMLCanvasElement.prototype.getContext` returns null; renders `RobotStill` when `matchMedia('(prefers-reduced-motion: reduce)')` matches; calls `dispose` on unmount when scene created.
- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement. **Step 4:** Run → PASS.

### Task 5: Portfolio hero + first-person homepage copy

**Files:**
- Create: `src/components/home/PortfolioHero.tsx`
- Modify: `src/components/home/Hero.tsx`, `src/content/de/home.ts`, `src/content/en/home.ts`, `src/content/types.ts` (only if the hero type is declared there), `src/i18n/dictionaries/{de,en}.ts` (CTA labels "Arbeiten ansehen"/"See my work", "Kontakt aufnehmen"/"Get in touch", robot label), `tests/e2e/hero.spec.ts`

**Interfaces:**
- Consumes: `RobotStage` (Task 4), `.grid-floor`, `.highlight` (Task 1).
- Produces: `hero` content shape `{ eyebrow: string; headline: string[]; highlight: string; lead: string; audience: string; points: string[] }` — `highlight` is a substring of one headline line, rendered inside `.highlight`.
- Copy (EN; DE equivalent in first person, du/Sie register kept as "Sie"): eyebrow "Amir Dehestani · Developer & AI engineer"; headline `["I build websites,", "AI agents & automations", "that actually work."]`, highlight "AI agents"; lead first person, same facts as today's lead. `servicesSection`, `projectsSection`, `processSection`, `whySection`, `faqSection`, `tools.title`, `finalCta` headings/leads switched to "I/my". Projects lead must still state they are example concepts.

- [ ] **Step 1: Rewrite e2e** `hero.spec.ts`: h1 contains "Ich baue" on `/` and "I build" on `/en`; hero has links "Arbeiten ansehen" and "Kontakt aufnehmen"; `[role=img][aria-label]` robot wrapper exists; with reduced motion `[data-testid=robot-still]` is visible; hero height < 1400 px; no `<video>` in hero.
- [ ] **Step 2:** `pnpm test:e2e --project=chromium hero` → FAIL. **Step 3:** Implement `PortfolioHero` (two-column ≥ lg, stacked on mobile with robot below text at ≤ 320 px height share 45vh; grid floor behind; h1 `rise` animation only), switch `Hero.tsx` to it, update copy. **Step 4:** Run → PASS; `pnpm vitest run` → PASS (content tests).

### Task 6: Homepage sections — work, lime slab, about, order

**Files:**
- Create: `src/components/projects/ProjectArt.tsx` (SVG wireframe art per `ProjectCategory`, deterministic from slug), `src/components/fx/DepthPortrait.tsx` (client; WebGL2 parallax displacement of portrait by depth map, falls back to `TiltCard`+`next/image`), `public/brand/amir-dehestani-depth.webp` (generated by `scripts/build-brand-assets.mjs`: elliptical falloff centred on face (x 0.5, y 0.28) and torso, blurred, combined with luminance)
- Modify: `src/components/projects/ProjectCard.tsx` (wrap in `TiltCard`, `ProjectArt` header band), `src/components/home/FeaturedProjects.tsx`, `src/components/home/ServicesOverview.tsx` (render as `.slab`), `src/components/home/FounderStrip.tsx` (uses `DepthPortrait`), `src/views/HomeView.tsx`, `tests/unit/projects-ui.test.tsx`

**Interfaces:**
- Consumes: `TiltCard`, `GlitchReveal`, `useReducedMotion` (Task 2).
- Produces: `<ProjectArt category: ProjectCategory seed: string className? />` (`aria-hidden`); `<DepthPortrait src width height depthSrc alt sizes />`.
- Home order: `Hero, FeaturedProjects, ServicesOverview(slab), TechMarquee, ProcessPreview, WhyAmir, FounderStrip, FaqPreview, CtaBand`. `Benefits` and `Audiences` removed from the homepage (components stay). Section headings wrapped in `GlitchReveal`.

- [ ] **Step 1: Failing test** in `projects-ui.test.tsx`: `ProjectCard` renders an `svg[aria-hidden="true"]` art band and still exposes one link to the project URL; `ProjectArt` with same seed renders identical markup twice.
- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement. **Step 4:** Run → PASS; `pnpm test:e2e --project=chromium a11y pages` → PASS.

### Task 7: Inner pages, CTA and footer polish

**Files:**
- Modify: `src/components/layout/PageHeader.tsx` (`.grid-floor` backdrop, h1 left `rise`), `src/components/cta/CtaBand.tsx` (lime slab variant, `GlitchReveal` heading, drop gold `IconTile` glow), `src/components/layout/SiteFooter.tsx`, `src/components/layout/MobileNav.tsx`, `src/components/ui/Pill.tsx`, `src/components/ui/Badge.tsx`, `src/components/ui/IconTile.tsx` (lime-tinted)

- [ ] **Step 1:** Implement. **Step 2:** `pnpm test:e2e --project=chromium` (all specs) → PASS; `pnpm lint` → no errors.

### Task 8: Verification

- [ ] `pnpm typecheck && pnpm lint && pnpm test:coverage` → PASS, coverage ≥ 80 %.
- [ ] `pnpm build` → success; from the build output confirm `/` first-load JS < 150 KB and `three` lives in a separate chunk.
- [ ] Browser preview (`dev`): `/`, `/en`, `/projekte`, `/leistungen/webdesign`, `/kontakt` at 320, 768, 1024, 1440 — no horizontal overflow, no console errors; robot animates, follows pointer, pauses off-screen; reduced-motion shows still; screenshots shared.
- [ ] `pnpm test:e2e` full (Chromium/Firefox/WebKit per config) → PASS.
