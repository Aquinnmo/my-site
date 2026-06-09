# Redesign Content Extraction

This document extracts reusable information from `legacy/` for the one-page frozen-lake portfolio redesign. Content is recorded as legacy source material, not final approved copy.

## Approved V1 Content Selection

These are user-approved planning decisions from `plan.md`.

### Hero

- Name: Adam Montgomery.
- Title treatment: keep the rotating title concept from legacy.
- Contact links: use legacy contact links.
- Exact hero summary: not yet specified.
- Primary CTA: not yet specified.
- Secondary CTA: not yet specified.

### Experience

- Include Montgomery Software Foundry Inc.
- Include DataAnnotation.
- Include Software Engineering Intern at SPS Commerce.
- Convert selected entries into concise recruiter-facing bullets during implementation.

### Projects

- Keep all legacy projects for now.
- Give all projects equal visual weight.
- Use a grid pattern if it fits the design.
- Each project should have:
  - brief description
  - GitHub repo link where available
  - public link where available
  - visual treatment for key tech-stack components

### Skills

- Select key languages, tools, and frameworks using engineering judgment.
- Group skills into practical categories.
- Avoid recreating the legacy logo wall as decorative clutter.

### Foundry

- Foundry should appear only in the experience section.
- Do not build a separate Foundry section for v1.

### Personal Content

- No personal-content section is included in the approved Phase 3 section order.

## Retrieval Sources

- Home content: `legacy/src/pages/Home.jsx`
- Bio content: `legacy/src/components/Description.jsx`
- Rotating labels: `legacy/src/components/Rotating_Description.jsx`
- Experience content: `legacy/src/pages/Experience.jsx`
- Project content: `legacy/src/pages/Projects.jsx`
- Foundry content: `legacy/src/pages/MontgomerySoftwareFoundry.jsx`
- Personal content: `legacy/src/pages/Interests.jsx`
- Asset inventory: `legacy/public/`

## Hero Facts

### Identity

- Name shown in legacy home greeting: Adam.
- Legacy greeting: `Hello I'm Adam!`
- Legacy site identity labels:
  - communicator
  - UI designer
  - web developer
  - forward-thinker
  - team player
  - engaged student

### Professional Summary Source Material

Legacy short bio facts:

- Second-year computer science co-op student at the University of Guelph.
- SOCIS VP of External Affairs.
- University of Guelph Events Staff.
- AI Training Contractor for DataAnnotation.
- Efficient and effective communicator.
- Life-long team player.
- Natural leader that thrives in high-pressure scenarios.
- Loves listening to others' stories.
- Passionate about music.

Legacy long bio facts:

- Second-year computer science student at the University of Guelph.
- Vice-President of External Affairs for the Guelph School of Computer Science.
- Helping train AI models as a DataAnnotation contractor.
- Avid hockey player and watcher.
- Competitor who wants to be the best while engaging with everyone he works with.
- Member of University of Guelph Events Staff.
- Engaged student and citizen who wants to give back to school and community.

### Contact and CTA Source Material

- Resume path: `legacy/public/adam_montgomery_resume.pdf`
- LinkedIn URL: `https://linkedin.com/in/adam-montgomery-05a936315`
- GitHub URL: `https://github.com/Aquinnmo`
- Foundry email: `mailto:adammontcompany@gmail.com`

## Experience Facts

Experience entries are hard-coded in `legacy/src/pages/Experience.jsx`. Dates below are source values from the legacy file.

### Current Resume Experience Bullets

Source file: `src/assets/portfolio/adam_montgomery_resume.pdf`.

Current rule: if a rendered job appears in the current resume PDF, use the resume bullet points as the source of truth for that job's visible proof bullets.

#### SPS Commerce

Resume title: Systems Automation Framework Coop.

- Working on production Kotlin/Spring Boot services that deliver 1 million+ documents daily.
- Leading development on an MCP server to help developers diagnose issues when using our services.
- Working with REST APIs to integrate complex services that must have near 100% uptime.

#### Montgomery Software Foundry Inc.

Resume title: President, Owner, & Lead Developer.

- Founded my company to sell a custom SaaS solution to a wheelchair accessible transit company in the GTA.
- Updated a paper and Excel-based system to an automated online workflow that will prevent data loss.
- Documented customer specifications and developed the custom software in line with the requirements.

### SPS Commerce

- Title: Software Engineering Intern
- Source type: user-provided new experience entry, not present in `legacy/src/pages/Experience.jsx`.
- Company: SPS Commerce
- Dates: May 2026 - Present in current site implementation; resume labels the role as Summer 2026.
- Summary source: current resume bullets in this document.
- Skills from resume bullets: Kotlin, Spring Boot, MCP, REST APIs.
- Implementation note: use current resume bullets for visible proof points.

