<!-- Copied guidance tailored for this React + Vite personal site. Keep concise. -->
# Copilot / AI agent instructions for this repository

Quick context
- This is a small React (v19) single-page site scaffolded to run with Vite. Entry is `index.html` -> `src/main.jsx` -> `src/App.jsx`.
- Routing is handled with `react-router-dom` (see `src/App.jsx`). Pages live in `src/pages/` and small reusable components in `src/components/`.

Primary goals for an AI coding agent
- Make small, incremental edits to pages/components without large restructuring.
- Preserve existing CSS in `src/style.css` unless a change is explicitly requested.
- Keep public assets in `public/` and refer to them with root-relative paths (e.g., `/pfp.jpeg`, `/github_logo.svg`).

How to build & run locally
- Install dependencies: `npm install`
- Start dev server: `npm run dev` (Vite, default port 3000)
- Create production build: `npm run build`; preview build: `npm run preview`

Project structure & noteworthy files
- `index.html` — app HTML shell; loads `src/main.jsx`.
- `src/main.jsx` — React entry, imports global `src/style.css`.
- `src/App.jsx` — Router, `AnimatePresence` wrappers (framer-motion) and global layout (`Navbar`, `ScrollToTop`).
- `src/pages/` — page components (Home, Projects, Experience, Interests, 404). Edit these for content changes.
- `src/components/` — shared UI bits (e.g., `Navbar.jsx`, `Button.jsx`, `Rotating_Description.jsx`). Use these when adding UI elements.
- `public/` — static assets referenced by pages. Use root paths like `/am-logo-highres.svg`.

Patterns and conventions
- Functional React components (ESModules + default exports). Follow existing naming (PascalCase for components, snake/camel mix in filenames).
- Global CSS file `src/style.css` holds styles for pages and components; components do not use CSS modules.
- Images in `public/` are imported either via root-relative strings (e.g., `src='/pfp.jpeg'`) or as imports for icons (see `Home.jsx` which imports `github_logo` from `/github_logo.svg`). Either approach is acceptable; prefer the existing pattern in the edited file.
- Routing uses `react-router-dom` v7 semantics (see `Routes` and `Route` in `src/App.jsx`). When adding routes, also update `Navbar.jsx` if navigation links are needed.
- Page transitions use `framer-motion` `AnimatePresence` and `motion` wrappers inside `App.jsx`. Small animation changes should be consistent with the 0.3s duration used currently.

Integration points & external dependencies
- `@vercel/analytics` — included in `App.jsx`. Avoid removing unless replacing analytics; refer to `src/App.jsx` when modifying.
- `framer-motion` — used for page fades. Keep consistent animation wrappers on routes.
- `react-router-dom` — v7 API (location-aware transitions).

Editing guidance & examples
- Content change: modify components in `src/pages/` (e.g., change copy in `src/pages/Experience.jsx`). Preserve structure and className-based styling.
- Add a new page: create `src/pages/NewPage.jsx`, export default component, add a `<Route path='/new' element={<NewPage />} />` to `src/App.jsx`, and add navigation in `src/components/Navbar.jsx`.
- Add an asset: put image in `public/` and reference it with `/your.png` or import it at top of module when bundler resolution is desired.

Testing & validation
- There is no test framework configured. Validate changes locally by running `npm run dev` and opening `http://localhost:3000`.
- After edits, ensure the app builds: `npm run build`. If build fails, fix lint/type-like issues (mostly syntax) and re-run build.

What NOT to do
- Do not introduce CSS modules, TypeScript, or new build tools without prior approval — this project intentionally keeps a minimal Vite + React setup.
- Avoid large refactors of `src/style.css`; prefer small, localized style additions.

When in doubt
- Refer to `src/App.jsx`, the `src/pages/` folder, and `public/` assets; mirror existing code style (ESModules, default exports, function components).

If you modify multiple files
- Update `README.md` only for obvious end-user changes (commands, features). Otherwise leave it unchanged.

Contact & provenance
- Author: Adam (site owner). Use issue/PR style changes where possible; keep edits small and well-scoped.

-- End of instructions --
