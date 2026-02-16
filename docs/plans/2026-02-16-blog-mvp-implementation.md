# Blog MVP Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the mateusbrg.com personal blog MVP with 4 pages (Home, Blog List, Blog Post, About), content collections, and a calm warm-neutral design.

**Architecture:** Astro-first with `.astro` components for all static content. Vue 3 reserved for interactive islands only. TailwindCSS v4 for styling. Astro Content Collections with MDX for blog posts. Static output (SSG).

**Tech Stack:** Astro 5, Vue 3, TailwindCSS v4, MDX, Shiki, @fontsource (Space Grotesk, Noto Serif, IBM Plex Mono)

**Design doc:** `docs/plans/2026-02-16-blog-mvp-design.md`

**Design references:** `docs/blog-inspo-2.png`, `docs/blog-section-home.png`, `docs/blog-section-blog-list.png`, `docs/blog-section-blog-post.png`, `docs/design-inspo-blog.png`

**Validation:** `pnpm astro check && pnpm build` must pass after every task. Visual verification in `pnpm dev` for UI tasks.

---

### Task 1: Install TailwindCSS v4

**Files:**
- Modify: `package.json`
- Modify: `astro.config.mjs`
- Create: `src/styles/global.css`

**Step 1: Install dependencies**

Run: `pnpm add @astrojs/tailwind tailwindcss @tailwindcss/vite`

Check Astro + TailwindCSS v4 docs via Context7 for the correct integration method — Tailwind v4 uses CSS-based config, not `tailwind.config.js`.

**Step 2: Configure Astro integration**

Update `astro.config.mjs` to add the TailwindCSS v4 integration. Follow the Astro docs for the v4-specific setup (may use `@tailwindcss/vite` plugin instead of `@astrojs/tailwind`).

**Step 3: Create global CSS**

Create `src/styles/global.css` with the Tailwind v4 import and base custom properties:

```css
@import "tailwindcss";

@theme {
  --color-background: #FAFAF8;
  --color-surface: #FFFFFF;
  --color-text-primary: #1A1A1A;
  --color-text-body: #3D3D3D;
  --color-text-muted: #6B6B6B;
  --color-border: #E8E8E4;
  --color-accent: #2B5EA7;
}
```

**Step 4: Validate**

Run: `pnpm astro check && pnpm build`
Expected: PASS, no errors

**Step 5: Commit**

```bash
git add -A && git commit -m "chore: add TailwindCSS v4 integration"
```

---

### Task 2: Install and configure fonts

**Files:**
- Modify: `package.json`
- Modify: `src/styles/global.css`

**Step 1: Install font packages**

Run: `pnpm add @fontsource/space-grotesk @fontsource/noto-serif @fontsource/ibm-plex-mono`

**Step 2: Import fonts in global CSS**

Add font imports to `src/styles/global.css` and configure font-family tokens in the `@theme` block:

```css
@import "@fontsource/space-grotesk/400.css";
@import "@fontsource/space-grotesk/700.css";
@import "@fontsource/noto-serif/400.css";
@import "@fontsource/noto-serif/400-italic.css";
@import "@fontsource/noto-serif/700.css";
@import "@fontsource/ibm-plex-mono/400.css";
@import "@fontsource/ibm-plex-mono/700.css";

/* Add to @theme block: */
--font-heading: "Space Grotesk", sans-serif;
--font-body: "Noto Serif", serif;
--font-mono: "IBM Plex Mono", monospace;
```

**Step 3: Validate**

Run: `pnpm astro check && pnpm build`
Expected: PASS

**Step 4: Commit**

```bash
git add -A && git commit -m "chore: add self-hosted fonts (Space Grotesk, Noto Serif, IBM Plex Mono)"
```

---

### Task 3: Base layout with global styles

**Files:**
- Modify: `src/layouts/Layout.astro`
- Modify: `src/styles/global.css`

