import React, { useEffect, useMemo, useRef, useState } from 'react'

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
  const dragStart = useRef(0)

  const go = (direction: 1 | -1) => {
    if (!length) return
    setIndex((prev) => (prev + direction + length) % length)
  }

  const goTo = (i: number) => {
    setIndex(i)
  }

  useEffect(() => {
    if (length === 0) {
      setIndex(0)
      return
    }

    if (index >= length) {
      setIndex(0)
    }
  }, [length, index])

  useEffect(() => {
    if (!autoAdvance || length <= 1 || paused) return

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % length)
    }, delay)

    return () => window.clearInterval(id)
  }, [autoAdvance, length, delay, paused])

  return (
    <div
      className="carousel"
      aria-roledescription="Carrusel"
      aria-live="polite"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onPointerDown={(e) => {
        dragStart.current = e.clientX
      }}
      onPointerUp={(e) => {
        const delta = dragStart.current - e.clientX
        if (Math.abs(delta) > 40) {
          go(delta > 0 ? 1 : -1)
        }
      }}
    >
      <div className="carousel-stage" aria-label="Vista del carrusel">
        <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <div className="carousel-slide" key={`${(slide as { key?: string })?.key ?? i}`}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      {length > 1 && (
        <>
          <div className="carousel-btns">
            <button className="nav btn" type="button" onClick={() => go(-1)} aria-label="Proyecto anterior">
              &lt;
            </button>
            <button className="nav btn" type="button" onClick={() => go(1)} aria-label="Proyecto siguiente">
              &gt;
            </button>
          </div>
          <div className="carousel-dots" role="tablist" aria-label="Proyectos">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === index ? 'dot active' : 'dot'}
                onClick={() => goTo(i)}
                aria-label={`Ir al proyecto ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
