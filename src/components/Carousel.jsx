import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
// import img3 from '../assets/img3.png';


function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>A Place Where Every Book Tells Its Story</h3>
          <p>Where the love for books knows no bounds. Join us in celebrating the magic of storytelling, sharing reviews, and discovering new literary treasures.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>A Place Where Every Book Tells Its Story</h3>
          <p>Where the love for books knows no bounds. Join us in celebrating the magic of storytelling, sharing reviews, and discovering new literary treasures.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>A Place Where Every Book Tells Its Story</h3>
          <p>Where the love for books knows no bounds. Join us in celebrating the magic of storytelling, sharing reviews, and discovering new literary treasures.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;