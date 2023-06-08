import { ThemeProvider } from '@providers/ThemeProvider'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dresan - Frontend Developer 🥸',
  description: 'Mi portafolio como desarrollador Frontend con mis proyectos más recientes. Dale un vistazo a mis trabajos y ponte en contacto conmigo si tienes algún proyecto en mente.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className} >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
