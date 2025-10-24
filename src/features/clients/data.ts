export type ClientWin = {
  name: string
  industry: string
  summary: string
  impact: string
  year: string
  link?: string
}

export const clientWins: ClientWin[] = [
  {
    name: 'FitLife Studio',
    industry: 'Wellness & Fitness',
    summary: 'Plataforma de reservas y agenda para clases híbridas con pagos automatizados.',
    impact: '+38% de asistencia mensual y 0% de overbooking gracias a recordatorios inteligentes.',
    year: '2024',
    link: 'https://fitlife.example.com'
  },
  {
    name: 'Bazar Andino',
    industry: 'Retail / Ecommerce',
    summary: 'Catálogo escalable con integración logística y dashboards de ventas en tiempo real.',
    impact: 'Duplicó su ticket promedio en 10 semanas y operan 100% online.',
    year: '2023',
    link: 'https://bazarandino.example.com'
  },
  {
    name: 'InnovaEdu',
    industry: 'Edtech',
    summary: 'Aula virtual gamificada con reportes para directivos y app complementaria móvil.',
    impact: '6.000 estudiantes activos y retención mensual del 92%.',
    year: '2022',
    link: 'https://innovaedu.example.com'
  }
]
