import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

type ThemeCtx = {
  night: boolean
  toggle: () => void
  setNight: (v: boolean) => void
}

const Ctx = createContext<ThemeCtx | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [night, setNight] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setNight(saved === 'night')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('is-night', night)
    const meta = document.getElementById('theme-color-meta')
    meta?.setAttribute('content', night ? '#0a1220' : '#3aa0ff')
    localStorage.setItem('theme', night ? 'night' : 'day')
  }, [night])

  const value = useMemo(() => ({ night, toggle: () => setNight(v => !v), setNight }), [night])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useTheme() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
