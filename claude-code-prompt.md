# Claude Code Prompt — Enhance the Piedmont Power Washing Website

## ⚙️ TECH STACK — match the `smokin-rail-bbq` sibling folder (authoritative — overrides any stack mention below)

Copy the exact stack and project conventions of `../smokin-rail-bbq` in this same `BusinessSites` repo; use it as the canonical scaffold. Do NOT introduce a different framework.

- **Astro 6** (`"astro": "^6"`, `"type": "module"`). Scripts: `dev: astro dev`, `build: astro build`, `preview: astro preview`.
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin (NOT `@astrojs/tailwind`). In `astro.config.mjs`: `vite: { plugins: [tailwindcss()] }`, plus `compressHTML: true` and a real `site:` URL.
- **TypeScript** — `tsconfig.json` extends `astro/tsconfigs/strict` with path aliases `@data/* @layouts/* @components/* @assets/* @styles/*`.
- **Styling/theming** — a single `src/styles/global.css` starting with `@import "tailwindcss";`, then a `@theme { … }` block of brand color + font tokens (CSS custom properties), then `@layer base` resets. Put this business's palette (see Brand Notes) in the tokens; don't hardcode colors in components.
- **Structure (mirror smokin-rail-bbq):** `src/layouts/Layout.astro` (HTML shell, SEO/meta, global.css import, JSON-LD LocalBusiness); `src/components/*.astro` (one per page section); `src/data/site.ts` (ALL business info centralized — pull values from `content.md`); `src/assets/` (optimized images via `astro:assets` `<Image/>`) and `public/` (`favicon.svg`, `og.jpg`); `src/pages/index.astro` composes the sections.
- **Deploy** — static output on Cloudflare via `wrangler.jsonc` (`"assets": { "directory": "./dist" }`). Keep `.gitignore`: `node_modules/ dist/ .astro/ .DS_Store`.

Match smokin-rail-bbq's quality bar: cohesive theme tokens, AA-accessible, fast, mobile-first, semantic HTML, real content only — NO AI-slop, no lorem ipsum, no generic template feel.

## Goal
ENHANCE the existing Piedmont Power Washing site into a modern, fast, conversion-focused marketing site. Keep all real content and reuse the existing photos (especially the before/after job gallery). Do not invent facts, services, reviews, or names.

## Tech stack
- **Astro + Tailwind CSS** (static site). (No `smokin-rail-bbq` example folder exists in this workspace to mirror; default to Astro + Tailwind.)
- Single responsive page with anchor-linked sections + a working contact form section. Mobile-first.
- Optimize images (Astro `<Image>` / responsive `srcset`), lazy-load gallery, keep payload light.

## Source material
- All real content is in `./content.md` (read it first). Use only what's there.
- Images live in `./images/`. **IMPORTANT:** if `images/` is empty or missing the photos, run `bash images/download-images.sh` first (the build sandbox blocked the image host, so the photos may need to be fetched on first run). The before/after gallery photos (`work-01.*` … `work-09.*`) are the most valuable assets — feature them prominently. Confirm the logo's exact colors from `logo.png` and derive the palette from it.

## Brand & aesthetic
- "Satisfying clean" feel: bright, crisp, high-contrast before/after imagery, generous white space.
- Palette: water/clean **blues** (primary strong blue ~#0E5FA8, lighter sky/aqua accent), crisp white, dark slate/navy text. Verify/adjust to match `logo.png`.
- Professional, trustworthy, reassuring voice. Conversion-focused. NO AI-slop: no filler superlatives, no fake stats, no stock-photo clichés, no lorem ipsum, no invented testimonials.

## Required sections (in order)
1. **Header / nav** — logo (`logo.png`), anchor links (Services, Our Work, Service Area, Reviews, Contact), and a prominent click-to-call phone **704-297-5461** + a "Free Estimate" button. Sticky on mobile with a click-to-call bar.
2. **Hero** — value prop "Commercial & Residential Pressure Washing," serving Charlotte & surrounding NC/SC areas, primary CTA **"Get a Free Estimate"** (scrolls to contact form) + secondary click-to-call. Use `hero-header.jpg` (or a strong before/after) as the background. Surface trust chips: "12+ Years Experience," "Eco-Friendly & Biodegradable," "Free Estimates," "Residential & Commercial."
3. **Services** — clean cards from content.md, each with a one-line benefit:
   - House / Siding Pressure Washing (technique adjusted to material & age — soft-wash friendly).
   - Surface Washing — driveways, walkways, decks, patios.
   - Deck & Patio cleaning.
   - Fence cleaning.
   - Restoration — cleaning/sealing, painting & staining of decks and fences.
   Mark both Residential and Commercial. Do NOT add roof washing or any service not in content.md.
4. **Before/After Gallery ("Our Work")** — showcase `work-01`…`work-09` full size in a responsive grid/lightbox. Intro line: "Here's a look at the difference we make." Light, truthful captions only (e.g., "Recent Piedmont Power Washing job"); do not fabricate before/after pairings unless an image clearly is one.
5. **Service Area** — list all towns from content.md (Charlotte, Pineville, Matthews, Steele Creek, Ballantyne, Indian Land, Lancaster, Waxhaw, Monroe, Stallings, Indian Trail, Mint Hill, Lake Wylie, Fort Mill, Rock Hill). Note it spans the NC/SC line south of Charlotte. Optional simple map/region graphic.
6. **Reviews / Trust** — there are NO published testimonials, so DO NOT invent any. Instead build a trust band: "12+ Years Experience," "Eco-Friendly, Biodegradable Products," "Free Estimates," "Residential & Commercial," plus links to the Facebook page and an "See us on Angi" CTA (Angie's List badge `angies-list-badge.png`). If real reviews are supplied later, add a quotes carousel here.
7. **Contact** — a contact form (fields: First Name, Last Name, Email, Phone, Address, City, Zip, Message → Send) matching the original, plus prominent phone **704-297-5461**, email **info@piedmontpowerwashing.com**, address **109 Sycamore Dr, Lancaster, SC 29720**, and Facebook link. Wire the form to a simple mailto or a placeholder POST handler with a TODO comment (no backend assumed). Add a "Free Estimate" emphasis.
8. **Footer** — logo, correct copyright year (current year, not 2024), address, phone, real email, Facebook link. Do NOT include the placeholder Instagram (`instagram.com/wix/`) unless a real handle is provided.

## Apply these critique fixes (from content.md)
- Replace dated Wix template with a clean modern layout; fix the "mysite" placeholder titles → proper `<title>`/meta per page/section with the real business name and SEO description (reuse the strong existing meta description listing services + towns + phone).
- Surface the "Free Estimate" CTA and click-to-call above the fold (was hidden).
- Make the before/after gallery a centerpiece, not a buried widget.
- Add visible trust signals (years, eco-friendly, free estimates).
- Ensure fully responsive, fast, accessible (alt text on all images, semantic headings, keyboard-navigable).
- Use a single canonical contact email (`info@piedmontpowerwashing.com`).

## Constraints
- Real content only — everything traceable to content.md. No fabricated reviews, hours, owner name, certifications, or services.
- Hours are unknown — omit a hours block (or use "Call for availability") rather than guessing.
- Keep accessibility and performance high; mobile-first.
- Deliver a runnable Astro project (`npm install` / `npm run dev` / `npm run build`) with images referenced from `./images/`.
