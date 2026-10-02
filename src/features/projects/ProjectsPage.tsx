import ProjectsSection from './ProjectsSection'
import SiteFooter from '@components/SiteFooter'

export default function ProjectsPage() {
  return (
    <>
      <ProjectsSection
        standalone
        heading="Proyectos destacados"
        intro="Casos reales que demuestran cómo transformo ideas en productos digitales listos para operar."
        autoAdvance={false}
      />
      <SiteFooter />
    </>
  )
}
