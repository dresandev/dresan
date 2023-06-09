'use client'

import { ContextUiProvider } from '@context/ui'

export const UiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContextUiProvider>
      {children}
    </ContextUiProvider>
  )
}
