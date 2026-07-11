# Deployment

## Prerequisites

- Node.js 20+ (project was built and tested on Node 25)
- `npm install`

## Local development

```bash
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

`npm run build` runs a full Turbopack production build, including static
generation for every route (all pages are statically prerendered — there is
no server-side data fetching yet).

## Environment variables

None are required yet. `.env.example` is reserved for future integrations
(contact form email delivery, analytics, CMS). The contact form currently
only simulates submission client-side — wire it to a real email/CRM
endpoint (e.g. Resend, SendGrid, or a serverless function) before launch.

## Before going live

1. Update `siteConfig.url` in `src/data/site.ts` to the real production
   domain — it feeds `metadataBase`, the sitemap, and JSON-LD.
2. Replace placeholder contact details, images, and stats (see
   `docs/Content-Guide.md`).
3. Point the contact form at a real submission endpoint.
4. Recommended host: Vercel (zero-config for Next.js App Router, image
   optimization, and edge caching out of the box).
