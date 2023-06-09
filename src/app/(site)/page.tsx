import { Navbar } from '@components/Navbar'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { TabBar } from '@components/TabBar'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Header />
        <main>
          <TabBar />
        </main>
      </div>

      <Footer />
    </>
  )
}
