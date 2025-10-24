import { services, type ServiceItem } from './data'
import Carousel from '@components/Carousel'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { chunk } from '@utils/chunk'
import { useMemo } from 'react'

type Props = {
  standalone?: boolean
}

type GroupKey = 'web' | 'apps' | 'support'

const GROUPS: Array<{ key: GroupKey; title: string; blurb: string }> = [
  {
    key: 'web',
    title: 'Sitios web y tiendas',
    blurb: 'Landing pages, catálogos y e-commerce pensados para posicionarte y vender en línea.'
  },
  {
    key: 'apps',
    title: 'Aplicaciones a medida',
    blurb: 'Plataformas web y móviles con autenticación, paneles y flujos personalizados para tu negocio.'
  },
  {
    key: 'support',
    title: 'Soporte y continuidad',
    blurb: 'Planes flexibles para mantener tu proyecto al día o resolver tareas puntuales cuando lo necesites.'
  }
]

export default function ServicesSection({ standalone = false }: Props) {
  const isSmall = useMediaQuery('(max-width: 720px)')
  const perSlide = isSmall ? 1 : 2

  const groupedSlides = useMemo<Record<GroupKey, ServiceItem[][]>>(() => {
    return GROUPS.reduce<Record<GroupKey, ServiceItem[][]>>((acc, group) => {
      const items = services.filter((s) => s.category === group.key)
      acc[group.key] = chunk(items, perSlide)
      return acc
    }, { web: [], apps: [], support: [] })
  }, [perSlide])

  const shell = (
    <>
      <div className="bg tech-bg" aria-hidden>
        <div className="tech-icons">
          <div className="icon monitor" />
          <div className="icon phone" />
          <div className="icon keyboard" />
          <div className="icon code" />
        </div>
        <div className="tech-sparks">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              style={{
                left: `${(i * 11) % 100}%`,
                animationDelay: `${i * 0.35}s`,
                animationDuration: `${6 + (i % 5)}s`
              }}
            />
          ))}
        </div>
        <div className="service-aurora" aria-hidden>
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${i * 1.4}s` }} />
          ))}
        </div>
      </div>
      <div className="content" style={{ maxWidth: 1100 }}>
        <h2 className="title">Servicios</h2>
        <p className="subtitle">Soluciones digitales completas: estrategia, diseño, desarrollo y lanzamiento.</p>
        {GROUPS.map((group) => {
          const slides = groupedSlides[group.key]
          if (!slides.length) return null
          return (
            <section className="services-group" key={group.key} aria-label={group.title}>
              <div className="group-header">
                <h3>{group.title}</h3>
                <p>{group.blurb}</p>
              </div>
              <div className="services-carousel">
                <Carousel autoAdvance interval={4400}>
                  {slides.map((slide, index) => (
                    <div className="service-slide" key={`${group.key}-${index}`}>
                      {slide.map((it) => (
                        <article key={it.title} className="service-card">
                          <h4>{it.title}</h4>
                          <p className="price">{it.price}</p>
                          <p className="desc">{it.desc}</p>
                          <div className="actions">
                            <a className="btn cta" href="#contacto">Solicitar</a>
                            <a className="btn ghost" href="#proyectos">Ver ejemplos</a>
                          </div>
                        </article>
                      ))}
                    </div>
                  ))}
                </Carousel>
              </div>
            </section>
          )
        })}
      </div>
    </>
  )

  if (standalone) {
    return (
      <main className="section section-standalone" aria-label="Servicios">
        {shell}
      </main>
    )
  }

  return (
    <section id="servicios" className="section" aria-label="Servicios">
      {shell}
    </section>
  )
}
