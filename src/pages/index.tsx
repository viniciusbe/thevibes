import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import Presentation from '@/components/Presentation'
import Header from '@/components/Header'
import About from '@/components/About'
import Jobs from '@/components/Jobs'
import Contact from '@/components/Contact'
import Social from '@/components/Social'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinícius Bernardes</title>
        <meta
          name="description"
          content="Vinícius Bernardes is a frontend developer focused on Javascript stack, specifically on Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Presentation />
        <hr />
        <About />
        <hr />
        <Jobs />
        <hr />
        <Contact />
        <hr />
      </main>

      <Social />

      <footer className={styles.footer}>
        Designed and build by Vinícius Bernardes
      </footer>
    </>
  )
}
