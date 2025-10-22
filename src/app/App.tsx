import ThemeToggle from '@components/ThemeToggle'
import NavDots from '@components/NavDots'
import { ThemeProvider } from '@app/theme'
import HeroSection from '@features/hero/HeroSection'
import SkillsSection from '@features/skills/SkillsSection'
import ProjectsSection from '@features/projects/ProjectsSection'
import ServicesSection from '@features/services/ServicesSection'
import ContactSection from '@features/contact/ContactSection'
import { Route, Routes } from 'react-router-dom'
import ProjectDetail from '@features/projects/ProjectDetail'
import ServicesPage from '@features/services/ServicesPage'

export default function App() {
  return (
    <ThemeProvider>
      <header className="ui" role="presentation">
        <div className="ui-controls">
          <ThemeToggle />
        </div>
        <NavDots />
      </header>
      <Routes>
        <Route path="/" element={
          <main className="viewport" tabIndex={-1}>
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ServicesSection />
            <ContactSection />
          </main>
        } />
        <Route path="/proyecto/:slug" element={<ProjectDetail />} />
        <Route path="/servicios" element={<ServicesPage />} />
      </Routes>
    </ThemeProvider>
  )
}
