# Frozen Lake Portfolio Redesign Plan

## Goal

Redesign the site into a single-page, recruiter-friendly portfolio that is easy to scan and strongly themed like a blizzard over a frozen lake.

The new site should condense the sprawling legacy site into a focused professional page. It should show experienced web development ability through structure, visual polish, responsive behavior, and strong project/experience presentation.

## Locked Direction

- Build one page only for the current version.
- Condense legacy content instead of recreating every legacy route.
- Use a frozen-lake blizzard theme very closely.
- Light mode should be mostly white with light blue, frost, ice, and subtle snowfall.
- Dark mode should feel like a night blizzard with much more black while preserving the same visual system.
- Add a light snowfall effect over the whole page.
- Treat the profile picture as if it is trapped under the ice on a frozen lake.
- Dark mode should be the default and include a manual light/dark toggle.
- Experience and projects are both high priority.
- Experience should appear first in section order.
- Projects should still be one of the most prominent sections.
- Start by documenting the work before implementation.
- Implementation must happen in many small, fine-grained phases.
- During the project, ask questions for everything and do not assume product or content decisions.

## Current Source Material

- Legacy site reference: `legacy/LEGACY_SITE_INDEX.md`
- Legacy app entry: `legacy/src/App.jsx`
- Legacy home content: `legacy/src/pages/Home.jsx`
- Legacy experience content: `legacy/src/pages/Experience.jsx`
- Legacy project content: `legacy/src/pages/Projects.jsx`
- Legacy interest content: `legacy/src/pages/Interests.jsx`
- Legacy Foundry content: `legacy/src/pages/MontgomerySoftwareFoundry.jsx`
- Legacy global styles: `legacy/src/style.css`
- Legacy static assets: `legacy/public/`
- Copied new-app asset location: `src/assets/portfolio/`

## Success Criteria

- A recruiter can understand who Adam is, what he builds, and why he is credible within a few seconds.
- The page has a clear hierarchy without feeling sparse or generic.
- The frozen-lake theme is obvious in both light and dark modes.
- The theme does not reduce readability.
- The page looks intentional on desktop and mobile.
- Projects and experience are concise, proof-focused, and easy to compare.
- Personal interests are either omitted or reduced to a small supporting signal.
- The implementation remains one page for this version.
- The final build passes project validation commands.

## Phase 1: Documentation Foundation

Status: completed as documentation-only work.

### Phase 1.1: Confirm Legacy Inventory

- Review `legacy/LEGACY_SITE_INDEX.md`.
- Confirm it contains every legacy page, component, route, asset category, test, and script.
- Add missing legacy facts if any are discovered before redesign work begins.

Status: completed. `legacy/LEGACY_SITE_INDEX.md` now includes hidden legacy metadata folders, stale Foundry test notes, and legacy content risk notes.

### Phase 1.2: Create Redesign Source-of-Truth Notes

- Create or update a root-level planning document for:
  - frozen-lake theme rules
  - one-page information architecture
  - content priority
  - implementation phase sequence
- Keep the document updated whenever the user makes a decision.

Status: completed. See `source-of-truth.md`.

### Phase 1.3: Create Content Extraction Notes

- Extract the reusable professional content from the legacy files.
- Group extracted content into:
  - hero facts
  - experience facts
  - project facts
  - skills/tools
  - Foundry facts
  - contact links
  - optional personal signals

Status: completed. See `content-extraction.md`.

### Phase 1.4: Create Open Questions Log

- Document any unanswered product, copy, or visual decisions.
- Ask the user before resolving any decision that affects visible content or design direction.

Status: completed. See `open-questions.md`.

## Phase 2: Content Decisions

Status: completed with documented decisions. Remaining implementation clarifications are tracked in `open-questions.md`.

### Phase 2.1: Hero Content Lock

- Ask the user to approve exact hero facts:
  - name/title line --> Adam Montgomery (keep the rotating title right from legacy)
  - contact links --> use the ones from legacy

### Phase 2.2: Experience Selection

- Ask which legacy experience entries should be included. --> SPS Commerce Software Engineering Intern, the Foundry and DataAnnotation
- Convert selected entries into concise recruiter-facing bullets.

### Phase 2.3: Project Selection

