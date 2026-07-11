# Brand Guidelines — Designer Plus Interiors

## Mark

The logo is a hexagonal frame built from three interlocking segments, wrapping
an isometric cube. Never distort the aspect ratio, recolor the segments
individually, or place the mark on a background with insufficient contrast.
Source file: `public/logos/logo.png`. The in-app `LogoMark` component
(`src/components/ui/logo-mark.tsx`) reconstructs the same geometry as
independently animatable SVG paths — keep both in sync if the logo changes.

## Color Palette

Derived directly from the logo. Defined as CSS custom properties in
`src/app/globals.css` and exposed as Tailwind utilities (`bg-burgundy`,
`text-crimson`, etc.).

| Token       | Hex       | Use                                  |
| ----------- | --------- | ------------------------------------- |
| `burgundy`  | `#5C0F22` | Deep accents, gradient anchors        |
| `crimson`   | `#D92818` | Primary CTAs, links, active states    |
| `orange`    | `#F2811E` | Secondary accents, dark-section text  |
| `gold`      | `#F3B53D` | Ratings, small highlight details      |
| `charcoal`  | `#15130F` | Dark sections, body text on ivory     |
| `ivory`     | `#FAF7F2` | Light sections, text on dark          |

Never introduce colors outside this palette. Gradients must only combine
burgundy → crimson → orange, matching the logo's own gradient logic.

## Typography

- **Display / headings**: Fraunces (variable, optical size + soft/wonk axes) —
  a high-contrast serif for a luxury, editorial tone.
- **Body / UI**: Manrope — a clean geometric grotesque for readability at
  small sizes.

Both are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as
`--font-display` / `--font-sans`.

## Voice

Precise, confident, architecturally literal. Avoid generic real-estate
marketing language ("stunning", "dream home"). Prefer concrete claims
(materials, timelines, process steps) over adjectives.

## Motion

- Scroll-triggered reveals: 0.7–0.9s, `cubic-bezier(0.16, 1, 0.3, 1)`.
- Nothing snaps or bounces aggressively — motion should read as considered,
  not playful.
- Smooth scrolling is handled globally via Lenis
  (`src/hooks/use-lenis.ts`).
