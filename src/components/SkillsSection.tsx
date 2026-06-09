type SkillGroup = {
  title: string
  icon: 'languages' | 'tools' | 'frameworks' | 'ai'
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'languages',
    skills: ['Kotlin', 'TypeScript', 'Python', 'Java', 'C', 'CSS'],
  },
  {
    title: 'Tools',
    icon: 'tools',
    skills: ['GitHub', 'Vercel', 'Render', 'Supabase', 'Firebase', 'MongoDB', 'Docker', 'Redis', 'Kubernetes'],
  },
  {
    title: 'Frameworks',
    icon: 'frameworks',
    skills: ['React', 'Spring Boot', 'Next.js', 'React Native', 'Expo', 'Node.js'],
  },
  {
    title: 'AI',
    icon: 'ai',
    skills: ['Gemini API', 'Claude Code', 'AI Feature Design', 'Workflows and Integrations', 'MCP Servers'],
  },
]

function SkillIcon({ type }: { type: SkillGroup['icon'] }) {
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

export function SkillsSection() {
  return (
    <section className="section-shell content-section" aria-labelledby="skills-title">
      <div className="section-heading-row">
        <h2 id="skills-title">Key Skills</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-header">
              <SkillIcon type={group.icon} />
              <h3>{group.title}</h3>
            </div>
            <ul className="skill-list" aria-label={`${group.title} skills`}>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
