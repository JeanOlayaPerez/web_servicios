import { Link, useParams } from 'react-router-dom'
import { projects } from './data'

export default function ProjectDetail() {
  const { slug } = useParams()
  const p = projects.find((project) => project.slug === slug)

  if (!p) {
    return (
      <main className="section" aria-label="Proyecto">
        <div className="content">
          <h2 className="title">Proyecto no encontrado</h2>
          <Link className="btn" to="/">Volver</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="section" aria-label="Detalle del proyecto">
      <div className="content" style={{ textAlign: 'left' }}>
        <h1 className="title">{p.title}</h1>
        <p className="subtitle">{p.summary}</p>
        <div
          className="thumb"
          style={{
            height: 220,
            marginBottom: 16,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: p.image ? `url(${p.image})` : undefined
          }}
          aria-hidden
        />
        <div className="tags" style={{ marginBottom: 16 }}>
          {p.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <p>{p.description}</p>

        <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {p.demoUrl && (
            <a className="btn ghost" href={p.demoUrl} target="_blank" rel="noreferrer noopener">
              Abrir proyecto online
            </a>
          )}
          {p.repoUrl && (
            <a className="btn ghost" href={p.repoUrl} target="_blank" rel="noreferrer noopener">
              Ver repositorio
            </a>
          )}
          <Link className="btn" to="/">Volver al portafolio</Link>
        </div>
      </div>
    </main>
  )
}
