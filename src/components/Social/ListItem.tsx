import Image from 'next/image'

interface ListItemProps {
  href: string
  src: string
  alt: string
}

export default function ListItem({ href, src, alt }: ListItemProps) {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} width={25} height={25} priority />
      </a>
    </li>
  )
}