### Montgomery Software Foundry Inc.

- Title: President, Owner, & Lead Developer
- Category: programming
- Start date: 2025-08-20
- End date: ongoing in legacy data
- Summary source: Runs a business delivering custom software solutions for small-business owners.
- Summary source: Specializes in modernizing old systems to simplify workflows and multiply productivity.
- Skills:
  - Leadership
  - Full Stack Development
  - Product Design
  - Project Specifications

### DataAnnotation

- Title: AI Training Contractor
- Category: programming
- Start date: 2025-01-05
- End date: ongoing in legacy data
- Summary source: Reviewed generated code and improved efficiency, readability, and correctness.
- Summary source: Enhanced functionality of 3 in-development LLMs for code review.
- Summary source: Developed fine-grained, actionable criteria to judge AI responses to complex prompts.
- Skills:
  - Clear Communication
  - Attention to Detail
  - Code Reviews
  - Quality Assurance

### University of Guelph Society of Computing and Information Science

- Title: Vice-President of External Affairs
- Category: leadership
- Start date: 2025-04-01
- End date: ongoing in legacy data
- Summary source: Elected to communicate with other clubs at the university.
- Summary source: Helps organize Computer Science events and improve collaboration across clubs.
- Skills:
  - Communication
  - Organization Skills
  - Time Management
  - Leadership
  - Collaboration

### University of Guelph

- Title: Guelph Event Team
- Category: customer service
- Start date: 2025-04-01
- End date: ongoing in legacy data
- Summary source: Ensures sports games are safe and engaging for fans.
- Summary source: Handles crowd control and supports a positive event experience.
- Skills:
  - Enthusiasm
  - School Spirit
  - Teamwork

### Dirty Oar

- Title: Runner and Barback
- Category: customer service
- Start date: 2025-05-18
- End date: 2025-08-27
- Summary source: Supports servers, bartenders, and kitchen staff as needed.
- Summary source: Converses with customers, delivers orders, and changes kegs.
- Skills:
  - Communication
  - Organization
  - Conversational Skills
  - Positive Attitude
  - Teamwork

### Marble Slab Creamery Barrie

- Title: Opener
- Category: customer service
- Start date: 2020-04-23
- End date: 2024-08-31
- Summary source: Managed day-to-day operations of a team of 5.
- Summary source: Assigned tasks to maintain stock and reduce in-store wait times.
- Skills:
  - Communication
  - Customer Service
  - Time Management
  - Delegation
  - Prioritization

### Montana's Barrie

- Title: Host
- Category: customer service
- Start date: 2023-03-01
- End date: 2024-05-30
- Summary source: Managed restaurant customer flow, reducing wait times and maximizing seating efficiency.
- Summary source: Checked in with servers to balance workload and reduce stress.
- Skills:
  - Communication
  - Attention to Detail
  - Customer Service
  - Fast-Paced Decision Making

### Tee 2 Green

- Title: Associate
- Category: customer service
- Start date: 2023-06-01
- End date: 2024-08-30
- Summary source: Helped customers find equipment and supported store operations.
- Summary source: Managed stocking and inventory while practicing real-time need analysis.
- Skills:
  - Communication
  - Need Analysis
  - Approachability
  - Customer Service

### Country Day School Student Council

- Title: Student Council - Social Rep
- Category: leadership
- Start date: 2023-06-01
- End date: 2024-06-30
- Summary source: Elected to represent the student body.
- Summary source: Organized events and advocated for school spirit.
- Skills:
  - Communication
  - Organization
  - Approachability
  - Leadership

### Country Day School Varsity Hockey

- Title: Varsity Hockey Team Captain
- Category: leadership
- Start date: 2023-10-01
- End date: 2024-03-30
- Summary source: Captained hockey team to a divisional championship silver medal.
- Summary source: Managed locker-room personalities and served as a role model for younger players.
- Skills:
  - Leadership
  - High Pressure Scenarios
  - Leading By Example
  - Teamwork
  - Discipline

### Country Day School Athletics

- Title: Student Athletic Representative
- Category: leadership
- Start date: 2023-04-01
- End date: 2024-06-30
- Summary source: Worked with athletic director to organize student-athlete workshops.
- Summary source: Attended practices to model leadership in the community.
- Skills:
  - Leadership
  - Communication
  - Organization
  - Planning
  - Engagement

## Project Facts

Project entries are hard-coded in `legacy/src/pages/Projects.jsx`. Development and deployment timing below is source material from the legacy file and may be stale.

### Current Resume Project Bullets

Source file: `src/assets/portfolio/adam_montgomery_resume.pdf`.

Current rule: if a rendered project appears in the current resume PDF, use the resume bullet points as the source of truth for that project's visible proof bullets.

