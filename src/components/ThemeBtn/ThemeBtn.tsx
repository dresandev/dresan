'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@components/Button'
import { MoonIcon, SunIcon } from '@components/Icons'

export const ThemeBtn = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <Button></Button>
  )

  const isLight = resolvedTheme === 'light'
  const oppositeTheme = isLight ? 'dark' : 'light'

  const handleToggleTheme = () => setTheme(oppositeTheme)

  return (
    <Button onClick={handleToggleTheme}>
      {
        isLight ? <SunIcon /> : <MoonIcon />
      }
    </Button>
  )
}
