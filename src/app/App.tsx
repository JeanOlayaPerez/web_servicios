import { useRef } from 'react'
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
  const navTrackRef = useRef<HTMLElement | null>(null)

  const handleNavScroll = (direction: 'prev' | 'next') => {
    const node = navTrackRef.current
    if (!node) return
    const offset = direction === 'next' ? 200 : -200
    node.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <ThemeProvider>
      <header className="ui" role="banner">
        <div className="ui-bar">
          <span className="ui-border-rail" aria-hidden="true">
            <span className="rail-dot dot-a" />
            <span className="rail-dot dot-b" />
          </span>
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
          <div className="ui-nav-shell">
            <button
              type="button"
              className="ui-nav-arrow prev"
              aria-label="Desplazar navegacion a la izquierda"
              onClick={() => handleNavScroll('prev')}
            >
              <span aria-hidden="true">{'<'}</span>
            </button>
            <nav className="ui-nav" aria-label="Navegacion principal" ref={navTrackRef}>
              <NavLink to="/stack" className={({ isActive }) => `ui-nav-link${isActive ? ' active' : ''}`}>
                Stack tecnologico
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
            <button
              type="button"
              className="ui-nav-arrow next"
              aria-label="Desplazar navegacion a la derecha"
              onClick={() => handleNavScroll('next')}
            >
              <span aria-hidden="true">{'>'}</span>
            </button>
          </div>
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