- Ask which projects should appear in the first version. --> keep all projects right now, I will clean up manually
- Ask which project should be visually strongest. --> they should all be the same (grid pattern maybe?)
- Ask which metrics, links, and stack tags are allowed for each project. --> each should have a github repo link and the public link (if they are available), they should have a brief description and a visual for the key components of the tech stack

### Phase 2.4: Skills Selection

- Ask which skills/tools should remain visible. --> make your own judgment call. I want key languages, tools, and frameworks
- Group skills into practical categories.

### Phase 2.5: Foundry Content Decision

- Exclude the foundry except for the experience section

### Phase 2.6: Personal Content Decision

- Ask whether Movember, hockey, music, or other interests should appear.
- If included, reduce them to a small supporting section near the bottom.

## Phase 3: Information Architecture

### Phase 3.1: Define Final Section Order

- Use this default unless the user changes it: --> approved
  - hero
  - experience
  - projects
  - languages/skills/tools
  - contact + resume download

Status: completed.

### Phase 3.2: Define Anchor Navigation

- Decide whether to include sticky anchor navigation.
- If included, keep it minimal and section-based.
- No nav bar, just scrolling

Status: completed.

### Phase 3.3: Define Above-the-Fold Composition

- Ensure the first viewport clearly shows:
  - Adam Montgomery
  - professional role/value
  - the frozen-lake visual concept
  - the ice-trapped profile image treatment
  - a hint of the next section

Status: completed as IA requirements.

### Phase 3.4: Define Mobile Flow

- Confirm mobile section order matches desktop.
- Decide how the ice-trapped profile image should scale on mobile.
- Ensure no visual effect blocks scanability.

Status: partially completed. Mobile order matches desktop. Exact mobile profile-image scaling remains open in `open-questions.md`.

## Phase 4: Visual System Documentation

Status: completed as documentation. See `visual-system.md`.

### Phase 4.1: Light Theme Tokens

- Define exact colors for:
  - snow background
  - frozen lake blue
  - ice edge
  - text
  - muted text
  - links
  - focus outlines
  - cards or panels

Status: completed in `visual-system.md`.

### Phase 4.2: Dark Theme Tokens

- Define exact colors for:
  - night sky / black base
  - deep ice
  - snow particles
  - text
  - muted text
  - links
  - focus outlines
  - panels

Status: completed in `visual-system.md`.

### Phase 4.3: Typography Rules

- Choose heading and body type direction.
- Avoid default-looking typography.
- Keep headings scan-friendly.
- Do not use viewport-scaled font sizes.

Status: completed in `visual-system.md`.

### Phase 4.4: Surface Rules

- Define how frost, glass, ice, and panel surfaces work.
- Keep cards reserved for repeated items such as experience and projects.
- Avoid nested cards.

Status: completed in `visual-system.md`.

### Phase 4.5: Motion Rules

- Define snowfall behavior.
- Define reduced-motion behavior.
- Define page-load animation rules.
- Keep motion subtle enough for professional readability.

Status: completed in `visual-system.md`.

## Phase 5: Project Setup

### Phase 5.1: Decide New App Location

- Ask whether to build at the repo root or preserve `legacy/` and create a fresh root app.
- Do not move or delete legacy files without explicit approval.

### Phase 5.2: Choose Framework Continuity

- Prefer React + Vite unless the user explicitly wants a different stack.
- Confirm whether to keep React Router even though the new site is one page.

### Phase 5.3: Create Root Project Files

- Create the new app structure only after approval.
- Keep `legacy/` as reference material.

### Phase 5.4: Wire Build Scripts

- Add package scripts for:
  - dev
  - build
  - preview
  - lint/test if applicable

## Phase 6: Base App Shell

Status: completed as base template implementation.

### Phase 6.1: Create Single-Page App Entry

- Build a one-page React app shell.
- Remove route complexity from the new app unless explicitly needed.

Status: completed in `src/App.tsx`; later refactored so `src/App.tsx` is page composition only.

### Phase 6.2: Add Layout Wrapper

- Add constrained content widths.
- Add full-width thematic background layers.
- Ensure page sections are not floating section cards.

Status: completed in `src/App.tsx`, `src/components/Background.tsx`, `src/App.css`, and `src/index.css`.

