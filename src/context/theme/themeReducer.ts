import { ThemeState } from './'
import { ThemeType } from './themeActions'
import { ThemeMode } from '@constants'

export const themeReducer = (state: ThemeState, action: ThemeType): ThemeState => {
  switch (action.type) {
    case '[Theme] - Toggle mode':
      return {
        ...state,
        colorMode: (state.colorMode === ThemeMode.DARK)
          ? ThemeMode.LIGHT
          : ThemeMode.DARK
      }

    default:
      return state
  }
}