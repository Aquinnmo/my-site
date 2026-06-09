# Redesign Source of Truth

This document is the working source of truth for the one-page frozen-lake portfolio redesign. Keep it updated whenever a product, content, or visual decision changes.

## Current Project State

- Root app: Vite + React + TypeScript template.
- Root app entry: `src/main.tsx`.
- Root page composition component: `src/App.tsx`.
- Component directory: `src/components/`.
- Root styles: `src/index.css` and `src/App.css`.
- Root public assets: `public/favicon.svg`.
- AI/crawler public files: `public/robots.txt` and `public/llms.txt`.
- Removed dead template assets: `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg`, and `public/icons.svg`.
- Root Vercel config: `vercel.json`.
- Copied portfolio assets: `src/assets/portfolio/`.
- Legacy reference app remains under `legacy/`.
- Legacy files must not be deleted or moved unless the user explicitly approves.

## Locked Product Direction

- The first redesigned version is one page only.
- The page is a condensed version of the legacy site, not a recreation of every legacy route.
- The primary user is a recruiter or hiring manager scanning quickly.
- The page must communicate experienced web developer credibility.
- The page must be easy to scan before it is visually elaborate.
- Projects and experience are both high-priority content areas.
- Experience appears before projects in section order unless the user changes this.
- Projects still need strong visual weight and should not feel secondary.
- The page must preserve a strong frozen-lake blizzard theme.
- Ask before making visible product, copy, content-selection, or major visual decisions.

## Approved Content Decisions

- Hero name: Adam Montgomery.
- Hero title treatment: keep the rotating title concept from the legacy site.
- Contact links: use the legacy contact links.
- Experience entries for v1:
  - Software Engineering Intern at SPS Commerce.
  - Montgomery Software Foundry Inc.
  - DataAnnotation.
- Projects for v1: keep all legacy projects for now; the user will clean them up manually later.
- Project visual hierarchy: all project cards should have equal visual weight.
- Project layout direction: use a grid pattern if it fits the frozen-lake visual system.
- Project content requirements:
  - brief description
  - GitHub repository link where available
  - public link where available
  - visual treatment for key tech-stack components
- Action links should use specific icons where possible, not generic decoration.
- Skills direction: use judgment to select key languages, tools, and frameworks.
- Foundry direction: do not create a separate Foundry section; include Foundry only in the experience section.
- When a rendered project or job appears in the current resume PDF, use the resume bullet points as the source of truth for that item's visible proof bullets.

## Theme Rules

### Shared

- Theme concept: blizzard over a frozen lake.
- Snowfall should appear over the whole page.
- Snowfall must not block reading or interaction.
- Motion must respect `prefers-reduced-motion`.
- Ice texture should feel like lake ice, not generic glassmorphism.
- Do not use crack lines, shard motifs, etched ice lines, or repeating linear ice textures in the background.
- Background texture should come from soft glow, frost haze, snow, depth, and blurred lake color only.
- Use cold whites, blue-whites, pale blues, icy grays, and dark winter tones.
- Light and dark modes should share the same layered background styling structure.
- Light mode should mirror the same effect placement and styling structure as dark mode.
- Light mode translates the dark-mode palette into a whiteout lake palette: dark blacks become whites/near-whites, and bright whites become pronounced light blues.
- Light mode snow particles should be visibly light blue; dark mode snow particles remain bright white.
- Avoid a technical dashboard look unless explicitly approved.
- Avoid generic purple-on-white defaults.
- Avoid logo-wall clutter from the legacy site.
- Do not use small pill-style section kicker tags above headings.
- Cards can be used for repeated items, but the whole page should not become a stack of unrelated cards.
- No nested cards.
- Profile image treatment: the picture should look trapped under lake ice.
- The face must remain recognizable.

Detailed Phase 4 visual system tokens and rules are defined in `visual-system.md`.

### Light Mode

- Visual target: whiteout daylight blizzard on a frozen lake.
- Primary impression: the same blizzard/lake effects as dark mode, translated into white and light-blue daylight values.
- Text must remain high contrast.
- Light mode should feel equally designed, not like a fallback.

