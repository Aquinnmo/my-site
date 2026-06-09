# Legacy Site Reference

This document is a retrieval index for the previous version of the site in `legacy/`.
It is intended to help future agents quickly locate relevant code, content, assets, and behavior without re-reading the whole app.

## Scope

- App type: React + Vite single-page site
- Routing: `react-router-dom`
- Animations: `framer-motion`
- Analytics: Vercel Analytics and Speed Insights
- Main visual system: single global stylesheet in `src/style.css`
- Deployment target: Vercel

## Top-Level File Map

- `legacy/.github/`: legacy repository automation/configuration folder
- `legacy/.vercel/project.json`: legacy Vercel project linkage metadata
- `legacy/.vercel/README.txt`: Vercel metadata warning/readme file
- `legacy/index.html`: HTML shell, favicon, root mount point, entry script
- `legacy/package.json`: scripts and dependencies
- `legacy/vercel.json`: SPA rewrite for Vercel
- `legacy/README.md`: original project README
- `legacy/src/main.jsx`: React entry point
- `legacy/src/App.jsx`: app shell, router, analytics, transitions, navbar
- `legacy/src/style.css`: global styling for all pages and components
- `legacy/src/pages/`: route-level screens
- `legacy/src/components/`: reusable UI pieces
- `legacy/public/`: static images, logos, icons, resume PDF
- `legacy/scripts/`: local lint/test support utilities
- `legacy/tests/`: Node test suite

## Routes

Defined in `legacy/src/App.jsx`:

- `/` -> `Home`
- `/projects` -> `Projects`
- `/interests` -> `Interests`
- `/foundry` -> `MontgomerySoftwareFoundry`
- `/experience` -> `Experience`
- `*` -> `404Page`

## App Shell Behavior

File: `legacy/src/App.jsx`

- Wraps the app in `BrowserRouter`
- Includes `@vercel/analytics` and `@vercel/speed-insights`
- Uses `AnimatePresence` + `motion.div` for page fade transitions
- Renders `Navbar` globally above `<main className="page-content">`
- Includes `ScrollToTop` to reset scroll position after route changes

Important implementation details:

- Route transitions use a 0.3 second opacity fade
- `ScrollToTop` delays the scroll reset to match the exit animation
- The navbar is fixed and the pages measure its height to avoid overlap

## Pages

### Home

File: `legacy/src/pages/Home.jsx`

Purpose:

- Intro/landing page with personal branding
- Social links
- Resume link
- Profile photo
- Rotating identity headline
- A toggleable long/short bio component
- Large logo grid of tools and technologies

Notable content:

- Greeting: `Hello I'm Adam!`
- Personal summary framed around being a student, communicator, and builder
- Link to projects

Important assets used:

- `/pfp.jpeg`
- `/adam_montgomery_resume.pdf`
- `/linkedin_icon.svg`
- `/github_logo.svg`
- A large set of tech logos in `public/`

### Experience

File: `legacy/src/pages/Experience.jsx`

Purpose:

- Chronological experience list with category filtering
- Displays titles, companies, date ranges, duties, and skills

Filtering:

- All
- Programming
- Customer Service
- Leadership

Implementation notes:

- Experience data is hard-coded in the file
- Sorting is newest-first by end date, then start date
- Ongoing roles use `Present`
- The page measures navbar height and adjusts top spacing

Experience entries currently included:

- President, Owner, & Lead Developer at Montgomery Software Foundry Inc.
- AI Training Contractor at DataAnnotation
- Vice-President of External Affairs at University of Guelph SOCIS
- Guelph Event Team at University of Guelph
- Opener at Marble Slab Creamery Barrie
- Host at Montana's Barrie
- Associate at Tee 2 Green
- Student Council - Social Rep at Country Day School
- Varsity Hockey Team Captain at Country Day School
- Student Athletic Representative at Country Day School
- Runner and Barback at Dirty Oar

### Projects

File: `legacy/src/pages/Projects.jsx`

Purpose:

- Portfolio page with project cards
- Each card includes stack logos, dates, a summary, and links

Projects currently shown:

- Pump Pal
- Custom Enterprise-Level Databasing System
- YOU WILL LOSE: Rock, Paper, Scissors
- Am I Cooked?
- CherryPick
- adam-montgomery.ca
- Brick Breaker
- Tic-Tac-Toe

Implementation notes:

- Uses a wide card layout with display/info columns
- Uses root-relative public assets for stack logos
- Some projects are external links to deployed apps or GitHub repos
- The page also measures navbar height to set top spacing

