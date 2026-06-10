# Redesign Source of Truth

This document is the working source of truth for the frozen-lake portfolio and Foundry site redesign. Keep it updated whenever a product, content, or visual decision changes.

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

- The redesigned site now has two approved pages: the main portfolio at `/` and the Montgomery Software Foundry page at `/foundry`.
- The main portfolio remains a condensed version of the legacy site, not a recreation of every legacy route.
- The Foundry page is a focused business page for Montgomery Software Foundry Inc.
- The primary user is a recruiter or hiring manager scanning quickly.
- The page must communicate experienced web developer credibility.
- The page must be easy to scan before it is visually elaborate.
- Projects and experience are both high-priority content areas.
- Experience appears before projects in section order unless the user changes this.
- Projects still need strong visual weight and should not feel secondary.
- The portfolio page must preserve a strong frozen-lake blizzard theme.
- The Foundry page must use a matching layout and visual language, but reinterpret the theme as crackling embers.
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
- Foundry direction: create a separate `/foundry` page by copying and refining the legacy Foundry page content; keep Foundry in the portfolio experience section as well.
- When a rendered project or job appears in the current resume PDF, use the resume bullet points as the source of truth for that item's visible proof bullets.

## Theme Rules

### Shared

- Portfolio theme concept: blizzard over a frozen lake.
- Foundry theme concept: crackling embers using the same visual structure as the portfolio.
- Atmospheric particles should appear over the whole page.
- Atmospheric particles must not block reading or interaction.
- Motion must respect `prefers-reduced-motion`.
- Portfolio ice texture should feel like lake ice, not generic glassmorphism.
- Do not use crack lines, shard motifs, etched ice lines, or repeating linear ice textures in the background.
- Portfolio background texture should come from soft glow, frost haze, snow, depth, and blurred lake color only.
- Portfolio colors should use cold whites, blue-whites, pale blues, icy grays, and dark winter tones.
- Light and dark modes should share the same layered background styling structure.
- Light mode should mirror the same effect placement and styling structure as dark mode.
- Light mode translates the dark-mode palette into a whiteout lake palette: dark blacks become whites/near-whites, and bright whites become pronounced light blues.
- Portfolio light mode snow particles should be visibly light blue; portfolio dark mode snow particles remain bright white.
- Avoid a technical dashboard look unless explicitly approved.
- Avoid generic purple-on-white defaults.
- Avoid logo-wall clutter from the legacy site.
- Do not use small pill-style section kicker tags above headings.
- Cards can be used for repeated items, but the whole page should not become a stack of unrelated cards.
- No nested cards.
- Profile image treatment: the picture should look trapped under lake ice.
- The face must remain recognizable.

Detailed Phase 4 visual system tokens and rules are defined in `visual-system.md`.

### Foundry Page

- Visual target: crackling embers, not blizzard.
- The Foundry page should look nearly identical in layout, hierarchy, spacing, surfaces, and atmosphere to the portfolio portion.
- The main difference is the theme palette and particle direction.
- Dark mode Foundry palette: black with orangey-red fire accents.
- Light mode Foundry palette: white with orangey-red fire accents.
- Foundry particles should reuse the same snowfall layer approach, but render orange-red in both light and dark modes.
- Foundry particle motion should invert the y-axis so particles rise like sparks instead of falling like snow.
- Foundry panels should keep the same frosted/layered readability approach, translated into ember-tinted surfaces.
- Foundry should avoid becoming a generic fire illustration, forge illustration, or separate visual system.

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

Main portfolio section order:

1. Hero
2. Experience
3. Projects
4. Languages, skills, and tools
5. Contact plus resume download

Navigation decision:

- No full nav bar.
- Approved navigation exception: a compact fixed page switcher styled after `src/foundry/sample_toggle_bar.png`.
- The page switcher options must be labeled `Adam` and `Foundry`.
- `Adam` links to `/`; `Foundry` links to `/foundry`.
- The active switcher pill should slide between the two options with a smooth animation.
- The main portfolio should still be consumed primarily by scrolling.
- The site should not show browser scrollbar chrome.
- Do not use visible divider bars between major sections.

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
- Keep the redesigned site limited to the approved `/` and `/foundry` pages for now.
- Do not recreate the old multi-page legacy route structure.
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

