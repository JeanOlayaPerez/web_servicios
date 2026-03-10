export type Project = {
  slug: string
  title: string
  summary: string
  tags: string[]
  image?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'proyecto-charlie',
    title: 'Proyecto Charlie',
    summary: 'Sitio web corporativo desplegado y publicado en Vercel.',
    tags: ['React', 'Vite', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://proyecto-charlie.vercel.app/'
  },
  {
    slug: 'dashboard-ventas',
    title: 'Dashboard de Ventas',
    summary: 'SPA con filtros dinámicos, gráficos interactivos y consultas a API/SQL.',
    tags: ['JavaScript', 'Node', 'SQL'],
    image: 'https://images.unsplash.com/photo-1551281044-8f87a0ae8a36?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'scraper-noticias',
    title: 'Scraper de Noticias',
    summary: 'Extracción, limpieza y resumen automático de titulares con Python.',
    tags: ['Python', 'Requests'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'landing-interactiva',
    title: 'Landing Interactiva',
    summary: 'Animaciones, parallax y optimización móvil para captar más leads.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop'
  }
]
