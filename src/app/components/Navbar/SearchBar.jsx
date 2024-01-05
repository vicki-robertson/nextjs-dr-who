"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './SearchBar.module.scss';
import Image from 'next/image';
import doctorsList from '../../doctors.json'

export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const cardArr = Array.isArray(doctorsList.doctors) ? doctorsList.doctors : [];
    const filteredCards = cardArr.filter(
      (eachCard) =>
        eachCard.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eachCard.actor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log('Search Results:', filteredCards);

  };

  return (
    <div className={styles.searchBox}>
      <div className={`d-flex ${styles.searchContainer}`}>
      <button
          className={styles.btnSearch}
          type="button" 
          onClick={handleSearch}
        >
          <Image src="/icons/search.svg" width={30} height={30} alt="Search" />
        </button>
        <input
          className={`form-control me-2 ${styles.formControl}`}
          type="text"
          placeholder="Buscar"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()} 
        />
      </div>
    </div>
  );
}