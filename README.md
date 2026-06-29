# Piedmont Power Washing — marketing site

A standalone, front-end marketing site for **Piedmont Power Washing, LLC** — a
**commercial & residential pressure washing** company serving **Charlotte, NC**
and the surrounding NC/SC communities, based in **Lancaster, SC**. Built with
Astro 6 + TypeScript (strict) + Tailwind CSS v4, mirroring the `smokin-rail-bbq`
sibling project's stack and conventions.

Single page, mobile-first, "satisfying clean" water/blue theme drawn from the
logo (a Carolinas state silhouette in sky blue with charcoal type). Content is
the business's **real, public-facing** info, enhanced from its existing Wix site
and Facebook page as crawled **June 2026** (see `content.md`).

## Run it

```bash
npm install
npm run build     # static output in ./dist
npm run dev       # local dev server
npm run preview   # preview the build
```

## Content & data

`src/data/site.ts` is the **single source of truth** — identity, contact,
services, service area, trust points, gallery mapping, links, and SEO/JSON-LD
inputs. Edit content there, not in the components.

### Real / confirmed
- **Name, address, phone, email** — `Piedmont Power Washing, LLC`,
  `109 Sycamore Dr, Lancaster, SC 29720`, `704-297-5461`,
  `info@piedmontpowerwashing.com` (the single canonical address — the old markup
  also had an `eric@` mailto; we standardized on the displayed `info@`).
- **Services** — only those named on the existing site / meta description:
  House & Siding, Surface Washing, Deck & Patio, Fence, and Restoration
  (seal/stain/paint). **No roof washing** or any invented service.
- **Service area** — all 15 towns from `content.md`, NC/SC line callout.
- **Trust points** — 12+ years experience, eco-friendly/biodegradable products,
  free estimates, residential & commercial. The mission statement is verbatim.
- **Photos** — real owner-supplied before/after job photos (`before1–5`,
  `after1–5`, `curbDifference`) plus `logo.png`, `about-large.jpg`,
  `angies-list-badge.png` in `src/assets/`, optimized via `astro:assets`.

### Honestly omitted (not invented)
- **Reviews / testimonials** — none are published anywhere, so none are shown.
  The "Why Us" band links to **Angi** and **Facebook** instead. If real reviews
  are supplied later, add a quotes section there.
- **Hours** — none published; no hours block is shown. The CTAs say "call."
- **Owner name** — the `eric@` mailto hints at a name but it's never stated
  publicly, so no name is published.
- **Instagram** — the old icon pointed at a placeholder `instagram.com/wix/`;
  dropped until a real handle is supplied.

## Before/After — the centerpiece

The owner's real before/after photos are the heart of the site:

- **Hero comparator** (`src/components/BeforeAfter.astro`) — an interactive
  drag-to-compare slider is the first thing visitors see. It uses the **clean,
  unbranded** pairs (`before5/after5`, `before4/after4`), switchable via the tabs
  below it. Drag, click anywhere, or focus and use arrow keys (it's a styled
  `<input type="range">`, so it's keyboard- and screen-reader-accessible). The
  wipe is a CSS `clip-path` on the "before" image — no library.
- **"Our Work" showcase** (`src/components/Gallery.astro`) — the **branded**
  social graphics (`before1–3/after1–3`, which have the logo + BEFORE/AFTER +
  category baked in) are shown as-is, side by side, plus `curbDifference` as a
  standalone "the line says it all" shot. Click any photo to enlarge (lightbox).

Both pull their pairings/captions from `comparePairs`, `showcasePairs`, and
`showcaseSingles` in `src/data/site.ts`. To add or reorder examples, edit those
arrays — `before`/`after` values are basenames of files in `src/assets/`.

## Forms & integrations

- **Free-estimate form** mirrors the original Wix fields (First/Last name,
  Email, Phone, Address, City, Zip, Message). It has **no backend** — on submit
  it validates client-side, then opens the visitor's email app via `mailto:` to
  `info@piedmontpowerwashing.com`. **TODO** (marked in `Contact.astro`): wire it
  to a real handler (Formspree / Netlify Forms / serverless POST) before launch.
- **Map** is a keyless Google Maps embed of the real address.
- **Click-to-call** phone is surfaced in the nav, hero, every section CTA, and a
  sticky mobile bottom bar.

## Before launch
- [ ] Wire the estimate form to a real destination (email/SMS/Formspree) and
      remove the `mailto` fallback.
- [ ] (Optional) Supply clean, unbranded versions of pairs 1–3 to use them in
      the interactive hero slider too; add them to `comparePairs` in `site.ts`.
- [ ] Confirm the canonical contact email (`info@` vs `eric@`).
- [ ] Add a real **Instagram** handle (or leave it off) and the exact **Angi**
      profile URL (currently a Lancaster-area Angi search).
- [ ] Produce a proper 1200×630 **OG image** (currently `public/og.jpg` is the
      full-size hero photo).
- [ ] Confirm the production **domain** in `astro.config.mjs` → `site`.
- [ ] If real reviews exist, add a testimonials block in the "Why Us" section.
