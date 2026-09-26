import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type CarouselProps = {
  children: React.ReactNode
  autoAdvance?: boolean
  interval?: number
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.97,
    filter: 'blur(3px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 60 : -60,
    opacity: 0,
    scale: 0.97,
    filter: 'blur(3px)',
    transition: { duration: 0.28, ease: [0.55, 0, 1, 0.45] },
  }),
}

export default function Carousel({ children, autoAdvance = false, interval = 3600 }: CarouselProps) {
  const slides = useMemo(() => React.Children.toArray(children), [children])
  const length = slides.length
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const delay = Math.max(interval, 2200)
  const dragStart = useRef(0)

  const go = (direction: 1 | -1) => {
    if (!length) return
    setDir(direction)
    setIndex((prev) => (prev + direction + length) % length)
  }

  const goTo = (i: number) => {
    setDir(i > index ? 1 : -1)
    setIndex(i)
  }

  useEffect(() => {
    if (length === 0) { setIndex(0); return }
    if (index > length - 1) { setIndex(0) }
  }, [length, index])

  useEffect(() => {
    if (!autoAdvance || length <= 1 || paused) return
    const id = window.setInterval(() => {
      setDir(1)
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
      onPointerDown={(e) => { dragStart.current = e.clientX }}
      onPointerUp={(e) => {
        const delta = dragStart.current - e.clientX
        if (Math.abs(delta) > 40) go(delta > 0 ? 1 : -1)
      }}
    >
      <div className="carousel-stage" style={{ overflow: 'hidden', position: 'relative' }}>
        <AnimatePresence custom={dir} mode="wait" initial={false}>
          <motion.div
            key={index}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="carousel-slide"
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>
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
