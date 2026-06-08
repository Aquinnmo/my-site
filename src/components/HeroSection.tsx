import { useEffect, useState } from 'react'
import profilePhoto from '../assets/portfolio/pfp.jpeg'
import resumePdf from '../assets/portfolio/adam_montgomery_resume.pdf'
import emailIcon from '../assets/portfolio/email_icon.svg'
import githubIcon from '../assets/portfolio/github_logo.svg'
import linkedInIcon from '../assets/portfolio/LinkedIn_icon.svg'
import pdfIcon from '../assets/portfolio/pdf_icon.svg'

const heroRoles = [
  'Web developer',
  'Full-stack builder',
  'UI-minded engineer',
  'Software founder',
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

function useRotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isRoleVisible, setIsRoleVisible] = useState(true)

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

  return {
    role: heroRoles[roleIndex],
    isRoleVisible,
  }
}

export function HeroSection() {
  const { role, isRoleVisible } = useRotatingRole()

  return (
    <section className="hero-section section-shell" aria-label="Intro">
      <div className="hero-copy">
        <h1 id="page-title">Adam Montgomery</h1>
      </div>

      <figure className="profile-portrait" aria-label="Profile photo">
        <div className="profile-photo-frame">
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
          {role}
        </p>
        <p className="hero-summary">
          I build clean, practical web products with a focus on usable
          interfaces, maintainable systems, and work that ships.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="hero-action hero-action-primary" href={resumePdf} target="_blank" rel="noreferrer">
            <img className="action-icon" src={pdfIcon} alt="" aria-hidden="true" />
            Download Resume
          </a>
          <a className="hero-action hero-action-secondary" href="#projects-title">
            View projects
          </a>
        </div>
      </div>
    </section>
  )
}