**Step 1: Update global CSS with base styles**

Add base layer styles to `src/styles/global.css`:

```css
@layer base {
  html {
    font-family: var(--font-body);
    color: var(--color-text-body);
    background-color: var(--color-background);
    line-height: 1.7;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-heading);
    color: var(--color-text-primary);
    line-height: 1.2;
  }

  code, pre {
    font-family: var(--font-mono);
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
}
```

**Step 2: Rewrite Layout.astro**

Replace the existing Layout.astro with the base shell:
- Import `src/styles/global.css`
- HTML lang="pt-BR"
- `<head>`: charset, viewport, title prop, description prop, favicon, font preloads
- `<body>`: slot for page content
- Max-width container (~1200px) centered with auto margins

Props interface: `{ title: string; description?: string }`

**Step 3: Validate**

Run: `pnpm astro check && pnpm build`
Verify in `pnpm dev`: page has correct background color, fonts load

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: base layout with global styles, typography, and color tokens"
```

---

### Task 4: Navigation component

**Files:**
- Create: `src/components/Nav.astro`
- Modify: `src/layouts/Layout.astro`

**Step 1: Create Nav.astro**

Sticky top navigation bar with:
- Site name/logo on the left (link to `/`)
- Links on the right: `Home`, `Blog`, `Sobre`
- Active link styling based on current path (use `Astro.url.pathname`)
- Background: `surface` color with subtle bottom border
- Mobile: links stay visible (3 items fit on mobile, no hamburger needed for MVP)

Use Tailwind classes: `sticky top-0 z-50`, flex layout, proper spacing.

**Step 2: Add Nav to Layout.astro**

Import and render `<Nav />` at the top of the body, before the main content slot.

**Step 3: Validate**

Run: `pnpm astro check && pnpm build`
Verify in `pnpm dev`: nav is sticky, links display correctly, active state works

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add sticky navigation component"
```

---

### Task 5: Footer component

**Files:**
- Create: `src/components/Footer.astro`
- Modify: `src/layouts/Layout.astro`

**Step 1: Create Footer.astro**

Minimal footer:
- Top border separator (`border` color)
- GitHub icon + LinkedIn icon (use inline SVGs, small and accessible)
- Copyright: `© 2026 Mateus`
- Centered, with generous top margin

**Step 2: Add Footer to Layout.astro**

Import and render `<Footer />` after the main content slot.

**Step 3: Validate**

Run: `pnpm astro check && pnpm build`
Verify in `pnpm dev`: footer renders, links work, icons display

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add footer component with social links"
```

---

### Task 6: Content collection for blog posts

**Files:**
- Create: `src/content.config.ts`
- Create: `src/content/blog/` directory
- Create: `src/content/blog/primeiro-post.mdx` (sample post)

**Step 1: Define content collection schema**

Create `src/content.config.ts` with the blog collection. Check Astro 5 content collections docs via Context7 for the correct API (Astro 5 may use a different config format than v4).

Schema fields:
- `title`: string, required
- `description`: string, required
- `date`: date, required
- `image`: image(), required
- `tags`: array of strings, optional
- `draft`: boolean, default false

**Step 2: Create sample blog post**

Create `src/content/blog/primeiro-post.mdx` with realistic frontmatter and body content (in pt-BR). Include a sample cover image in the same directory or `src/assets/`.

Include varied markdown elements: headings, paragraphs, code blocks, blockquote, list, inline code — to test all typography later.

**Step 3: Validate**

Run: `pnpm astro check && pnpm build`
Expected: PASS, collection recognized

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add blog content collection with sample post"
```

---

### Task 7: Homepage

**Files:**
- Modify: `src/pages/index.astro`
- Delete: `src/components/Welcome.astro` (no longer needed)

**Step 1: Build homepage**

Replace `src/pages/index.astro` with the homepage layout from the design:

