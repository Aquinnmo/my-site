import { differentiators } from '../../foundry/foundryContent'
import './styling/FoundryDifferentiatorsSection.css'
import '../styling/layout.css'

export function FoundryDifferentiatorsSection() {
  return (
    <section className="content-section foundry-section" aria-labelledby="foundry-difference-heading">
      <div className="section-heading-row">
        <h2 id="foundry-difference-heading">Why choose us?</h2>
      </div>
      <div className="foundry-difference-band">
        {differentiators.map((item) => (
          <article className="foundry-difference-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
