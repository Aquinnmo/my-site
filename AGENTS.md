# Agent Navigation

Use this file as the first stop for repo orientation.

## Current Site

- App type: React + TypeScript + Vite single-page portfolio.
- Main composition: `src/App.tsx`.
- Global tokens/base CSS: `src/index.css`.
- Main visual/layout CSS: split across `src/components/**/*.css` and `src/components/_shared/*.css`; `src/App.css` is reserved for the App shell/route-transition styles only.
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

## Styling Conventions

Styles are split into co-located, plain CSS files. Do not reintroduce a single monolithic stylesheet.

- **Global reset and theme tokens**: `src/index.css` (resets, `:root` tokens, base typography, `prefers-reduced-motion`).
- **App shell / route-transition styles only**: `src/App.css` (`site-shell`, `route-transition-veil`, `route-content`).
- **Component-specific styles**: each React component imports a matching `.css` file next to its `.tsx`.
  - Examples: `src/components/HeroSection.tsx` imports `./HeroSection.css`; `src/components/foundry/FoundryHeroSection.tsx` imports `./FoundryHeroSection.css`.
- **Shared cross-component patterns**: `src/components/_shared/`.
  - `layout.css`: `.page-flow`, `.section-shell`, `.content-section`, `.section-heading-row`, `.content-section h2`.
  - `actions.css`: `.hero-action`, `.hero-action-primary`, `.hero-action-secondary`, `.action-icon`.
  - `footer.css`: `.site-footer`, `.footer-contact`, `.footer-links`, `.footer-link`, `.footer-link-primary`, `.footer-legal`.
- **Foundry-only shared patterns**: `src/components/foundry/_shared.css`.
  - `.foundry-section`, `.foundry-section-summary`, `.foundry-section-eyebrow`.
- **Import rule**: components must import their own CSS and any shared CSS they rely on. Page components (`PortfolioPage`, `FoundryPage`) import `_shared/layout.css`. Footer components import `_shared/footer.css`. Components using action links import `_shared/actions.css`.
- **No empty component CSS files**: if a component has no unique styles (e.g., `PortfolioPage`, `SiteFooter`, `FoundryFooter`), it imports only the shared file(s) it needs and does not create an empty `.css` file.

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

Run this after code or config changes:

```bash
npm run lint
```

Do not run `npm run build`. Agents must never trigger production builds.

Docs-only changes do not require a production build unless links, public files, or deployment behavior changed.
