import { useRef } from 'react'

export default function Carousel({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const scrollByPage = (dir: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    const width = el.clientWidth
    el.scrollBy({ left: dir * width, behavior: 'smooth' })
  }
  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef}>
        {children}
      </div>
      <div className="carousel-btns">
        <button className="nav btn" onClick={() => scrollByPage(-1)} aria-label="Anterior">◀</button>
        <button className="nav btn" onClick={() => scrollByPage(1)} aria-label="Siguiente">▶</button>
      </div>
    </div>
  )
}

