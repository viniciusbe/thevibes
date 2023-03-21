import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import Presentation from '@/components/Presentation'
import Header from '@/components/Header'
import About from '@/components/About'
import Jobs from '@/components/Jobs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinícius Bernardes</title>
        <meta
          name="description"
          content="Vinícius Bernardes is a web developer focused on Javascript stack, specifically on Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.sideNav}>
        <ul>
          <li>
            <a
              href="https://github.com/viniciusbe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                alt="Github Logo"
                width={25}
                height={25}
                priority
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/viniciusbe/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
                alt="Linkedin Logo"
                width={25}
                height={25}
                priority
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_vibesa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram Logo"
                width={25}
                height={25}
                priority
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Viniciusbern7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/twitter.svg"
                alt="Twitter Logo"
                width={25}
                height={25}
                priority
              />
            </a>
          </li>
          <li>
            <a
              href="mailto:contact@viniciusbernardes.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/mail.svg"
                alt="Email Logo"
                width={25}
                height={25}
                priority
              />
            </a>
          </li>
        </ul>
      </div>
      <main className={styles.main}>
        <Presentation />
        <hr />
        <About />
        <hr />
        <Jobs />
      </main>
    </>
  )
}
