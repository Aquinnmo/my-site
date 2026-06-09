# Agent Navigation

Use this file as the first stop for repo orientation.

## Current Site

- App type: React + TypeScript + Vite single-page portfolio.
- Main composition: `src/App.tsx`.
- Global tokens/base CSS: `src/index.css`.
- Main visual/layout CSS: `src/App.css`.
- Components: `src/components/`.
- Public crawler/AI files: `public/robots.txt` and `public/llms.txt`.
- Vercel config: `vercel.json`.

## Documentation Map

- Docs index: `docs/README.md`.
- Current implementation/source of truth: `docs/redesign/source-of-truth.md`.
- Redesign plan/history: `docs/redesign/plan.md`.
- Visual system rules: `docs/redesign/visual-system.md`.
- Content extraction and resume-synced bullets: `docs/redesign/content-extraction.md`.
- Open questions/known unresolved decisions: `docs/redesign/open-questions.md`.
- Legacy site retrieval index: `legacy/LEGACY_SITE_INDEX.md`.

## Current Product Rules

- The site is finished as a one-page recruiter-facing portfolio.
- Theme: blizzard over a frozen lake.
- Dark mode is the default.
- No nav bar.
- No visible scrollbar chrome.
- No divider bars between major sections.
- No crack lines, shard motifs, etched ice lines, or repeating linear ice textures.
- Runtime code must not import or path directly into `legacy/`; copy approved legacy assets into `src/assets/portfolio/` first.

## Validation

Run these after code or config changes:

```bash
npm run lint
npm run build
```

Docs-only changes do not require a production build unless links, public files, or deployment behavior changed.