#### Fleet Maintenance Management System

Rendered site counterpart: Custom Enterprise Databasing System.

- Created an easy-to-use set of online maintenance tickets stored in a Postgres database for simple querying.
- Designed a role-based login system using tokens and hashed passwords.
- Leveraged AI to write unit-tests on edge functions to ensure reliability in production.
- Secured client data by constructing the system in compliance with OWASP top 10.

#### Pump Pal

- Developed a workout tracker to minimize injuries and balance workouts using personalized workout metrics.
- Leveraged the Gemini API to analyze workout history and generate insights into the muscles you are working.
- Implemented a simple and easy-to-use interface to make data digestible and visually appealing.

#### Moneyball

Resume-only note: Moneyball appears in the current resume PDF but is not currently rendered in the site project section.

- Built a full-stack web app from a custom Jupyter Notebook to display advanced MLB analytics.
- Processed .csv files with 120+ fields with 500+ records to evaluate baseball games at a pitch level.
- Worked with the official MLB and Statcast APIs to generate easily digestible insights based on game events.

### Pump Pal

- Type: workout tracking app
- Status in legacy copy: currently developing
- Started: February 2026
- Deployment target in legacy copy: May 2026
- Stack:
  - React Native
  - Expo
  - Firebase
  - Gemini API
  - Vercel
- Summary source: Helps reduce injuries by encouraging balanced workouts.
- Summary source: Minimalistic and straightforward app experience.
- Summary source: Provides AI-powered analytics about what the user is training.
- Links:
  - Web preview: `https://pump.adam-montgomery.ca`
  - Android preview build: `https://expo.dev/accounts/aquinnmo/projects/pump-pal/builds/f3f89684-df21-4f9c-af2c-ad3c53cdbd48`
  - Repository: `https://github.com/Aquinnmo/pump-pal`

### Custom Enterprise-Level Databasing System

- Type: custom full-stack business software
- Status in legacy copy: currently building
- Started: June 2025
- Deployment target in legacy copy: Early 2026
- Stack:
  - Next.js
  - Supabase
  - TypeScript
  - Vercel
- Summary source: Databasing system for a York Region busing company.
- Summary source: Handles bus maintenance records, inventory, and tracking for over 700 machines.
- Summary source: Supports approximately 50 maintenance records daily.
- Summary source: Built with OWASP Top 10 and common security vulnerabilities in mind.
- Links:
  - Foundry email: `mailto:adammontcompany@gmail.com`
  - Legacy Foundry route: `/foundry`

### YOU WILL LOSE: Rock, Paper, Scissors

- Type: game / algorithm exploration
- Started: October 2025
- Stack:
  - Next.js
  - TypeScript
  - Vercel
- Summary source: Explores how computers can dominate a game of chance.
- Summary source: Created algorithms intended to improve at Rock, Paper, Scissors.
- Current site proof bullet: Built an interactive web project that explores how computers can improve at a game of chance.
- Current site proof bullet: Created prediction algorithms designed to adapt to human Rock, Paper, Scissors patterns.
- Current site proof bullet: Published the project with a live website and public repository for review.
- Links:
  - Live project: `https://rps.adam-montgomery.ca`
  - Repository: `https://github.com/Aquinnmo/rps-web`

### Am I Cooked?

- Type: hackathon job-search readiness app
- Status in legacy copy: first developed and deployed at GDSCHacks 2025, currently maintained
- Stack:
  - React
  - CSS
  - MongoDB
  - TypeScript
  - Render
  - Vercel
  - Node.js
  - Vite
- Summary source: Built with two fellow students to help peers evaluate job-market readiness.
- Summary source: Users take a survey or upload a resume and receive Google Gemini-powered job-search feedback.
- Current site proof bullet: Built with two fellow students to help peers evaluate job-market readiness.
- Current site proof bullet: Supported both survey-based input and resume upload flows for feedback generation.
- Current site proof bullet: Used Google Gemini to generate practical job-search feedback from user responses.
- Links:
  - Live project: `https://cooked.adam-montgomery.ca`
  - Repository: `https://github.com/Aquinnmo/am-i-cooked`

### CherryPick

- Type: cross-platform mobile NHL pick'em fantasy app
- Status in legacy copy: currently building with a roommate
- Started: December 2025
- Deployment target in legacy copy: Mid 2026
- Stack:
  - Flutter
  - Firebase
  - Python
  - Docker
  - Raspberry Pi
- Summary source: NHL Pick 'Em fantasy game.
- Summary source: Backend planned to run on a personal Raspberry Pi server.
- Links: none in legacy source.

### adam-montgomery.ca

- Type: personal portfolio site
- Maintained since: April 2025
- Stack:
  - React
  - CSS
  - JavaScript
  - Vite
  - React Router