**Hero section:**
- Greeting: "Ola, eu sou o Mateus." in Space Grotesk (large heading)
- Tagline/description below in Noto Serif (body text, muted)
- Generous top/bottom padding

**Latest posts section:**
- Heading: "Ultimos Pensamentos" with "Ver Arquivo →" link to `/blog` on the right
- Query blog collection: `getCollection('blog')`, filter `draft !== true`, sort by date desc, take first 5
- Each post as a text row: date in IBM Plex Mono (muted) + title (bold, link to `/blog/[slug]`) + excerpt
- Clear spacing between entries

Reference design: `docs/blog-section-home.png` and `docs/blog-inspo-2.png`

**Step 2: Delete Welcome.astro**

Remove `src/components/Welcome.astro` — it's the default Astro placeholder.

**Step 3: Validate**

Run: `pnpm astro check && pnpm build`
Verify in `pnpm dev`: homepage shows greeting + sample post in list

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: implement homepage with hero and latest posts"
```

---

### Task 8: Blog list page

**Files:**
- Create: `src/pages/blog/index.astro`
- Create: `src/components/BlogCard.astro`

**Step 1: Create BlogCard.astro**

Image card component for the blog list page. Props: `title`, `description`, `date`, `image`, `slug`.

Layout:
- Horizontal: image on left (~40% width), text on right
- Image: use Astro `<Image />` with responsive sizes, lazy loading
- Text: date (monospace, muted) + title (Space Grotesk, bold, link) + description (Noto Serif)
- Bottom border separator between cards
- Mobile (`< md`): image on top (full width), text below

Reference design: `docs/blog-section-blog-list.png`

**Step 2: Create blog list page**

Create `src/pages/blog/index.astro`:
- Page heading: "Ultimos Artigos"
- Subtitle: short description in pt-BR
- Query all non-draft posts, sort by date desc
- Render each as `<BlogCard />`
- Generous spacing between cards

**Step 3: Validate**

Run: `pnpm astro check && pnpm build`
Verify in `pnpm dev`: blog list shows sample post with image card, responsive on mobile

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: implement blog list page with image cards"
```

---

### Task 9: Blog post page

**Files:**
- Create: `src/pages/blog/[slug].astro`
- Create: `src/layouts/BlogPost.astro`

**Step 1: Create BlogPost.astro layout**

Blog post layout wrapping the base Layout:
- Featured image at top (full content-width, Astro `<Image />`)
- Title (Space Grotesk, large)
- Description/subtitle (Noto Serif, muted)
- Author ("Mateus") + formatted date
- Article body in a narrower container (~720px max-width, centered)
- Prose styling: proper heading sizes, paragraph spacing, blockquote with left accent border, list styling, code block styling, horizontal rules
- Use Tailwind's typography approach or manual prose styles

Reference design: `docs/blog-section-blog-post.png`

**Step 2: Create [slug].astro dynamic route**

Create `src/pages/blog/[slug].astro`:
- `getStaticPaths()`: query blog collection, return params + props for each post
- Render content using `<Content />` component inside BlogPost layout
- Pass frontmatter data to layout

Check Astro 5 content collections rendering docs via Context7 for correct `render()` / `<Content />` API.

**Step 3: Validate**

Run: `pnpm astro check && pnpm build`
Verify in `pnpm dev`: navigate to sample post, verify image, typography, code highlighting, all markdown elements

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: implement blog post page with rich typography"
```

---

### Task 10: About page

**Files:**
- Create: `src/pages/sobre.astro`

**Step 1: Create about page**

Create `src/pages/sobre.astro`:
- "Sobre Mim" heading (Space Grotesk)
- Placeholder bio text in pt-BR (Mateus can fill in later)
- "Experiencia" section with placeholder text
- "Contato" section with GitHub + LinkedIn links
- Same narrow content width as blog posts (~720px) for readability
- Use base Layout with title="Sobre" and description

**Step 2: Validate**

Run: `pnpm astro check && pnpm build`
Verify in `pnpm dev`: page renders, nav "Sobre" link works

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: implement about page"
```

