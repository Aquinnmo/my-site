const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'SPS Commerce',
    dates: 'May 2026 - Present',
    summary:
      'Working on production software automation for the world\'s largest EDI network.',
    proof: [
      'Working on production Kotlin/Spring Boot services that deliver 1 million+ documents daily.',
      'Leading development on an MCP server to help developers diagnose issues when using our services.',
      'Working with REST APIs to integrate complex services that must have near 100% uptime.',
    ],
    tags: ['Kotlin', 'Spring Boot', 'MCP', 'REST APIs'],
  },
  {
    role: 'President, Owner, & Lead Developer',
    company: 'Montgomery Software Foundry Inc.',
    dates: 'Aug 2025 - Present',
    summary:
      'I own my own software corporation focused on modernizing legacy systems for business owners.',
    proof: [
      'Founded my company to sell a custom SaaS solution to a wheelchair accessible transit company in the GTA.',
      'Updated a paper and Excel-based system to an automated online workflow that will prevent data loss.',
      'Documented customer specifications and developed the custom software in line with the requirements.',
    ],
    tags: ['SaaS', 'Client Work', 'Product Design', 'Full Stack'],
  },
  {
    role: 'AI Training Contractor',
    company: 'DataAnnotation',
    dates: 'Jan 2025 - May 2025',
    summary:
      'Reviews generated code and evaluates AI responses for efficiency, readability, correctness, and usefulness.',
    proof: [
      'Checked AI responses to complex prompts for accuracy, instruction following and helpfulness. I explained what could be improved about the response.',
      'Created fine-grained response evaluation criteria to improve the quality of AI responses.',
      'Worked on large scale repos, analyzing code diffs and suggesting changes in under an hour.',
    ],
    tags: ['Code Review', 'Quality Assurance', 'AI Evaluation'],
  },
]

export function ExperienceSection() {
  return (
    <section className="section-shell content-section" aria-labelledby="experience-title">
      <div className="section-heading-row">
        <h2 id="experience-title">Experience</h2>
      </div>
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-card" key={`${experience.company}-${experience.role}`}>
            <div className="experience-card-header">
              <div>
                <h3>{experience.role}</h3>
                <p className="experience-company">{experience.company}</p>
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
  )
}
