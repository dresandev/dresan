import { useEffect, useReducer } from 'react'
import { ThemeContext } from './ThemeContext'
import { themeReducer } from './themeReducer'
import { toggleMode } from './themeActions'
import { getInitialColorMode } from '@helpers/theme'
import { ThemeMode } from '@constants'

export interface ThemeState {
  colorMode: ThemeMode
}

interface ThemeProviderProps {
  [propName: string]: any
}

export const ContextThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const THEME_INIT_STATE: ThemeState = {
    colorMode: getInitialColorMode(),
  }

  const [{ colorMode }, dispatch] = useReducer(themeReducer, THEME_INIT_STATE)

  useEffect(() => {
    localStorage.setItem('color-mode', colorMode)
  }, [colorMode])

  const setColorMode = () => {
    dispatch(toggleMode())
  }

  const value = {
    colorMode,
    setColorMode,
  }

  return (
    <ThemeContext.Provider
      value={value}
      {...props}
    />
  )
}
