import Head from 'next/head'

import styles from '@/styles/Home.module.css'

import Presentation from '@/components/Presentation'
import Header from '@/components/Header'
import About from '@/components/About'
import Jobs from '@/components/Jobs'
import Contact from '@/components/Contact'
import Social from '@/components/Social'
import Drawer from '@/components/Drawer'
import useMenuContext from '@/hooks/useMenuContext'

export default function Home() {
  const { isMenuOpen } = useMenuContext()

  return (
    <div className={isMenuOpen ? styles.disableScroll : ''}>
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

      <Drawer />

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
        <a
          href="https://github.com/viniciusbe/thevibes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed and build by Vinícius Bernardes
        </a>
      </footer>
    </div>
  )
}
