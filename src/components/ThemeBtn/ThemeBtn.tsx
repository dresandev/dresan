'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { IconLink } from '@components/IconLink'
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

  const handleToggleTheme = () => setTheme(oppositeTheme)

  return (
    <IconLink tabIndex={0} onClick={handleToggleTheme}>
      {
        isLight ? <SunIcon /> : <MoonIcon />
      }
    </IconLink>
  )
}
