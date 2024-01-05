"use client"

import styles from './SearchBar.module.scss';
import Image from 'next/image';
import doctorsList from '../../doctors.json';
import { useState } from 'react';


export default function SearchBar() {
  let cardArr = doctorsList;
  let [searchTerm, setSearchTerm] = useState('');
  let filteredCards = cardArr.doctors.filter(
    (eachCard) =>
      eachCard.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      eachCard.actor.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

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
            <input className={`form-control me-2 ${styles.formControl}`}
            type="text"
            placeholder="Buscar"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
    </div>
  )
}
