export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  tags: string[]
  image?: string
  demoUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'friosan-pagina-web',
    title: 'Friosan',
    summary: 'Sitio corporativo para empresa de logística y operaciones.',
    description:
      'Prototipo de sitio institucional para Friosan, pensado para comunicar credibilidad, servicios y liderazgo operativo. El proyecto incluye estructura de marca, narrativa comercial y componentes visuales orientados a captar clientes B2B y reforzar la presencia digital de la empresa.',
    tags: ['Next.js', 'TypeScript', 'SEO', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://friosan-pagina-web.vercel.app/',
    repoUrl: 'https://github.com/JeanOlayaPerez/friosan_pagina_web'
  },
  {
    slug: 'midara-flowers',
    title: 'Midara Flowers',
    summary: 'Landing comercial y experiencia visual para una marca floral premium.',
    description:
      'El proyecto Midara Flowers busca reforzar la identidad de marca con una propuesta digital elegante, clara y muy enfocada en ventas. Incluye narrativa de marca, presentación visual de productos, galería, y una experiencia que favorece conversión y captación de leads.',
    tags: ['Vite', 'JavaScript', 'Branding', 'Ventas'],
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://midara-flowers.vercel.app/',
    repoUrl: 'https://github.com/JeanOlayaPerez/midara-flowers'
  },
  {
    slug: 'proyecto-charlie',
    title: 'Proyecto Charlie',
    summary: 'Sitio institucional para firma contable con formulario de contacto y SEO.',
    description:
      'Proyecto Charlie es un sitio web corporativo para la firma Acounting, enfocado en captar clientes B2B, explicar servicios y mejorar la credibilidad de la marca. La solución incluye contenido estructurado, landing sections, blog, rutas y flujo de contacto operable con SMTP.',
    tags: ['Next.js', 'Tailwind', 'SMTP', 'SEO'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://proyecto-charlie.vercel.app/',
    repoUrl: 'https://github.com/JeanOlayaPerez/proyecto_charlie'
  },
  {
    slug: 'friosan-logistica-local',
    title: 'Friosan Logística Local',
    summary: 'Sistema interno de logística con panel de gestión y reportes operativos.',
    description:
      'Aplicación para gestión local de logística y supervisión operativa. El proyecto incluye reportes, control de usuarios, analítica y gestión de procesos clave para empresas que necesitan más control sobre flotas, operaciones y toma de decisiones en tiempo real.',
    tags: ['React', 'Firebase', 'Dashboard', 'Operaciones'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://pryecto-friosan-logistica-local.vercel.app/',
    repoUrl: 'https://github.com/JeanOlayaPerez/pryecto-friosan-logistica-local'
  },
  {
    slug: 'felipe-tatuaje',
    title: 'Felipe Tatuaje',
    summary: 'Web para estudio de tatuaje con galería, blog y gestión de contenido.',
    description:
      'Sitio para estudio de tatuaje con enfoque en estética, portfolio y posicionamiento personal. El proyecto está preparado para presentar trabajos, mostrar la identidad del artista y ofrecer una estructura escalable para contenido, administración y comunidad.',
    tags: ['React', 'Firebase', 'CMS', 'Portafolio'],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
    repoUrl: 'https://github.com/jeolayadev/felipe_tatuaje'
  }
]
