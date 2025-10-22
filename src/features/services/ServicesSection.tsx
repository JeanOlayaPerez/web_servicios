import { services } from './data'
import Carousel from '@components/Carousel'

type Props = {
  standalone?: boolean
}

export default function ServicesSection({ standalone = false }: Props) {
  const groups: Array<{ key: 'web' | 'apps' | 'support'; title: string; blurb: string }> = [
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
            <span key={i} style={{ left: `${(i * 11) % 100}%`, animationDelay: `${i * 0.35}s`, animationDuration: `${6 + (i % 5)}s` }} />
          ))}
        </div>
      </div>
      <div className="content" style={{ maxWidth: 1100 }}>
        <h2 className="title">Servicios</h2>
        <p className="subtitle">Soluciones digitales completas: estrategia, diseño, desarrollo y lanzamiento.</p>
        {groups.map((group) => {
          const items = services.filter((s) => s.category === group.key)
          if (!items.length) return null
          return (
            <section className="services-group" key={group.key} aria-label={group.title}>
              <div className="group-header">
                <h3>{group.title}</h3>
                <p>{group.blurb}</p>
              </div>
              <div className="services-carousel">
                <Carousel>
                  {items.map((it) => (
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
      <main className="section" aria-label="Servicios">
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
