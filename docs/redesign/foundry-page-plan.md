# Foundry Page Incremental Plan

## Summary

Create a focused `/foundry` page for Montgomery Software Foundry Inc. while preserving the existing portfolio as the primary recruiter-facing page. Add a compact fixed page switcher styled after `src/foundry/sample_toggle_bar.png`, with `Adam` and `Foundry` options and a sliding animated active pill.

The Foundry page should copy the legacy Foundry page structure and refine the copy for the current visual system. It should look nearly identical to the portfolio portion in layout, hierarchy, spacing, and atmosphere, but reinterpret the blizzard as crackling embers.

Foundry dark mode should use black with orangey-red fire accents. Foundry light mode should use white with orangey-red fire accents. The page should reuse the same snowfall effect architecture, but particles should be orange-red in both color modes and should rise upward like sparks by inverting the y-axis motion.

## Phase 1: Update The Product Contract

- Update `docs/redesign/source-of-truth.md` so the site is no longer documented as strictly one-page only.
- Record that `/` remains the main recruiter-facing portfolio page.
- Record that `/foundry` is a focused business page for Montgomery Software Foundry Inc.
- Record the Foundry visual direction: portfolio-matching structure with a crackling-ember theme.
- Record the Foundry color direction: black/orangey-red in dark mode and white/orangey-red in light mode.
- Record the Foundry particle direction: reuse snowfall layers, make particles orange-red, and animate them upward like sparks.
- Update the no-nav rule to allow one exception: a compact fixed page switcher styled after `src/foundry/sample_toggle_bar.png`.
- Record the switcher labels exactly: `Adam` for `/` and `Foundry` for `/foundry`.
- Preserve the existing rules against visible scrollbar chrome, divider bars, crack lines, shard motifs, etched ice lines, and repeating linear ice textures.

## Phase 2: Add Lightweight Page Routing

Status: implemented.

- Add route-state handling for two pages without recreating the old multi-page legacy app.
- Support:
  - `/` for the portfolio page.
  - `/foundry` for the Foundry page.
- Keep `vercel.json` SPA fallback behavior intact so direct refreshes on `/foundry` work.
- Preserve the shared app shell behavior:
  - Vercel Analytics.
  - Vercel Speed Insights.
  - Portfolio frozen-lake background.
  - Foundry ember background variant.
  - Portfolio snowfall.
  - Foundry upward orange-red spark particles.
  - Theme toggle.

## Phase 3: Build The Shared Top Page Switcher

Status: implemented.

- Create a reusable top switcher component, likely `src/components/PageSwitcher.tsx`.
- Render it as fixed near the top center of the viewport.
- Style it from `src/foundry/sample_toggle_bar.png`:
  - dark rounded capsule container.
  - two icon-first destinations.
  - left destination labeled `Adam` for the portfolio page.
  - right destination labeled `Foundry` for the Foundry page.
  - active destination shown as a rounded pill inside the capsule.
  - active pill slides between destinations using a smooth transform animation.
- Use semantic links rather than buttons because the control changes pages.
- Derive active state from the current path.
- Provide visible focus states for keyboard users.
- Respect `prefers-reduced-motion` by disabling or simplifying the sliding animation.

## Phase 4: Create The Foundry Page

Status: implemented.

- Add a Foundry page component, likely `src/components/FoundryPage.tsx` or `src/pages/FoundryPage.tsx`.
- Copy and refine the legacy Foundry page content structure:
  - Hero: `Montgomery Software Foundry Inc.`
  - Tagline focused on custom, dependable software for small businesses.
  - Primary CTA using `mailto:adammontcompany@gmail.com`.
  - `What we build`.
  - `Why teams choose the Foundry`.
  - `Our collaborative process`.
  - `Built by Adam Montgomery`.
- Preserve the meaning of the legacy page while tightening the copy for clarity, scanability, and professionalism.
- Keep the page concise enough that it does not feel like a generic SaaS marketing site.

## Phase 5: Apply The Foundry Ember Visual Variant

Status: implemented.

- Use the existing CSS token names with Foundry route-scoped overrides in `src/App.css`.
- Define ember-named route variables first, then map them into the shared token names used by existing components.
- Reuse the portfolio page's layout rhythm, section hierarchy, card treatment, background layering, and particle architecture.
- Translate the portfolio palette into a Foundry ember variant:
  - dark mode: black and orangey-red fire colors.
  - light mode: white and orangey-red fire colors.
- Reuse the existing snowfall effect implementation shape, but render Foundry particles orange-red in both color modes with brighter hot-core spark colors.
- Invert the particle y-axis animation on the Foundry page so particles rise like sparks instead of falling like snow.
- Preserve varied particle sizes, opacities, and speeds across the layers.
- Do not import or path directly into `legacy/` from runtime code.
- Avoid nested cards and page-wide card wrappers.
- Use cards only for repeated service, differentiator, or process items.
- Give the Foundry page a stronger business-service hierarchy than the portfolio:
  - clear hero.
  - concise services.
  - concise differentiators.
  - simple process steps.
  - contact CTA near the top and bottom.
- Keep text readable in both light and dark modes.
- Keep the Foundry page from becoming a separate fire illustration or generic SaaS landing page.

## Phase 6: Responsive And Interaction Polish

Status: implemented.

- Ensure the fixed page switcher does not overlap the theme toggle.
- Ensure Foundry hero content starts low enough that the switcher does not cover it.
- Verify mobile tap targets are comfortable.
- Keep the switcher compact on small screens.
- Ensure the active pill animation remains smooth on desktop and mobile.
- Keep the switcher visible while page content fades out and in during route changes.
- Fade page content into the current mode's base color: black for dark mode and white for light mode.
- Swap routes at the top of the page after fade-out, then fade in the new route.
- Verify the orange-red rising sparks do not obscure text in either color mode.
- Respect `prefers-reduced-motion` by disabling the spark rise animation and leaving a static ember-speck texture.
- Keep scrollbars hidden per current site rules.

## Phase 7: Validation

- Run:

```bash
npm run lint
npm run build
```

- Manually verify:
  - `/` renders the portfolio page.
  - `/foundry` renders the Foundry page.
  - the switcher moves between pages.
  - the active pill slides correctly.
  - Foundry dark mode reads as black and orangey-red.
  - Foundry light mode reads as white and orangey-red.
  - Foundry particles are orange-red in both modes.
  - Foundry particles rise upward like sparks.
  - direct refresh on `/foundry` works under the SPA fallback.
  - light and dark themes remain readable.
  - mobile layout does not overlap the theme toggle or page switcher.

## Assumptions

- The page switcher is the only approved navigation exception.
- The switcher should navigate between the portfolio and Foundry pages.
- The switcher labels should be exactly `Adam` and `Foundry`.
- The active page pill should animate by sliding between the two destinations.
- The Foundry page should start from the legacy Foundry page content and refine it rather than rewriting from scratch.
- The Foundry page should look nearly identical in theme structure to the portfolio, with crackling embers replacing the blizzard.
- Foundry dark mode should be black and orangey-red.
- Foundry light mode should be white and orangey-red.
- Foundry particles should reuse the snowfall architecture, render orange-red, and rise upward.
- No runtime code should import from `legacy/`.
