import { UiContextState } from './'

export type UiContextType =
  | { type: '[UiContext] - setCurrentTabIndex', payload: number }

export const uiReducer = (state: UiContextState, action: UiContextType): UiContextState => {
  switch (action.type) {
    case '[UiContext] - setCurrentTabIndex':
      return {
        ...state,
        currentTabIndex: action.payload,
      }

    default:
      return state
  }
}