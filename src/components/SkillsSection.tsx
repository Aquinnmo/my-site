type SkillGroup = {
  title: string
  icon: 'frontend' | 'backend' | 'mobile' | 'ai' | 'deploy' | 'workflow'
  summary: string
  skills: string[]
  evidence: string
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Product Frontends',
    icon: 'frontend',
    summary: 'Interfaces built for real users, clear flows, and maintainable component systems.',
    skills: ['React', 'TypeScript', 'Next.js', 'React Router', 'Responsive CSS'],
    evidence: 'Used across portfolio projects, client software, and recruiter-facing UI work.',
  },
  {
    title: 'Full-Stack Systems',
    icon: 'backend',
    summary: 'Business logic, data modeling, and app structure for operational workflows.',
    skills: ['Node.js', 'Supabase', 'MongoDB', 'Firebase', 'API Design'],
    evidence: 'Shown through custom business software, Am I Cooked?, and data-backed apps.',
  },
  {
    title: 'Mobile Apps',
    icon: 'mobile',
    summary: 'Cross-platform mobile builds with practical release and preview workflows.',
    skills: ['React Native', 'Expo', 'Flutter', 'Android Builds', 'Firebase'],
    evidence: 'Visible in Pump Pal and CherryPick mobile application work.',
  },
  {
    title: 'AI Features',
    icon: 'ai',
    summary: 'AI-assisted product features plus disciplined review of generated code quality.',
    skills: ['Gemini API', 'Prompt Evaluation', 'Code Review', 'QA Judgment'],
    evidence: 'Used in Pump Pal, Am I Cooked?, and DataAnnotation review work.',
  },
  {
    title: 'Deployment',
    icon: 'deploy',
    summary: 'Shipping web products with hosted previews, production links, and maintainable release paths.',
    skills: ['Vercel', 'Render', 'Docker', 'Domain Routing', 'Preview Builds'],
    evidence: 'Public project links and backend hosting paths are included where available.',
  },
  {
    title: 'Developer Workflow',
    icon: 'workflow',
    summary: 'Practical engineering habits around ownership, clarity, iteration, and delivery.',
    skills: ['GitHub', 'ESLint', 'Technical Writing', 'Project Scoping', 'Client Communication'],
    evidence: 'Reflected in Foundry ownership, project documentation, and code-review experience.',
  },
]

function SkillIcon({ type }: { type: SkillGroup['icon'] }) {
  if (type === 'frontend') {
    return (
      <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 17v3" />
        <path d="m9 9-2 2 2 2" />
        <path d="m15 9 2 2-2 2" />
      </svg>
    )
  }

  if (type === 'backend') {
    return (
      <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.65 3.13 3 7 3s7-1.35 7-3V6" />
        <path d="M5 12v6c0 1.65 3.13 3 7 3s7-1.35 7-3v-6" />
      </svg>
    )
  }

  if (type === 'mobile') {
    return (
      <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="2.75" width="10" height="18.5" rx="2.25" />
        <path d="M10.5 18h3" />
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

  if (type === 'deploy') {
    return (
      <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5 21 19H3L12 3.5Z" />
        <path d="M12 9.5V19" />
      </svg>
    )
  }

  return (
    <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 6.5h6" />
      <path d="M13.5 6.5h6" />
      <path d="M4.5 12h15" />
      <path d="M4.5 17.5h6" />
      <path d="M13.5 17.5h6" />
      <circle cx="12" cy="6.5" r="1.5" />
      <circle cx="7.5" cy="17.5" r="1.5" />
    </svg>
  )
}

export function SkillsSection() {
  return (
    <section className="section-shell content-section" aria-labelledby="skills-title">
      <div className="section-heading-row">
        <h2 id="skills-title">Skills & Tools</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-header">
              <SkillIcon type={group.icon} />
              <h3>{group.title}</h3>
            </div>
            <p className="skill-summary">{group.summary}</p>
            <ul className="skill-list" aria-label={`${group.title} skills`}>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <p className="skill-evidence">{group.evidence}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
