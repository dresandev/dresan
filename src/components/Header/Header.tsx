import { Link } from '@components/Link'
import { BriefcaseIcon, CakeIcon, CalendarIcon } from '@components/Icons'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Frontend Developer</h1>
      <p className={styles.subtitle}>Javier Andres - Dresan</p>
      <p>Actualmente trabajando con el ecosistema de React ✨</p>

      <div className={styles.info}>
        <span>
          <BriefcaseIcon /> Disponible
        </span>
        <span>
          <CakeIcon /> Noviembre 8
        </span>
        <span>
          <CalendarIcon /> Disponible
        </span>
      </div>

      <p>
        Dale un vistazo a mi{' '}
        <Link
          href='/files/Javier Solarte CV - Frontend.pdf'
          target='_blank'
        >
          Curriculum Vitae
        </Link>
      </p>
    </header>
  )
}
