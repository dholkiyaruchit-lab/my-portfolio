import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'blue' | 'emerald' | 'violet' | 'orange' | 'rose' | 'cyan' | 'amber'

interface ThemeContextType {
  theme: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'blue', setTheme: () => {} })

export const themes: { id: Theme; color: string; label: string }[] = [
  { id: 'blue',   color: '#3b82f6', label: 'Blue' },
  { id: 'emerald', color: '#10b981', label: 'Emerald' },
  { id: 'violet', color: '#8b5cf6', label: 'Violet' },
  { id: 'orange', color: '#f97316', label: 'Orange' },
  { id: 'rose',   color: '#f43f5e', label: 'Rose' },
  { id: 'cyan',   color: '#06b6d4', label: 'Cyan' },
  { id: 'amber',  color: '#f59e0b', label: 'Amber' },
]

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('portfolio-theme') as Theme) || 'blue'
    }
    return 'blue'
  })

  const setTheme = (t: Theme) => {
    setThemeState(t)
    localStorage.setItem('portfolio-theme', t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'blue') {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', theme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
