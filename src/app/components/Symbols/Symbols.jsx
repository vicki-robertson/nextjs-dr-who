import styles from './Symbols.module.scss';
import Image from 'next/image';

export default function Symbols() {
  return (
        <div className={styles.symbolsBox}>
            <div className={styles.blueSymbol}>
                  <Image 
                    src="/svg/blueSymbol.svg"
                    alt='simbolo azul de doctor Who'
                    height={244}
                    width={244}
                  />
              </div>
              <div className={styles.yellowSymbol}>
                  <Image 
                    src="/svg/yellowSymbol.svg"
                    alt='simbolo amarillo de doctor Who'
                    height={450}
                    width={450}
                  />
              </div>
              <div className={styles.whiteSymbol}>
                  <Image 
                    src="/svg/whiteSymbol.svg"
                    alt='simbolo blanco de doctor Who'
                    height={254}
                    width={254}
                  />
              </div>
          </div>
  )
}


