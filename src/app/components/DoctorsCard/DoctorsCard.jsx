import React from 'react';
import styles from './DoctorsCard.module.scss';
import doctorsList from '../../doctors.json';
import SmallButton from '../Button/SmallButton';

export default function DoctorsCard() {
    let cardArr = doctorsList;
    return (
        <div className={`row ${styles.row}`}>
        {cardArr.doctors.map((eachCard, id)=>(
            <div className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 g-5 ${styles.grid}`} key={eachCard.id}>    
                <div className={styles.card}>
                    <img src={eachCard.image} className="card-img-top img-fluid" alt="fotos de los doctores" style={{height:'460px', objectFit: 'cover'}}/>
                    <div className={styles.cardBody}>
                        <h3>{eachCard.doctor}</h3>
                        <h4>{eachCard.actor}</h4>
                        <p>{eachCard.screen_time}</p>
                    </div>
                    <SmallButton href="https://www.doctorwho.tv/">
                            Ver más
                    </SmallButton>
                </div>
            </div>
            ))}
        </div>
  )
}




