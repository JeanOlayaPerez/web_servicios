import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SECTIONS = ['bienvenida', 'proyectos', 'contacto'] as const

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
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
          setActive(entry.target.id as typeof SECTIONS[number])
        }
      })
    }, { root: rootRef.current, threshold: [0.55] })

    sections.forEach((section) => io.observe(section))
    return () => io.disconnect()
  }, [location.pathname])

  const onHome = location.pathname === '/'

  return (
    <nav className="nav-dots" aria-label="Navegación de secciones">
      {onHome ? (
        SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`dot ${active === id ? 'active' : ''}`}
            aria-label={`Ir a ${id}`}
            onClick={(event) => {
              event.preventDefault()
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          />
        ))
      ) : (
        <Link to="/" className="dot route active" aria-label="Volver al inicio" />
      )}
    </nav>
  )
}

