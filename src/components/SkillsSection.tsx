import { type CSSProperties } from 'react'

import './styling/SkillsSection.css'
import './styling/layout.css'
import { skillBubbles, type SkillGroupId, type SkillIcon } from './skillData'

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
                      data-skill-invert-icon-light={skill.icon.kind === 'asset' && skill.invertInLightMode ? 'true' : undefined}
                      data-skill-monochrome={skill.icon.kind === 'asset' && skill.monochrome ? 'true' : undefined}
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
