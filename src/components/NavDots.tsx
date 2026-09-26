import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SECTIONS = ['bienvenida', 'proyectos', 'contacto'] as const

function scrollToSection(sectionId: string) {
  const viewport = document.querySelector('main.viewport') as HTMLElement | null
  const section = document.getElementById(sectionId)

  if (!viewport || !section) return

  const top = Math.max(0, section.offsetTop - 18)
  viewport.scrollTo({ top, behavior: 'smooth' })
}

export default function NavDots() {
  const [active, setActive] = useState<typeof SECTIONS[number]>('bienvenida')
  const rootRef = useRef<HTMLElement | null>(null)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') return

    const root = document.querySelector('main.viewport')
    rootRef.current = root as HTMLElement | null
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!rootRef.current || sections.length === 0) return

    const io = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible[0]) {
        setActive(visible[0].target.id as typeof SECTIONS[number])
      }
    }, {
      root: rootRef.current,
      threshold: [0.4, 0.6, 0.8]
    })

    sections.forEach((section) => io.observe(section))
    return () => io.disconnect()
  }, [location.pathname])

  const onHome = location.pathname === '/'

  return (
    <nav className="nav-dots" aria-label="Navegación de secciones">
      {onHome ? (
        SECTIONS.map((id) => (
          <button
            key={id}
            type="button"
            className={`dot ${active === id ? 'active' : ''}`}
            aria-label={`Ir a ${id}`}
            onClick={() => scrollToSection(id)}
          />
        ))
      ) : (
        <Link to="/" className="dot route active" aria-label="Volver al inicio" />
      )}
    </nav>
  )
}

