import { Link } from 'react-router-dom'
import Carousel from '@components/Carousel'
import { projects } from './data'
import type { CSSProperties } from 'react'

type Props = {
  standalone?: boolean
  heading?: string
  intro?: string
  autoAdvance?: boolean
}

export default function ProjectsSection({ standalone = false, heading = 'Proyectos destacados', intro, autoAdvance = true }: Props) {
  const Element = (standalone ? 'main' : 'section') as keyof JSX.IntrinsicElements
  const className = `section${standalone ? ' section-standalone projects-standalone' : ''}`
  const ariaLabel = standalone ? 'Proyectos destacados' : 'Proyectos'

  return (
    <Element id={standalone ? undefined : 'proyectos'} className={className} aria-label={ariaLabel}>
      <div className="bg mountains-bg">
        <div className="project-moon" aria-hidden />
        <div className="project-orbit" aria-hidden>
          {Array.from({ length: 14 }).map((_, index) => {
            const style: CSSProperties = { animationDelay: `${index * 0.6}s` }
            ;(style as Record<string, unknown>)['--i'] = index
            return <span key={index} style={style} />
          })}
        </div>
        <svg className="mountains-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="m-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--mtn-top)" />
              <stop offset="100%" stopColor="var(--mtn-base)" />
            </linearGradient>
          </defs>
          <polygon fill="url(#m-grad)" points="-10,100 20,50 40,80 55,40 75,70 110,100" opacity="0.8"></polygon>
          <polygon fill="url(#m-grad)" points="-10,100 10,60 30,85 50,55 70,82 110,100" opacity="0.6"></polygon>
          <polygon fill="url(#m-grad)" points="-10,100 0,70 25,90 45,70 65,90 110,100" opacity="0.4"></polygon>
        </svg>
        <div className="snowflakes" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              style={{
                left: `${(i * 4) % 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${8 + (i % 5)}s`
              }}
            />
          ))}
        </div>
        <div className="pines" aria-hidden="true">
          <div className="pine" />
          <div className="pine small" />
          <div className="pine" />
          <div className="pine small" />
        </div>
      </div>

      <div className="content projects-showcase">
        <div className="projects-heading">
          <span className="services-badge">Proyectos destacados</span>
          <h2 className="title">{heading}</h2>
          {intro && <p className="subtitle">{intro}</p>}
        </div>

        <Carousel autoAdvance={autoAdvance} interval={5200}>
          {projects.map((project) => (
            <article className="project-feature-card" key={project.slug} role="article">
              <div
                className="project-feature-media"
                aria-hidden
                style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: project.image ? `url(${project.image})` : undefined
                }}
              />

              <div className="project-feature-copy">
                <span className="project-sector">{project.industry || 'Solución digital'}</span>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <div className="project-result-row">
                  <span className="project-impact-label">Impacto</span>
                  <strong>{project.impact || 'Mejora visible de marca y ventas'}</strong>
                </div>

                <ul className="project-benefits">
                  {project.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>

                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>

                <div className="project-cta-row">
                  <Link className="btn small" to={`/proyecto/${project.slug}`} aria-label={`Ver detalle de ${project.title}`}>
                    Ver detalle
                  </Link>
                  {project.demoUrl && (
                    <a
                      className="btn ghost small"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Abrir demo de ${project.title}`}
                    >
                      Ver online
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </Element>
  )
}
