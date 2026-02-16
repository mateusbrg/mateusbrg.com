# Blog UI Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve typography hierarchy, standardize container width to 56rem, remove the header wordmark, and add subtle page/component transitions.

**Architecture:** Keep Astro-first static rendering and apply transitions using Astro View Transitions through the shared layout. Centralize typographic and motion updates in global design tokens, then apply targeted template-level refinements to pages/components for consistency and maintainability.

**Tech Stack:** Astro 5, Vue 3 islands (unchanged), TailwindCSS v4, TypeScript strict, MDX, Shiki

---

**Skill refs:** @superpowers/verification-before-completion, @frontend-design, @superpowers/requesting-code-review

### Task 1: Prepare branch context and baseline verification

**Files:**
- Modify: none
- Test: none

**Step 1: Check current git status**

Run: `git status --short`
Expected: See current workspace status and confirm no accidental resets/reverts are needed.

**Step 2: Run baseline project checks**

Run: `pnpm astro check`
Expected: Pass or capture pre-existing issues to avoid misattribution.

**Step 3: Run baseline build**

Run: `pnpm build`
Expected: Successful build and baseline output in `dist/`.

**Step 4: Commit (only if baseline metadata/scripts are added)**

```bash
# Usually no commit for baseline-only task.
```

### Task 2: Standardize container width to 56rem

**Files:**
- Modify: `src/layouts/Layout.astro`
- Test: manual route checks on `/`, `/blog`, `/sobre`, `/blog/[slug]`

**Step 1: Write the failing validation expectation**

Document expected width behavior in task notes:
- `containerSize="content"` should resolve to `max-w-[56rem]`.
- default container behavior should also align with content-first layout unless explicitly wide.

**Step 2: Implement minimal layout change**

Update `containerClass` mapping in `src/layouts/Layout.astro` so content max width is `56rem` (Tailwind class `max-w-[56rem]`).

**Step 3: Verify visually in dev server**

Run: `pnpm dev`
Expected: `/sobre` and other content pages align to the same readable width target.

**Step 4: Run static validation**

Run: `pnpm astro check && pnpm build`
Expected: Both commands pass.

