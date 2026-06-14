import type { FoundryService } from '../../foundry/foundryContent'
import './FoundryCards.css'

export function FoundryServiceCard({ service }: { service: FoundryService }) {
  return (
    <article className="foundry-service-item">
      <div className="foundry-service-intro">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      <div className="foundry-service-detail">
        <p className="foundry-service-label">Best for</p>
        <p>{service.problem}</p>
      </div>
      <div className="foundry-service-detail">
        <p className="foundry-service-label">Outcome</p>
        <p className="foundry-service-outcome">{service.outcome}</p>
      </div>
    </article>
  )
}