### Dark Mode

- Visual target: night blizzard over black lake ice.
- Primary impression: much more black, deep blue-black ice, visible snow, cold highlights.
- Dark mode should have equal design weight to light mode.
- Dark mode is the default initial theme.
- Dark mode must not make content feel hidden or low contrast.

## Approved Information Architecture

Final one-page section order:

1. Hero
2. Experience
3. Projects
4. Languages, skills, and tools
5. Contact plus resume download

Navigation decision:

- No nav bar in v1.
- The page should be consumed by scrolling only.
- The page should not show browser scrollbar chrome.
- Do not use visible divider bars between major page sections.

Above-the-fold requirements:

- Adam Montgomery must be visible.
- Professional role/value must be visible.
- The frozen-lake visual concept must be visible.
- The ice-trapped profile image treatment must be visible.
- The next section should be hinted without overwhelming the first viewport.

Mobile flow:

- Mobile section order should match desktop unless the user later changes it.
- Snowfall, ice texture, and the profile treatment must not block scanability.

## Recruiter Scanning Rules

- Above the fold should answer: who Adam is, what he builds, and why he is credible.
- Use short summaries and proof bullets instead of long paragraphs.
- Dates, roles, companies, stacks, and links should be easy to compare.
- Prefer proof of ownership, delivery, impact, stack, and leadership.
- Hide or reduce novelty content unless the user approves it for v1.
- Personal interests are not in the approved v1 section order.

## Current Implementation Constraints

- Build in the root Vite app unless the user changes direction.
- Keep the redesigned site one page for now.
- Do not introduce multi-page routing in v1 unless explicitly approved.
- Preserve `legacy/` as the retrieval source.
- Reuse legacy assets only after the user approves each visible asset decision.
- Approved legacy assets must be copied into the new app before use; do not import or path directly from `legacy/` in runtime code.
- Current copied asset location: `src/assets/portfolio/`.
- Likely reusable asset candidates:
  - `legacy/public/pfp.jpeg`
  - `legacy/public/adam_montgomery_resume.pdf`
  - `legacy/public/github_logo.svg`
  - `legacy/public/LinkedIn_icon.svg`
  - `legacy/public/email_icon.svg`
  - `legacy/public/am_logo_highres.svg`

## Implementation Phase Boundary

Phase 1 is documentation only.

Phase 2 content decisions are documented, with the exception of missing exact hero CTA/summary copy.

Phase 3 information architecture is documented.

Phase 4 visual system documentation is defined in `visual-system.md`.

Phase 6 base app shell is implemented in `src/App.tsx`, `src/App.css`, and `src/index.css`.

Phase 7 blizzard and frozen-lake foundation is implemented in `src/App.tsx` and `src/App.css`.

Phase 8 hero section is implemented in `src/components/HeroSection.tsx` and `src/App.css`.

Phase 9 experience section is implemented in `src/components/ExperienceSection.tsx` and `src/App.css`.

Phase 10 projects section is implemented in `src/components/ProjectsSection.tsx` and `src/App.css`.

Phase 11 skills and tools section is implemented in `src/components/SkillsSection.tsx` and `src/App.css`.

Phase 12 Foundry/credibility section is intentionally skipped for v1 because the approved direction is to include Foundry only as an experience entry.

Phase 13 contact footer is implemented in `src/components/SiteFooter.tsx` and `src/App.css`.

Phase 14 optional personal signal is intentionally skipped for v1 at the user's direction.

Phase 15 theme refinement is implemented in `src/index.css`. Dark mode remains the visual reference; light mode now mirrors the same effect placement with white/near-white bases and stronger light-blue frost/snow/glow values.

Dark mode tokens are the base `:root` CSS tokens so the first paint defaults to dark before React runs. Light mode tokens apply only under `:root[data-theme='light']`.

Component refactor is implemented. `src/App.tsx` should remain a lightweight page-composition shell; core section data and logic should live inside the related component unless a later shared data layer is explicitly approved.

Current Phase 6 implementation includes:

