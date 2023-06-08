import { Header } from '@components/Header'
import { Navbar } from '@components/Navbar'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Header />
        <main>
        </main>
      </div>
    </>
  )
}
