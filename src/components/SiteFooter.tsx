import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/JeanOlayaPerez', slug: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jean-olaya-perez', slug: 'linkedin' },
  { label: 'Behance', href: 'https://www.behance.net/', slug: 'behance' }
]

export default function SiteFooter() {
  return (
    <footer className="site-footer section-standalone" aria-label="Información de contacto corporativa">
      <div className="bg footer-bg" aria-hidden>
        <div className="footer-glow" />
      </div>
      <div className="content footer-shell">
        <div className="footer-brand">
          <span className="badge">Jean Olaya Pérez</span>
          <p>
            Desarrollo de productos digitales para empresas. Webs, sistemas y automatizaciones que hacen crecer tu negocio,
            mejoran la operación y aumentan ventas.
          </p>
        </div>
        <div className="footer-grid">
          <div>
            <h3>Contacto directo</h3>
            <ul>
              <li><a href="mailto:hola@jean.dev">hola@jean.dev</a></li>
              <li><a href="https://wa.me/56987654321?text=Hola%20Jean,%20quiero%20cotizar%20un%20proyecto%20digital%20para%20mi%20empresa." target="_blank" rel="noreferrer noopener">+56 9 8765 4321</a></li>
              <li>Santiago de Chile / remoto</li>
            </ul>
          </div>
          <div>
            <h3>Servicios</h3>
            <ul>
              <li><Link to="/servicios">Consultoría y discovery</Link></li>
              <li><Link to="/destacados">Lanzamiento de productos</Link></li>
              <li><Link to="/clientes">Acompañamiento y escalamiento</Link></li>
            </ul>
          </div>
          <div>
            <h3>Redes & portfolio</h3>
            <ul>
              {socialLinks.map((social) => (
                <li key={social.slug}>
                  <a href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-meta">
          <span>© {currentYear} Jean Pérez. Todos los derechos reservados.</span>
          <span>Disponible para proyectos remotos y presenciales.</span>
        </div>
      </div>
    </footer>
  )
}
