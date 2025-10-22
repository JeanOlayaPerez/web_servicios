import React, { useEffect, useMemo, useRef, useState } from 'react'

type CarouselProps = {
  children: React.ReactNode
}

export default function Carousel({ children }: CarouselProps) {
  const slides = useMemo(() => React.Children.toArray(children), [children])
  const length = slides.length

  const extended = useMemo(() => {
    if (length <= 1) return slides
    return [slides[length - 1], ...slides, slides[0]]
  }, [slides, length])

  const [index, setIndex] = useState(length > 1 ? 1 : 0)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const [slideWidth, setSlideWidth] = useState(0)
  const stageRef = useRef<HTMLDivElement>(null)
  const animating = useRef(false)

  useEffect(() => {
    setIndex(length > 1 ? 1 : 0)
  }, [length])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const updateSize = () => {
      setSlideWidth(stage.clientWidth)
    }

    updateSize()
    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(updateSize)
      observer.observe(stage)
      return () => observer.disconnect()
    }

    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    if (!transitionEnabled) {
      const id = requestAnimationFrame(() => setTransitionEnabled(true))
      return () => cancelAnimationFrame(id)
    }
  }, [transitionEnabled])

  const handleNext = () => {
    if (length <= 1 || animating.current) return
    animating.current = true
    setIndex((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (length <= 1 || animating.current) return
    animating.current = true
    setIndex((prev) => prev - 1)
  }

  const handleTransitionEnd = () => {
    if (length <= 1) return
    if (index === extended.length - 1) {
      setTransitionEnabled(false)
      setIndex(1)
    } else if (index === 0) {
      setTransitionEnabled(false)
      setIndex(length)
    }
    animating.current = false
  }

  const visibleIndex = length > 1 ? (index - 1 + length) % length : 0
  const transform = `translateX(-${index * slideWidth}px)`

  return (
    <div className="carousel" aria-roledescription="Carrusel">
      <div className="carousel-stage" ref={stageRef}>
        <div
          className="carousel-track"
          style={{
            transform,
            transition: transitionEnabled ? 'transform 0.5s cubic-bezier(.22,.68,.34,1)' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((item, i) => (
            <div
              className="carousel-slide"
              key={i}
              style={{ width: slideWidth || '100%', minWidth: slideWidth || '100%' }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-btns">
        <button className="nav btn" onClick={handlePrev} aria-label="Proyecto anterior">&lt;</button>
        <button className="nav btn" onClick={handleNext} aria-label="Proyecto siguiente">&gt;</button>
      </div>
      {length > 1 && (
        <div className="carousel-dots" role="tablist" aria-label="Proyectos">
          {slides.map((_, i) => (
            <span key={i} className={i === visibleIndex ? 'dot active' : 'dot'} aria-hidden />
          ))}
        </div>
      )}
    </div>
  )
}
