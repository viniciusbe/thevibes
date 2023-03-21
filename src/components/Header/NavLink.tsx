import Link from 'next/link'

interface NavLinkProps {
  route: string
}

export default function NavLink({ route }: NavLinkProps) {
  return (
    <li>
      <Link href={`#${route}`}>{route}</Link>
    </li>
  )
}
