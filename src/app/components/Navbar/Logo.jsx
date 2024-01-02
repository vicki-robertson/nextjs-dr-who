import styles from './Logo.module.scss'
import Image from 'next/image'

export default function Logo() {
  return (
    <a className="navbar-brand" href="/">
        <Image className={styles.logo}
            src="/logos/navbar-logo.png"
            alt='Doctor Who logo'
            height={196}
            width={191}
        />
    </a>
  )
}
