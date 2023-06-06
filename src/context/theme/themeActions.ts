export type ThemeType =
  | { type: '[Theme] - Toggle mode' }

export const toggleMode = (): ThemeType => ({
  type: '[Theme] - Toggle mode'
})
