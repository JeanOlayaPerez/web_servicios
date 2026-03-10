import { useEffect, useRef } from 'react'

type Props = {
  standalone?: boolean
}

export default function ServicesSection({ standalone = false }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null)

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
    const whatsappUrl =
      'https://wa.me/56912345678?text=Hola Jean, vi tu web y me interesa mejorar la presencia digital de mi negocio.'

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

      window.open(whatsappUrl, '_blank')
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
        <header className="fade-up">
          <span className="services-badge">◈ Mis servicios</span>
          <h2 className="title-main">El sistema digital que tu negocio necesita</h2>
          <p className="subtitle-main">
            No solo una página web. Un sistema que trabaja mientras tú atiendes.
          </p>
        </header>

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

            <button type="button" className="package-cta">
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

            <button type="button" className="package-cta">
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

            <button type="button" className="package-cta">
              Quiero este plan
            </button>
          </article>
        </div>

        <section className="services-secondary fade-up" aria-label="Servicios adicionales">
          <div className="services-secondary-header">
            <span className="services-badge">◈ Servicios adicionales</span>
            <h3 className="services-secondary-title">Servicios adicionales</h3>
            <p className="services-secondary-subtitle">
              Micro-servicios para complementar tu sistema digital y exprimir al máximo cada visita y cliente.
            </p>
          </div>

          <div className="micro-services-grid">
            <article className="micro-card micro-local fade-up" aria-label="Local Radar">
              <div className="micro-bar" />
              <span className="micro-icon">📍</span>
              <h4 className="micro-name">Local Radar</h4>
              <p className="micro-price">$54.900 (pago único)</p>
              <p className="micro-hook">Agencias cobran $60.000–$150.000 por esto</p>
              <p className="micro-desc">
                Configuración completa de Google Business: fotos, descripción, horarios y posicionamiento local.
              </p>
            </article>

            <article className="micro-card micro-review fade-up" aria-label="Review Boost">
              <div className="micro-bar" />
              <span className="micro-icon">⭐</span>
              <h4 className="micro-name">Review Boost</h4>
              <p className="micro-price">$44.900 setup</p>
              <p className="micro-monthly">+ $29.900/mes</p>
              <p className="micro-hook">Valor de mercado: $80.000 setup + $40.000/mes</p>
              <p className="micro-desc">
                WhatsApp automático post-servicio que pide reseña en Google. Más reseñas = más clientes nuevos.
              </p>
            </article>

            <article className="micro-card micro-zero-calls fade-up" aria-label="Zero Calls">
              <div className="micro-bar" />
              <span className="micro-icon">📅</span>
              <h4 className="micro-name">Zero Calls</h4>
              <p className="micro-price">$59.900 setup</p>
              <p className="micro-monthly">+ $29.900/mes</p>
              <p className="micro-hook">Agencias cobran desde $80.000 + $40.000/mes</p>
              <p className="micro-desc">
                Reservas online 24/7 integradas en tu web. El cliente agenda solo, tú recibes la notificación.
              </p>
            </article>

            <article className="micro-card micro-reactivation fade-up" aria-label="Reactivation">
              <div className="micro-bar" />
              <span className="micro-icon">📣</span>
              <h4 className="micro-name">Reactivation</h4>
              <p className="micro-price">$34.900 por campaña</p>
              <p className="micro-hook">Precio típico en el mercado: $40.000–$80.000</p>
              <p className="micro-desc">
                Campaña de WhatsApp a clientes que hace tiempo no visitan. Recupera ventas sin publicidad.
              </p>
            </article>

            <article className="micro-card micro-visibility fade-up" aria-label="Visibility Report">
              <div className="micro-bar" />
              <span className="micro-icon">📊</span>
              <h4 className="micro-name">Visibility Report</h4>
              <p className="micro-monthly">$39.900/mes</p>
              <p className="micro-hook">Incluido en planes SEO de $500.000+/mes</p>
              <p className="micro-desc">
                Reporte mensual de visitas al sitio, clics en Google y reseñas obtenidas. Saber es poder.
              </p>
            </article>

            <article className="micro-card micro-whatsapp fade-up" aria-label="WhatsApp CTA">
              <div className="micro-bar" />
              <span className="micro-icon">🔗</span>
              <h4 className="micro-name">WhatsApp CTA</h4>
              <p className="micro-price">$24.900 (pago único)</p>
              <p className="micro-hook">Rápido, directo, sin complicaciones</p>
              <p className="micro-desc">
                Botón flotante personalizado con mensaje prellenado según el tipo de negocio.
              </p>
            </article>
          </div>
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
