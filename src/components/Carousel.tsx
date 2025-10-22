import React, { useMemo, useState } from 'react'

type CarouselProps = {
  children: React.ReactNode
}

export default function Carousel({ children }: CarouselProps) {
  const slides = useMemo(() => React.Children.toArray(children), [children])
  const length = slides.length
  const [index, setIndex] = useState(0)

  const go = (dir: 1 | -1) => {
    if (!length) return
    setIndex((prev) => (prev + dir + length) % length)
  }

  const Visible = slides[index] ?? null

  return (
    <div className="carousel" aria-roledescription="Carrusel">
      <div className="carousel-stage">
        <div className="carousel-slide fade-in" key={index}>
          {Visible}
        </div>
      </div>
      {length > 1 && (
        <>
          <div className="carousel-btns">
            <button className="nav btn" onClick={() => go(-1)} aria-label="Proyecto anterior">&lt;</button>
            <button className="nav btn" onClick={() => go(1)} aria-label="Proyecto siguiente">&gt;</button>
          </div>
          <div className="carousel-dots" role="tablist" aria-label="Proyectos">
            {slides.map((_, i) => (
              <button
                key={i}
                className={i === index ? 'dot active' : 'dot'}
                onClick={() => setIndex(i)}
                aria-label={`Ir al proyecto ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
