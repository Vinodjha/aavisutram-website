# Aavisutram — website

Hand-knit & crochet portfolio/marketing site. Static site built with
[Astro](https://astro.build) — no server, no database, deployable for free.

## Project workflow (do these in order)

1. **Domain + hosting accounts** *(you — needs your payment details)*
   - Create a free Cloudflare account.
   - Register `aavisutram.com` through **Cloudflare Registrar** (~$10–11/yr,
     at-cost, no renewal markup) — or a `.dk` too if you want to reserve it.
   - Create a **Cloudflare Pages** project in the same account (free tier).
2. **Code hosting** *(you)*
   - Create a free GitHub account/repo (e.g. `aavisutram-website`) and push
     this folder to it. Cloudflare Pages deploys automatically on every push.
3. **Connect Pages to GitHub** *(you, ~5 minutes)*
   - In Cloudflare Pages, "Connect to Git" → pick the repo → build command
     `npm run build`, output directory `dist`. Point the custom domain at it.
4. **Content pipeline** *(Claude builds next)*
   - A Google Sheet + Drive folder she can add products to directly, and a
     script that turns those rows into `src/data/products.json` and
     redeploys the site automatically. See `scripts/sync-sheet.mjs`.
5. **Real content** *(you + her)*
   - Fill in the real contact details (see "Before launch" below).
   - Replace placeholder products with real, AI-enhanced photos —
     starting with the ones already display-ready.
6. **Design polish**
   - Swap in her actual label/logo, refine colours/fonts if wanted.
7. **Launch**
   - Point the domain live, share the link.
8. **Handoff note for her**
   - One-page "how to add a new piece" cheat sheet once the Sheet pipeline
     is live.

## Before launch — placeholders to replace

Search the codebase for `TODO` / `Sample` / `XXXXXXXX`:

- `src/data/contact.json` — the one place holding WhatsApp number,
  Instagram handle and email; Footer, Contact page and every product's
  "Enquire" button all read from here. **Double-check the Instagram handle
  is actually hers before publishing** — it was set to match the brand
  name as a convention, not verified against a real account.
- `src/pages/about.astro` — her actual story.
- `src/data/products.json` — replace every placeholder product with a real
  one (see "Adding a product" below).
- `public/favicon.svg` — replace with a proper icon, ideally from her logo.

## Adding a product (until the Sheet pipeline exists)

Edit `src/data/products.json` and add an entry:

```json
{
  "id": "hats-003",
  "name": "Charcoal Ribbed Beanie",
  "category": "hats",
  "description": "Ribbed wool beanie in charcoal grey.",
  "priceRange": "300–400 DKK",
  "status": "Made to order",
  "image": "/images/products/hats-003.jpg"
}
```

Drop the photo into `public/images/products/`. `category` must match a
`slug` in `src/data/categories.json`.

## Adding a new category

Add an entry to `src/data/categories.json` — it automatically appears in
the navigation menu, the homepage category grid, and gets its own page at
`/shop/<slug>`. No other code changes needed.

```json
{ "slug": "scarves", "label": "Scarves", "icon": "🧣", "description": "..." }
```

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # preview the production build locally
```

## Search & filtering

The `/shop` page has a live search box and category filter chips — both
run entirely in the browser (no backend), filtering the product cards
already rendered on the page. It scales comfortably to a few hundred
products; if the catalog gets much larger than that, revisit with a small
search index tool (e.g. Pagefind).
