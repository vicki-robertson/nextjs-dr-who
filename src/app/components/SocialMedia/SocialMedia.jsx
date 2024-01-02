import styles from './SocialMedia.module.scss'
import Image from 'next/image'

export default function SocialMedia() {
  return (
    <div className={styles.socialContainer}>
          <a className={ styles.socialLinks } href="https://www.facebook.com/" target="_blank"> 
              <Image className={styles.icon}
                src="/icons/facebook.svg"
                width={24}
                height={24}
                alt="Facebook link"
              />
          </a>
          
          <a className={ styles.socialLinks } href="https://www.instagram.com/" target="_blank"> 
              <Image className={styles.icon}
                src="/icons/instagram.svg"
                width={24}
                height={24}
                alt="Instagram link"
              />
          </a>

          <a className={ styles.socialLinks } href="https://www.twitter.com/" target="_blank"> 
              <Image className={styles.icon}
                src="/icons/x.svg"
                width={24}
                height={24}
                alt="X (Twitter) link"
              />
          </a>

          <a className={ styles.socialLinks } href="https://www.tiktok.com/" target="_blank"> 
              <Image className={styles.icon}
                src="/icons/tiktok.svg"
                width={24}
                height={24}
                alt="Tiktok link"
              />
          </a>
    </div>
  )
}