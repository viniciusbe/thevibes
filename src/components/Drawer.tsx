import { useRef } from 'react'
import Image from 'next/image'

import useMenuContext from '@/hooks/useMenuContext'
import styles from '@/styles/Drawer.module.css'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import NavList from './Nav/NavList'

export default function Drawer() {
  const { isMenuOpen, toggleMenu } = useMenuContext()

  const visibleClass = isMenuOpen ? styles.isOpen : ''

  const ref = useRef<HTMLElement | null>(null)

  const closeDrawer = () => {
    isMenuOpen && toggleMenu()
  }
  useOnClickOutside(ref, closeDrawer)

  return (
    <div className={`${styles.backdrop} ${visibleClass}`}>
      <aside className={styles.aside} ref={ref}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          <Image
            src="/close.svg"
            alt="Copy Icon"
            width={30}
            height={30}
            priority
          />
        </button>

        <NavList isMenu />
      </aside>
    </div>
  )
}