### Phase 6.3: Add Theme State

- Default to dark mode.
- Add manual toggle.
- Persist the user choice if approved.

Status: completed with dark mode as the default and a manual toggle. System-preference initialization was removed at the user's direction. Persistence is intentionally not implemented because it is still unapproved.

### Phase 6.4: Add Accessibility Baseline

- Add semantic landmarks.
- Add visible focus styles.
- Ensure theme toggle is keyboard usable.
- Respect reduced-motion preference.

Status: completed in `src/components/ThemeToggle.tsx` and `src/index.css`.

## Phase 7: Blizzard and Frozen Lake Foundation

Status: completed as CSS-only visual foundation.

### Phase 7.1: Build Static Background

- Add snow/ice base background for light mode.
- Add night-blizzard base background for dark mode.

Status: completed with the existing light/dark tokenized background layers.

### Phase 7.2: Add Frozen Lake Texture

- Add soft frost surfaces only.
- Do not add ice lines, cracks, shards, or repeating linear textures.
- Keep texture CSS-based unless a generated bitmap is explicitly approved.

Status: completed with soft radial frost haze and blurred lake color only.

### Phase 7.3: Add Snowfall Layer

- Add a site-wide snowfall effect.
- Make it lightweight.
- Disable or reduce it for `prefers-reduced-motion`.

Status: completed with three CSS snow layers over the entire site.

### Phase 7.4: Test Readability Against Theme

- Verify body text and headings remain readable over all themed surfaces.

Status: completed through code validation; visual browser review remains a later validation task.

## Phase 8: Hero Section

Status: completed with draft copy and documented asset/CTA assumptions pending user review.

### Phase 8.1: Build Hero Structure

- Add name, role, summary, CTAs, and key proof points.
- Avoid putting the hero text inside a card.
- Leave a visible hint of the next section.

Status: completed with centered name, rotating-role text, draft summary, proof chips, icon quick links, and icon-supported CTAs.

### Phase 8.2: Build Ice-Trapped Profile Image

- Use the existing `pfp.jpeg` unless the user approves another image.
- Create an under-ice treatment using overlays, frost texture, refraction-like blur, and cold highlights.
- Ensure the face remains recognizable.

Status: completed with a larger CSS-only frozen-lake treatment using soft ice glow, frost haze, blue overlay, snow/frost speckles, and no cracks, shards, or line motifs.

### Phase 8.3: Add Hero Actions

- Include approved CTA links only.
- Likely options:
  - resume PDF
  - email
  - GitHub
  - LinkedIn

Status: completed with resume as primary and projects as secondary; this CTA order is documented as an assumption pending user review.

Additional status: completed centered quick links for resume, LinkedIn, GitHub, and email using related legacy icons.

Additional status: completed PDF icon on the resume CTA.

### Phase 8.4: Mobile Hero Pass

- Confirm the hero does not consume too much vertical space.
- Ensure the next section is hinted on mobile.

Status: completed in CSS with centered layout on desktop and mobile.

## Phase 9: Experience Section

Status: completed with structured cards and SPS details still explicitly pending.

### Phase 9.1: Create Experience Data Model

- Convert approved experience entries into structured data.
- Include title, organization, dates, summary, and concise proof bullets.

Status: completed in `src/components/ExperienceSection.tsx`.

### Phase 9.2: Build Experience Layout

- Use a scan-friendly timeline or stacked list.
- Keep dates and role names easy to compare.

Status: completed as stacked frosted cards. Pill-style section kicker tags were removed.

### Phase 9.3: Add Skill Tags

- Add only meaningful skill tags.
- Avoid overwhelming each role with too many tags.

Status: completed with compact tags per entry.

### Phase 9.4: Edit Copy for Recruiters

- Replace paragraph-heavy copy with concise bullets.
- Emphasize impact, ownership, stack, leadership, and delivery.

Status: completed for Foundry and DataAnnotation from legacy source material. SPS copy remains pending because details have not been provided.

## Phase 10: Projects Section

Status: completed as an equal-weight project grid.

### Phase 10.1: Create Project Data Model

- Convert approved project entries into structured data.
- Include name, status, stack, summary, links, and proof points.

Status: completed in `src/components/ProjectsSection.tsx`. Stale status/date/deployment-target claims were omitted.

