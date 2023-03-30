import useMenuContext from '@/hooks/useMenuContext'
import styles from '@/styles/Drawer.module.css'
import Image from 'next/image'

export default function Drawer() {
  const { isMenuOpen, toggleMenu } = useMenuContext()

  const visibleClass = isMenuOpen ? styles.isOpen : ''

  return (
    <div className={`${styles.backdrop} ${visibleClass}`}>
      <aside className={styles.aside}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          <Image
            src="/close.svg"
            alt="Copy Icon"
            width={30}
            height={30}
            priority
          />
        </button>
      </aside>
    </div>
  )
}