Phase 12 Foundry/credibility section was intentionally skipped for the one-page portfolio because Foundry remains represented in the experience section.

Foundry page Phase 1 is implemented as a product-contract update. The approved direction is now:

- add a separate `/foundry` page for Montgomery Software Foundry Inc.
- copy and refine the legacy Foundry page content.
- add a compact fixed page switcher with `Adam` and `Foundry` options.
- animate the active switcher pill sliding between those two options.
- keep `/` as the main recruiter-facing portfolio page.

Foundry page Phase 2 is implemented as lightweight route-state handling:

- `/` renders the portfolio route.
- `/foundry` renders a minimal Foundry route placeholder.
- route state is handled in `src/App.tsx` without introducing React Router.
- the existing Vercel SPA fallback rewrite remains unchanged.
- shared app shell behavior remains in place: Analytics, Speed Insights, background, theme toggle, and footer.

Foundry page Phase 3 is implemented as the shared top page switcher:

- `src/components/PageSwitcher.tsx` renders the fixed `Adam` / `Foundry` switcher.
- the switcher uses semantic links and preserves normal modified-click browser behavior.
- ordinary clicks use `history.pushState` route updates without a full page reload.
- active state is derived from `src/App.tsx` route state.
- the active pill slides between `Adam` and `Foundry` with a transform animation.
- the switcher uses one route theme at a time: portfolio icy-blue on `/`, Foundry ember-orange on `/foundry`.
- individual switcher options do not keep permanent destination colors; both labels and icons inherit the current page theme.
- the active pill changes color only when the switcher theme changes to the current rendered page.
- reduced-motion disables the pill transition.
- mobile styling keeps the switcher compact and separated from the theme toggle.

Foundry page Phase 4 is implemented as the first full Foundry content pass:

- `src/components/FoundryPage.tsx` now renders the refined legacy Foundry content structure.
- the page includes hero, contact CTA, `What we build`, `Why teams choose the Foundry`, `Our collaborative process`, and `Built by Adam Montgomery`.
- service, differentiator, and process content is structured in local typed arrays.
- copy preserves the meaning of the legacy Foundry page while tightening it for scanability.
- Foundry content styling reuses the portfolio's section rhythm while moving key service, differentiator, and process areas away from repeated card grids.
- the black/orangey-red and white/orangey-red ember visual variant is implemented in Phase 5.

Phase 13 contact footer is implemented in `src/components/SiteFooter.tsx` and `src/App.css`.

Phase 14 optional personal signal is intentionally skipped for v1 at the user's direction.

Phase 15 theme refinement is implemented in `src/index.css`. Dark mode remains the visual reference; light mode now mirrors the same effect placement with white/near-white bases and stronger light-blue frost/snow/glow values.

Dark mode tokens are the base `:root` CSS tokens so the first paint defaults to dark before React runs. Light mode tokens apply only under `:root[data-theme='light']`.

Component refactor is implemented. `src/App.tsx` should remain a lightweight page-composition shell; core section data and logic should live inside the related component unless a later shared data layer is explicitly approved.

Current Phase 6 implementation includes:

- portfolio semantic shell
- no full nav bar
- compact `Adam` / `Foundry` page switcher is implemented in `src/components/PageSwitcher.tsx`
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

Foundry page Phase 5 visual variant is implemented:

- the existing portfolio background and particle architecture is reused.
- `src/App.css` scopes Foundry color tokens under `.site-shell[data-route='foundry']`.
- Foundry dark mode uses black and orangey-red fire tokens.
- Foundry light mode uses white and orangey-red fire tokens under `:root[data-theme='light'] .site-shell[data-route='foundry']`.
- Foundry route-specific tokens use ember names such as `--color-ember-bg`, `--color-ember-accent`, and `--color-ember-spark`, then map back into the shared portfolio token API.
- Foundry particles render orange-red in both modes through `--color-ember-spark` / `--color-ember-spark-hot`.
- Foundry particles use higher opacity, hot centers, and a subtle glow so the rising sparks remain noticeable.
- Foundry particles use `ember-rise` and `ember-rise-drift` keyframes so they rise instead of falling.
- reduced-motion continues to disable particle animation.

Foundry page Phase 6 responsive and interaction polish is implemented:

