import styles from './page.module.scss';
import Form from '../components/ContactForm/Form';
import Symbols from '../components/Symbols/Symbols';

export default function contactPage () {

  return (
    <div className={styles.main}>
      <section className={styles.container}>
          <div className={styles.title}>
              <h2>Envia tu mensaje al Doctor</h2>
          </div>
          <div className={styles.formSection}>
              <div className={styles.formBox}>
                <div className={styles.form}>
                  <Form />
                </div>
                <div className={styles.symbolsBox}>
                  <Symbols />
                </div>
              </div>
          </div>
      </section>
    </div>
  )
}
