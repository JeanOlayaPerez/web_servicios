import React, { useEffect, useMemo, useState } from 'react'

type CarouselProps = {
  children: React.ReactNode
  autoAdvance?: boolean
  interval?: number
}

export default function Carousel({ children, autoAdvance = false, interval = 3600 }: CarouselProps) {
  const slides = useMemo(() => React.Children.toArray(children), [children])
  const length = slides.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const delay = Math.max(interval, 2200)

  const go = (dir: 1 | -1) => {
    if (!length) return
    setIndex((prev) => (prev + dir + length) % length)
  }

  const Visible = slides[index] ?? null

  useEffect(() => {
    if (length === 0) {
      setIndex(0)
      return
    }
    if (index > length - 1) {
      setIndex(0)
    }
  }, [length, index])

  useEffect(() => {
    if (!autoAdvance || length <= 1) return
    if (paused) return
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % length)
    }, delay)
    return () => window.clearInterval(id)
  }, [autoAdvance, length, delay, paused, index])

  return (
    <div
      className="carousel"
      aria-roledescription="Carrusel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
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
