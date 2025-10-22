import { useState } from 'react'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  return (
    <section id="contacto" className="section" aria-label="Contacto">
      <div className="bg forest-bg jungle-bg">
        <div className="trees" aria-hidden="true">
          <div className="tree t1" data-depth="8"></div>
          <div className="tree t2" data-depth="12"></div>
          <div className="tree t3" data-depth="6"></div>
        </div>
        <div className="vines" aria-hidden="true">
          <div className="vine" />
          <div className="vine v2" />
          <div className="vine v3" />
        </div>
        <div className="fireflies" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="firefly" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*60}%`, animationDelay: `${i*0.2}s` }} />
          ))}
        </div>
      </div>
      <div className="content">
        <h2 className="title">¿Colaboramos?</h2>
        <p className="subtitle">Cuéntame qué necesitas. Respondo pronto.</p>
        {!sent ? (
          <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <input id="name" name="name" className="input" placeholder="Tu nombre" required />
            </div>
            <div className="field">
              <label htmlFor="email">Correo</label>
              <input id="email" type="email" name="email" className="input" placeholder="tu@email.com" required />
            </div>
            <div className="field">
              <label htmlFor="interest">Servicio de interés</label>
              <select id="interest" name="interest" className="select" defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                <option>Landing Page</option>
                <option>Sitio Web</option>
                <option>Web App</option>
                <option>E‑commerce</option>
                <option>API/Backend</option>
                <option>Automatización & Data</option>
                <option>Mantenimiento</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" className="textarea" placeholder="Cuéntame tu idea, plazos y referencias" required />
              <span className="helper">Gracias por visitar mi página, ¡vuelve pronto!</span>
            </div>
            <div className="actions">
              <button className="btn cta" type="submit">Enviar</button>
              <a className="btn ghost" href="mailto:jan.perez@example.com">O envíame un correo</a>
            </div>
          </form>
        ) : (
          <div>
            <p className="subtitle">¡Gracias! Tu mensaje fue registrado. Me pondré en contacto pronto.</p>
            <div className="actions">
              <a className="btn" href="#bienvenida">Volver al inicio</a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
