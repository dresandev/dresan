import { useReducer } from 'react'
import { UiContext, uiReducer, setCurrentTabIndex } from './'
import { getRouteIndex } from '@helpers/getRouteIndex'

export interface UiContextState {
  currentTabIndex: number
}

const UI_INITIAL_STATE: UiContextState = {
  currentTabIndex: getRouteIndex(),
}

export interface Props {
  [propName: string]: any
}

export const ContextUiProvider = (props: Props) => {
  const [{ currentTabIndex }, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const onSetCurrentTabIndex = (currentTabIndex: number) => {
    dispatch(setCurrentTabIndex(currentTabIndex))
  }

  const value = {
    currentTabIndex,
    onSetCurrentTabIndex
  }

  return (
    <UiContext.Provider
      value={value}
      {...props}
    />
  )
}