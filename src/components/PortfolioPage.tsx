import { ExperienceSection } from './ExperienceSection'
import { HeroSection } from './HeroSection'
import { ProjectsSection } from './ProjectsSection'
import { SkillsSection } from './SkillsSection'
import './_shared/layout.css'

export function PortfolioPage() {
  return (
    <main className="page-flow" aria-labelledby="page-title">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  )
}
