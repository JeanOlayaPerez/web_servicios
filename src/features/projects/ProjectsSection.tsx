import { Link } from 'react-router-dom'
import Carousel from '@components/Carousel'
import { projects } from './data'

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="section" aria-label="Proyectos">
      <div className="bg mountains-bg">
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
            <span key={i} style={{ left: `${(i*4)%100}%`, animationDelay: `${i*0.4}s`, animationDuration: `${8 + (i%5)}s` }} />
          ))}
        </div>
        <div className="pines" aria-hidden="true">
          <div className="pine" />
          <div className="pine small" />
          <div className="pine" />
          <div className="pine small" />
        </div>
      </div>
      <div className="content projects">
        <h2 className="title">Proyectos destacados</h2>
        <Carousel>
          {projects.map(p => (
            <div className="carousel-item" key={p.slug}>
              <article className="card" role="article">
                <div className="thumb" aria-hidden style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: p.image ? `url(${p.image})` : undefined }}></div>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-text">{p.summary}</p>
                <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                <Link className="btn small" to={`/proyecto/${p.slug}`} aria-label={`Ver detalle de ${p.title}`}>Ver detalle</Link>
              </article>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
