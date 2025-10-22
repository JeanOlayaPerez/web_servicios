export type ServiceCategory = 'web' | 'apps' | 'support'

export type ServiceItem = {
  title: string
  price: string
  desc: string
  category: ServiceCategory
}

export const services: ServiceItem[] = [
  {
    title: 'Landing page básica',
    price: '$150.000 a $220.000 CLP',
    desc: 'Una página de alto impacto con tu información esencial, formulario de contacto y optimización para buscadores.',
    category: 'web'
  },
  {
    title: 'Sitio institucional',
    price: '$250.000 a $400.000 CLP',
    desc: 'Web corporativa con 4 a 6 secciones, diseño responsive y contenido administrable para mostrar servicios y equipo.',
    category: 'web'
  },
  {
    title: 'Catálogo de productos',
    price: '$300.000 a $500.000 CLP',
    desc: 'Catálogo navegable sin pagos, fichas de producto, filtros y formulario de cotización para tiendas que inician.',
    category: 'web'
  },
  {
    title: 'Tienda online básica',
    price: '$600.000 a $900.000 CLP',
    desc: 'E-commerce con carrito, WebPay u otro medio de pago, gestión de stock y automatización de correos.',
    category: 'web'
  },
  {
    title: 'Web con login y panel admin',
    price: '$600.000 a $1.000.000 CLP',
    desc: 'Sistema con autenticación, CRUD de contenidos, panel de administración y reportes para tu operación.',
    category: 'apps'
  },
  {
    title: 'Aplicación web avanzada',
    price: '$1.200.000 a $2.000.000 CLP',
    desc: 'Plataforma web a medida con módulos complejos, integraciones externas, seguridad y despliegue en la nube.',
    category: 'apps'
  },
  {
    title: 'Aplicación móvil simple',
    price: '$2.000.000 a $4.000.000 CLP',
    desc: 'App informativa o catálogo móvil (Android/iOS) conectada a tu sitio o backend, lista para publicar en stores.',
    category: 'apps'
  },
  {
    title: 'Aplicación móvil avanzada',
    price: '$4.000.000 a $6.500.000 CLP',
    desc: 'Aplicación móvil con login, base de datos, integración de APIs e interacción en tiempo real según tu negocio.',
    category: 'apps'
  },
  {
    title: 'Mantenimiento web',
    price: '$50.000 a $120.000 CLP mensuales',
    desc: 'Plan de soporte continuo: backups, mejoras, monitoreo y actualizaciones entre 5 y 10 horas al mes.',
    category: 'support'
  },
  {
    title: 'Soporte por hora',
    price: '$12.000 a $18.000 CLP por hora',
    desc: 'Bloques de horas para cambios menores, consultoría técnica, troubleshooting o capacitación puntual.',
    category: 'support'
  }
]
