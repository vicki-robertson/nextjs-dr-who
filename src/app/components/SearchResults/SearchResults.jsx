"use client"

import styles from './SearchResults.module.scss';
import SmallButton from '../Button/SmallButton.jsx';

const SearchResultsPage = ({ searchResults }) => {
  return (
    <div className={`row ${styles.row}`}>
      {searchResults.map((eachResult, id) => (
        <div className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 g-5 ${styles.grid}`} key={eachResult.id}>
          <div className={styles.card}>
            <img
              src={eachResult.image}
              className="card-img-top img-fluid"
              alt="fotos de los doctores"
              style={{ height: '460px', objectFit: 'cover' }}
            />
            <div className={styles.cardBody}>
              <h3>{eachResult.doctor}</h3>
              <h4>{eachResult.actor}</h4>
              <p>{eachResult.screen_time}</p>
            </div>
            <SmallButton href="https://www.doctorwho.tv/">Ver más</SmallButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResultsPage;