### Interests

File: `legacy/src/pages/Interests.jsx`

Purpose:

- Personal-interest page
- Mixes hobbies, causes, music, sports, and fandom

Sections currently included:

- Movember
- Hockey
- Music
- Other Sports

Notable embedded/interactive content:

- `TeamGuessingGame`
- Spotify playlist embed
- Stats.fm and Spotify profile links
- Yahoo Fantasy profile link

### Montgomery Software Foundry

File: `legacy/src/pages/MontgomerySoftwareFoundry.jsx`

Purpose:

- Company/service landing page for Montgomery Software Foundry Inc.
- Contains service offerings, differentiators, process steps, and founder statement

Section structure:

- Hero with company name and tagline
- What we build
- Why teams choose the Foundry
- Our collaborative process
- Built by Adam Montgomery

Key text direction:

- Custom software for small businesses
- Legacy system modernization
- Operational dashboards
- Security-first delivery

Implementation notes:

- Uses page-specific card/grid/hero styles in `style.css`
- Calculates top margin from navbar height
- Contains a CTA group with mailto link and a commented-out secondary project link

### 404 Page

File: `legacy/src/pages/404Page.jsx`

Purpose:

- Basic fallback page for unmatched routes

Current behavior:

- Displays `404 Error`
- Explains the page does not exist yet
- Links back to Home

## Components

### Navbar

File: `legacy/src/components/Navbar.jsx`

Purpose:

- Global navigation
- Desktop links or mobile overlay menu depending on viewport width

Navigation links:

- Home
- Experience
- The Foundry
- Projects
- Interests

Implementation notes:

- Tracks `isMobile` using `window.innerWidth <= 768`
- Opens a full-screen mobile overlay menu
- Adds `menu-open` to `body` to prevent scrolling while the menu is open
- Fades main content during menu open/close
- Uses delayed link activation for animated reveal

### ScrollToTop

File: `legacy/src/components/ScrollToTop.jsx`

Purpose:

- Scrolls the window to the top on route changes

Implementation notes:

- Uses `useLocation`
- Waits 300ms before scrolling to match page transition timing

### Rotating_Description

File: `legacy/src/components/Rotating_Description.jsx`

Purpose:

- Cycles through self-descriptive headlines on the home page

Headers currently included:

- I am a communicator
- I am a UI designer
- I am a web developer
- I am a forward-thinker
- I am a team player
- I am an engaged student

Implementation notes:

- Fades out, swaps text, then fades back in every 3 seconds

### Button

File: `legacy/src/components/Button.jsx`

Purpose:

- Toggles the home-page description between concise and expanded views

Implementation notes:

- Maintains a binary counter state
- Changes button label based on mode
- Renders `Description`

### Description

File: `legacy/src/components/Description.jsx`

Purpose:

- Home-page bio text that toggles between short and long formats

Behavior:

- Switches content when the parent counter changes
- Uses fade out / fade in timing to animate the swap

### TeamGuessingGame

File: `legacy/src/components/TeamGuessingGame.jsx`

Purpose:

- Interactive hockey team guessing game on the Interests page

Note:

- The file exists and is used by `Interests.jsx`
- It is one of the most likely places to inspect if the sports interactivity needs to be preserved or replaced

## Style System

File: `legacy/src/style.css`

This file is the main source of visual identity and also a large source of technical debt.

Overall characteristics:

- Very large global stylesheet
- Heavy use of viewport-based spacing and width calculations
- Page-specific styles are mixed together with component styles
- Desktop/mobile logic is mostly encoded in CSS media queries

Important style groupings:

- Global theme colors and typography
- Navbar and mobile menu
- Home page logo grids
- Projects page layouts
- Interests page layouts
- Experience page cards and skill tags
- Foundry page cards and hero
- Game UI styles
- Mobile responsiveness overrides

Design signals from the current CSS:

- Strong reliance on centered layouts
- Decorative logo-heavy presentation
- Dark green / teal / muted palette
- Many sections are visually dense rather than scan-first
- Several elements are styled for novelty or playful motion

## Assets

### Resume and profile

- `legacy/public/adam_montgomery_resume.pdf`
- `legacy/public/pfp.jpeg`
- `legacy/public/AM_radio.png`
- `legacy/public/allen_17.png`
- `legacy/public/elly_44.png`
- `legacy/public/vlad_27.png`

### Logo and tech assets

