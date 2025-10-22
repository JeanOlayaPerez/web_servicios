import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@app/theme'

export default function HeroSection() {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = starsRef.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const count = reduce ? 40 : 140
    el.innerHTML = ''
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span')
      const size = Math.random() * 1.8 + 0.4
      s.style.width = `${size}px`
      s.style.height = `${size}px`
      s.style.left = `${Math.random() * 100}%`
      s.style.top = `${Math.random() * 100}%`
      const d = Math.random() * 6 + 4
      const delay = Math.random() * 4
      s.style.animationDuration = `${d}s`
      s.style.animationDelay = `${delay}s`
      el.appendChild(s)
    }
  }, [])

  // parallax suave por puntero
  const parallax = useRef({ x: 0, y: 0, tx: 0, ty: 0, raf: 0 as number | 0 })
  useEffect(() => {
    const viewport = document.querySelector('main.viewport') as HTMLElement
    const onMove = (e: PointerEvent) => {
      const rect = viewport.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      parallax.current.tx = (x - 0.5) * 2
      parallax.current.ty = (y - 0.5) * 2
      if (!parallax.current.raf) parallax.current.raf = requestAnimationFrame(tick)
    }
    const tick = () => {
      const p = parallax.current
      p.x += (p.tx - p.x) * 0.08
      p.y += (p.ty - p.y) * 0.08
      const layers = document.querySelectorAll<HTMLElement>('#bienvenida [data-depth]')
      layers.forEach(el => {
        const depth = Number(el.dataset.depth || 8)
        el.style.transform = `translate3d(${p.x * depth * 0.6}px, ${p.y * depth * 0.6}px, 0)`
      })
      if (Math.abs(p.tx - p.x) > 0.001 || Math.abs(p.ty - p.y) > 0.001) {
        parallax.current.raf = requestAnimationFrame(tick)
      } else {
        cancelAnimationFrame(parallax.current.raf)
        parallax.current.raf = 0
      }
    }
    viewport?.addEventListener('pointermove', onMove, { passive: true })
    return () => viewport?.removeEventListener('pointermove', onMove)
  }, [])

  // Estrellas fugaces periódicas
  useEffect(() => {
    const wrap = document.getElementById('shooting')
    if (!wrap) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const spawn = () => {
      const s = document.createElement('div')
      s.className = 'shooting-star'
      s.style.left = `${Math.random() * 20}%`
      s.style.top = `${20 + Math.random() * 40}%`
      wrap.appendChild(s)
      setTimeout(() => s.remove(), 1400)
    }
    const id = window.setInterval(spawn, 2200)
    return () => window.clearInterval(id)
  }, [])

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
        <motion.h1 className="title" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Hola, soy <span className="accent">Jean Pérez</span>
        </motion.h1>
        <motion.p className="subtitle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Analista Programador Computacional
        </motion.p>
        <motion.div className="actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <a className="btn cta" href="#habilidades">Tecnologías</a>
          <a className="btn ghost" href="#proyectos">Ver proyectos</a>
          <a className="btn ghost" href="#servicios">Servicios</a>
          <a className="btn ghost" href="#contacto">Hablemos</a>
        </motion.div>
      </div>
    </section>
  )
}

function MoonSun() {
  const { night, setNight } = useTheme()
  return (
    <>
      <div className="moon" onClick={() => setNight(true)} title="Modo noche" />
      <div className="sun" onClick={() => setNight(false)} title="Modo día" />
    </>
  )
}
