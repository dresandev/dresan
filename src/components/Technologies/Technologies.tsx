import { technologies } from '@data'
import { Technology } from './Technology'
import styles from './styles.module.css'

export const Technologies = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Mi stack</h2>
      {
        technologies.map(({ name }) => (
          <Technology
            key={name}
            name={name}
          />
        ))
      }
    </section>
  )
}
