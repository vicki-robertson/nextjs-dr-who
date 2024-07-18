import styles from './SymbolsAbout.module.scss';
import Image from 'next/image';

export default function SymbolsAbout() {
  return (
        <div className={styles.symbolsBox}>
              <div className={styles.yellowSymbol}>
                  <Image 
                    src="/svg/yellowSymbol.svg"
                    alt='simbolo amarillo de doctor Who'
                    height={450}
                    width={450}
                  />
              </div>
              <div className={styles.purpleSymbol}>
                  <Image 
                    src="/svg/purpleSymbol.svg"
                    alt='simbolo lila de doctor Who'
                    height={360}
                    width={360}
                  />
              </div>
          </div>
  )
}