### Phase 10.2: Build Featured Project Layout

- Give the strongest project or projects more space.
- Keep project cards compact and comparable.

Status: intentionally resolved as equal-weight cards because the user specified all project cards should have the same visual strength.

### Phase 10.3: Build Secondary Project Layout

- Add smaller entries for less important projects.
- Avoid including weak or outdated projects unless the user approves.

Status: intentionally resolved as the same equal-weight card layout for all included projects.

### Phase 10.4: Add Project Links

- Include deployed links, repos, previews, or contact links only where useful.
- Clearly distinguish live product links from source-code links.

Status: completed with visible link pills and hidden link rows for projects without documented public links.

Additional status: completed action-specific icons for repository, web preview/website, Android APK, and resume links.

## Phase 11: Skills and Tools Section

Status: completed with four user-specified skill cards.

### Phase 11.1: Build Skill Groups

- Group tools by practical capability.
- Use the user-specified groups: Languages, Tools, Frameworks, and AI.

Status: completed with Languages, Tools, Frameworks, and AI groups.

### Phase 11.2: Replace Logo Wall

- Avoid a large decorative logo grid.
- Use compact skill labels or small icon-supported rows.

Status: completed with compact skill labels and inline category icons instead of a legacy logo wall.

### Phase 11.3: Tie Skills to Evidence

- Where possible, connect skills to projects or experience.

Status: visible evidence lines were removed at the user's request. Skills still reflect technologies represented elsewhere on the page.

## Phase 12: Foundry / Credibility Section

Status: intentionally skipped for v1 because the user approved Foundry only as an experience entry.

### Phase 12.1: Build Foundry Summary

- Condense Foundry into a small professional credibility section if approved.
- Emphasize custom software, small-business systems, modernization, and full-stack delivery.

Status: not implemented. Foundry remains in the experience section only.

### Phase 12.2: Add Contact Path

- Add a mail link or CTA if Foundry remains visible.

Status: not implemented because there is no separate Foundry section.

### Phase 12.3: Keep It Secondary

- Ensure this section supports the portfolio rather than becoming a separate company page.

Status: satisfied by omitting the separate Foundry section.

## Phase 13: Contact Section

Status: completed with a recruiter-focused footer contact section styled like the hero, not a card.

### Phase 13.1: Build Footer Contact

- Include approved links:
  - resume
  - email
  - GitHub
  - LinkedIn

Status: completed in `src/components/SiteFooter.tsx` with copied portfolio icons and the copied resume PDF.

### Phase 13.2: Add Final Recruiter Prompt

- Use a concise closing line focused on hiring/contact.

Status: completed with a concise software-engineering-role prompt.

### Phase 13.3: Verify Link Targets

- Confirm every external link opens correctly.
- Confirm resume path works.

Status: completed through static source validation and production build validation. Browser click validation remains part of Phase 18.

## Phase 14: Optional Personal Signal

Status: intentionally skipped for v1 at the user's direction.

### Phase 14.1: Decide Inclusion

- Ask whether personal content should appear in v1.

### Phase 14.2: Build Minimal Version If Approved

- Keep it short.
- Prefer one compact row or sentence over a full section.
- Do not include interactive games or embeds in v1 unless explicitly approved.

## Phase 15: Dark Mode Refinement

Status: completed as theme parity refinement. Dark mode was already closer to the target, so light mode now uses the same background/effect placement as dark mode with the dark palette translated into a whiteout lake palette: dark blacks become whites/near-whites, and bright whites become light blues.

### Phase 15.1: Apply Night Blizzard Styling

- Make dark mode much more black.
- Keep ice and snow visible without lowering contrast.

Status: completed. Dark mode remains the reference visual system.

### Phase 15.2: Tune Profile Image Treatment

- Ensure the under-ice effect works in both light and dark modes.

Status: completed. The shared profile effect remains token-driven so it reads as day ice in light mode and night ice in dark mode.

### Phase 15.3: Verify Toggle Behavior

- Confirm initial mode defaults to dark.
- Confirm manual toggle switches between dark and light.

Status: completed through source validation and static build validation. Browser toggle validation remains part of Phase 18.

## Phase 16: Responsive Polish

