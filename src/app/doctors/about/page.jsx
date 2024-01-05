import styles from './page.module.scss';
import Image from 'next/image';

import doctorsList from '../../doctors.json';
import Button from '../../components/Button/Button';
import SymbolsAbout from '@/app/components/Symbols/SymbolsAbout';

export default function DoctorsAbout() {
// Filter the doctorsList to only include the doctor with id 14
const selectedDoctor = doctorsList.doctors.find((doctor) => doctor.id === 14);

    return (
        <main className={styles.doctorsContainer}>
        {selectedDoctor && (
            <div key={selectedDoctor.id}>    
                <div className={styles.gridBox}>
                    <div className={styles.title}>
                        <h2 >Conoce a ...{selectedDoctor.doctor.toLowerCase()}</h2>
                        <div className={styles.symbolBox}>
                            <SymbolsAbout />
                        </div>
                    </div>
                    <section className={styles.info}>
                        <p>Mollit consectetur do qui magna consectetur sint est duis. Magna ullamco est quis laboris reprehenderit reprehenderit proident ex sunt voluptate ex exercitation. Sint incididunt irure in elit. Nulla est eu anim eiusmod nisi exercitation.</p>
                        <div className={styles.button}>
                            <Button href="https://www.doctorwho.tv/">
                                Ver más
                            </Button>
                        </div>
                    </section>
                    
                    <figure class={styles.image}>
                        <Image className={styles.doctorPhoto}
                            src={selectedDoctor.image}
                            alt='fotos de los doctores'
                            height={814}
                            width={606}
                            style={{objectFit:"cover"}}
                        />
                    </figure>
                </div>
            </div>
           )}
        </main>
  )
}




