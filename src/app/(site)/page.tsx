'use client'

import { useTheme } from '@hooks/useTheme'
import { ThemeMode } from '@constants'
import styles from './page.module.css'

export default function Home() {
  const { colorMode, setColorMode } = useTheme()

  const handleSetColorMode = () => {
    const colorModeToSet = colorMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK

    setColorMode(colorModeToSet)
  }

  return (
    <main>
      <h1>Hola como estas</h1>
      <button onClick={handleSetColorMode}>dark</button>
    </main>
  )
}
