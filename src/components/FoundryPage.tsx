import { FoundryCaseStudySection } from './foundry/FoundryCaseStudySection'
import { FoundryDifferentiatorsSection } from './foundry/FoundryDifferentiatorsSection'
import { FoundryFounderSection } from './foundry/FoundryFounderSection'
import { FoundryHeroSection } from './foundry/FoundryHeroSection'
import { FoundryProcessSection } from './foundry/FoundryProcessSection'
import { FoundryServicesSection } from './foundry/FoundryServicesSection'

export function FoundryPage() {
  return (
    <main className="page-flow foundry-page-flow" aria-labelledby="page-title">
      <FoundryHeroSection />
      <FoundryServicesSection />
      <FoundryCaseStudySection />
      <FoundryDifferentiatorsSection />
      <FoundryProcessSection />
      <FoundryFounderSection />
    </main>
  )
}
