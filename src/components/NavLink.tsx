import Link from 'next/link'

import styles from '@/styles/NavLink.module.css'

interface NavLinkProps {
  route: string
}

export function NavLink({ route }: NavLinkProps) {
  return (
    <Link className={styles.link} href={`#${route}`}>
      <li>{route}</li>
    </Link>
  )
}
