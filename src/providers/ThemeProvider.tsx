'use client'

import { ContextThemeProvider } from '@context/theme'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ContextThemeProvider>
      {children}
    </ContextThemeProvider>
  )
}
