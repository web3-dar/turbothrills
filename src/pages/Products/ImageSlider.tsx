// src/components/ImageSlider.tsx

import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[]; // Expect an array of image URLs
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prevImage} className="bg-gray-600 text-white px-4 py-2 rounded">
          Previous
        </button>
        <button onClick={nextImage} className="bg-gray-600 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
