import { type CSSProperties } from 'react'

import './styling/SkillsSection.css'
import './styling/layout.css'
import { skillBubbles, type SkillGroupId, type SkillIcon } from './skillData'

type SkillGroup = {
  id: SkillGroupId
  title: string
}

const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
  },
  {
    id: 'tools',
    title: 'Tools',
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
  },
  {
    id: 'ai',
    title: 'AI',
  },
]

type SkillBubbleStyle = CSSProperties & {
  '--skill-color': string
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
    <section className="section-shell content-section skills-section" aria-labelledby="skills-title">
      <div className="section-heading-row">
        <h2 id="skills-title">Key Skills</h2>
      </div>
      <div className="skills-chart" role="group" aria-label="Grouped skills">
        {skillGroups.map((group) => (
          <div className="skills-chart-group" key={group.id}>
            <h3 className="skills-chart-label">{group.title}</h3>
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
