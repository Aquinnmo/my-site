type FoundryItem = {
  title: string
  description: string
}

const services: FoundryItem[] = [
  {
    title: 'Legacy System Modernization',
    description:
      'Replace brittle tools with faster, safer systems that match how your business actually works.',
  },
  {
    title: 'Custom-Built Applications',
    description:
      'Design and build dependable internal tools, client portals, and workflows around your exact needs.',
  },
  {
    title: 'Operational Dashboards',
    description:
      'Turn scattered business data into clear dashboards that make performance and priorities easier to track.',
  },
]

const differentiators: FoundryItem[] = [
  {
    title: 'Partnership Mindset',
    description:
      'Work stays close to your goals, constraints, and day-to-day operations from the first conversation onward.',
  },
  {
    title: 'Full Stack Craftsmanship',
    description:
      'The Foundry handles interface, backend, data, infrastructure, and deployment as one connected system.',
  },
  {
    title: 'Security First Delivery',
    description:
      'Every build is grounded in secure coding practices, practical reviews, and release habits that support confident launches.',
  },
]

const engagementSteps: FoundryItem[] = [
  {
    title: 'Discover',
    description:
      'Map your objectives, constraints, existing tools, and success criteria before any build decisions are locked in.',
  },
  {
    title: 'Design & Build',
    description:
      'Move from clear prototypes into production software with short feedback loops and practical checkpoints.',
  },
  {
    title: 'Launch & Support',
    description:
      'Ship with confidence, then keep improving the product as your business needs change.',
  },
]

function FoundryCard({ item }: { item: FoundryItem }) {
  return (
    <article className="foundry-card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  )
}

export function FoundryPage() {
  return (
    <main className="page-flow foundry-page-flow" aria-labelledby="page-title">
      <section className="foundry-hero-section">
        <div className="foundry-hero-copy">
          <h1 id="page-title">Montgomery Software Foundry Inc.</h1>
          <p className="foundry-route-summary">
            Custom software forged for small businesses that need modern, dependable tools.
          </p>
          <div className="foundry-route-actions">
            <a className="hero-action hero-action-primary foundry-route-cta" href="mailto:adammontcompany@gmail.com">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="content-section foundry-section" aria-labelledby="foundry-services-heading">
        <div className="section-heading-row">
          <h2 id="foundry-services-heading">What we build</h2>
        </div>
        <div className="foundry-grid">
          {services.map((service) => (
            <FoundryCard key={service.title} item={service} />
          ))}
        </div>
      </section>

      <section className="content-section foundry-section" aria-labelledby="foundry-difference-heading">
        <div className="section-heading-row">
          <h2 id="foundry-difference-heading">Why teams choose the Foundry</h2>
        </div>
        <div className="foundry-grid">
          {differentiators.map((item) => (
            <FoundryCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="content-section foundry-section" aria-labelledby="foundry-process-heading">
        <div className="section-heading-row">
          <h2 id="foundry-process-heading">Our collaborative process</h2>
        </div>
        <div className="foundry-steps">
          {engagementSteps.map((step, index) => (
            <article key={step.title} className="foundry-step">
              <span className="foundry-step-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section foundry-section foundry-founder" aria-labelledby="foundry-founder-heading">
        <div className="foundry-founder-copy">
          <h2 id="foundry-founder-heading">Built by Adam Montgomery</h2>
          <p>
            I established Montgomery Software Foundry Inc. in summer 2025 to help small business owners use software
            without having to decode the technology first. The goal is straightforward: build practical, reliable tools
            that make the business easier to run.
          </p>
          <a className="hero-action hero-action-secondary foundry-route-cta" href="mailto:adammontcompany@gmail.com">
            Start a conversation
          </a>
        </div>
      </section>
    </main>
  )
}
