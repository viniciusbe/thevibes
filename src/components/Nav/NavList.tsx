import NavLink from './NavLink'
import styles from './styles.module.css'

interface NavListProps {
  isMenu?: boolean
}

export default function NavList({ isMenu }: NavListProps) {
  const variantClass = isMenu ? '' : styles.headerList

  return (
    <ol className={`${styles.list} ${variantClass}`}>
      <NavLink route="about" />
      <NavLink route="jobs" />
      {/* <NavLink route="work" /> */}
      <NavLink route="contact" />
    </ol>
  )
}
