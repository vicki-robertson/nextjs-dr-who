import styles from "./Navbar.module.scss"
import Logo from "./Logo";
import Links from "./Links";
import SocialMedia from "../SocialMedia/SocialMedia";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <>
        <nav className={`navbar sticky-top navbar-expand-xl ${styles.navbarContainer}`} data-bs-theme="dark">
            <div className="container-fluid">
                <Logo className={styles.logo}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${styles.collapseContainer}`} id="navbarSupportedContent" style={{backgroundColor:'#040521', padding: '4rem 1rem'}}>
                    <Links />
                    <div className={styles.searchContainer}>
                      <SearchBar />
                    </div>
                    <div className={styles.socialMedia}>
                      <SocialMedia />
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
}
