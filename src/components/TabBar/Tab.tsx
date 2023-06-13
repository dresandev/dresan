'use client'

import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { UiContext } from '@context/ui'
import styles from './styles.module.css'

interface TabProps {
  index: number
  label: string
  href: string
}

export const Tab: React.FC<TabProps> = ({ index, label, href }) => {
  const { currentTabIndex, onSetCurrentTabIndex } = useContext(UiContext)

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const handleSetCurrentTabIndex = () => {
    onSetCurrentTabIndex(index)
  }

  const active = currentTabIndex === index

  return (
    <Link
      className={`${styles.tab} ${active ? styles.active : ''}`}
      href={href}
      onClick={handleSetCurrentTabIndex}
    >
      <span>{label}</span>
    </Link>
  )
}
