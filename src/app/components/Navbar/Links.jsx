import styles from './Links.module.scss'


export default function Links() {
  return (
    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.linksContainer}`}>
        <li className={`nav-item ${styles.link}`}>
            <a className="nav-link" href="../../doctors/about/">Conoce a</a>
        </li>
        <li className={`nav-item ${styles.link}`}>
            <a className="nav-link" href="../../doctors/">Doctores</a>
        </li>
        <li className={`nav-item ${styles.link}`}>
            <a className="nav-link" href="../../contact/">Contacto</a>
        </li>
    </ul>
  )
}
