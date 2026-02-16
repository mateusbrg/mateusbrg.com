# Repository Guidelines

## Project Overview

Personal blog/knowledge archive (mateusbrg.com) built with **Astro 5** and **Vue 3**, using **TypeScript** in strict mode. Package manager is **pnpm**.

## Instructions and Rules

- Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.

## Project Structure & Module Organization

This repository is an Astro 5 site with Vue 3 integration.

- `src/pages/`: File-based routes (for example, `src/pages/index.astro`).
- `src/layouts/`: Shared page shells such as `Layout.astro`.
- `src/components/`: Reusable UI pieces in `.astro` (and `.vue` when added).
- `src/assets/`: Imported assets processed by Astro/Vite.
- `public/`: Static files served as-is (favicons, images).
- `dist/`: Build output (generated; do not edit).

## Build, Test, and Development Commands

Use `pnpm` (lockfile is `pnpm-lock.yaml`).

- `pnpm dev`: Start local dev server.
- `pnpm build`: Create production build in `dist/`.
- `pnpm preview`: Preview the built site locally.
- `pnpm astro check`: Run Astro/TypeScript project checks.

## Coding Style & Naming Conventions

- Follow TypeScript strict mode (`tsconfig.json` extends `astro/tsconfigs/strict`).
- Use 2-space indentation in `.astro`, `.ts`, and config files.
- Keep components and layouts in PascalCase (for example, `Welcome.astro`, `Layout.astro`).
- Keep route filenames lowercase and descriptive (`about.astro`, `blog/[slug].astro`).
- Prefer scoped styles inside components unless creating shared global styles intentionally.

## Testing Guidelines

There is no dedicated test framework configured yet.

- Treat `pnpm astro check` plus `pnpm build` as required validation before opening a PR.
- For UI changes, verify pages in `pnpm dev` and `pnpm preview`.
- If you add complex logic, include tests with the framework you introduce and document the run command in `package.json`.

## Commit & Pull Request Guidelines

Git history favors concise Conventional Commit-style messages, especially `chore:` and `chore(deps):`.

- Use format: `type(scope): short summary` (for example, `feat(blog): add post card component`).
- Keep commits focused; avoid mixing refactors and feature work.
- PRs should include: purpose, key changes, local validation commands run, and screenshots for visible UI updates.
- Link related issues/tasks when applicable.
