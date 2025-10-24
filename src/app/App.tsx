import ThemeToggle from '@components/ThemeToggle'
import NavDots from '@components/NavDots'
import { ThemeProvider } from '@app/theme'
import HeroSection from '@features/hero/HeroSection'
import ProjectsSection from '@features/projects/ProjectsSection'
import ContactSection from '@features/contact/ContactSection'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import ProjectDetail from '@features/projects/ProjectDetail'
import ServicesPage from '@features/services/ServicesPage'
import SkillsPage from '@features/skills/SkillsPage'
import ProjectsPage from '@features/projects/ProjectsPage'
import ClientsPage from '@features/clients/ClientsPage'

export default function App() {
  return (
    <ThemeProvider>
      <header className="ui" role="banner">
        <div className="ui-bar">
          <Link to="/" className="ui-brand" aria-label="Ir al inicio">
            <span className="icon-home" aria-hidden>
              <svg viewBox="0 0 24 24" role="presentation" focusable="false">
                <path
                  d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1v-4.8h-3V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>Jean Dev</span>
          </Link>
          <nav className="ui-nav" aria-label="Navegación principal">
            <NavLink to="/stack" className={({ isActive }) => `ui-nav-link${isActive ? ' active' : ''}`}>
              Stack tecnológico
            </NavLink>
            <NavLink to="/servicios" className={({ isActive }) => `ui-nav-link${isActive ? ' active' : ''}`}>
              Servicios
            </NavLink>
            <NavLink to="/destacados" className={({ isActive }) => `ui-nav-link${isActive ? ' active' : ''}`}>
              Proyectos destacados
            </NavLink>
            <NavLink to="/clientes" className={({ isActive }) => `ui-nav-link${isActive ? ' active' : ''}`}>
              Clientes
            </NavLink>
          </nav>
          <div className="ui-controls">
            <ThemeToggle />
          </div>
        </div>
        <NavDots />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <main className="viewport" tabIndex={-1}>
              <HeroSection />
              <ProjectsSection />
              <ContactSection />
            </main>
          }
        />
        <Route path="/proyecto/:slug" element={<ProjectDetail />} />
        <Route path="/stack" element={<SkillsPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/destacados" element={<ProjectsPage />} />
        <Route path="/clientes" element={<ClientsPage />} />
      </Routes>
    </ThemeProvider>
  )
}
