import { useEffect, useState } from 'react'
import profilePhoto from '../legacy/public/pfp.jpeg'
import resumePdf from '../legacy/public/adam_montgomery_resume.pdf'
import emailIcon from '../legacy/public/email_icon.svg'
import githubIcon from '../legacy/public/github_logo.svg'
import linkedInIcon from '../legacy/public/LinkedIn_icon.svg'
import pdfIcon from '../legacy/public/pdf_icon.svg'
import './App.css'

type Theme = 'light' | 'dark'

const heroRoles = [
  'Web developer',
  'Full-stack builder',
  'UI-minded engineer',
  'Software founder',
]

const heroProofPoints = [
  'React + TypeScript frontends',
  'Full-stack product delivery',
  'Client-facing software work',
]

const quickLinks = [
  {
    label: 'Resume',
    href: resumePdf,
    icon: pdfIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/adam-montgomery-05a936315',
    icon: linkedInIcon,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Aquinnmo',
    icon: githubIcon,
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:adammontcompany@gmail.com',
    icon: emailIcon,
    external: false,
  },
]

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'SPS Commerce',
    dates: 'Dates pending',
    summary:
      'Approved experience entry. Specific team, stack, responsibilities, and impact bullets still need final user-provided details.',
    proof: [
      'Software engineering internship',
      'Details pending approval',
      'Stack pending approval',
    ],
    tags: ['Software Engineering', 'Internship'],
  },
  {
    role: 'President, Owner, & Lead Developer',
    company: 'Montgomery Software Foundry Inc.',
    dates: 'Aug 2025 - Present',
    summary:
      'Runs a custom software business focused on modernizing old systems for small-business owners.',
    proof: [
      'Owns product discovery, implementation, and delivery',
      'Builds full-stack tools for operational workflows',
      'Translates business needs into project specifications',
    ],
    tags: ['Leadership', 'Full Stack', 'Product Design', 'Client Work'],
  },
  {
    role: 'AI Training Contractor',
    company: 'DataAnnotation',
    dates: 'Jan 2025 - Present',
    summary:
      'Reviews generated code and evaluates AI responses for efficiency, readability, correctness, and usefulness.',
    proof: [
      'Improved outputs for code-review-focused LLM work',
      'Created fine-grained response evaluation criteria',
      'Applied quality assurance judgment to complex prompts',
    ],
    tags: ['Code Review', 'Quality Assurance', 'AI Evaluation'],
  },
]

const projects = [
  {
    name: 'Pump Pal',
    type: 'Workout tracking app',
    summary:
      'Mobile-first workout tracker focused on balanced training, injury reduction, and AI-powered training insights.',
    stack: ['React Native', 'Expo', 'Firebase', 'Gemini API', 'Vercel'],
    links: [
      { label: 'Web preview', href: 'https://pump.adam-montgomery.ca' },
      {
        label: 'Android build',
        href: 'https://expo.dev/accounts/aquinnmo/projects/pump-pal/builds/f3f89684-df21-4f9c-af2c-ad3c53cdbd48',
      },
      { label: 'Repository', href: 'https://github.com/Aquinnmo/pump-pal' },
    ],
  },
  {
    name: 'Custom Enterprise Databasing System',
    type: 'Full-stack business software',
    summary:
      'Custom maintenance, inventory, and tracking system for a York Region busing company operating hundreds of machines.',
    stack: ['Next.js', 'Supabase', 'TypeScript', 'Vercel'],
    links: [
      { label: 'Contact', href: 'mailto:adammontcompany@gmail.com' },
    ],
  },
  {
    name: 'YOU WILL LOSE: Rock, Paper, Scissors',
    type: 'Algorithm game',
    summary:
      'Interactive exploration of strategy and prediction in Rock, Paper, Scissors, built around algorithms that try to beat human play.',
    stack: ['Next.js', 'TypeScript', 'Vercel'],
    links: [
      { label: 'Live project', href: 'https://rps.adam-montgomery.ca' },
      { label: 'Repository', href: 'https://github.com/Aquinnmo/rps-web' },
    ],
  },
  {
    name: 'Am I Cooked?',
    type: 'Hackathon job-search tool',
    summary:
      'Resume and survey-based readiness tool that gives students Gemini-powered feedback for the job search.',
    stack: ['React', 'TypeScript', 'MongoDB', 'Node.js', 'Render', 'Vercel'],
    links: [
      { label: 'Live project', href: 'https://cooked.adam-montgomery.ca' },
      { label: 'Repository', href: 'https://github.com/Aquinnmo/am-i-cooked' },
    ],
  },
  {
    name: 'CherryPick',
    type: "NHL Pick 'Em mobile app",
    summary:
      "Cross-platform fantasy sports project for NHL Pick 'Em gameplay with a planned Raspberry Pi-hosted backend.",
    stack: ['Flutter', 'Firebase', 'Python', 'Docker', 'Raspberry Pi'],
    links: [],
  },
  {
    name: 'adam-montgomery.ca',
    type: 'Portfolio site',
    summary:
      'Personal portfolio site maintained as a public web presence and now being rebuilt into this focused one-page version.',
    stack: ['React', 'CSS', 'JavaScript', 'Vite', 'React Router'],
    links: [
      { label: 'Resume', href: resumePdf },
    ],
  },
  {
    name: 'Brick Breaker',
    type: 'Java game',
    summary:
      'Multi-level brick breaker game with increasing difficulty and an object-oriented implementation focus.',
    stack: ['Java', 'Git', 'GitHub'],
    links: [
      { label: 'Repository', href: 'https://github.com/Aquinnmo/BrickBreaker' },
    ],
  },
  {
    name: 'Tic-Tac-Toe',
    type: 'Java game',
    summary:
      'Multi-board tic-tac-toe game played across six boards simultaneously, built as a school programming project.',
    stack: ['Java'],
    links: [
      { label: 'Repository', href: 'https://github.com/Aquinnmo/multi-tic-tac-toe' },
    ],
  },
]

