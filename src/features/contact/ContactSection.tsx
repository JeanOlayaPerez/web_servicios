import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  const fieldVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.08, duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }
    })
  }

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
            <div
              key={i}
              className="firefly"
              style={{ left: `${(i * 11) % 100}%`, top: `${(i * 7) % 60}%`, animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
      <div className="content">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ¿Colaboramos?
        </motion.h2>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Si tu empresa necesita más ventas, mejor presencia digital o un sistema que ahorre tiempo, te ayudo a diseñarlo y construirlo.
        </motion.p>

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.form
              key="form"
              className="form"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14, transition: { duration: 0.22 } }}
              transition={{ duration: 0.4, delay: 0.15 }}
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            >
              {[
                { i: 0, content: (
                  <div className="field" key="name">
                    <label htmlFor="name">Nombre</label>
                    <input id="name" name="name" className="input" placeholder="Tu nombre" required />
                  </div>
                )},
                { i: 1, content: (
                  <div className="field" key="email">
                    <label htmlFor="email">Correo</label>
                    <input id="email" type="email" name="email" className="input" placeholder="tu@email.com" required />
                  </div>
                )},
                { i: 2, content: (
                  <div className="field" key="interest">
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
                )},
                { i: 3, content: (
                  <div className="field" key="message">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" className="textarea" placeholder="Cuéntame tu idea, plazos y referencias" required />
                    <span className="helper">Gracias por visitar mi página, ¡vuelve pronto!</span>
                  </div>
                )},
              ].map(({ i, content }) => (
                <motion.div key={i} custom={i} variants={fieldVariants} initial="hidden" animate="visible">
                  {content}
                </motion.div>
              ))}
              <div className="actions">
                <motion.button
                  className="btn cta"
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Solicitar presupuesto
                </motion.button>
                <a className="btn ghost" href="https://wa.me/56987654321?text=Hola%20Jean,%20quiero%20cotizar%20un%20proyecto%20digital%20para%20mi%20empresa." target="_blank" rel="noreferrer noopener">
                  Chatear por WhatsApp
                </a>
                <a className="btn ghost" href="mailto:hola@jean.dev">O envíame un correo</a>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.48, ease: [0.34, 1.56, 0.64, 1] }}
              className="contact-success"
            >
              <div className="contact-success-icon" aria-hidden>✅</div>
              <p className="subtitle">¡Gracias! Tu mensaje fue registrado. Me pondré en contacto pronto.</p>
              <div className="actions">
                <a
                  className="btn"
                  href="#bienvenida"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('bienvenida')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                >
                  Volver al inicio
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
