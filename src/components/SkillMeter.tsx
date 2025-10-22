type Props = {
  label: string
  percent: number
  icon?: string
  active?: boolean
}

export default function SkillMeter({ label, percent, icon, active }: Props) {
  return (
    <div className="skill">
      <div className="skill-head">
        <span className="skill-label">{icon ? `${icon} ` : ''}{label}</span>
        <span className="skill-percent">{percent}%</span>
      </div>
      <div className="skill-track" aria-hidden>
        <div className="skill-bar" style={{ width: active ? `${percent}%` : 0 }} />
      </div>
    </div>
  )
}

