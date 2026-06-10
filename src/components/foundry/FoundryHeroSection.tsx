import { contactActions, heroContent } from '../../foundry/foundryContent'
import { FoundryActionLink } from './FoundryActionLink'

export function FoundryHeroSection() {
  return (
    <section className="foundry-hero-section">
      <div className="foundry-hero-copy">
        <h1 id="page-title">{heroContent.title}</h1>
        <p className="foundry-route-summary">{heroContent.summary}</p>
        <div className="foundry-route-actions">
          <FoundryActionLink action={contactActions[0]} />
          <FoundryActionLink action={contactActions[1]} />
        </div>
      </div>
    </section>
  )
}
