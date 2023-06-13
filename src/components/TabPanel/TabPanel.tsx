'use client'

import { useContext, useEffect, useState } from 'react'
import { UiContext } from '@context/ui'
import styles from './styles.module.css'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
}

export const TabPanel: React.FC<TabPanelProps> = ({ children, index }) => {
  const { currentTabIndex } = useContext(UiContext)

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className={styles.loadingContainer}></div>

  return (
    <div className={`${currentTabIndex !== index && styles.hidden}`}>
      {children}
    </div>
  )
}