const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getSystemTheme)
  const [hasManualTheme, setHasManualTheme] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [isRoleVisible, setIsRoleVisible] = useState(true)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  }, [theme])

  useEffect(() => {
    if (hasManualTheme) {
      return
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => setTheme(media.matches ? 'dark' : 'light')

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [hasManualTheme])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reduceMotion.matches) {
      return
    }

    let fadeTimeout: number | undefined
    const interval = window.setInterval(() => {
      setIsRoleVisible(false)

      fadeTimeout = window.setTimeout(() => {
        setRoleIndex((currentIndex) => (currentIndex + 1) % heroRoles.length)
        setIsRoleVisible(true)
      }, 280)
    }, 2800)

    return () => {
      window.clearInterval(interval)

      if (fadeTimeout) {
        window.clearTimeout(fadeTimeout)
      }
    }
  }, [])

  const toggleTheme = () => {
    setHasManualTheme(true)
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="site-shell">
      <div className="lake-background" aria-hidden="true">
        <div className="lake-glow" />
        <div className="lake-sheen" />
      </div>
      <div className="snowfall" aria-hidden="true">
        <div className="snow-layer snow-layer-small" />
        <div className="snow-layer snow-layer-medium" />
        <div className="snow-layer snow-layer-near" />
      </div>

      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? 'Day' : 'Night'}
      </button>

      <main className="page-flow" aria-labelledby="page-title">
        <section className="hero-section section-shell" aria-label="Intro">
          <div className="hero-copy">
            <h1 id="page-title">Adam Montgomery</h1>
          </div>

          <figure className="under-ice-portrait" aria-label="Profile photo under lake ice">
            <div className="portrait-ice-frame">
              <img src={profilePhoto} alt="Adam Montgomery" />
            </div>
          </figure>

          <nav className="quick-links" aria-label="Quick links">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                className="quick-link"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                aria-label={link.label}
              >
                <img src={link.icon} alt="" aria-hidden="true" />
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="hero-details">
            <p className={`hero-role ${isRoleVisible ? 'is-visible' : 'is-hidden'}`} aria-live="polite">
              {heroRoles[roleIndex]}
            </p>
            <p className="hero-summary">
              I build clean, practical web products with a focus on usable
              interfaces, maintainable systems, and work that ships.
            </p>
            <ul className="hero-proof-list" aria-label="Professional highlights">
              {heroProofPoints.map((proofPoint) => (
                <li key={proofPoint}>{proofPoint}</li>
              ))}
            </ul>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="hero-action hero-action-primary" href={resumePdf} target="_blank" rel="noreferrer">
                Resume
              </a>
              <a className="hero-action hero-action-secondary" href="#projects-title">
                View projects
              </a>
            </div>
          </div>
        </section>

        <section className="section-shell content-section" aria-labelledby="experience-title">
          <div className="section-heading-row">
            <h2 id="experience-title">Experience</h2>
          </div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-card" key={`${experience.company}-${experience.role}`}>
                <div className="experience-card-header">
                  <div>
                    <p className="experience-role">{experience.role}</p>
                    <h3>{experience.company}</h3>
                  </div>
                  <p className="experience-dates">{experience.dates}</p>
                </div>
                <p className="experience-summary">{experience.summary}</p>
                <ul className="experience-proof-list">
                  {experience.proof.map((proofPoint) => (
                    <li key={proofPoint}>{proofPoint}</li>
                  ))}
                </ul>
                <ul className="experience-tags" aria-label={`${experience.company} skill tags`}>
                  {experience.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section" aria-labelledby="projects-title">
          <div className="section-heading-row">
            <h2 id="projects-title">Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-card-header">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <p className="project-summary">{project.summary}</p>
                <ul className="project-stack" aria-label={`${project.name} tech stack`}>
                  {project.stack.map((stackItem) => (
                    <li key={stackItem}>{stackItem}</li>
                  ))}
                </ul>
                <div className="project-links" aria-label={`${project.name} links`}>
                  {project.links.length > 0 ? (
                    project.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))
                  ) : (
                    <span>Links pending</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section" aria-labelledby="skills-title">
          <div className="section-heading-row">
            <h2 id="skills-title">Tech Stack</h2>
          </div>
          <div className="placeholder-panel">
            Key languages, frameworks, and tools will be grouped by practical
            capability instead of recreated as a legacy logo wall.
          </div>
        </section>
      </main>

      <footer className="site-footer" aria-label="Contact">
        <p>Contact and resume download section placeholder.</p>
      </footer>
    </div>
  )
}

export default App
