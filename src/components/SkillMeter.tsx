import { ReactNode } from 'react'

type Props = {
  label: string
  percent: number
  icon?: ReactNode
  active?: boolean
}

export default function SkillMeter({ label, percent, icon, active }: Props) {
  return (
    <div className="skill">
      <div className="skill-head">
        <div className="skill-label">
          {icon && <span className="skill-icon" aria-hidden>{icon}</span>}
          <span>{label}</span>
        </div>
        <span className="skill-percent">{percent}%</span>
      </div>
      <div className="skill-track" aria-hidden>
        <div className="skill-bar" style={{ width: active ? `${percent}%` : 0 }} />
      </div>
    </div>
  )
}
