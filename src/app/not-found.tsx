import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span className={styles.errorCode}>404</span>Not Found
      </h1>
    </main >
  )
}