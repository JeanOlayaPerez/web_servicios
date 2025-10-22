import SkillMeter from '@components/SkillMeter'
import { useInView } from '@hooks/useInView'

export default function SkillsSection() {
  const skillset = [
    { icon: '🟨', label: 'JavaScript', percent: 85 },
    { icon: '🟦', label: 'TypeScript', percent: 75 },
    { icon: '⚛️', label: 'React', percent: 70 },
    { icon: '🟩', label: 'Node.js', percent: 72 },
    { icon: '🟧', label: 'HTML/CSS', percent: 90 },
    { icon: '🐍', label: 'Python', percent: 68 },
    { icon: '🗄️', label: 'SQL', percent: 65 },
    { icon: '🔧', label: 'Git', percent: 80 }
  ]

  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 })

  return (
    <section id="habilidades" className="section" aria-label="Habilidades" ref={ref as any}>
      <div className="bg sky-bg">
        {/* Nubes con forma compuesta */}
        <div className="ncloud n1" aria-hidden="true" />
        <div className="ncloud n2" aria-hidden="true" />
        <div className="ncloud n3" aria-hidden="true" />
        <div className="plane" aria-hidden="true" />
        {/* Aves */}
        <div className="birds" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="bird black" key={i} style={{ top: `${12 + i * 8}%`, left: `${-20 - i * 5}%`, animationDelay: `${i * 1.2}s` }} />
          ))}
        </div>
        {/* Montañas al fondo en skills */}
        <svg className="mountains-skill" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="ms-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8d9ea" />
              <stop offset="100%" stopColor="#8aa4c4" />
            </linearGradient>
          </defs>
          <polygon fill="url(#ms-grad)" points="-10,40 10,16 22,28 32,12 46,24 60,10 74,22 88,16 110,40" opacity="0.85" />
          <polygon fill="url(#ms-grad)" points="-10,40 6,22 20,30 34,18 48,28 62,16 78,26 94,18 110,40" opacity="0.5" />
        </svg>
      </div>
      <div className="content">
        <h2 className="title">Tecnologías que domino</h2>
        <p className="subtitle">Stack moderno con foco móvil y rendimiento.</p>
        <div className="skill-grid" role="list">
          {skillset.map(s => (
            <SkillMeter key={s.label} icon={s.icon} label={s.label} percent={s.percent} active={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
