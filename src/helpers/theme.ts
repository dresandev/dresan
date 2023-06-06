import { ThemeMode } from '@constants'

export const getInitialColorMode = () => {
  const persistedColorPreference = localStorage.getItem('color-mode')
  const hasPersistedPreference = typeof persistedColorPreference === 'string'

  if (hasPersistedPreference) {
    return persistedColorPreference as ThemeMode
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'

  if (hasMediaQueryPreference) {
    return mql.matches ? ThemeMode.DARK : ThemeMode.LIGHT
  }

  return ThemeMode.LIGHT
}
