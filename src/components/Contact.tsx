import styles from '@/styles/Contact.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Contact() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@viniciusbernardes.dev')
    setIsCopied(true)
  }

  return (
    <section className={styles.section} id="contact">
      <h1>Get in touch</h1>

      <p>Feel free to send an email:</p>

      <div>
        <a href="mailto:contact@viniciusbernardes.dev">
          contact@viniciusbernardes.dev
        </a>
        <Image
          onMouseOver={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
          src="/copyIcon.svg"
          alt="Copy Icon"
          width={25}
          height={25}
          priority
          onClick={handleCopyEmail}
        />
        <span className={showTooltip ? styles.showTooltip : ''}>
          {isCopied ? 'Copied to clipboard' : 'Copy to clipboard'}
        </span>
      </div>
    </section>
  )
}
