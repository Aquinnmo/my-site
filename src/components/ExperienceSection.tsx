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
  )
}
