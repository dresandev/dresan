import { IconLink } from '@components/IconLink'
import { ThemeBtn } from '@components/ThemeBtn'
import { DresanLogo } from '@components/Icons'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <IconLink href='/'>
        <DresanLogo />
      </IconLink>
      <ThemeBtn />
    </nav>
  )
}
