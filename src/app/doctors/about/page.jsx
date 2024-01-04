import styles from './page.module.scss';
import doctorsList from '../../doctors.json';
import Button from '../../components/Button/Button';
import Image from 'next/image';

export default function DoctorsAbout() {
// Filter the doctorsList to only include the doctor with id 10
const selectedDoctor = doctorsList.doctors.find((doctor) => doctor.id === 14);

    return (
        <div className={styles.doctorsContainer}>
        {selectedDoctor && (
            <div key={selectedDoctor.id}>    
                <div className={styles.gridBox}>
                        <div className={styles.title}>
                            <h2 >Conoce a ...{selectedDoctor.doctor.toLowerCase()}</h2>
                        </div>
                        <div className={styles.info}>
                            <p>Mollit consectetur do qui magna consectetur sint est duis. Magna ullamco est quis laboris reprehenderit reprehenderit proident ex sunt voluptate ex exercitation. Sint incididunt irure in elit. Nulla est eu anim eiusmod nisi exercitation.</p>
                        </div>
                        <div className={styles.button}>
                            <Button href="https://www.doctorwho.tv/">
                                Ver más
                            </Button>
                        </div>
                    
                    <div class={styles.image}>
                        <Image className={styles.doctorPhoto}
                            src={selectedDoctor.image}
                            alt='fotos de los doctores'
                            height={800}
                            width={500}
                            objectFit='cover'
                        />
                    </div>
                </div>
            </div>
           )}
        </div>
  )
}




