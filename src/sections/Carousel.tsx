import { useState } from 'react';

const Carousel = () => {
  const slides = [
    { id: 1, image: '/images/bg/saf_bg.png', caption: 'Slide 1 Caption' },
    { id: 2, image: '/images/bg/saf_bg2.png', caption: 'Slide 1 Caption' },
    { id: 3, image: '/images/bg/saf_land2.png', caption: 'Slide 1 Caption' },
    { id: 4, image: '/images/bg/saf_shop.png', caption: 'Slide 1 Caption' },
    { id: 5, image: '/images/bg/saf_village.png', caption: 'Slide 1 Caption' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-slide">
        <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
        <div className="carousel-controls">
          <button className="carousel-control prev" onClick={handlePrev}>
            &#10094; {/* Left arrow */}
          </button>
          <button className="carousel-control next" onClick={handleNext}>
            &#10095; {/* Right arrow */}
          </button>
        </div>
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
