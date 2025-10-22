export type Project = {
  slug: string
  title: string
  summary: string
  tags: string[]
  image?: string
}

export const projects: Project[] = [
  {
    slug: 'dashboard-ventas',
    title: 'Dashboard de Ventas',
    summary: 'SPA con filtros, gráficos y consultas a API/SQL.',
    tags: ['JS', 'Node', 'SQL'],
    image: 'https://images.unsplash.com/photo-1551281044-8f87a0ae8a36?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'scraper-noticias',
    title: 'Scraper de Noticias',
    summary: 'Extracción, limpieza y resumen de titulares con Python.',
    tags: ['Python', 'Requests'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'landing-interactiva',
    title: 'Landing Interactiva',
    summary: 'Animaciones, parallax y optimización móvil.',
    tags: ['HTML', 'CSS', 'JS'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop'
  }
]
