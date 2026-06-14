import { caseStudy } from '../../foundry/foundryContent'
import './FoundryCaseStudySection.css'
import './_shared.css'
import '../_shared/layout.css'

export function FoundryCaseStudySection() {
  return (
    <section className="content-section foundry-section" aria-labelledby="foundry-case-study-heading">
      <div className="foundry-case-study">
        <div className="foundry-case-study-header">
          <p className="foundry-section-eyebrow">{caseStudy.eyebrow}</p>
          <h2 id="foundry-case-study-heading">{caseStudy.title}</h2>
          <p className="foundry-case-study-summary">{caseStudy.summary}</p>
        </div>
        <div className="foundry-case-study-grid">
          <article>
            <h3>Problem</h3>
            <p>{caseStudy.problem}</p>
          </article>
          <article>
            <h3>Approach</h3>
            <p>{caseStudy.approach}</p>
          </article>
          <article>
            <h3>Solution</h3>
            <p>{caseStudy.outcome}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
