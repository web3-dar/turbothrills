import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import car1 from '../../assets/images/car1.jpg';
import car2 from '../../assets/images/car2.jpg';
import car3 from '../../assets/images/car3.jpg';


const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true, 
    autoplaySpeed: 2000, 
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image: car1,
      title: 'Mercedes-Benz CLA',
      description: 'The Mercedes-Benz CLA features a sleek coupe-like design, turbocharged engines with dual-clutch transmission,  comfortable seating, competitive fuel efficiency, and offers ',
    },
    {
      image: car2,
      title: 'Mercedes-Benz CLA',
      description: 'The Mercedes-Benz CLA features a sleek coupe-like design, turbocharged engines with dual-clutch transmission and available all-wheel drive, advanced MBUX infotainment system.',
    },
    {
      image: car3,
      title: ' Mercedes-Benz G63 AMG',
      description: 'The Mercedes-Benz G63 AMG, commonly referred to as the G-Wagon, is a luxury SUV known for its iconic boxy design, powerful performance, and off-road capabilities. Here’s a brief overview of its key properties:',
    },
  ];

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img src={slide.image} alt={slide.title} className="w-[100vw] h-[80vh] object-cover" />
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
              <h1 className="text-2xl font-bold">{slide.title}</h1>
              <p className='text-xs text-white leading-relaxed'>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
