import Image from 'next/image'

import useMenuContext from '@/hooks/useMenuContext'
import styles from '@/styles/Header.module.css'

import NavList from '../Nav/NavList'

export default function Header() {
  const { toggleMenu } = useMenuContext()

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <span>VIBES</span>
          <div />
          <div />
          <div />
        </div>

        <NavList />

        <button className={styles.menuButton} onClick={toggleMenu}>
          <Image
            src="/hamburger-menu.svg"
            alt="Copy Icon"
            width={30}
            height={30}
            priority
          />
        </button>
      </nav>
    </header>
  )
}
