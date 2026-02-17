# Repository Guidelines

## Project Overview

Personal blog (mateusbrg.com) built with **Astro 5** and **Vue 3**, using **TypeScript** in strict mode. Package manager is **pnpm**. Content is written in **pt-BR**.

The site is a static blog with an about page, using an Astro-first architecture: `.astro` components handle all static rendering, Vue 3 is available via `@astrojs/vue` for interactive islands when needed.

## Instructions and Rules

- Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.

## Tech Stack

- **Astro 5** — Static site generator with file-based routing
- **Vue 3** — Interactive islands (via `@astrojs/vue`)
- **TailwindCSS v4** — Styling via `@tailwindcss/vite` plugin (CSS-based config, NOT `tailwind.config.js`)
- **MDX** — Blog content format (via `@astrojs/mdx`)
- **Shiki** — Built-in syntax highlighting (zero client JS)
- **sharp** — Image optimization
- **@astrojs/sitemap** — Auto-generated sitemap
- **Self-hosted fonts** via `@fontsource`: Space Grotesk (headings), Noto Serif (body), IBM Plex Mono (code)

## Project Structure & Module Organization

```
src/
├── components/         # Reusable UI pieces (.astro, .vue when needed)
│   ├── BlogCard.astro  # Image card for blog list page
│   ├── Footer.astro    # GitHub + LinkedIn links, copyright
│   ├── Nav.astro       # Sticky top navigation (Home, Blog, Sobre)
│   └── SEO.astro       # Open Graph, meta description, canonical URL
├── content/
│   └── blog/           # MDX blog posts + cover images
│       ├── images/     # Post cover images (SVG/PNG/JPG)
│       └── *.mdx       # Blog posts with frontmatter
├── content.config.ts   # Astro 5 content collections (glob loader, zod schema)
├── layouts/
│   ├── BlogPost.astro  # Blog post layout (featured image, title, prose article)
│   └── Layout.astro    # Base layout (SEO head, Nav, main container, Footer)
├── pages/
│   ├── index.astro     # Homepage: hero + latest posts text list
│   ├── sobre.astro     # About page (/about)
│   └── blog/
│       ├── index.astro # Blog list: image cards grid
│       └── [slug].astro# Dynamic blog post route
├── styles/
│   └── global.css      # Font imports, TailwindCSS v4 @theme tokens, base/component layers
└── assets/             # Imported assets processed by Vite
public/                 # Static files served as-is (favicons, robots.txt)
docs/                   # Design docs and implementation plans
dist/                   # Build output (generated; do not edit)
```

## Content Collections (Astro 5 API)

Blog posts live in `src/content/blog/` as `.mdx` files. The collection is defined in `src/content.config.ts` (NOT `src/content/config.ts` — this is the Astro 5 location).

**Frontmatter schema:**

```yaml
title: string # Required
description: string # Required
date: Date # Required (YYYY-MM-DD)
image: ImageMetadata # Required (relative path to cover image)
tags: string[] # Optional
draft: boolean # Optional (default: false)
```

**Key Astro 5 APIs:**

- `defineCollection` from `astro:content` with `glob()` loader
- `getCollection('blog')` to query posts
- `render()` from `astro:content` to get the `<Content />` component
- `post.id` is used as the slug (derived from filename without extension)

## Design Tokens

Defined in `src/styles/global.css` under `@theme {}`:

| Token                  | Value         | Usage                 |
| ---------------------- | ------------- | --------------------- |
| `--color-background`   | `#FAFAF8`     | Page background       |
| `--color-surface`      | `#FFFFFF`     | Card/nav backgrounds  |
| `--color-text-primary` | `#1A1A1A`     | Headings              |
| `--color-text-body`    | `#3D3D3D`     | Body text             |
| `--color-text-muted`   | `#6B6B6B`     | Secondary text, dates |
| `--color-border`       | `#E8E8E4`     | Borders, dividers     |
| `--color-accent`       | `#2B5EA7`     | Links, highlights     |
| `--font-heading`       | Space Grotesk | Headings, nav         |
| `--font-body`          | Noto Serif    | Body text, prose      |
| `--font-mono`          | IBM Plex Mono | Code blocks, dates    |

## Build, Test, and Development Commands

Use `pnpm` (lockfile is `pnpm-lock.yaml`).

- `pnpm dev`: Start local dev server.
- `pnpm build`: Create production build in `dist/`.
- `pnpm preview`: Preview the built site locally.
- `pnpm astro check`: Run Astro/TypeScript project checks.

## Coding Style & Naming Conventions

- Follow TypeScript strict mode (`tsconfig.json` extends `astro/tsconfigs/strict`).
- Use 2-space indentation in `.astro`, `.ts`, and config files.
- Keep components and layouts in PascalCase (e.g., `BlogCard.astro`, `Layout.astro`).
- Keep route filenames lowercase and descriptive (`sobre.astro`, `blog/[slug].astro`).
- Use TailwindCSS v4 utility classes for styling. Custom design tokens go in `@theme {}` in `global.css`.
- The `.prose` component class in `global.css` handles blog post typography — extend it there, not inline.
- Prefer scoped styles inside components unless creating shared global styles intentionally.

## Testing Guidelines

There is no dedicated test framework configured yet.

- Treat `pnpm astro check` plus `pnpm build` as required validation before opening a PR.
- For UI changes, verify pages in `pnpm dev` and `pnpm preview`.
- If you add complex logic, include tests with the framework you introduce and document the run command in `package.json`.

## Commit & Pull Request Guidelines

Git history favors concise Conventional Commit-style messages.

- Use format: `type(scope): short summary` (e.g., `feat(blog): add post card component`).
- Keep commits focused; avoid mixing refactors and feature work.
- PRs should include: purpose, key changes, local validation commands run, and screenshots for visible UI updates.
- Link related issues/tasks when applicable.
