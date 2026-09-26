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
  benefits: string[]
}

export const projects: Project[] = [
  {
    slug: 'friosan-pagina-web',
    title: 'Friosan',
    summary: 'Sitio corporativo para empresa de logística y operaciones con enfoque comercial B2B.',
    description:
      'Prototipo de sitio institucional para Friosan, pensado para comunicar credibilidad, servicios y liderazgo operativo. La propuesta está enfocada en reforzar la presencia digital de la empresa, generar confianza y convertir visitas en oportunidades de negocio.',
    tags: ['Next.js', 'TypeScript', 'SEO', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://friosan-pagina-web.vercel.app/',
    repoUrl: 'https://github.com/JeanOlayaPerez/friosan_pagina_web',
    client: 'Friosan',
    industry: 'Logística y operación',
    impact: 'Fortalece la percepción de marca y facilita la captación de clientes B2B.',
    result: '+ confianza comercial',
    benefits: ['Narrativa institucional clara', 'Diseño orientado a conversión', 'Experiencia profesional para clientes corporativos']
  },
  {
    slug: 'midara-flowers',
    title: 'Midara Flowers',
    summary: 'Landing premium para marca floral con estética elegante y enfoque comercial.',
    description:
      'El proyecto busca reforzar la identidad de marca con una experiencia visual elegante, clara y muy orientada a ventas. La web combina narración, fotografía y estructura comercial para hacer más fácil la decisión de compra.',
    tags: ['Vite', 'JavaScript', 'Branding', 'Ventas'],
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://midara-flowers.vercel.app/',
    repoUrl: 'https://github.com/JeanOlayaPerez/midara-flowers',
    client: 'Midara Flowers',
    industry: 'Floral & retail',
    impact: 'Diseño que transmite premium y mejora la conversión visual.',
    result: '+ posicionamiento marca',
    benefits: ['Estética premium', 'Mayor claridad de oferta', 'Experiencia móvil optimizada']
  },
  {
    slug: 'proyecto-charlie',
    title: 'Proyecto Charlie',
    summary: 'Sitio institucional para firma contable con flujo de contacto, SEO y contenido de autoridad.',
    description:
      'Proyecto Charlie es una web corporativa enfocada en captar clientes B2B, explicar servicios y mejorar la credibilidad de la marca. La solución incluye contenido estructurado, rutas de navegación claras y un flujo de contacto listo para captar leads.',
    tags: ['Next.js', 'Tailwind', 'SMTP', 'SEO'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://proyecto-charlie.vercel.app/',
    repoUrl: 'https://github.com/JeanOlayaPerez/proyecto_charlie',
    client: 'Acounting',
    industry: 'Servicios profesionales',
    impact: 'Mejora la confianza de marca y la captación de clientes empresariales.',
    result: '+ leads calificados',
    benefits: ['Contenido con autoridad', 'Formulario funcional', 'Estructura para SEO local']
  },
  {
    slug: 'friosan-logistica-local',
    title: 'Friosan Logística Local',
    summary: 'Sistema interno orientado a control operativo, supervisión y reporting logístico.',
    description:
      'Aplicación para gestión local de logística y supervisión operativa. El proyecto centraliza reportes, permisos, control de usuarios y analítica para empresas que requieren más control y mejor toma de decisiones en operaciones.',
    tags: ['React', 'Firebase', 'Dashboard', 'Operaciones'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://pryecto-friosan-logistica-local.vercel.app/',
    repoUrl: 'https://github.com/JeanOlayaPerez/pryecto-friosan-logistica-local',
    client: 'Friosan',
    industry: 'Gestión operativa',
    impact: 'Optimiza la supervisión, control y operación del negocio.',
    result: '+ eficiencia operacional',
    benefits: ['Panel de gestión', 'Reporte de desempeño', 'Control de procesos críticos']
  },
  {
    slug: 'felipe-tatuaje',
    title: 'Felipe Tatuaje',
    summary: 'Portafolio de arte y estudio con identidad visual fuerte y contenido escalable.',
    description:
      'Sitio para estudio de tatuaje con enfoque en estética, portfolio y posicionamiento personal. El proyecto incluye experiencia visual fuerte, presentación profesional del trabajo y estructura preparada para crecer con galerías, contenido y comunidad.',
    tags: ['React', 'Firebase', 'CMS', 'Portafolio'],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
    repoUrl: 'https://github.com/jeolayadev/felipe_tatuaje',
    client: 'Felipe Tatuaje',
    industry: 'Arte y marca personal',
    impact: 'Eleva la marca personal y facilita la conversión de interesados a clientes.',
    result: '+ presencia profesional',
    benefits: ['Portfolio visual', 'Contenido escalable', 'Identidad fuerte']
  }
]
