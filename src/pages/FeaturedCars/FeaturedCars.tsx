// src/components/FeaturedCars.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; 
import images from '../CarImages/images';

interface Car {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  category: string;
}

const cars: Car[] = [
  {
    id: 1,
    image: images.car1,
    title: 'Tow Truck',
    description: 'Description of Car 1',
    price: '$280,000',
    category: 'Truck',
  },
  {
    id: 2,
    image: images.car2,
    title: 'Chevrolet',
    description: 'Description of Car 2',
    price: '$100,000',
    category: 'Truck',
  },
  {
    id: 3,
    image: images.car3,
    title: 'Black Tow Truck',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'Truck',
  },
  
  {
    id: 4,
    image: images.car4,
    title: 'GMC',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'SUV',
  },
  
  {
    id: 5,
    image: images.car5,
    title: 'gmc Red',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'SUV',
  },
  
  {
    id: 6,
    image: images.car6,
    title: 'Toyota Altis',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'Sedan',
  },
  
  {
    id: 7,
    image: images.car7,
    title: 'Mazda',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'Sedan',
  },
  
  {
    id: 8,
    image: images.car8,
    title: 'Mercedez AMG c63',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'Sedan',
  },
  
  {
    id: 9,
    image: images.car9,
    title: 'Mercedez C Class c300',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'Sedan',
  },
  
  {
    id: 10,
    image: images.car10,
    title: 'Honda Civic',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'Sedan',
  },
  
  {
    id: 11,
    image: images.car11,
    title: 'Mercedez G63',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'SUV',
  },
  
  {
    id: 12,
    image: images.car12,
    title: 'Urus',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'SUV',
  },
  
  {
    id: 13,
    image: images.car13,
    title: 'Lexus Lx570',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'SUV',
  },
  
  {
    id: 14,
    image: images.car14,
    title: 'Rolls Royce Ghost',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'SUV',
  },
  
  {
    id: 15,
    image: images.car15,
    title: 'Lexus Lx450',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'SUV',
  },
  
  {
    id: 16,
    image: images.car16,
    title: 'Brabus 800',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'SUV',
  },
  
  {
    id: 17,
    image: images.car17,
    title: 'Infiniti qx80',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'SUV',
  },
  
  {
    id: 18,
    image: images.car18,
    title: 'gle 450',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'SUV',
  },
  
  {
    id: 19,
    image: images.car3,
    title: 'Brabus White',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'Truck',
  },
  
  {
    id: 20,
    image: images.car20,
    title: 'Aston Martin DBX',
    description: 'Description of Car 3',
    price: '$230,000',
    category: 'SUV',
  }
  
];

const FeaturedCars: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filterCars = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredCars = selectedCategory === 'All'
    ? cars
    : cars.filter(car => car.category === selectedCategory);

  return (
    <div className="container mx-auto py-10">




      <h2 className="text-3xl font-bold mb-5 text-center">Featured Cars</h2>
      <div className="mb-5 m-auto flex justify-center space-x-4">
        <button onClick={() => filterCars('All')} className="mr-2 bg-[#6f0000] px-4 py-2 border-black  rounded  text-white  hover:bg-[#c30101] ">All</button>
        <button onClick={() => filterCars('SUV')} className="mr-2 bg-[#6f0000] px-4 py-2 border-black  rounded text-white  hover:bg-[#c30101] ">SUV</button>
        <button onClick={() => filterCars('Sedan')} className="mr-2 bg-[#6f0000] px-4 py-2 border-black  rounded text-white  hover:bg-[#c30101] ">Sedan</button>
        <button onClick={() => filterCars('Truck')} className="bg-[#6f0000] px-4 py-2 border-black  rounded text-white  hover:bg-[#c30101] ">Truck</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {filteredCars.map(car => (
    <div key={car.id} className="border rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img
        src={car.image}
        alt={car.title}
        className="w-full h-64 object-contain" // Fixed height and width for consistency
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{car.title}</h3>
        <p className="text-gray-700 flex-grow">{car.description}</p>
        <p className="font-bold text-lg mb-2">{car.price}</p>
        
        {/* Button Container */}
        <div className="flex justify-between">
          <Link to={`/car/${car.id}`} className="bg-[#6f0000] text-white rounded px-4 py-2 hover:bg-[#900000] transition duration-300 ">
            View More
          </Link>
          <Link to={`/contact-us`} className="bg-[#6f0000] text-white rounded px-4 py-2 hover:bg-[#900000] transition duration-300 ">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>



      {/* Sticky Home Icon */}
      <Link to="/" className="flex items-center justify-center p-4 bg-[#c30101] text-white fixed bottom-0 left-0 right-0 shadow-lg">
         <div className="text-3xl mr-2" > 
         <FaHome />
          </div> {/* Increased icon size */}
    
      </Link>
    </div>
  );
};

export default FeaturedCars;
