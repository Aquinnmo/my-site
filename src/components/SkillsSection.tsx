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
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.25" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.25" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.25" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.25" />
      </svg>
    )
  }

  if (type === 'ai') {
    return (
      <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5 13.65 9 19 10.65 13.65 12.3 12 17.75 10.35 12.3 5 10.65 10.35 9 12 3.5Z" />
        <path d="m18.5 15 .6 2 1.9.6-1.9.6-.6 2-.6-2-1.9-.6 1.9-.6.6-2Z" />
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
