import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Background } from './components/Background'
import { ExperienceSection } from './components/ExperienceSection'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { SiteFooter } from './components/SiteFooter'
import { ThemeToggle } from './components/ThemeToggle'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <SpeedInsights />
      <Analytics />
      <Background />
      <ThemeToggle />

      <main className="page-flow" aria-labelledby="page-title">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