**Step 5: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "refactor(layout): standardize content container to 56rem"
```

### Task 3: Remove `mateus` from header and rebalance nav spacing

**Files:**
- Modify: `src/components/Nav.astro`
- Test: manual nav interaction on all pages

**Step 1: Define expected nav behavior**

Expected:
- Only 3 links remain (`Início`, `Blog`, `Sobre`).
- Active state remains visible (`aria-current="page"`).
- Hit areas and spacing remain comfortable on mobile and desktop.

**Step 2: Implement minimal code change**

Remove the home wordmark anchor and adjust wrapper spacing/classes to keep visual center and touch targets.

**Step 3: Verify behavior manually**

Run: `pnpm dev`
Expected: Header looks balanced without empty gap; link states still work.

**Step 4: Re-run validation commands**

Run: `pnpm astro check && pnpm build`
Expected: Pass.

**Step 5: Commit**

```bash
git add src/components/Nav.astro
git commit -m "refactor(nav): remove wordmark and simplify header links"
```

### Task 4: Enable Astro View Transitions in shared layout

**Files:**
- Modify: `src/layouts/Layout.astro`
- Test: route transitions across `/`, `/blog`, `/sobre`, `/blog/[slug]`

**Step 1: Define transition acceptance criteria**

Expected:
- Route navigation animates subtly (fade + slight settle).
- Browser fallback behavior remains functional.
- No interruption to SEO/meta rendering.

**Step 2: Implement router activation**

Import and render `<ClientRouter />` from `astro:transitions` inside `<head>` of `src/layouts/Layout.astro`.

**Step 3: Apply transition directives to landmarks**

Add `transition:*` directives to structural elements (`main`, key heading areas) where continuity is meaningful.

**Step 4: Verify route transitions manually**

Run: `pnpm dev`
Expected: Smooth, non-distracting route transitions with no layout jumps.

**Step 5: Commit**

```bash
git add src/layouts/Layout.astro src/pages/index.astro src/pages/blog/index.astro src/pages/sobre.astro src/layouts/BlogPost.astro
git commit -m "feat(ui): add astro view transitions for route navigation"
```

### Task 5: Refine typography scale and hierarchy tokens

**Files:**
- Modify: `src/styles/global.css`
- Test: typography review on home, list, about, and post pages

**Step 1: Write expected token outcomes**

Expected:
- Clearer delta between `--size-display`, `--size-h1`, `--size-h2`, body, and meta.
- Better mobile clamps.
- Improved prose readability.

**Step 2: Update token values minimally**

Edit `@theme` type-size tokens and spacing/rhythm variables in `src/styles/global.css`.

**Step 3: Apply hierarchy adjustments in component classes**

Update `.prose`, heading styles, and metadata utility classes to reflect new type rhythm.

**Step 4: Validate readability + responsiveness**

Run: `pnpm dev`
Expected: Balanced hierarchy on 375px, 768px, and desktop widths.

**Step 5: Commit**

```bash
git add src/styles/global.css
git commit -m "feat(typography): improve size scale and reading hierarchy"
```

### Task 6: Add subtle component transitions

**Files:**
- Modify: `src/components/BlogCard.astro`
- Modify: `src/components/Nav.astro`
- Modify: `src/layouts/BlogPost.astro`
- Modify: `src/styles/global.css`
- Test: hover/focus/entry behavior

**Step 1: Define transition constraints**

Expected:
- Subtle only; no dramatic movement.
- Use shared motion tokens.
- Prioritize link/card/title/border transitions.

**Step 2: Implement transitions in card and nav components**

Add/adjust Tailwind transition classes for title, border, image, and link states.

**Step 3: Implement post header reveal behavior**

Apply small stagger-like treatment through classes and/or transition directives in `BlogPost.astro`.

**Step 4: Verify interaction states**

Run: `pnpm dev`
Expected: Smooth hover/focus transitions and calm visual feel.

**Step 5: Commit**

```bash
git add src/components/BlogCard.astro src/components/Nav.astro src/layouts/BlogPost.astro src/styles/global.css
git commit -m "feat(ui): add subtle editorial component transitions"
```

### Task 7: Accessibility polish and extra UX improvements

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/components/BlogCard.astro` (if needed for focus states)
- Test: keyboard and reduced-motion checks

**Step 1: Unify focus-visible styles**

Ensure all interactive elements get visible, consistent focus treatment in `global.css`.

**Step 2: Enforce reduced-motion behavior**

Use `motion-reduce:*` utilities and global media query rules so transitions collapse gracefully.

**Step 3: Manual accessibility verification**

Run: `pnpm dev`
Expected:
- Tab order is logical.
- Reduced motion disables non-essential animation.

**Step 4: Commit**

```bash
git add src/styles/global.css src/components/BlogCard.astro
git commit -m "feat(a11y): improve focus and reduced-motion accessibility"
```

### Task 8: Final verification and review-ready summary

**Files:**
- Modify: none required unless fixes found
- Test: full verification suite

**Step 1: Run mandatory checks**

Run: `pnpm astro check`
Expected: Pass.

**Step 2: Run production build**

Run: `pnpm build`
Expected: Pass and emit dist output.

**Step 3: Run preview smoke test**

Run: `pnpm preview`
Expected: Production-like rendering and transitions behave as expected.

**Step 4: Collect UI evidence**

Capture screenshots/GIFs for:
- Home hero + latest posts
- Blog list
- About page
- Single post

**Step 5: Commit final fixups (if any)**

```bash
git add -A
git commit -m "chore(ui): finalize blog UI refresh polish"
```

## QA Checklist

- [ ] Width maxes at `56rem` in intended content contexts.
- [ ] Header no longer shows `mateus` label.
- [ ] Route transitions work with Astro client router.
- [ ] Component transitions are subtle and consistent.
- [ ] Typography hierarchy is clearly improved across all routes.
- [ ] Reduced-motion and keyboard navigation remain correct.
- [ ] `pnpm astro check` and `pnpm build` pass.