- Summary source: legacy site itself.
- Links:
  - Resume/contact link: `/adam_montgomery_resume.pdf`

### Brick Breaker

- Type: Java game
- Timeframe: Grade 12 course final project, 2022
- Stack:
  - Java
  - Git
  - GitHub
- Summary source: Multiple-level brick breaker game with increasing difficulty.
- Summary source: Built with a focus on object-oriented programming.
- Links:
  - Repository: `https://github.com/Aquinnmo/BrickBreaker`

### Tic-Tac-Toe

- Type: Java game
- Timeframe: Grade 11 course final project, 2021
- Stack:
  - Java
- Summary source: Multi-board tic-tac-toe played across 6 boards simultaneously.
- Links:
  - Repository: `https://github.com/Aquinnmo/multi-tic-tac-toe`

### Commented-Out Legacy Project

- Name: Chip Champ
- Type: poker chip substitute concept
- Status: commented out in legacy source
- Stack:
  - Django
  - Git
- Link in commented source: `https://chip-champ.adam-montgomery.ca`
- Use only if the user explicitly approves reviving commented-out content.

## Skill and Tool Facts

Legacy home logo grid includes:

- Java
- Python
- Django
- HTML
- JavaScript
- Git
- Vite
- React
- Linux
- GitHub
- GitLab
- C
- CSS
- MongoDB
- TypeScript
- Claude
- Render
- Vercel
- Node.js
- Gemini
- Microsoft Copilot
- Cursor
- LaTeX
- Next.js
- Supabase
- Codex

Legacy project stacks additionally include:

- React Native
- Expo
- Firebase
- Gemini API
- Flutter
- Docker
- Raspberry Pi

## Foundry Facts

Source file: `legacy/src/pages/MontgomerySoftwareFoundry.jsx`.

### Company Identity

- Name: Montgomery Software Foundry Inc.
- Tagline source: Custom software forged for small businesses that need modern, dependable tools.
- CTA source: `Get in touch`
- CTA target: `mailto:adammontcompany@gmail.com`

### Services

- Legacy System Modernization: transform brittle, outdated systems into fast and secure platforms tailored to the client.
- Custom-Built Applications: reliable, easy-to-use digital tools that meet unique needs and help businesses thrive.
- Operational Dashboards: quickly scannable dashboards for tracking important data and measuring success.

### Differentiators

- Partnership Mindset: works closely with clients to deliver exactly what they need.
- Full Stack Craftsmanship: handles infrastructure through polished interfaces.
- Security First Delivery: uses secure coding practices, proactive reviews, and deployment pipelines.

### Process

- Discover: map objectives, constraints, and existing tools.
- Design & Build: iterate on interactive prototypes before production-ready software.
- Seamless Launch: launch confidently and provide ongoing support.

### Founder Statement

- Adam established Montgomery Software Foundry Inc. in summer 2025.
- Motivation source: helping demystify technology for business owners and enabling them to leverage Adam's expertise.

## Optional Personal Signal Facts

Use only after approval because v1 is recruiter-first.

### Movember

- Mo-Bro since 2018.
- Raised over $3,250.
- Cause focus: testicular cancer, prostate cancer, men's mental health.
- Link: `https://movember.com/m/adamm06?mc=1`

### Hockey

- Legacy content says Adam captained his high school hockey team to a silver medal.
- Legacy content says he is now a beer league player.
- Includes `TeamGuessingGame` in the legacy site.
- Highlight link: `https://www.youtube.com/watch?v=4eBoTI6_1Q8`

### Music

- Legacy page embeds a Spotify playlist.
- Spotify profile link: `https://open.spotify.com/user/aquinnmo?si=dde9c65268ae4d36`
- Stats.fm link: `https://stats.fm/aquinnmo`
- Favorite artists listed in legacy source: A$AP Rocky, Blu, Pink Floyd.

### Other Sports

- Legacy content mentions baseball, football, fantasy sports, and commissioner roles.
- Yahoo Fantasy link: `https://hockey.fantasysports.yahoo.com/hockey/7006`
- Sports images:
  - `legacy/public/vlad_27.png`
  - `legacy/public/allen_17.png`
  - `legacy/public/elly_44.png`

## Known Stale or Risky Legacy Content

- Several project dates and deployment targets are source material from legacy files and may be stale.
- Some experience entries with future-tense language should be rewritten before final use.
- Legacy `Rotating_Description.jsx` contains mojibake/encoding artifacts in emoji text.
- Legacy `Projects.jsx` uses some `class` attributes instead of `className`.
- Legacy Foundry tests appear stale compared with current Foundry source:
  - Test expects `Start a project`.
  - Test expects `Explore recent work`.
  - Current source renders `Get in touch` and has the secondary CTA commented out.