- one-page semantic shell
- no nav bar
- constrained content width
- full-viewport frozen-lake background layers without line, crack, or shard motifs
- dark-mode default theme initialization inside `src/components/ThemeToggle.tsx`
- manual light/dark theme toggle inside `src/components/ThemeToggle.tsx`
- no system-preference theme initialization, by current user direction
- no theme persistence yet because persistence is still unapproved
- visible global focus styles
- reduced-motion baseline
- Vercel Analytics and Speed Insights rendered in `src/App.tsx`
- Vercel SPA fallback rewrite in root `vercel.json`, copied from the deploy-relevant legacy config
- `.vercel/` ignored because legacy `.vercel/README.txt` says project linkage metadata should not be shared or committed

Current Phase 7 implementation includes:

- fixed full-page snowfall overlay
- three CSS snow particle layers with different sizes, opacity, and fall speeds
- snowfall layer uses `pointer-events: none`
- snowfall sits over the whole page while the theme toggle remains above it
- `prefers-reduced-motion` disables snow animation and leaves static snow texture
- frozen-lake background remains soft haze/glow only, with no line, crack, shard, or etched motifs

Current Phase 8 implementation includes:

- centered single-column hero layout
- centered section headings and a completed hero-aligned footer contact section
- hero name: Adam Montgomery
- hero name appears above the profile image
- rotating title treatment with professional labels and fade-out/fade-in transitions
- concise draft hero summary focused on practical web product delivery
- three recruiter-facing proof chips
- primary resume CTA and secondary projects CTA
- profile photo copied to and imported from `src/assets/portfolio/pfp.jpeg`
- resume PDF copied to and imported from `src/assets/portfolio/adam_montgomery_resume.pdf`
- centered hero quick links for Resume, LinkedIn, GitHub, and Email
- quick links use copied icons from `src/assets/portfolio/`
- primary resume CTA uses the PDF icon
- larger hero profile photo treatment with a CSS-only frozen-lake effect
- portrait is a square frame with rounded edges, not a circle
- portrait treatment uses soft ice glow, frost haze, a lighter blue overlay, depth shadow, and snow/frost speckles
- portrait treatment should allow more of the original photo color to show through instead of heavily desaturating the image
- no crack, shard, etched-line, or ice-line treatment in the portrait

Phase 8 assumptions pending user review:

- The copied legacy profile photo is acceptable as the visible hero portrait.
- The copied legacy resume PDF is acceptable as the primary hero CTA target.
- Resume is the primary CTA and projects is the secondary CTA.
- The draft hero summary is acceptable until the user provides exact copy.
- The quick-link email target currently uses `mailto:adammontcompany@gmail.com` from legacy Foundry/project contact copy.

Current Phase 9 implementation includes:

- structured experience data in `src/components/ExperienceSection.tsx`
- centered experience section with left-aligned frosted experience cards
- no pill-style section kicker tags above headings
- entries for SPS Commerce, Montgomery Software Foundry Inc., and DataAnnotation
- role, company, date label, summary, proof bullets, and skill tags for each entry
- SPS Commerce proof bullets synced from the current resume PDF
- Montgomery Software Foundry proof bullets synced from the current resume PDF
- DataAnnotation content rewritten from documented legacy source material because it does not appear in the current resume PDF

Phase 9 assumptions pending user review:

- Foundry date label is normalized from legacy `2025-08-20` to `Aug 2025 - Present`.
- DataAnnotation date label is normalized from legacy `2025-01-05` to `Jan 2025 - Present`.

Current Phase 10 implementation includes:

- structured project data in `src/components/ProjectsSection.tsx`
- equal-weight responsive project grid
- compact frosted project cards with name, summary, stack tags, and links
- visible proof bullets for every rendered project card
- Pump Pal proof bullets synced from the current resume PDF
- Custom Enterprise Databasing System is the rendered site counterpart to the resume's Fleet Maintenance Management System entry; its proof bullets are synced from that resume entry
- Rock, Paper, Scissors proof bullets are derived from documented legacy project facts
- Am I Cooked proof bullets are derived from documented legacy project facts
- project links use action-specific icons:
  - GitHub icon for repository links
  - external-arrow icon for web preview and website links
  - download icon for Android APK links
  - PDF icon for resume links
