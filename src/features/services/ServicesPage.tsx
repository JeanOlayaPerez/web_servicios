import { useEffect } from 'react'
import ServicesSection from './ServicesSection'

export default function ServicesPage() {
  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return <ServicesSection standalone />
}

