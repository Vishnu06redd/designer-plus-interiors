# Designer Plus Interiors

Premium marketing website for Designer Plus Interiors, a turnkey interior
design studio in Bangalore. Built with Next.js (App Router), Tailwind CSS v4,
and Framer Motion.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** — theme tokens defined in `src/app/globals.css`
- **Framer Motion** — scroll reveals, page transitions, micro-interactions
- **Lenis** — smooth scrolling
- **lucide-react** — general iconography (brand/social icons are custom SVGs
  in `src/components/ui/social-icons.tsx`, since lucide no longer ships
  trademarked brand marks)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build (statically prerenders every route)
npm run start   # serve the production build
```

## Project structure

```
src/
  app/                # routes (App Router)
  components/
    layout/            # header, footer, floating contact, smooth scroll
    ui/                # shared primitives (Reveal, LogoMark, PageHero, ...)
    home/               # home-page-only sections
    faq/ contact/       # page-specific components
  data/                # site.ts — services, nav, stats, process, contact info
  hooks/               # use-lenis.ts
  lib/                 # utils.ts (cn helper)
docs/                  # Brand-Guidelines, SEO-Strategy, Content-Guide, Deployment
```

## Current status

This is the **foundation build**: a fully realized, production-quality Home
page plus real (non-lorem) About, Services (index + 10 detail pages),
Portfolio, Process, Testimonials, FAQ, and Contact pages — all with working
SEO metadata, JSON-LD, sitemap, and an animated brand system derived from the
logo. See `docs/Content-Guide.md` for exactly what's placeholder content
(stock imagery, illustrative stats) versus real, publishable copy, and for
the roadmap of sections not yet built (materials showcase, before/after
slider, individual project case-study pages, real video testimonials).

See `docs/Brand-Guidelines.md` for the color/type system and
`docs/Deployment.md` for what to update before going live.
