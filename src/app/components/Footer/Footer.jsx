import styles from "./Footer.module.scss"

import SocialMedia from "../SocialMedia/SocialMedia.jsx";
import Image from "next/image";

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <div className={styles.smallLogo}>
          <Image
            src="/logos/footer-logo.png"
            alt='Doctor Who Logo'
            height={38}
            width={38}
          />
        </div>
        <div className={styles.socialFooter}>
          <SocialMedia />
        </div>
      </footer>
  );
}