import { Skill } from './Skill'
import styles from './Skills.module.css'

const skillsData = [
  {
    name: 'CSS',
  },
  {
    name: 'PostgreSQL',
  },
  {
    name: 'Node.js',
  },
  {
    name: 'React',
  },
  {
    name: 'HTML',
  },
  {
    name: 'MongoDB',
  },
  {
    name: 'Javascript',
  },
  {
    name: 'Dart',
  },
  {
    name: 'Flutter',
  },
  {
    name: 'Next.js ',
  },
  {
    name: 'Tailwind',
  },
  {
    name: 'Git',
  },
]

export const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Mi stack</h2>
      {
        skillsData.map(({ name }) => (
          <Skill
            key={name}
            name={name}
          />
        ))
      }
    </section>
  )
}
