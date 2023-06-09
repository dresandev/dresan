import { createContext } from 'react'

interface UiContextState {
  currentTabIndex: number
  onSetCurrentTabIndex: (currentTabIndex: number) => void
}

export const UiContext = createContext({} as UiContextState)