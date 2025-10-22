import { Link, useParams } from 'react-router-dom'
import { projects } from './data'

export default function ProjectDetail() {
  const { slug } = useParams()
  const p = projects.find(p => p.slug === slug)
  if (!p) return (
    <main className="section" aria-label="Proyecto">
      <div className="content">
        <h2 className="title">Proyecto no encontrado</h2>
        <Link className="btn" to="/">Volver</Link>
      </div>
    </main>
  )
  return (
    <main className="section" aria-label="Detalle del proyecto">
      <div className="content" style={{ textAlign: 'left' }}>
        <h1 className="title">{p.title}</h1>
        <p className="subtitle">{p.summary}</p>
        <div className="thumb" style={{ height: 220, marginBottom: 16 }} aria-hidden></div>
        <div className="tags" style={{ marginBottom: 16 }}>{p.tags.map(t => <span key={t}>{t}</span>)}</div>
        <p>Descripción larga del proyecto, objetivos, stack, retos y aprendizajes. Aquí puedes enlazar al repositorio y a una demo.</p>
        <div style={{ marginTop: 16 }}>
          <Link className="btn" to="/">← Volver al portafolio</Link>
        </div>
      </div>
    </main>
  )
}

