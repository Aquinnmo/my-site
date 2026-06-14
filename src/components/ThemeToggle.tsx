import { useEffect, useState } from 'react'
import './ThemeToggle.css'

type Theme = 'light' | 'dark'

function SunIcon() {
  return (
    <svg className="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 18.25A6.25 6.25 0 1 0 12 5.5a6.25 6.25 0 0 0 0 12.5Z" />
      <path d="M12 1.5v2.4M12 20.1v2.4M4.58 4.58l1.7 1.7M17.72 17.72l1.7 1.7M1.5 12h2.4M20.1 12h2.4M4.58 19.42l1.7-1.7M17.72 6.28l1.7-1.7" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.3 15.64A8.7 8.7 0 0 1 8.36 3.7a.72.72 0 0 0-.72-1.1 10.3 10.3 0 1 0 11.76 11.76.72.72 0 0 0-1.1-.72Z" />
    </svg>
  )
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      {theme === 'dark' ? 'Day' : 'Night'}
    </button>
  )
}
