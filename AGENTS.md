Guidance for AI coding agents working in this repository.

## Project Overview
- **What it is:** Personal portfolio website
- **Stack:** React 18 + Vite + Tailwind CSS + bun
- **Hosting:** Vercel (auto-deploy from `main`)
- **Goal** Designed to showcase projects, skills, cv and contact information
- **CI:** GitHub Actions (lint + test on every PR)

## Project Structure
- `src/components/` — Navbar component
- `src/pages/` — Route-level pages (Home, About, Projects, Contact)
- `src/data/` — Static content (e.g. `projects.json`)
- `.github/workflows/` — CI configuration

## Setup
```shell
bun install
bun run dev      # start dev server
bun run lint     # ESLint
bun run test     # Vitest
```

## Conventions
- Use functional components only.
- Use Tailwind CSS for styling purposes.
- Avoid inline styles.
- Do not hardcode data, keep in data in dedicates data files.
- Prefer TypeScript types over `any`.

## Before Submitting Changes

- Run `bun run lint`
- Run `bun run test`
- Ensure the project builds successfully
- Verify responsive layout on mobile