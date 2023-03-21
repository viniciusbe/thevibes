import styles from '@/styles/Header.module.css'
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
          <NavLink route="work" />
          <NavLink route="contact" />
        </ol>
      </nav>
    </header>
  )
}
