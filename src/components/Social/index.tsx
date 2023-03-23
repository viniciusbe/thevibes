import Image from 'next/image'

import styles from '@/styles/Social.module.css'
import ListItem from './ListItem'

export default function Social() {
  return (
    <div className={styles.sideNav}>
      <ul>
        <ListItem
          href="https://github.com/viniciusbe"
          src="/github.svg"
          alt="Github Logo"
        />
        <ListItem
          href="https://www.linkedin.com/in/viniciusbe/?locale=en_US"
          src="/linkedin.svg"
          alt="Linkedin Logo"
        />
        <ListItem
          href="https://www.instagram.com/_vibesa/"
          src="/instagram.svg"
          alt="Instagram Logo"
        />
        <ListItem
          href="https://twitter.com/Viniciusbern7"
          src="/twitter.svg"
          alt="Twitter Logo"
        />
        <ListItem
          href="mailto:contact@viniciusbernardes.dev"
          src="/mail.svg"
          alt="Email Logo"
        />
      </ul>
    </div>
  )
}
