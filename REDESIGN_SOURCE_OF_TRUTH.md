# Redesign Source of Truth

This document is the working source of truth for the one-page frozen-lake portfolio redesign. Keep it updated whenever a product, content, or visual decision changes.

## Current Project State

- Root app: Vite + React + TypeScript template.
- Root app entry: `src/main.tsx`.
- Root visible component: `src/App.tsx`.
- Root styles: `src/index.css` and `src/App.css`.
- Root public assets: `public/icons.svg` and `public/favicon.svg`.
- Root template assets: `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg`.
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
- Skills direction: use judgment to select key languages, tools, and frameworks.
- Foundry direction: do not create a separate Foundry section; include Foundry only in the experience section.

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
- Avoid a technical dashboard look unless explicitly approved.
- Avoid generic purple-on-white defaults.
- Avoid logo-wall clutter from the legacy site.
- Do not use small pill-style section kicker tags above headings.
- Cards can be used for repeated items, but the whole page should not become a stack of unrelated cards.
- No nested cards.
- Profile image treatment: the picture should look trapped under lake ice.
- The face must remain recognizable.

Detailed Phase 4 visual system tokens and rules are defined in `REDESIGN_VISUAL_SYSTEM.md`.

### Light Mode

- Visual target: whiteout daylight blizzard on a frozen lake.
- Primary impression: lots of white, light blue, frost, snow, and pale lake ice.
- Text must remain high contrast.
- Light mode should feel equally designed, not like a fallback.

### Dark Mode

- Visual target: night blizzard over black lake ice.
- Primary impression: much more black, deep blue-black ice, visible snow, cold highlights.
- Dark mode should have equal design weight to light mode.
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
- Likely reusable asset candidates:
  - `legacy/public/pfp.jpeg`
  - `legacy/public/adam_montgomery_resume.pdf`
  - `legacy/public/github_logo.svg`
  - `legacy/public/LinkedIn_icon.svg`
  - `legacy/public/email_icon.svg`
  - `legacy/public/am_logo_highres.svg`

## Implementation Phase Boundary

Phase 1 is documentation only.

Phase 2 content decisions are documented, with the exception of missing exact hero CTA/summary copy and missing SPS Commerce dates/responsibilities.

Phase 3 information architecture is documented.

Phase 4 visual system documentation is defined in `REDESIGN_VISUAL_SYSTEM.md`.

Phase 6 base app shell is implemented in `src/App.tsx`, `src/App.css`, and `src/index.css`.

Phase 7 blizzard and frozen-lake foundation is implemented in `src/App.tsx` and `src/App.css`.

Phase 8 hero section is implemented in `src/App.tsx` and `src/App.css`.

Phase 9 experience section is implemented in `src/App.tsx` and `src/App.css`.

Phase 10 projects section is implemented in `src/App.tsx` and `src/App.css`.

Current Phase 6 implementation includes:

- one-page semantic shell
- no nav bar
- constrained content width
- full-viewport frozen-lake background layers without line, crack, or shard motifs
- system-preference theme initialization
- manual light/dark theme toggle
- no theme persistence yet because persistence is still unapproved
- visible global focus styles
- reduced-motion baseline

Current Phase 7 implementation includes:

- fixed full-page snowfall overlay
- three CSS snow particle layers with different sizes, opacity, and fall speeds
- snowfall layer uses `pointer-events: none`
- snowfall sits over the whole page while the theme toggle remains above it
- `prefers-reduced-motion` disables snow animation and leaves static snow texture
- frozen-lake background remains soft haze/glow only, with no line, crack, shard, or etched motifs

Current Phase 8 implementation includes:

- centered single-column hero layout
- centered placeholder section headings, panels, and footer while the page is still in early implementation
- hero name: Adam Montgomery
- hero name appears above the profile image
- rotating title treatment with professional labels and fade-out/fade-in transitions
- concise draft hero summary focused on practical web product delivery
- three recruiter-facing proof chips
- primary resume CTA and secondary projects CTA
- legacy profile photo imported from `legacy/public/pfp.jpeg`
- legacy resume PDF imported from `legacy/public/adam_montgomery_resume.pdf`
- centered hero quick links for Resume, LinkedIn, GitHub, and Email
- quick links use related legacy icons from `legacy/public/`
- simplified CSS-only under-ice portrait treatment using a circular frame, softer frost haze, lighter blur, cool tint, and small snow/frost particles
- no crack, shard, etched-line, or ice-line treatment in the portrait

Phase 8 assumptions pending user review:

- The legacy profile photo is acceptable as the visible hero portrait.
- The legacy resume PDF is acceptable as the primary hero CTA target.
- Resume is the primary CTA and projects is the secondary CTA.
- The draft hero summary is acceptable until the user provides exact copy.
- The quick-link email target currently uses `mailto:adammontcompany@gmail.com` from legacy Foundry/project contact copy.

Current Phase 9 implementation includes:

- structured experience data in `src/App.tsx`
- centered experience section with left-aligned frosted experience cards
- no pill-style section kicker tags above headings
- entries for SPS Commerce, Montgomery Software Foundry Inc., and DataAnnotation
- role, company, date label, summary, proof bullets, and skill tags for each entry
- Foundry and DataAnnotation content rewritten from documented legacy source material
- SPS Commerce rendered as an approved entry with explicit pending details instead of invented responsibilities

Phase 9 assumptions pending user review:

- SPS Commerce dates are still unknown and shown as `Dates pending`.
- SPS Commerce responsibilities, stack, team, and impact bullets still need user-provided copy.
- Foundry date label is normalized from legacy `2025-08-20` to `Aug 2025 - Present`.
- DataAnnotation date label is normalized from legacy `2025-01-05` to `Jan 2025 - Present`.

Current Phase 10 implementation includes:

- structured project data in `src/App.tsx`
- equal-weight responsive project grid
- compact frosted project cards with project type, name, summary, stack tags, and links
- visible projects from the legacy projects page:
  - Pump Pal
  - Custom Enterprise Databasing System
  - YOU WILL LOSE: Rock, Paper, Scissors
  - Am I Cooked?
  - CherryPick
  - adam-montgomery.ca
  - Brick Breaker
  - Tic-Tac-Toe
- project timeline and deployment-target claims are intentionally omitted because the extraction docs mark them as potentially stale
- Chip Champ remains excluded because it was commented out in legacy and requires explicit approval to revive

Phase 10 assumptions pending user review:

- Text stack tags are acceptable as the first visual treatment for project tech stacks.
- Projects with no public/repo link can show `Links pending`.
- The databasing system public action can use the Foundry contact email from legacy.

## Retrieval Map

- Full legacy inventory: `legacy/LEGACY_SITE_INDEX.md`
- Extracted reusable content: `REDESIGN_CONTENT_EXTRACTION.md`
- Open product/design questions: `REDESIGN_OPEN_QUESTIONS.md`
- Visual system: `REDESIGN_VISUAL_SYSTEM.md`
- Fine-grained implementation plan: `REDESIGN_PLAN.md`
- Current app template files: `src/`
