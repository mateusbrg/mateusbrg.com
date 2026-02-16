# mateusbrg.com — Blog MVP Design

## Architecture

**Astro-first:** All pages, layouts, and static components as `.astro` files. Vue only for interactive islands (mobile nav toggle, future interactive elements). Zero JS shipped for static content.

**Stack:** Astro 5 + Vue 3 + TailwindCSS v4 + MDX

## Pages

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Personal intro + latest 3-5 posts (text list) + "Ver Arquivo" link |
| Blog List | `/blog` | All posts with image cards, ordered by date |
| Blog Post | `/blog/[slug]` | Full article with rich typography |
| About | `/sobre` | Bio, experience, contact links |

**Navigation:** Sticky top nav — `Home`, `Blog`, `Sobre`
**Footer:** GitHub + LinkedIn + copyright

## Homepage Layout

- Greeting section: "Ola, eu sou o Mateus." (Space Grotesk) + short tagline (Noto Serif)
- Latest posts section: "Ultimos Pensamentos" heading + "Ver Arquivo" link
- Posts as text-only list: monospace date + bold title + short excerpt
- 3-5 latest posts shown
- Generous whitespace between sections

## Blog List Page (`/blog`)

- Page heading + subtitle description
- Posts as image cards: featured image on left, date + title + description on right
- Mobile: image stacks on top, text below (single column)
- All posts, newest first
- Images optimized with Astro `<Image />` (WebP, lazy loading, responsive)

## Blog Post Page (`/blog/[slug]`)

- Featured image at top (full content-width)
- Title (Space Grotesk, large) + description/subtitle (Noto Serif, muted)
- Author + date metadata
- Article body at ~720px max-width for readability
- Syntax highlighting via Shiki (built-in, zero JS)
- MDX for embedding Vue components in posts when needed

## About Page (`/sobre`)

- "Sobre Mim" heading
- Bio text (who I am, passions, what I do)
- Experience section (simple text, no timeline widget)
- Contact: GitHub + LinkedIn links
- Regular `.astro` page, not a content collection

## Content System

Astro Content Collections with `.mdx` files. Frontmatter schema:

```yaml
title: "Post Title"
description: "Short excerpt"
date: 2026-02-16
image: "./cover.jpg"
tags: ["astro", "vue"]
draft: false
```

## Typography

| Role | Font | Usage |
|---|---|---|
| Headings / Display | Space Grotesk | Page titles, section headings, post titles |
| Body | Noto Serif | Article text, descriptions, about page |
| Code | IBM Plex Mono | Code blocks, inline code, dates in blog list |

Line height: 1.6-1.8 for body text. Ample paragraph spacing.

## Color Palette — Warm Neutrals

| Token | Value | Usage |
|---|---|---|
| `background` | `#FAFAF8` | Page background (warm off-white) |
| `surface` | `#FFFFFF` | Cards, nav |
| `text-primary` | `#1A1A1A` | Headings, strong text |
| `text-body` | `#3D3D3D` | Body text |
| `text-muted` | `#6B6B6B` | Dates, descriptions, metadata |
| `border` | `#E8E8E4` | Subtle separators |
| `accent` | `#2B5EA7` | Links, hover states |

## Technical Decisions

| Decision | Choice | Why |
|---|---|---|
| Styling | TailwindCSS v4 | Utility-first, fast iteration |
| Content | Astro Content Collections + MDX | Type-safe frontmatter, Vue in posts |
| Images | Astro `<Image />` | Auto WebP, responsive, lazy loading |
| Syntax highlighting | Shiki (built-in) | Zero-JS, build-time |
| Fonts | Self-hosted via `@fontsource` | No external requests |
| Interactive components | Vue `client:visible` | Hydrate only when visible |
| Output | Static (SSG) | Fast, CDN-friendly |

## Design Principles

- Calm, not chaos — generous whitespace, clean layouts
- Everything within reach — clear navigation
- Encourage pause — don't rush the reader
- Mobile is critical — as beautiful on phone as desktop
- Content in pt-BR
