export type ServiceCategory = 'web' | 'apps' | 'support'

export type ServiceItem = {
  title: string
  price: string
  desc: string
  category: ServiceCategory
}

export const services: ServiceItem[] = [
  {
    title: 'Landing page comercial',
    price: '$180.000 a $260.000 CLP',
    desc: 'Página enfocada en captar clientes, presentar servicios y convertir visitas en consultas o ventas con diseño profesional y estructura optimizada.',
    category: 'web'
  },
  {
    title: 'Sitio institucional para empresa',
    price: '$300.000 a $550.000 CLP',
    desc: 'Web corporativa para reforzar autoridad, vender confianza y comunicar tu propuesta de valor a clientes, socios o inversionistas.',
    category: 'web'
  },
  {
    title: 'Catálogo o portafolio de servicios',
    price: '$350.000 a $700.000 CLP',
    desc: 'Presentación clara de tus servicios, productos, casos de éxito y contacto, ideal para negocios que necesitan vender online sin complejidad.',
    category: 'web'
  },
  {
    title: 'Tienda online básica',
    price: '$700.000 a $1.200.000 CLP',
    desc: 'E-commerce con catálogo, carrito, pagos y flujo simple para empezar a vender sin depender de sistemas complejos.',
    category: 'web'
  },
  {
    title: 'Sistema interno o dashboard',
    price: '$800.000 a $1.600.000 CLP',
    desc: 'Panel administrativo, manejo de usuarios, reportes, formularios y automatizaciones para optimizar procesos internos de tu negocio.',
    category: 'apps'
  },
  {
    title: 'Aplicación web a medida',
    price: '$1.500.000 a $3.000.000 CLP',
    desc: 'Plataforma digital personalizada para automatizar procesos, integrar datos, gestionar clientes y crear ventajas competitivas reales.',
    category: 'apps'
  },
  {
    title: 'Integración con WhatsApp y CRM',
    price: '$250.000 a $700.000 CLP',
    desc: 'Automatización de atención, lead capture, recordatorios y flujo de clientes para vender más con menos trabajo manual.',
    category: 'apps'
  },
  {
    title: 'Mantenimiento mensual',
    price: '$60.000 a $180.000 CLP al mes',
    desc: 'Soporte continuo para mantener tus sistemas funcionando, seguros y actualizados con mejoras pequeñas y monitoreo regular.',
    category: 'support'
  },
  {
    title: 'Soporte por proyecto',
    price: '$15.000 a $30.000 CLP por hora',
    desc: 'Asistencia puntual para cambios, correcciones, despliegue, mejora de SEO, optimización de formularios o capacitación técnica.',
    category: 'support'
  }
]
