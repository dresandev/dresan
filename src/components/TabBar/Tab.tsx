'use client'

import { useContext } from 'react'

import { UiContext } from '@context/ui'
import styles from './TabBar.module.css'

interface TabProps {
  index: number
  label: string
}

export const Tab: React.FC<TabProps> = ({ index, label }) => {
  const { currentTabIndex, onSetCurrentTabIndex } = useContext(UiContext)

  const handleSetCurrentTabIndex = () => {
    onSetCurrentTabIndex(index)
  }

  const active = currentTabIndex === index

  return (
    <button
      className={`${styles.tab} ${active && styles.active}`}
      onClick={handleSetCurrentTabIndex}
    >
      <span>{label}</span>
    </button>
  )
}
