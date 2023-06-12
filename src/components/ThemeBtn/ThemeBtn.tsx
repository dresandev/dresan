'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IconLink } from '@components/IconButton'
import { MoonIcon, SunIcon } from '@components/Icons'

export const ThemeBtn = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <IconLink></IconLink>
  )

  const isLight = resolvedTheme === 'light'
  const oppositeTheme = isLight ? 'dark' : 'light'
  const spanishThemeName = isLight ? 'oscuro' : 'claro'

  const handleToggleTheme = () => setTheme(oppositeTheme)

  return (
    <IconLink
      title={`Cambiar a tema ${spanishThemeName}`}
      tabIndex={0}
      onClick={handleToggleTheme}
    >
      {
        isLight ? <SunIcon /> : <MoonIcon />
      }
    </IconLink>
  )
}
