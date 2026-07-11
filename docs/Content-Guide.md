# Content Guide

## What's real vs. placeholder right now

- **Copy** (services, process steps, FAQ answers, brand story) was written
  specifically for Designer Plus Interiors' positioning — it is real,
  publishable copy, not lorem ipsum.
- **Imagery** is high-quality stock photography (sourced from Unsplash,
  royalty-free) standing in for real project photography. Every image is
  clearly a placeholder for the studio's own portfolio shots — swap before
  launch. File locations:
  - `public/images/hero-interior.jpg` — hero background
  - `public/images/featured-*.jpg` — home page featured projects
  - `public/images/portfolio-*.jpg` — `/portfolio` masonry grid
  - `public/images/about-hero.jpg`, `office-gallery-*.jpg` — `/about`
  - `public/images/material-*.jpg` — reserved for the materials showcase
    (not yet built — see Phase roadmap below)
- **Project names, client names, and stats** (420+ projects, 14+ years,
  4.9★ reviews) are illustrative placeholders matching the brand's claimed
  positioning — replace with verified real numbers before launch.
- **Contact details** (`src/data/site.ts`) — phone, WhatsApp number, email,
  and address are placeholders. Update before going live; the Google Map
  embed on `/contact` derives its query directly from this file.

## Editing content

Almost all copy lives in `src/data/site.ts` (services, process steps,
stats, nav, contact info) so it can be updated without touching component
code. Page-specific copy (About timeline, FAQ answers, testimonials) lives
directly in each page file under `src/app/`.

## Phase roadmap (not yet built)

1. **Materials showcase** — Italian marble, wood, lighting, hardware, glass,
   wardrobe suppliers, with brand logos.
2. **Before/After interactive slider** — room transformation comparisons.
3. **Individual portfolio project pages** — full case studies with
   materials used, area, timeline, and a full image gallery per project.
4. **Real video testimonials** — the `/testimonials` page currently uses
   static thumbnails with a play affordance; wire up real video embeds once
   footage exists.
