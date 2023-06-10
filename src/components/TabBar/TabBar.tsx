import { Tab } from './Tab'
import styles from './TabBar.module.css'

const tabs = [
  {
    index: 0,
    label: 'Proyectos',
  },
  {
    index: 1,
    label: 'Sobre mí',
  },
  {
    index: 2,
    label: 'Tecnologías',
  },
  {
    index: 3,
    label: 'Contacto',
  },
]

export const TabBar = () => {
  return (
    <div className={styles.tabs}>
      {
        tabs.map(({ index, label }) => (
          <Tab
            key={index}
            index={index}
            label={label}
          />
        ))
      }
    </div>
  )
}
