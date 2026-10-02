import { useEffect, useRef } from 'react'
import { projects } from '../projects/data'

type Props = {
  standalone?: boolean
}

export default function ServicesSection({ standalone = false }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const tattooProject = projects.find((project) => project.slug === 'felipe-tatuaje')

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const cards = Array.from(node.querySelectorAll<HTMLElement>('.package-card'))
    const buttons = Array.from(node.querySelectorAll<HTMLButtonElement>('.package-cta'))
    const fadeTargets = Array.from(node.querySelectorAll<HTMLElement>('.fade-up'))

    // Efecto tilt 3D
    const handleMouseMove = (card: HTMLElement, e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      const rotateX = (-y / rect.height) * 10
      const rotateY = (x / rect.width) * 10
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
    }

    const handleMouseLeave = (card: HTMLElement) => {
      card.style.transform = ''
      card.style.transition = 'transform 0.5s ease'
    }

    cards.forEach((card) => {
      const onMove = (e: Event) => handleMouseMove(card, e as MouseEvent)
      const onLeave = () => handleMouseLeave(card)
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)

      ;(card as any)._tiltHandlers = { onMove, onLeave }
    })

    // IntersectionObserver para animaciones fade-up
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = Number(el.dataset.delay || i * 80)
            setTimeout(() => {
              el.classList.add('visible')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    fadeTargets.forEach((el, i) => {
      el.dataset.delay = String(i * 80)
      observer.observe(el)
    })

    // Botones CTA: efecto ripple + WhatsApp
    const whatsappBaseUrl = 'https://wa.me/56987654321?text='

    const handleClick = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLButtonElement
      const rect = btn.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const ripple = document.createElement('span')
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px; height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top: ${e.clientY - rect.top - size / 2}px;
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `
      btn.style.position = 'relative'
      btn.style.overflow = 'hidden'
      btn.appendChild(ripple)
      window.setTimeout(() => ripple.remove(), 600)

      const plan = btn.dataset.plan
      const message = plan
        ? `Hola Jean, me interesa el plan ${plan}. ¿Podemos conversar sobre mi proyecto?`
        : 'Hola Jean, quiero cotizar un proyecto digital para mi empresa.'
      window.open(`${whatsappBaseUrl}${encodeURIComponent(message)}`, '_blank')
    }

    buttons.forEach((btn) => {
      btn.addEventListener('click', handleClick as any)
    })

    return () => {
      cards.forEach((card) => {
        const h = (card as any)._tiltHandlers as { onMove: (e: Event) => void; onLeave: () => void } | undefined
        if (h) {
          card.removeEventListener('mousemove', h.onMove)
          card.removeEventListener('mouseleave', h.onLeave)
        }
      })
      buttons.forEach((btn) => {
        btn.removeEventListener('click', handleClick as any)
      })
      observer.disconnect()
    }
  }, [])

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
            <span
              key={i}
              style={{
                left: `${(i * 11) % 100}%`,
                animationDelay: `${i * 0.35}s`,
                animationDuration: `${6 + (i % 5)}s`
              }}
            />
          ))}
        </div>
        <div className="service-aurora" aria-hidden>
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${i * 1.4}s` }} />
          ))}
        </div>
      </div>
      <div className="content services-shell">
        <header className="services-hero fade-up">
          <div className="services-hero-copy">
            <span className="services-badge">Web · sistemas · crecimiento</span>
            <h1 className="title-main">Tu negocio necesita una presencia digital que trabaje por él.</h1>
            <p className="subtitle-main">
              Diseño y desarrollo herramientas digitales claras, rápidas y pensadas para atraer clientes y simplificar tu operación.
            </p>
            <div className="services-hero-actions">
              <a className="btn" href="#planes">Explorar planes</a>
              <a
                className="btn ghost"
                href="https://wa.me/56987654321?text=Hola%20Jean%2C%20quiero%20conversar%20sobre%20mi%20proyecto%20digital."
                target="_blank"
                rel="noreferrer noopener"
              >
                Hablemos de tu proyecto
              </a>
            </div>
            <div className="services-trust-row" aria-label="Enfoque de trabajo">
              <span>Diseño a medida</span>
              <span>Optimizado para móvil</span>
              <span>Contacto directo</span>
            </div>
          </div>
          {tattooProject?.image && (
            <figure className="services-hero-visual">
              <img src={tattooProject.image} alt="Felipe tatuando en el estudio INKEPILEF" />
              <figcaption>
                <span>Proyecto real</span>
                <strong>INKEPILEF · Estudio de tatuajes</strong>
                <a href={tattooProject.demoUrl} target="_blank" rel="noreferrer noopener">Ver sitio</a>
              </figcaption>
            </figure>
          )}
        </header>

        <section className="value-offer fade-up" aria-label="Propuesta de valor comercial">
          <div className="services-block-heading">
            <span className="services-eyebrow">Soluciones para cada etapa</span>
            <h2>¿Qué necesita tu negocio hoy?</h2>
          </div>
          <div className="offer-grid">
            <article className="offer-card offer-primary">
              <span className="offer-label">Página web para empresas</span>
              <strong className="offer-price">Desde $220.000 CLP</strong>
              <p>
                Sitio listo para mostrar tu marca, explicar tus servicios y captar consultas con diseño profesional y optimizado para móviles.
              </p>
            </article>

            <article className="offer-card">
              <span className="offer-label">Revisión o rediseño</span>
              <strong className="offer-price">Desde $120.000 CLP</strong>
              <p>
                Mejoras visuales, contenido, estructura, SEO básico, CTA, formulario y optimización para que la página funcione como una herramienta de ventas.
              </p>
            </article>

            <article className="offer-card">
              <span className="offer-label">Google Maps + presencia local</span>
              <strong className="offer-price">Desde $90.000 CLP</strong>
              <p>
                Perfil optimizado, fotos, horarios, servicios, reseñas y estructura para aparecer mejor en búsquedas locales y generar más contacto.
              </p>
            </article>

            <article className="offer-card">
              <span className="offer-label">Campañas y marketing digital</span>
              <strong className="offer-price">Desde $180.000 CLP</strong>
              <p>
                Estructuración de campañas, anuncios, mensajes, seguimiento y optimización para llegar a más clientes con menos fricción.
              </p>
            </article>
          </div>
        </section>

        <section id="planes" className="services-plans" aria-label="Planes de servicios digitales">
          <div className="services-block-heading">
            <span className="services-eyebrow">Inversión transparente</span>
            <h2>Elige el punto de partida</h2>
            <p>Alcance y mensualidad definidos desde el inicio. Si necesitas algo distinto, lo cotizamos a medida.</p>
          </div>
          <div className="services-packages">
          <article className="package-card package-starter fade-up" aria-label="Plan Digital Starter">
            <div className="package-accent">⚡ DIGITAL STARTER</div>
            <h3>Presencia digital lista para partir</h3>
            <p className="package-tagline">Para negocios sin presencia digital</p>

            <div className="package-meta">
              <div>
                <div className="price-label">Pago inicial</div>
                <div className="price-value">$85.000 CLP</div>
              </div>
              <div>
                <div className="price-label">Mensualidad</div>
                <div className="price-value monthly">$30.000/mes</div>
              </div>
            </div>
            <p className="price-notes">Disponible en 2 cuotas sin interés</p>

            <hr className="package-separator" />

            <ul className="package-features">
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Landing page profesional y responsive</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Google Business Profile configurado</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Botón WhatsApp con mensaje prellenado</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Formulario de contacto funcional</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Hosting y dominio gestionado</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Mantención mensual incluida</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">1 revisión de diseño</span>
              </li>
            </ul>

            <button type="button" className="package-cta" data-plan="Digital Starter">
              Quiero este plan
            </button>
          </article>

          <article className="package-card package-growth fade-up" aria-label="Plan Growth System">
            <div className="popular-badge">⭐ Más popular</div>
            <div className="package-accent">🚀 GROWTH SYSTEM</div>
            <h3>Sistema para agendar y vender más</h3>
            <p className="package-tagline">Más reservas, menos trabajo manual</p>

            <div className="package-meta">
              <div>
                <div className="price-label">Pago inicial</div>
                <div className="price-value">$185.000 CLP</div>
              </div>
              <div>
                <div className="price-label">Mensualidad</div>
                <div className="price-value monthly">$59.900/mes</div>
              </div>
            </div>
            <p className="price-notes">Disponible en 2 cuotas sin interés</p>

            <hr className="package-separator" />

            <ul className="package-features">
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Todo lo de Digital Starter +</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Sistema de reservas online 24/7</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Recordatorio automático por WhatsApp (24h antes)</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Solicitud automática de reseña Google post-servicio</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Google Analytics instalado</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Reporte mensual de visitas y citas</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Soporte por WhatsApp (respuesta en 24h)</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Hasta 3 actualizaciones de contenido al mes</span>
              </li>
            </ul>

            <button type="button" className="package-cta" data-plan="Growth System">
              Quiero este plan
            </button>
          </article>

          <article className="package-card package-smart fade-up" aria-label="Plan Smart Business">
            <div className="package-accent">🧠 SMART BUSINESS</div>
            <h3>Automatiza, fideliza y escala</h3>
            <p className="package-tagline">Automatiza, fideliza y escala</p>

            <div className="package-meta">
              <div>
                <div className="price-label">Pago inicial</div>
                <div className="price-value">$290.000 CLP</div>
              </div>
              <div>
                <div className="price-label">Mensualidad</div>
                <div className="price-value monthly">$99.900/mes</div>
              </div>
            </div>
            <p className="price-notes">Disponible en 2 cuotas sin interés</p>

            <hr className="package-separator" />

            <ul className="package-features">
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Todo lo de Growth System +</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Mini CRM: base de clientes con historial</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Campañas mensuales WhatsApp a clientes dormidos</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Automatización personalizada (Make.com / n8n)</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">
                  SEO local avanzado (palabras clave + metadatos)
                </span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Integración con redes sociales</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Reporte avanzado mensual</span>
              </li>
              <li className="package-feature">
                <span className="feature-check">✓</span>
                <span className="feature-text">Soporte prioritario (respuesta en 4h hábiles)</span>
              </li>
            </ul>

            <button type="button" className="package-cta" data-plan="Smart Business">
              Quiero este plan
            </button>
          </article>
          </div>
        </section>

        <section className="services-secondary fade-up" aria-label="Servicios adicionales">
          <div className="services-secondary-header">
            <span className="services-badge">◈ Servicios adicionales</span>
            <h3 className="services-secondary-title">Marketing, presencia local y automatización que ayudan a vender</h3>
            <p className="services-secondary-subtitle">
              Todo lo que ayuda a que una empresa no solo tenga una web, sino una máquina de captación y conversión.
            </p>
          </div>

          <div className="micro-services-grid">
            <article className="micro-card micro-local fade-up" aria-label="Local Radar">
              <div className="micro-bar" />
              <span className="micro-icon">📍</span>
              <h4 className="micro-name">Google Business Profile</h4>
              <p className="micro-price">$90.000–$180.000</p>
              <p className="micro-hook">Incluye optimización del perfil y estructura local</p>
              <p className="micro-desc">
                Configuración, fotos, descripción, horarios, servicios, preguntas frecuentes, mapeo de búsquedas locales y mejoras para aparecer más en Google Maps.
              </p>
            </article>

            <article className="micro-card micro-review fade-up" aria-label="Review Boost">
              <div className="micro-bar" />
              <span className="micro-icon">⭐</span>
              <h4 className="micro-name">Review Boost</h4>
              <p className="micro-price">$49.900 setup</p>
              <p className="micro-monthly">+ $29.900/mes</p>
              <p className="micro-hook">Más reseñas = más confianza y más leads</p>
              <p className="micro-desc">
                Mensajes automáticos para pedir reseñas en Google o WhatsApp. Mejora reputación y posicionamiento local sin depender solo de la suerte.
              </p>
            </article>

            <article className="micro-card micro-zero-calls fade-up" aria-label="Zero Calls">
              <div className="micro-bar" />
              <span className="micro-icon">📅</span>
              <h4 className="micro-name">Reservas online</h4>
              <p className="micro-price">$69.900 setup</p>
              <p className="micro-monthly">+ $29.900/mes</p>
              <p className="micro-hook">Agendas 24/7 sin perder clientes</p>
              <p className="micro-desc">
                Sistema para agendar citas, servicios o presupuestos desde la web con notificación automática por WhatsApp o correo.
              </p>
            </article>

            <article className="micro-card micro-reactivation fade-up" aria-label="Reactivation">
              <div className="micro-bar" />
              <span className="micro-icon">📣</span>
              <h4 className="micro-name">Campaña de reactivación</h4>
              <p className="micro-price">$39.900–$79.900</p>
              <p className="micro-hook">Recupera clientes dormidos</p>
              <p className="micro-desc">
                Mensajes dirigidos para volver a contactarlos, recordar promociones y recuperar ventas sin depender de una campaña gigante.
              </p>
            </article>

            <article className="micro-card micro-visibility fade-up" aria-label="Visibility Report">
              <div className="micro-bar" />
              <span className="micro-icon">📊</span>
              <h4 className="micro-name">SEO y reporte mensual</h4>
              <p className="micro-monthly">$39.900/mes</p>
              <p className="micro-hook">Visibilidad + medición + factibilidad</p>
              <p className="micro-desc">
                Análisis de visitas, palabras clave, rendimiento local y mejoras constantes para que la inversión en web tenga resultados visibles.
              </p>
            </article>

            <article className="micro-card micro-whatsapp fade-up" aria-label="WhatsApp CTA">
              <div className="micro-bar" />
              <span className="micro-icon">🔗</span>
              <h4 className="micro-name">WhatsApp CTA</h4>
              <p className="micro-price">$24.900 (pago único)</p>
              <p className="micro-hook">Captación directa y más simple</p>
              <p className="micro-desc">
                Botón flotante, mensaje prearmado y mejor conversión para contacto rápido, consultas, cotizaciones y cierre de ventas.
              </p>
            </article>
          </div>
        </section>

        <section className="services-process fade-up" aria-labelledby="services-process-title">
          <div className="services-block-heading">
            <span className="services-eyebrow">Un proceso simple</span>
            <h2 id="services-process-title">De la idea al lanzamiento, con claridad</h2>
          </div>
          <div className="services-process-grid">
            <article><span>01</span><h3>Entendemos el negocio</h3><p>Conversamos sobre tus objetivos, clientes y los procesos que quieres mejorar.</p></article>
            <article><span>02</span><h3>Definimos el alcance</h3><p>Recibes una propuesta con entregables, plazos y costos antes de comenzar.</p></article>
            <article><span>03</span><h3>Construimos y lanzamos</h3><p>Desarrollo, revisión contigo y publicación con acompañamiento para el inicio.</p></article>
          </div>
        </section>

        <section className="services-faq fade-up" aria-labelledby="services-faq-title">
          <div className="services-block-heading">
            <span className="services-eyebrow">Antes de empezar</span>
            <h2 id="services-faq-title">Preguntas frecuentes</h2>
          </div>
          <div className="services-faq-list">
            <details><summary>¿El precio publicado es el valor final?</summary><p>Es el valor del alcance descrito en cada plan. Integraciones o funciones adicionales se detallan y cotizan antes de iniciar.</p></details>
            <details><summary>¿Cuánto tarda en estar listo?</summary><p>El plazo depende del alcance y de la entrega de contenidos. Lo acordamos por escrito en la propuesta antes de comenzar.</p></details>
            <details><summary>¿Puedo pedir solo una cotización?</summary><p>Sí. Cuéntame qué necesita tu negocio y te propongo el alcance más conveniente, sin compromiso de contratar.</p></details>
          </div>
        </section>

        <section className="services-final-cta" aria-label="Contacto">
          <div><span className="services-eyebrow">¿Lo conversamos?</span><h2>Cuéntame qué quieres mejorar en tu negocio.</h2></div>
          <a className="btn" href="https://wa.me/56987654321?text=Hola%20Jean%2C%20quiero%20conversar%20sobre%20mi%20proyecto%20digital." target="_blank" rel="noreferrer noopener">Escribir por WhatsApp</a>
        </section>
      </div>
    </>
  )

  if (standalone) {
    return (
      <main ref={sectionRef as any} className="section section-standalone services-page" aria-label="Servicios" id="servicios">
        {shell}
      </main>
    )
  }

  return (
    <section ref={sectionRef as any} id="servicios" className="section services-page" aria-label="Servicios">
      {shell}
    </section>
  )
}
