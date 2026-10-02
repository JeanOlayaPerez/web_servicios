export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  tags: string[]
  image?: string
  demoUrl?: string
  repoUrl?: string
  client?: string
  industry?: string
  impact?: string
  result?: string
  socialProof?: { title: string; message: string }
  benefits: string[]
}

export const projects: Project[] = [
  {
    slug: 'felipe-tatuaje',
    title: 'Web para estudio de tatuajes',
    summary: 'Un portafolio visual que convierte visitas en nuevas consultas y citas.',
    description:
      'Sitio web para un estudio de tatuajes, diseñado para mostrar el trabajo del artista, transmitir la identidad del estudio y facilitar el contacto de quienes quieren reservar una cita.',
    tags: ['React', 'Firebase', 'CMS', 'Portafolio'],
    image: 'https://jeolayadev.github.io/felipe_tatuaje/gallery/inke-estudio-felipe.jpg',
    demoUrl: 'https://jeolayadev.github.io/felipe_tatuaje/',
    repoUrl: 'https://github.com/jeolayadev/felipe_tatuaje',
    client: 'Estudio de tatuajes',
    industry: 'Tatuaje y arte corporal',
    impact: 'Más visibilidad para el portafolio y un camino directo de la visita a la cita.',
    result: 'Más oportunidades de reserva',
    socialProof: {
      title: 'Clientes felices',
      message: 'Nos eligen y recomiendan. Creamos webs que también impulsan su negocio.'
    },
    benefits: ['Portafolio de tatuajes fácil de explorar', 'Identidad del estudio visible desde el primer vistazo', 'Contacto directo para nuevas citas']
  },
  {
    slug: 'friosan-pagina-web',
    title: 'Landing page para empresa de logística',
    summary: 'Sitio corporativo para empresa de logística y operaciones con enfoque comercial B2B.',
    description:
      'Landing page corporativa para una empresa de logística y operaciones, pensada para transmitir confianza, experiencia y capacidad operativa. La estructura comunica servicios, fortalece la imagen institucional y ayuda a convertir visitas en conversaciones comerciales reales.',
    tags: ['Next.js', 'TypeScript', 'SEO', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://friosan-pagina-web.vercel.app/',
    repoUrl: 'https://github.com/JeanOlayaPerez/friosan_pagina_web',
    client: 'Empresa de logística',
    industry: 'Logística y operación',
    impact: 'Fortalece la percepción de marca y facilita la captación de clientes B2B.',
    result: '+ confianza comercial',
    benefits: ['Narrativa institucional clara', 'Diseño orientado a conversión', 'Experiencia profesional para clientes corporativos']
  },
  {
    slug: 'midara-flowers',
    title: 'Landing page para floristería premium',
    summary: 'Sitio premium para marca floral con estética elegante y enfoque de ventas online.',
    description:
      'Diseño comercial para una floristería premium, pensado para vender más a través de una experiencia elegante, visualmente fuerte y clara. La propuesta combina branding, storytelling y estructura comercial para convertir visitas en pedidos.',
    tags: ['Vite', 'JavaScript', 'Branding', 'Ventas'],
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://midara-flowers.vercel.app/',
    repoUrl: 'https://github.com/JeanOlayaPerez/midara-flowers',
    client: 'Floristería premium',
    industry: 'Floral & retail',
    impact: 'Diseño premium que mejora el posicionamiento visual y la intención de compra.',
    result: '+ posicionamiento marca',
    benefits: ['Estética premium', 'Mayor claridad de oferta', 'Experiencia móvil optimizada']
  },
  {
    slug: 'proyecto-charlie',
    title: 'Landing page para firma contable',
    summary: 'Sitio institucional para firma contable con flujo de contacto, SEO y contenido de autoridad.',
    description:
      'Landing page para una firma contable orientada a captar clientes profesionales, transmitir confianza y explicar servicios de forma clara. La web incluye estructura de autoridad, mensajes de valor y un formulario pensado para generar leads calificados.',
    tags: ['Next.js', 'Tailwind', 'SMTP', 'SEO'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://proyecto-charlie.vercel.app/',
    repoUrl: 'https://github.com/JeanOlayaPerez/proyecto_charlie',
    client: 'Firma contable',
    industry: 'Servicios profesionales',
    impact: 'Mejora la confianza de marca y la captación de clientes empresariales.',
    result: '+ leads calificados',
    benefits: ['Contenido con autoridad', 'Formulario funcional', 'Estructura para SEO local']
  },
  {
    slug: 'friosan-logistica-local',
    title: 'Sistema de gestión logística para Friosan',
    summary: 'Plataforma para centralizar la operación y el seguimiento de camiones.',
    description:
      'Dashboard y plataforma para gestión de operaciones logísticas, con reportes, control de procesos y análisis operativo para empresas que necesitan mayor visibility del negocio. La solución está enfocada en mejorar la toma de decisiones y la eficiencia del equipo.',
    tags: ['React', 'Firebase', 'Dashboard', 'Operaciones'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://friosancrm.vercel.app/login',
    repoUrl: 'https://github.com/JeanOlayaPerez/pryecto-friosan-logistica-local',
    client: 'Operación logística',
    industry: 'Gestión operativa',
    impact: 'Optimiza la supervisión, control y operación del negocio.',
    result: '+ eficiencia operacional',
    benefits: ['Panel de gestión', 'Reporte de desempeño', 'Control de procesos críticos']
  },
]
