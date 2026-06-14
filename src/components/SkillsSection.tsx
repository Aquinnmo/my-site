import { type CSSProperties } from 'react'

import aiFeatureIcon from '../assets/portfolio/skills/ai_brain_data.svg'
import cIcon from '../assets/portfolio/skills/c_logo.svg'
import './styling/SkillsSection.css'
import './styling/layout.css'
import claudeIcon from '../assets/portfolio/skills/claude_logo.svg'
import cssIcon from '../assets/portfolio/skills/css_logo.svg'
import dockerIcon from '../assets/portfolio/skills/docker_logo.svg'
import expoIcon from '../assets/portfolio/skills/expo_logo.svg'
import firebaseIcon from '../assets/portfolio/skills/firebase_logo.svg'
import geminiIcon from '../assets/portfolio/skills/gemini_logo.svg'
import githubIcon from '../assets/portfolio/skills/github_logo.svg'
import javaIcon from '../assets/portfolio/skills/java_logo.svg'
import kotlinIcon from '../assets/portfolio/skills/kotlin_logo.svg'
import kubernetesIcon from '../assets/portfolio/skills/kubernetes_logo.svg'
import mongoIcon from '../assets/portfolio/skills/mongodb_logo.svg'
import mcpServerIcon from '../assets/portfolio/skills/mcp_server.svg'
import nextIcon from '../assets/portfolio/skills/nextjs_logo.svg'
import nodeIcon from '../assets/portfolio/skills/nodejs_logo.svg'
import pythonIcon from '../assets/portfolio/skills/python_logo.svg'
import reactIcon from '../assets/portfolio/skills/react_logo.svg'
import redisIcon from '../assets/portfolio/skills/redis_logo.svg'
import renderIcon from '../assets/portfolio/skills/render_logo.svg'
import springBootIcon from '../assets/portfolio/skills/spring_boot_logo.svg'
import supabaseIcon from '../assets/portfolio/skills/supabase_logo.svg'
import typescriptIcon from '../assets/portfolio/skills/typescript_logo.svg'
import vercelIcon from '../assets/portfolio/skills/vercel_logo.svg'
import workflowIcon from '../assets/portfolio/skills/workflow_diagram.svg'

type SkillGroupId = 'languages' | 'tools' | 'frameworks' | 'ai'

type SkillIcon =
  | {
      kind: 'asset'
      src: string
    }
  | {
      kind: 'monogram'
      label: string
    }

type SkillBubble = {
  name: string
  group: SkillGroupId
  icon: SkillIcon
  color: string
  invertInDarkMode?: boolean
}

type SkillGroup = {
  id: SkillGroupId
  title: string
  icon: SkillGroupId
}

const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'languages',
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'tools',
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    icon: 'frameworks',
  },
  {
    id: 'ai',
    title: 'AI',
    icon: 'ai',
  },
]

