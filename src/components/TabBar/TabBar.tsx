import { Tab } from './Tab'
import styles from './styles.module.css'

const tabs = [
  {
    index: 0,
    label: 'Proyectos',
    href: '/',
  },
  {
    index: 1,
    label: 'Sobre mí',
    href: '/sobre-mi',
  },
  {
    index: 2,
    label: 'Tecnologías',
    href: '/tecnologias',
  },
  {
    index: 3,
    label: 'Contacto',
    href: '/contacto',
  },
]

export const TabBar = () => {
  return (
    <div className={styles.tabs}>
      {
        tabs.map(({ index, label, href }) => (
          <Tab
            key={index}
            index={index}
            label={label}
            href={href}
          />
        ))
      }
    </div>
  )
}
