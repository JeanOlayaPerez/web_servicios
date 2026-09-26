import { clientWins } from './data'
import Carousel from '@components/Carousel'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { chunk } from '@utils/chunk'
import { useMemo, type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function ClientsPage() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const isWide = useMediaQuery('(min-width: 1180px)')
  const perSlide = isMobile ? 1 : isWide ? 3 : 2
  const navigate = useNavigate()

  const slides = useMemo(() => chunk(clientWins, perSlide), [perSlide])

  return (
    <main className="section section-standalone clients-page" aria-label="Clientes y casos de éxito">
      <div className="bg tech-bg subtle clients-bg" aria-hidden>
        <div className="clients-orbs">
          {Array.from({ length: 6 }).map((_, index) => {
            const style: CSSProperties = { animationDelay: `${index * 1.5}s` }
            ;(style as Record<string, unknown>)['--i'] = index
            return <span key={index} style={style} />
          })}
        </div>
      </div>
      <div className="content clients">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Clientes con resultados reales
        </motion.h1>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          Trabajo en sprints enfocados en impacto. Estos son algunos partners que confiaron en mí para lanzar, escalar
          o rescatar sus productos digitales.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <Carousel autoAdvance interval={4800}>
            {slides.map((slide, index) => (
              <div className="clients-slide" key={`client-slide-${index}`}>
                {slide.map((client) => (
                  <article key={client.name} className="client-card" role="listitem">
                    <header>
                      <span className="client-pill">{client.industry}</span>
                      <h2>{client.name}</h2>
                      <p className="year">{client.year}</p>
                    </header>
                    <p className="summary">{client.summary}</p>
                    <p className="impact">{client.impact}</p>
                    {client.link && (
                      <a className="btn ghost" href={client.link} target="_blank" rel="noreferrer">
                        Ver producto en vivo
                      </a>
                    )}
                  </article>
                ))}
              </div>
            ))}
          </Carousel>
        </motion.div>
        <motion.div
          className="clients-cta"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <h3>¿Listo para aparecer en esta lista?</h3>
          <p>Agenda una llamada y diseñemos la hoja de ruta de tu próximo lanzamiento.</p>
          <motion.button
            className="btn cta"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              navigate('/')
              // scroll to contact after navigation
              setTimeout(() => {
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }, 400)
            }}
          >
            Agendar discovery call
          </motion.button>
        </motion.div>
      </div>
    </main>
  )
}
