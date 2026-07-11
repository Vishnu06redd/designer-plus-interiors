# SEO Strategy

## Implemented

- Per-page `metadata` exports (title, description, canonical) on every route.
- Title template (`%s | Designer Plus Interiors`) set in the root layout.
- Open Graph + Twitter card metadata, with a dynamically generated OG image
  (`src/app/opengraph-image.tsx`) built from the brand mark — no static
  asset to fall out of sync.
- `InteriorDesignFirm` (LocalBusiness subtype) JSON-LD in the root layout —
  update `src/data/site.ts` if address/phone/hours change.
- `FAQPage` JSON-LD on `/faq`, generated from the same data rendered in the
  accordion, so schema and visible copy can never drift apart.
- `sitemap.ts` / `robots.ts` using Next's typed `MetadataRoute` file
  conventions — includes every static route plus all ten service detail
  pages via `generateStaticParams`.
- Semantic HTML: single `<h1>` per page (in `PageHero` / the hero), image
  `alt` text on every `next/image`, and accessible form labels on the
  contact form.

## Still needed before launch

- **BreadcrumbList schema** on service detail and portfolio project pages
  once those have real, stable URLs.
- **Real Open Graph photography** — the generated OG image is brand-safe but
  a photographic hero image (once real project photography exists) will
  perform better on social shares.
- **Google Business Profile** verification matching the address in
  `src/data/site.ts` exactly (name, address, phone must match for local pack
  ranking).
- **Backlink/citation building** once the site is live on the real domain —
  update `siteConfig.url` in `src/data/site.ts` first.
- **Core Web Vitals monitoring** post-deploy (Vercel Analytics or
  Search Console) — the foundation is fast, but real hero photography and
  video testimonials will add weight that needs measuring.
