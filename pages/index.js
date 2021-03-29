import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Next.js  News App</h1>
        <h3>You can find latest news articles here..</h3>
      </div>
    </div>
  )
}