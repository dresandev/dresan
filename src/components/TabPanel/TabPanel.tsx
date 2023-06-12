'use client'

import { useContext } from 'react'
import { UiContext } from '@context/ui'
import styles from './TabPanel.module.css'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
}

export const TabPanel: React.FC<TabPanelProps> = ({ children, index }) => {
  const { currentTabIndex } = useContext(UiContext)

  return (
    <div className={`${currentTabIndex !== index && styles.hidden}`}>
      {children}
    </div>
  )
}