---

### Task 11: SEO and meta tags

**Files:**
- Create: `src/components/SEO.astro`
- Modify: `src/layouts/Layout.astro`

**Step 1: Create SEO component**

Create `src/components/SEO.astro` with props: `title`, `description`, `image?`, `type?` (default "website").

Renders in `<head>`:
- `<title>` with site name suffix: `{title} | mateusbrg.com`
- `<meta name="description">`
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:type`, `og:url`
- `<link rel="canonical">`
- `<meta name="robots" content="index, follow">`

**Step 2: Add SEO to Layout.astro**

Import and render `<SEO />` in the head, passing props through from pages.

**Step 3: Create sitemap**

Check if Astro has a sitemap integration. If so:
Run: `pnpm add @astrojs/sitemap`
Add to `astro.config.mjs` with `site: "https://mateusbrg.com"`

**Step 4: Validate**

Run: `pnpm astro check && pnpm build`
Verify: check page source for correct meta tags, sitemap generated in dist/

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: add SEO meta tags and sitemap"
```

---

### Task 12: Create 2 more sample blog posts

**Files:**
- Create: `src/content/blog/segundo-post.mdx`
- Create: `src/content/blog/terceiro-post.mdx`
- Add cover images for each post

**Step 1: Write sample posts**

Create 2 additional sample posts with:
- Different dates (spread across months)
- Different cover images (can use placeholder images from `src/assets/`)
- Varied content: one with lots of code blocks, one more text-heavy
- Realistic pt-BR content about technology topics
- Different tags

This ensures the blog list and homepage look realistic with multiple entries.

**Step 2: Validate**

Run: `pnpm astro check && pnpm build`
Verify in `pnpm dev`: homepage shows 3 posts, blog list shows 3 cards, each post renders correctly

**Step 3: Commit**

```bash
git add -A && git commit -m "content: add sample blog posts for testing"
```

---

### Task 13: Responsive polish and final review

**Files:**
- Potentially modify: any component or layout needing adjustments

**Step 1: Mobile review**

Open `pnpm dev` and test at these breakpoints:
- 375px (iPhone SE)
- 390px (iPhone 14)
- 768px (tablet)
- 1024px (small desktop)
- 1440px (large desktop)

Check every page: Home, Blog List, Blog Post, About.

Fix any issues: text overflow, image sizing, spacing, nav usability.

**Step 2: Typography review**

Verify on blog post page:
- Line length comfortable at all breakpoints (~60-80 characters per line)
- Code blocks don't overflow (horizontal scroll if needed)
- Headings have proper hierarchy and spacing
- Blockquotes styled with subtle left border

**Step 3: Performance check**

Run: `pnpm build`
Check `dist/` output: pages should be small HTML files with minimal/zero JS.

**Step 4: Commit**

```bash
git add -A && git commit -m "fix: responsive polish and typography adjustments"
```

---

## Task Dependency Order

```
Task 1 (TailwindCSS) → Task 2 (Fonts) → Task 3 (Layout) → Task 4 (Nav) → Task 5 (Footer)
                                                                                    ↓
Task 6 (Content Collection) ──────────────────────────────────────────────→ Task 7 (Homepage)
                                                                                    ↓
                                                                           Task 8 (Blog List)
                                                                                    ↓
                                                                           Task 9 (Blog Post)
                                                                                    ↓
                                                                           Task 10 (About)
                                                                                    ↓
                                                                           Task 11 (SEO)
                                                                                    ↓
                                                                           Task 12 (Sample Posts)
                                                                                    ↓
                                                                           Task 13 (Polish)
```

Tasks 1-5 and Task 6 can be parallelized (foundation + content are independent).
Tasks 7-13 are sequential (each builds on previous).
