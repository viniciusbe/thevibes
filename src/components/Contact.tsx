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

  const handleMouseOut = () => {
    setShowTooltip(false)
    setIsCopied(false)
  }

  return (
    <section className={styles.section} id="contact">
      <h1>Get in touch</h1>

      <p>
        Interested in working with me or just want to chat about a project? Feel
        free to get in touch via my email or my social media. I&apos;m looking
        forward to hearing from you and seeing how I can help bring your vision
        to life!
      </p>

      <div className={styles.email}>
        <a href="mailto:contact@viniciusbernardes.dev">
          contact@viniciusbernardes.dev
        </a>
        <div>
          <Image
            onMouseOver={() => setShowTooltip(true)}
            onMouseOut={handleMouseOut}
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
      </div>
    </section>
  )
}
