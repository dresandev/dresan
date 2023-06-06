import { ThemeProvider } from '@providers/ThemeProvider'
import { Root } from '@components/Root'
import './globals.css'

export const metadata = {
  title: 'Dresan - Frontend Developer 🥸',
  description: 'Mi portafolio como desarrollador Frontend con mis proyectos más recientes. Dale un vistazo a mis trabajos y ponte en contacto conmigo si tienes algún proyecto en mente.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Root>
        {children}
      </Root>
    </ThemeProvider>
  )
}
