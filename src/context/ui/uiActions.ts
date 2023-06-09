import { UiContextType } from './uiReducer'

export const setCurrentTabIndex = (newIndex: number): UiContextType => ({
  type: '[UiContext] - setCurrentTabIndex',
  payload: newIndex,
})
