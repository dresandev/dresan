import { Header } from '@components/Header'
import { TabBar } from '@components/TabBar'
import { Projects } from '@components/Projects'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <TabBar />
          <Projects />
        </main>
      </div>
    </>
  )
}
