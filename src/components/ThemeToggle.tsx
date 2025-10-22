import { useTheme } from '@app/theme'

export default function ThemeToggle() {
  const { night, toggle } = useTheme()
  return (
    <button className="btn btn-toggle" aria-label="Cambiar entre día y noche" onClick={toggle}>
      <span className="icon sun" aria-hidden>{night ? '' : '☀️'}</span>
      <span className="icon moon" aria-hidden>{night ? '🌙' : ''}</span>
    </button>
  )
}

