# Blog UI Refresh Design

**Date:** 2026-02-16  
**Scope:** `mateusbrg.com` Astro blog UI refinement (typography, container width, header simplification, transitions)

## Goals

- Improve typography scale and hierarchy across all templates.
- Standardize main container max width to `56rem` (matching desired `/sobre` behavior).
- Remove the `mateus` brand text from the header.
- Add subtle editorial transitions for pages and components.
- Preserve current visual language (fonts, palette, calm editorial tone).

## Non-Goals

- No content model/schema changes.
- No full visual redesign or palette replacement.
- No JS-heavy animation framework adoption.

## Constraints

- Astro-first architecture (`.astro` templates) with static output.
- Tailwind v4 + tokenized styles in `src/styles/global.css`.
- Maintain accessibility and reduced-motion behavior.
- Keep performance stable (minimal client overhead).

## Chosen Direction

**Editorial subtle motion + stronger typographic rhythm**

This direction keeps the current identity but improves readability and navigation continuity. Motion should feel intentional and nearly invisible: fade, slight translate, short durations, and consistent easing.

## Architecture Decisions

1. Use Astro View Transitions site-wide via `<ClientRouter />` in shared layout.
2. Keep all animation timing centralized in CSS custom properties.
3. Use transition directives selectively on landmarks (`main`, section headings) instead of animating everything.
4. Keep component hover/interaction transitions CSS-only.
5. Respect `prefers-reduced-motion` for both route and component transitions.

## Targeted File Areas

- `src/layouts/Layout.astro`
- `src/components/Nav.astro`
- `src/components/BlogCard.astro`
- `src/layouts/BlogPost.astro`
- `src/pages/index.astro`
- `src/pages/blog/index.astro`
- `src/pages/sobre.astro`
- `src/styles/global.css`

## Detailed Design

### Typography

- Increase the visual gap between display/H1/H2/body/meta.
- Fine-tune mobile clamps so headings remain expressive but not oversized on small screens.
- Improve prose hierarchy in posts (`.prose h2/h3`, paragraph spacing, meta readability).

### Layout Width

- Standardize the main container to `max-w-[56rem]` for content pages.
- Preserve ability to opt into wider layouts only when explicitly needed.

### Header

- Remove `mateus` wordmark link from nav cluster.
- Keep only route links (`Início`, `Blog`, `Sobre`) with clear active state.
- Slightly rebalance spacing to maintain visual center.

### Transitions

- Route level: Astro View Transitions with subtle fade/translate treatment.
- Component level: soft transitions for link color, border, and image scale.
- Content reveal: small stagger in post header elements (cover, title, meta, article body).

## Accessibility and Performance

- Keep focus-visible ring explicit and consistent across components.
- Preserve keyboard navigation and aria-current semantics.
- Disable non-essential motion under reduced-motion preferences.
- Avoid extra JS libraries; only Astro router client where necessary.

## Extra Improvements Included

1. Increase metadata contrast/size slightly for better scanability.
2. Normalize spacing between sections (`section-shell`, `section-intro`) for consistent rhythm.
3. Add more explicit interaction cues on cards/links (without heavy motion).

## Validation Strategy

- Static checks: `pnpm astro check`
- Build verification: `pnpm build`
- Manual QA in `pnpm dev` and `pnpm preview`:
  - `/`
  - `/blog`
  - `/sobre`
  - `/blog/<slug>`
- Verify reduced motion (`prefers-reduced-motion`) and keyboard navigation paths.
