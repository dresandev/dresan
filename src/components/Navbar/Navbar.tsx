import { Button } from '@components/Button'
import { ThemeBtn } from '@components/ThemeBtn'
import { DresanLogo } from '@components/Icons'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Button>
        <DresanLogo />
      </Button>
      <ThemeBtn />
    </nav>
  )
}
