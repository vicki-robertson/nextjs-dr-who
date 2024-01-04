import styles from './page.module.scss';
import Form from '../components/ContactForm/Form';

export default function page () {

  return (
    <main className={styles.container}>
        <div className={styles.gridBox}>
            <div className={styles.title}>
                <h2 >Envia tu mensaje al Doctor</h2>
            </div>
            <div>
                <Form />
            </div>
             
        </div>
    </main>
  )
}
