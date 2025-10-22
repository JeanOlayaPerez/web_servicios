import { useEffect, useRef, useState } from 'react'

export function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true)
      else setInView(false)
    }, options ?? { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [options])

  return { ref, inView }
}

