import { services } from '../../foundry/foundryContent'
import { FoundryServiceCard } from './FoundryCards'

export function FoundryServicesSection() {
  return (
    <section className="content-section foundry-section" aria-labelledby="foundry-services-heading">
      <div className="section-heading-row">
        <h2 id="foundry-services-heading">What we build</h2>
        <p className="foundry-section-summary">
          Software for the parts of the business where generic tools create extra steps instead of removing them.
        </p>
      </div>
      <div className="foundry-services-list">
        {services.map((service) => (
          <FoundryServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  )
}
