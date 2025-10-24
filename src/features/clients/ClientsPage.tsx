import { clientWins } from './data'
import Carousel from '@components/Carousel'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { chunk } from '@utils/chunk'
import { useMemo, type CSSProperties } from 'react'

export default function ClientsPage() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const isWide = useMediaQuery('(min-width: 1180px)')
  const perSlide = isMobile ? 1 : isWide ? 3 : 2

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
        <h1 className="title">Clientes con resultados reales</h1>
        <p className="subtitle">
          Trabajo en sprints enfocados en impacto. Estos son algunos partners que confiaron en mí para lanzar, escalar
          o rescatar sus productos digitales.
        </p>
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
        <div className="clients-cta">
          <h3>¿Listo para aparecer en esta lista?</h3>
          <p>Agenda una llamada y diseñemos la hoja de ruta de tu próximo lanzamiento.</p>
          <a className="btn cta" href="#contacto">Agendar discovery call</a>
        </div>
      </div>
    </main>
  )
}
