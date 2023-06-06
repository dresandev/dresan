'use client'

import { Inter } from 'next/font/google'
import { useTheme } from '@hooks/useTheme'

const inter = Inter({ subsets: ['latin'] })

interface RootProps {
  children: React.ReactNode
}

export const Root: React.FC<RootProps> = ({ children }) => {
  const { colorMode } = useTheme()

  return (
    <html lang="en" color={colorMode}>
      <body className={`${inter.className} ${colorMode}`}>
        {children}
      </body>
    </html>
  )
}
