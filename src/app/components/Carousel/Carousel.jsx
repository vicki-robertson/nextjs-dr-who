
export default function Carousel() {
  return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/carousel/carousel-1.jpeg" className="d-block w-100" alt="..." objectFit="cover" />
                </div>
                <div className="carousel-item">
                    <img src="/carousel/carousel-2.jpeg" className="d-block w-100" alt="..." objectFit="cover" />
                </div>
            </div>
        </div>
  )
}

