import styles from "./Footer.module.scss"

import SocialMedia from "../SocialMedia/SocialMedia.jsx";

export default function Footer() {
  return (
      <footer className={`navbar fixed-bottom ${styles.footer}`}>
        
          <a class="navbar-brand" href="/">
            <img src="/logos/footer-logo.png" alt="Doctor Who Logo" width="38" height="38" />
          </a>
           <SocialMedia />
      </footer>
  );
}