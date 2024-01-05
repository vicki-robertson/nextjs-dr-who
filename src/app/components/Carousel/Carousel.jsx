import styles from './Carousel.module.scss'
import Button from '../Button/Button.jsx'

export default function Carousel() {
  return (
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="6000">
            <div className="carousel-indicators" style={{ position: 'absolute', right: '6%', left: 'auto', bottom: '4%', margin: '10px' }}>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" style={{height:'24px', width:'24px', borderRadius:'50%', border:'3px solid #ffc67e', backgroundColor: 'rgba(255, 198, 126, 1)'}} aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" style={{height:'24px', width:'24px', borderRadius:'50%', border:'3px solid #fff', backgroundColor: '#ffc67e', marginLeft:'1.5rem'}} data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" style={{height:'24px', width:'24px', borderRadius:'50%', border:'3px solid #fff', backgroundColor: '#ffc67e', marginLeft:'1.5rem'}} data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" style={{height:'24px', width:'24px', borderRadius:'50%', border:'3px solid #fff', backgroundColor: '#ffc67e', marginLeft:'1.5rem'}} data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" style={{height:'24px', width:'24px', borderRadius:'50%', border:'3px solid #fff', backgroundColor: '#ffc67e', marginLeft:'1.5rem'}} data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className={`carousel-inner ${styles.slide}`}>
                <div className="carousel-item active">
                    <img src="/carousel/carousel-1.jpeg" className={`d-block w-100 ${styles.carouselImage}`} alt="los doctores saliendo del tardis"  />
                    <div className={styles.overlayContent}>
                        <h1 className={styles.legend}>The Giggle</h1>
                        <div className={styles.buttonCarousel}>
                            <Button href="https://www.doctorwho.tv/">Ver ahora</Button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/carousel/carousel-2.jpeg" className={`d-block w-100 ${styles.carouselImage}`} alt="dentro del tardis" />
                    <div className={styles.overlayContent}>
                        <h1 className={styles.legend}>Allons-y</h1>
                        <div className={styles.buttonCarousel}>
                            <Button href="https://www.doctorwho.tv/">Ver ahora</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

