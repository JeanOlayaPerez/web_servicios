import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@app/theme'
import { useNavigate } from 'react-router-dom'

const titleVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const subtitleVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const actionsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.32 } }
}

const btnVariant = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }
  }
}

export default function HeroSection() {
  const starsRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const el = starsRef.current
    if (!el) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const count = reduceMotion ? 40 : 140
    el.innerHTML = ''
    for (let i = 0; i < count; i++) {
      const star = document.createElement('span')
      const size = Math.random() * 1.8 + 0.4
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      const duration = Math.random() * 6 + 4
      const delay = Math.random() * 4
      star.style.animationDuration = `${duration}s`
      star.style.animationDelay = `${delay}s`
      el.appendChild(star)
    }
  }, [])

  // Parallax suave por puntero
  const parallax = useRef({ x: 0, y: 0, tx: 0, ty: 0, raf: 0 as number | 0 })
  useEffect(() => {
    const viewport = document.querySelector('main.viewport') as HTMLElement | null
    if (!viewport) return

    const tick = () => {
      const p = parallax.current
      p.x += (p.tx - p.x) * 0.08
      p.y += (p.ty - p.y) * 0.08
      const layers = document.querySelectorAll<HTMLElement>('#bienvenida [data-depth]')
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 8)
        layer.style.transform = `translate3d(${p.x * depth * 0.6}px, ${p.y * depth * 0.6}px, 0)`
      })
      if (Math.abs(p.tx - p.x) > 0.001 || Math.abs(p.ty - p.y) > 0.001) {
        parallax.current.raf = requestAnimationFrame(tick)
      } else {
        cancelAnimationFrame(parallax.current.raf)
        parallax.current.raf = 0
      }
    }

    const onMove = (event: PointerEvent) => {
      const rect = viewport.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height
      parallax.current.tx = (x - 0.5) * 2
      parallax.current.ty = (y - 0.5) * 2
      if (!parallax.current.raf) {
        parallax.current.raf = requestAnimationFrame(tick)
      }
    }

    viewport.addEventListener('pointermove', onMove, { passive: true })
    return () => viewport.removeEventListener('pointermove', onMove)
  }, [])

  // Estrellas fugaces periódicas
  useEffect(() => {
    const wrap = document.getElementById('shooting')
    if (!wrap) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const spawn = () => {
      const streak = document.createElement('div')
      streak.className = 'shooting-star'
      streak.style.left = `${Math.random() * 20}%`
      streak.style.top = `${20 + Math.random() * 40}%`
      wrap.appendChild(streak)
      setTimeout(() => streak.remove(), 1400)
    }

    const id = window.setInterval(spawn, 2200)
    return () => window.clearInterval(id)
  }, [])

  const handleScrollTo = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/servicios')
  }

  return (
    <section id="bienvenida" className="section" aria-label="Bienvenida">
      <div className="bg space-bg">
        <div className="stars" ref={starsRef} aria-hidden="true" />
        <div className="planet" data-depth="12" aria-hidden="true" />
        <div className="celestials" aria-hidden="true">
          <MoonSun />
        </div>
        <div className="spaces">
          <div className="spaceship fly1" />
          <div className="spaceship fly2" />
          <div className="spaceship fly3" />
          <div className="mini-planet p1" />
          <div className="mini-planet p2" />
          <div className="shooting-stars" id="shooting" aria-hidden="true" />
          <svg className="constellation" viewBox="0 0 120 80" aria-hidden="true">
            <line x1="10" y1="60" x2="30" y2="40" />
            <line x1="30" y1="40" x2="60" y2="35" />
            <line x1="60" y1="35" x2="90" y2="22" />
            <circle cx="10" cy="60" r="2" />
            <circle cx="30" cy="40" r="2" />
            <circle cx="60" cy="35" r="2" />
            <circle cx="90" cy="22" r="2" />
          </svg>
        </div>
      </div>
      <div className="content">
        <motion.h1
          className="title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Hola, soy <span className="accent">Jean Pérez</span>
        </motion.h1>

        <motion.p
          className="subtitle"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Analista Programador Computacional
        </motion.p>

        <motion.div
          className="actions"
          variants={actionsVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            variants={btnVariant}
            className="btn cta"
            href="#proyectos"
            onClick={handleScrollTo('proyectos')}
          >
            Ver proyectos
          </motion.a>
          <motion.a
            variants={btnVariant}
            className="btn ghost"
            href="#contacto"
            onClick={handleScrollTo('contacto')}
          >
            Hablemos
          </motion.a>
          <motion.a
            variants={btnVariant}
            className="btn hero-services-btn"
            href="/servicios"
            onClick={handleNavToServices}
          >
            Mis servicios
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function MoonSun() {
  const { setNight } = useTheme()
  return (
    <>
      <div className="moon" onClick={() => setNight(true)} title="Modo noche" />
      <div className="sun" onClick={() => setNight(false)} title="Modo día" />
    </>
  )
}
