import useMenuContext from '@/hooks/useMenuContext'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavLinkProps {
  route: string
}

export default function NavLink({ route }: NavLinkProps) {
  const router = useRouter()

  const { isMenuOpen, toggleMenu } = useMenuContext()

  const onClick = () => {
    router.push(`#${route}`)
    isMenuOpen && toggleMenu()
  }

  return <li onClick={onClick}>{route}</li>
}
