import { createContext } from 'react'
import { ThemeMode } from '@constants'

interface ThemeContextProps {
  colorMode: ThemeMode;
  setColorMode: (value: ThemeMode) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps)
