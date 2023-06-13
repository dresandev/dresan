import {
  Projects,
  About,
  ContactForm,
  Technologies,
  TabPanel,
  Header,
  TabBar
} from '@components/'
import styles from './styles.module.css'

export default function SiteLayout() {
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
            <Technologies />
          </TabPanel>
          <TabPanel index={3}>
            <ContactForm />
          </TabPanel>
        </main>
      </div>
    </>
  )
}
