import styles from './SocialMedia.module.scss'


export default function SocialMedia() {
  return (
    <div className={styles.socialContainer}>
          <a className={ styles.socialLinks } href="https://www.facebook.com/" target="_blank"> 
              <img className={styles.icon}
                src="/icons/facebook.svg"
                alt="Facebook link"
              />
          </a>
          
          <a className={ styles.socialLinks } href="https://www.instagram.com/" target="_blank"> 
              <img className={styles.icon}
                src="/icons/instagram.svg"
                alt="Instagram link"
              />
          </a>

          <a className={ styles.socialLinks } href="https://www.twitter.com/" target="_blank"> 
              <img className={styles.icon}
                src="/icons/x.svg"
                alt="X (Twitter) link"
              />
          </a>

          <a className={ styles.socialLinks } href="https://www.tiktok.com/" target="_blank"> 
              <img className={styles.icon}
                src="/icons/tiktok.svg"
                alt="Tiktok link"
              />
          </a>
    </div>
  )
}