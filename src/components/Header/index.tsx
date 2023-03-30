import styles from '@/styles/Header.module.css'
import Image from 'next/image'
import Drawer from '../Drawer'
import NavLink from './NavLink'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <span>VIBES</span>
          <div />
          <div />
          <div />
        </div>

        <ol className={styles.list}>
          <NavLink route="about" />
          <NavLink route="jobs" />
          {/* <NavLink route="work" /> */}
          <NavLink route="contact" />
        </ol>

        <button className={styles.menuButton}>
          <Image
            src="/hamburger-menu.svg"
            alt="Copy Icon"
            width={30}
            height={30}
            priority
          />
        </button>

        <Drawer />
      </nav>
    </header>
  )
}