The site uses many SVG logos from `legacy/public/`, including:

- React
- Vite
- TypeScript
- Vercel
- Supabase
- Render
- Next.js
- MongoDB
- Node.js
- Python
- Java
- HTML
- CSS
- Git
- GitHub
- GitLab
- Docker
- Firebase
- Expo
- Flutter
- Linux
- Raspberry Pi
- Claude
- Gemini
- Copilot
- Cursor
- Codex
- PDF icon
- Email icon
- LinkedIn icon

### Brand/feature assets

- `legacy/public/am_logo_highres.svg`
- `legacy/public/cooked_icon.png`
- `legacy/public/codex_logo.svg`
- `legacy/public/codex_logo.png`

## Tests

File: `legacy/tests/foundry.test.js`

What it covers:

- Renders the Foundry page
- Verifies hero content and CTA text
- Verifies desktop and mobile spacing behavior
- Verifies Navbar includes the Foundry link on desktop and mobile

Test environment notes:

- Uses `node:test`
- Uses `react-dom/server`
- Stubs `window` and `document` globals

Known status:

- The test appears stale against the current `legacy/src/pages/MontgomerySoftwareFoundry.jsx` source.
- The test expects `Start a project` and `Explore recent work`.
- The current Foundry source renders `Get in touch` and has the secondary project link commented out.
- Treat the test as a legacy behavior reference until the user asks to repair legacy tests.

## Local Scripts

### `npm run dev`

- Starts Vite dev server

### `npm run build`

- Builds production bundle

### `npm run preview`

- Previews production build

### `npm test`

- Runs Node tests with the custom JSX loader

### `npm run lint`

- Runs the custom syntax/security lint script

## Build and Tooling Notes

### Vite entry flow

1. `legacy/index.html`
2. `legacy/src/main.jsx`
3. `legacy/src/App.jsx`

### Custom test loader

File: `legacy/scripts/jsx-loader.js`

- Lets Node import `.jsx` and `.css` in tests
- Transforms JSX with `esbuild`

### Custom lint

File: `legacy/scripts/lint.js`

- Recursively scans `src/` and `scripts/`
- Syntax-checks JS and JSX with `esbuild`
- Flags use of `eval(`

## Deployment

Files:

- `legacy/vercel.json`
- `legacy/.vercel/project.json`

Behavior:

- All routes rewrite to `/` so the SPA router can handle navigation on Vercel

## Content and Tone Observations

These are useful when redesigning for recruiter-friendliness:

- The current site emphasizes personality, hobbies, and novelty.
- The page hierarchy is not optimized for fast scanning.
- Many important professional details are embedded in long paragraphs instead of concise evidence blocks.
- There is a strong amount of logo decoration and animated flourish.
- The site currently mixes portfolio, biography, and personal interests evenly, instead of separating primary professional signal from secondary personality content.
- Several legacy content dates and deployment targets may be stale and should be confirmed before appearing in the redesigned page.
- Some future-tense experience copy should be rewritten before final use if the role is now current or past.
- `legacy/src/components/Rotating_Description.jsx` contains mojibake/encoding artifacts in its emoji text.
- `legacy/src/pages/Projects.jsx` contains JSX `class` attributes in several places instead of `className`.

## Redesign Implications

For a recruiter-friendly redesign, the legacy site already contains the raw material needed for:

- A strong summary/hero section
- A concise experience timeline
- A tighter project portfolio
- A company/services showcase for Foundry
- Optional personality content pushed lower or to a secondary page

Likely priorities:

- Reduce visual clutter
- Make key facts scannable in seconds
- Replace novelty-first presentation with evidence-first structure
- Surface role, impact, stack, and links more clearly
- Keep the personality, but make it secondary

## Where to Look First for Specific Questions

- Route structure: `legacy/src/App.jsx`
- Navigation behavior: `legacy/src/components/Navbar.jsx`
- Landing content: `legacy/src/pages/Home.jsx`
- Work history: `legacy/src/pages/Experience.jsx`
- Portfolio: `legacy/src/pages/Projects.jsx`
- Interests/hobbies: `legacy/src/pages/Interests.jsx`
- Foundry landing page: `legacy/src/pages/MontgomerySoftwareFoundry.jsx`
- 404 fallback: `legacy/src/pages/404Page.jsx`
- Global look and mobile responsiveness: `legacy/src/style.css`
- Assets and logos: `legacy/public/`
- Tests for Foundry/Navbar: `legacy/tests/foundry.test.js`
