import { IconButton, ThemeBtn } from '@components'
import { DresanLogo } from '@components/Icons'
import styles from './styles.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <IconButton href='/' aria-label='Ir al inicio'>
        <DresanLogo />
      </IconButton>
      <ThemeBtn />
    </nav>
  )
}