- projects without documented links do not render a placeholder link row
- visible projects currently implemented:
  - Pump Pal
  - Custom Enterprise Databasing System
  - Rock, Paper, Scissors
  - Am I Cooked?
  - CherryPick
- project timeline and deployment-target claims are intentionally omitted because the extraction docs mark them as potentially stale
- Chip Champ remains excluded because it was commented out in legacy and requires explicit approval to revive

Phase 10 assumptions pending user review:

- Text stack tags are acceptable as the first visual treatment for project tech stacks.
- Projects with no public/repo link should hide the link row instead of showing `Links pending`.
- The databasing system public action can use the Foundry contact email from legacy.
- Inline SVG icons are acceptable for action-specific UI where no legacy asset exists.
- Moneyball appears in the current resume PDF but is not currently rendered in the site project section; it has not been added because the user's request was to update bullets for matching rendered items.

Current Phase 11 implementation includes:

- structured skill group data in `src/components/SkillsSection.tsx`
- grouped skill cards for:
  - Languages
  - Tools
  - Frameworks
  - AI
- compact skill labels instead of a decorative logo wall
- inline SVG category icons owned by the skills component
- no visible evidence lines inside skill cards
- no visible summary paragraph inside skill cards
- responsive one-column mobile layout

Current Phase 13 implementation includes:

- recruiter-focused closing prompt in `src/components/SiteFooter.tsx`
- contact links for resume, email, GitHub, and LinkedIn
- copied portfolio icons for every footer link
- copied resume PDF used for the resume download link
- email target remains `mailto:adammontcompany@gmail.com`
- footer contact section is styled like the hero, directly on the lake background instead of as a card
- primary visual emphasis on `Download Resume` and `Email Me`
- mobile layout stacks footer links into full-width tap targets

Current Phase 16 implementation includes:

- desktop content remains constrained by page and section max widths
- tablet widths collapse project and skill grids to single-column readable cards
- tablet widths narrow experience, project, and skill content for scanability
- mobile hero sizing is tightened to avoid oversized first-screen content
- mobile hero actions stack where needed and remain comfortable tap targets
- mobile quick links can wrap into balanced centered rows
- small-mobile profile treatment scales down and uses smaller rounded corners
- nearest snow layer opacity is reduced on very small screens
- snow layers use `will-change: transform`
- reduced-motion still disables snowfall animation
- browser visual validation remains part of Phase 18

Current cleanup and deploy-prep implementation includes:

- removed unused hero proof-chip CSS
- removed unused root template image asset `src/assets/hero.png`
- removed unused root public sprite `public/icons.svg`
- replaced template README with project-specific local validation and Vercel deployment instructions
- updated `index.html` title and description for portfolio deployment
- installed `@vercel/analytics` and `@vercel/speed-insights` in the root app
- added `robots.txt` for crawler access and `llms.txt` for AI-reader site overview

## Retrieval Map

- Agent navigation entrypoint: `../../AGENTS.md`
- Documentation index: `../README.md`
- Full legacy inventory: `../../legacy/LEGACY_SITE_INDEX.md`
- Extracted reusable content: `content-extraction.md`
- Open product/design questions: `open-questions.md`
- Visual system: `visual-system.md`
- Fine-grained implementation plan: `plan.md`
- Current app template files: `src/`
- Page composition: `src/App.tsx`
- Copied portfolio assets: `src/assets/portfolio/`
- Background layers: `src/components/Background.tsx`
- Theme toggle logic: `src/components/ThemeToggle.tsx`
- Hero logic and content: `src/components/HeroSection.tsx`
- Experience logic and content: `src/components/ExperienceSection.tsx`
- Project logic and content: `src/components/ProjectsSection.tsx`
- Skills section: `src/components/SkillsSection.tsx`
- Footer contact section: `src/components/SiteFooter.tsx`
