import { IconLink, ThemeBtn } from '@components'
import { DresanLogo } from '@components/Icons'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <IconLink href='/' aria-label='Ir al inicio'>
        <DresanLogo />
      </IconLink>
      <ThemeBtn />
    </nav>
  )
}
