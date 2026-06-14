import { engagementSteps } from '../../foundry/foundryContent'
import './styling/FoundryProcessSection.css'
import './styling/_shared.css'
import '../styling/layout.css'

export function FoundryProcessSection() {
  return (
    <section className="content-section foundry-section" aria-labelledby="foundry-process-heading">
      <div className="section-heading-row">
        <h2 id="foundry-process-heading">Our Process</h2>
        <p className="foundry-section-summary">
          A staged path from messy operational reality to production software your team can actually run.
        </p>
      </div>
      <div className="foundry-steps" aria-label="Foundry delivery timeline">
        {engagementSteps.map((step, index) => (
          <article key={step.title} className="foundry-step">
            <span className="foundry-step-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