const skillBubbles: SkillBubble[] = [
  { name: 'Kotlin', group: 'languages', icon: { kind: 'asset', src: kotlinIcon }, color: '#7F52FF', invertInDarkMode: true },
  { name: 'TypeScript', group: 'languages', icon: { kind: 'asset', src: typescriptIcon }, color: '#3178c6' },
  { name: 'Python', group: 'languages', icon: { kind: 'asset', src: pythonIcon }, color: '#ffd43b' },
  { name: 'Java', group: 'languages', icon: { kind: 'asset', src: javaIcon }, color: '#e76f00' },
  { name: 'C', group: 'languages', icon: { kind: 'asset', src: cIcon }, color: '#659ad2' },
  { name: 'CSS', group: 'languages', icon: { kind: 'asset', src: cssIcon }, color: '#1572b6' },

  { name: 'GitHub', group: 'tools', icon: { kind: 'asset', src: githubIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'Vercel', group: 'tools', icon: { kind: 'asset', src: vercelIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'Render', group: 'tools', icon: { kind: 'asset', src: renderIcon }, color: '#46e3b7' },
  { name: 'Supabase', group: 'tools', icon: { kind: 'asset', src: supabaseIcon }, color: '#3ecf8e' },
  { name: 'Firebase', group: 'tools', icon: { kind: 'asset', src: firebaseIcon }, color: '#ffca28' },
  { name: 'MongoDB', group: 'tools', icon: { kind: 'asset', src: mongoIcon }, color: '#47a248' },
  { name: 'Docker', group: 'tools', icon: { kind: 'asset', src: dockerIcon }, color: '#2496ed' },
  { name: 'Redis', group: 'tools', icon: { kind: 'asset', src: redisIcon }, color: '#C6302B' },
  { name: 'Kubernetes', group: 'tools', icon: { kind: 'asset', src: kubernetesIcon }, color: '#326ce5' },

  { name: 'React', group: 'frameworks', icon: { kind: 'asset', src: reactIcon }, color: '#61dafb' },
  { name: 'Spring Boot', group: 'frameworks', icon: { kind: 'asset', src: springBootIcon }, color: '#6DB33F', invertInDarkMode: true },
  { name: 'Next.js', group: 'frameworks', icon: { kind: 'asset', src: nextIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'React Native', group: 'frameworks', icon: { kind: 'asset', src: reactIcon }, color: '#61dafb' },
  { name: 'Expo', group: 'frameworks', icon: { kind: 'asset', src: expoIcon }, color: '#f3fbff', invertInDarkMode: true },
  { name: 'Node.js', group: 'frameworks', icon: { kind: 'asset', src: nodeIcon }, color: '#5fa04e' },

  { name: 'Gemini API', group: 'ai', icon: { kind: 'asset', src: geminiIcon }, color: '#8ab4f8' },
  { name: 'Claude Code', group: 'ai', icon: { kind: 'asset', src: claudeIcon }, color: '#d77655' },
  { name: 'AI Feature Design', group: 'ai', icon: { kind: 'asset', src: aiFeatureIcon }, color: '#87dbff', invertInDarkMode: true },
  {
    name: 'Workflows and Integrations',
    group: 'ai',
    icon: { kind: 'asset', src: workflowIcon },
    color: '#b8f7d4',
    invertInDarkMode: true,
  },
  { name: 'MCP Servers', group: 'ai', icon: { kind: 'asset', src: mcpServerIcon }, color: '#c5efff', invertInDarkMode: true },
]

type SkillBubbleStyle = CSSProperties & {
  '--skill-color': string
}

function GroupIcon({ type }: { type: SkillGroup['icon'] }) {
  if (type === 'languages') {
    return (
      <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8.5 8-4 4 4 4" />
        <path d="m15.5 8 4 4-4 4" />
        <path d="m13.5 5.5-3 13" />
      </svg>
    )
  }

  if (type === 'tools') {
    return (
      <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 5.5 18 2l4 4-3.5 3.5" />
        <path d="m13 7 4 4" />
        <path d="M4.5 19.5 12 12" />
        <path d="m2 22 4.5-1.25L3.25 17.5 2 22Z" />
      </svg>
    )
  }

  if (type === 'frameworks') {
    return (
      <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="5.5" cy="18" r="2.5" />
        <circle cx="18.5" cy="18" r="2.5" />
        <path d="m10.9 7.25-4.3 8.5" />
        <path d="m13.1 7.25 4.3 8.5" />
        <path d="M8 18h8" />
      </svg>
    )
  }

  if (type === 'ai') {
    return (
      <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9.25 4.25a3.25 3.25 0 0 0-3.15 4.05A3.75 3.75 0 0 0 5 15.55a3.5 3.5 0 0 0 5.9 2.55V5.85a3.2 3.2 0 0 0-1.65-1.6Z" />
        <path d="M14.75 4.25a3.25 3.25 0 0 1 3.15 4.05A3.75 3.75 0 0 1 19 15.55a3.5 3.5 0 0 1-5.9 2.55V5.85a3.2 3.2 0 0 1 1.65-1.6Z" />
        <path d="M8.1 9.1c.8.05 1.5.45 1.95 1.1" />
        <path d="M15.9 9.1c-.8.05-1.5.45-1.95 1.1" />
        <path d="M8.35 14.8c.7-.05 1.3-.35 1.75-.9" />
        <path d="M15.65 14.8c-.7-.05-1.3-.35-1.75-.9" />
      </svg>
    )
  }

  return null
}

function SkillBubbleIcon({ icon }: { icon: SkillIcon }) {
  if (icon.kind === 'asset') {
    return <img className="skill-bubble-icon" src={icon.src} alt="" aria-hidden="true" />
  }

  return (
    <span className="skill-bubble-icon skill-bubble-monogram" aria-hidden="true">
      {icon.label}
    </span>
  )
}

function getSkillTooltipId(skillName: string) {
  return `skill-tooltip-${skillName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

export function SkillsSection() {
  return (
    <section className="section-shell content-section" aria-labelledby="skills-title">
      <div className="section-heading-row">
        <h2 id="skills-title">Key Skills</h2>
      </div>
      <div className="skills-chart" role="group" aria-label="Grouped skills">
        {skillGroups.map((group) => (
          <div className="skills-chart-group" key={group.id}>
            <div className="skills-chart-label" aria-hidden="true">
              <GroupIcon type={group.icon} />
              <span>{group.title}</span>
            </div>
            <div className="skills-chart-row">
              {skillBubbles
                .filter((skill) => skill.group === group.id)
                .map((skill) => {
                  const skillStyle: SkillBubbleStyle = {
                    '--skill-color': skill.color,
                  }
                  const tooltipId = getSkillTooltipId(skill.name)

                  return (
                    <button
                      className="skill-bubble"
                      data-skill-group={skill.group}
                      data-skill-invert-icon={skill.icon.kind === 'asset' && skill.invertInDarkMode ? 'true' : undefined}
                      key={skill.name}
                      style={skillStyle}
                      type="button"
                      aria-label={skill.name}
                      aria-describedby={tooltipId}
                    >
                      <SkillBubbleIcon icon={skill.icon} />
                      <span className="skill-tooltip" id={tooltipId} role="tooltip">
                        {skill.name}
                      </span>
                    </button>
                  )
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
