import { useEffect, useState } from 'react'

/**
 * Tracks vertical scroll progress (0–100) of the scrollable #viewport element.
 * Falls back to window scroll if no viewport element is found.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const getScroller = () =>
      (document.querySelector('main.viewport') as HTMLElement | null) ?? null

    const update = (el: HTMLElement) => {
      const { scrollTop, scrollHeight, clientHeight } = el
      const max = scrollHeight - clientHeight
      setProgress(max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0)
    }

    let scroller: HTMLElement | null = null

    const attach = () => {
      scroller = getScroller()
      if (!scroller) return false
      scroller.addEventListener('scroll', () => update(scroller!), { passive: true })
      update(scroller)
      return true
    }

    // Retry until the viewport element mounts (it may not be in DOM on first render)
    if (!attach()) {
      const id = window.setTimeout(() => attach(), 300)
      return () => window.clearTimeout(id)
    }

    return () => {
      scroller?.removeEventListener('scroll', () => update(scroller!))
    }
  }, [])

  return progress
}
