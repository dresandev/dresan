import {
  Projects,
  About,
  Contact,
  Skills,
  Header,
  TabBar,
  TabPanel,
} from '@components/'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <TabBar />
          <TabPanel index={0}>
            <Projects />
          </TabPanel>
          <TabPanel index={1}>
            <About />
          </TabPanel>
          <TabPanel index={2}>
            <Skills />
          </TabPanel>
          <TabPanel index={3}>
            <Contact />
          </TabPanel>
        </main>
      </div>
    </>
  )
}
