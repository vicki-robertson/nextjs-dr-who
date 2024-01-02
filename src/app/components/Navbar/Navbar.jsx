import styles from "./Navbar.module.scss"
import Logo from "./Logo";
import Links from "./Links";
import SocialMedia from "../SocialMedia/SocialMedia";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className={`container-fluid ${styles.navbarContainer}`}>
                <Logo className={styles.logo}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{color:'white'}}></span>
                </button>
                <div className={`collapse navbar-collapse ${styles.collapseContainer}`} id="navbarSupportedContent">
                    <Links />
                    <div className={styles.searchContainer}>
                      <SearchBar />
                    </div>
                    <SocialMedia className={styles.socialsNav}/>
                </div>
            </div>
        </nav>
    </>
  );
}