- mobile switcher links meet comfortable tap sizing.
- the Foundry page gets extra top offset so the fixed switcher does not cover hero content.
- the active switcher pill transitions border, background, shadow, and transform for smoother theme changes.
- small-screen Foundry spark opacity is reduced with route-specific selectors so sparks stay visible without crowding text.
- reduced-motion disables switcher and particle animation transitions.

Route transition behavior is implemented:

- selecting `Adam` or `Foundry` starts the page switcher pill position transition immediately while retaining the currently rendered page theme.
- the switcher and theme toggle remain visible above the transition.
- page content and footer fade out into a fixed base-color veil.
- the base-color veil is black in dark mode and white in light mode.
- after fade-out, the route swaps, the switcher transitions to the new page theme, the page scrolls to top, and the new page fades in.
- transition timing is synchronized around the 320ms pill slide: 160ms fade-out, then 160ms fade-in.
- switcher theme color transitions begin at the route handoff and use the same 160ms duration as the page fade-in, so the color shift and page fade complete together.
- route content uses opacity-only transitions so the page fades cleanly without vertical wobble.
- reduced-motion skips the fade sequence and swaps routes immediately.

Foundry detail/liveliness Phase 1 is implemented as a richer content model:

- `src/components/FoundryPage.tsx` separates hero content, contact actions, proof items, service outcomes/examples, case-study facts, process artifacts, and founder content.
- the richer content uses only documented Foundry facts, including the custom SaaS / GTA accessible transit modernization work, paper and Excel workflow replacement, data-loss prevention goal, and customer specification work.
- lightweight proof, case-study, service-detail, process-artifact, and founder surfaces are rendered with the existing ember visual system so the page has more substance before later layout-polish phases.

Foundry detail/liveliness Phase 2 is implemented as a richer hero and proof strip:

- the Foundry hero keeps `Montgomery Software Foundry Inc.` as the H1 and adds a concise service-positioning eyebrow.
- the hero copy now explains that the Foundry turns paper, spreadsheets, and scattered business processes into focused web software.
- the hero actions include the primary `Get in touch` email CTA and a secondary `See current work` in-page anchor to the concrete client-work section.
- the proof strip renders `Custom SaaS`, `Legacy workflow modernization`, and `Requirements to release` as ember-tinted compact proof panels.

Foundry detail/liveliness Phase 3 is implemented as a concrete work section:

- the case-study section is based only on approved facts about the custom SaaS / GTA accessible transit modernization work.
- the section includes a lead summary and open `Problem`, `Approach`, and `Outcome` columns without arrows, chevrons, or a card-style outer panel.
- the section avoids fake metrics, client names, screenshots, and testimonials.

Foundry detail/liveliness Phase 4 is implemented as a services and outcomes upgrade:

- the `What we build` section now includes a short section summary before the service grid.
- the `What we build` section uses a premium editorial service list rather than card surfaces.
- the `Why teams choose the Foundry` section uses a short, open differentiator row with light rules and no numbers or card surfaces.
- each service item has a clear service title, practical description, labeled `Best for` problem, and labeled `Outcome`.

Foundry detail/liveliness Phase 5 is implemented as a process timeline:

- the process expands from three repeated cards into five stages: `Discover`, `Shape`, `Build`, `Launch`, and `Support`.
- each stage includes only a number, title, and quick summary.
- desktop renders the process as a left-to-right ember-accent roadmap without card surfaces, while tablet/mobile collapse it into a vertical roadmap.
- no additional process animation is introduced, so reduced-motion behavior remains static.

Foundry detail/liveliness Phase 6 is implemented as a founder profile and final CTA section:

- the `Built by Adam Montgomery` section now uses the shared profile photo from `src/assets/portfolio/pfp.jpeg`.
- under the section title, the founder layout places the profile photo on the left and concise founder copy with the `Start a conversation` email CTA on the right.
- it avoids a card-based wrapper so the section reads as an editorial profile block rather than another panel.
- the final CTA target remains `mailto:adammontcompany@gmail.com`.

Foundry page structure is modularized:

- `src/components/FoundryPage.tsx` is composition-only and imports Foundry section components.
- Foundry-specific section components live in `src/components/foundry/`.
- Foundry content, section data, and TypeScript content types live in `src/foundry/foundryContent.ts`.
- Visual behavior remains controlled by the existing Foundry CSS classes in `src/App.css`.

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