Status: completed as a CSS responsive polish pass across desktop, tablet, mobile, and reduced-motion/performance concerns. Browser visual validation remains part of Phase 18.

### Phase 16.1: Desktop Review

- Check wide desktop layout.
- Ensure no section becomes too stretched.

Status: completed. Wide layouts remain constrained by the page shell and section-specific max widths.

### Phase 16.2: Tablet Review

- Check mid-width layout.
- Ensure cards and timeline remain readable.

Status: completed. Tablet widths now collapse project and skill grids into a single readable column with narrower section widths.

### Phase 16.3: Mobile Review

- Check small screens.
- Ensure text does not overflow.
- Ensure buttons and links are comfortably tappable.

Status: completed. Small-screen rules tighten hero sizing, stack hero actions, resize the profile treatment, and keep link targets full-width where helpful.

### Phase 16.4: Motion and Performance Review

- Confirm snowfall does not cause visible jank.
- Reduce animation if needed.

Status: completed through CSS changes. Snow layers use `will-change: transform`; the nearest snow layer is reduced on very small screens; reduced-motion disables snow animation.

## Phase 17: Accessibility and SEO

### Phase 17.1: Semantic HTML Pass

- Use one `h1`.
- Use section headings in logical order.
- Use landmarks where appropriate.

### Phase 17.2: Link and Button Labels

- Ensure all links and buttons have clear accessible names.

### Phase 17.3: Metadata Pass

- Add title and description.
- Confirm favicon.
- Add Open Graph metadata if approved.

### Phase 17.4: Contrast Pass

- Verify light and dark theme contrast.
- Adjust theme colors if readability is weak.

## Phase 18: Validation

Status: partially completed for static validation and production build validation after cleanup/deploy prep. Local browser validation remains pending.

### Phase 18.1: Static Validation

- Run lint or syntax checks available in the new project.

Status: completed after Vercel deploy-prep changes with `npm run lint`.

### Phase 18.2: Build Validation

- Run production build.
- Fix build errors before continuing.

Status: completed after Vercel deploy-prep changes with `npm run build`.

### Phase 18.3: Local Browser Validation

- Start the dev server.
- Review desktop and mobile viewports.
- Check light and dark modes.

Status: pending. Dev-server/browser visual validation has not been run in this session.

### Phase 18.4: Final Content Audit

- Confirm selected content matches user-approved scope.
- Confirm no legacy sprawl leaked into the new page.

## Phase 19: Cleanup

Status: partially completed for confirmed dead template code/assets and deploy-prep documentation.

### Phase 19.1: Remove Unused New Code

- Remove unused components, styles, or assets from the new app area.
- Do not delete legacy files unless explicitly approved.

Status: completed for currently confirmed dead root assets/styles. Removed unused hero proof-chip CSS, `src/assets/hero.png`, and `public/icons.svg`. Existing deleted template SVGs remain absent.

### Phase 19.2: Update Documentation

- Update the redesign notes with final implementation facts.
- Add run/build instructions for the new app.

Status: completed for current cleanup/deploy-prep pass. Root `README.md` now includes local validation and Vercel deployment instructions.

### Phase 19.3: Final Review Summary

- Document what changed.
- Document how to verify it.
- Document remaining optional improvements.

## Questions To Ask Before Implementation

- Which exact experience entries should be included?
- Which exact projects should be featured?
- Should Foundry appear as its own section or only as an experience item?
- Should personal interests appear at all in v1?
- Should the new app live at the repo root while `legacy/` remains untouched?
- Should the snowfall be pure CSS, canvas-based, or avoided until the core page is complete?
- Should the ice-trapped profile treatment be CSS-only, generated-image-assisted, or manually edited from the existing photo?
- Which CTA should be primary: resume, email, projects, or LinkedIn?
- Should the copied resume PDF in `src/assets/portfolio/` be reused as-is?
- If a legacy asset is reused, copy it into the new app first instead of importing directly from `legacy/`.

## Non-Goals For The First Implementation

- Rebuilding the old multi-page route structure.
- Preserving every legacy project, job, hobby, and embed.
- Recreating the hockey guessing game.
- Embedding Spotify content.
- Deleting the legacy folder.
- Adding a CMS or external data source.
- Adding complex 3D effects before the core recruiter experience works.
