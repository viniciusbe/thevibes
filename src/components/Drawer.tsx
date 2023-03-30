import styles from '@/styles/Drawer.module.css'
import Image from 'next/image'

export default function Drawer() {
  return (
    <aside className={styles.aside}>
      <button className={styles.closeButton}>
        <Image
          src="/hamburger-menu.svg"
          alt="Copy Icon"
          width={30}
          height={30}
          priority
        />
      </button>
    </aside>
  )
}
