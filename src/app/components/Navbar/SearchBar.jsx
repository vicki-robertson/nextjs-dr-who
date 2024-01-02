import styles from './SearchBar.module.scss';
import Image from 'next/image';

export default function SearchBar() {
  return (
    <div className={styles.searchBox}>
        <form className={`d-flex ${styles.searchContainer}`} role="search">
             <button className={styles.btnSearch} type="submit">
                <Image
                    src="/icons/search.svg"
                    width={30}
                    height={30}
                    alt="Search"
                />
            </button>
            <input className={`form-control me-2 ${styles.formControl}`} type="search" placeholder="Buscar" aria-label="Search" />
        </form>
    </div>
  )
}
