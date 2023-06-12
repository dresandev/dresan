import { ThemeProvider } from '@providers/ThemeProvider'
import { Inter } from 'next/font/google'

import { UiProvider } from '@providers/UiProvider'
import { Navbar } from '@components/Navbar'
import { Footer } from '@components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dresan - Frontend Developer',
  description: 'Mi portafolio como desarrollador Frontend con mis proyectos más recientes. Dale un vistazo a mis trabajos y ponte en contacto conmigo si tienes algún proyecto en mente.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className} >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          <UiProvider>
            <Navbar />
            {children}
            <Footer />
          </UiProvider>
        </ThemeProvider>
      </body>
    </html >
  )
}
