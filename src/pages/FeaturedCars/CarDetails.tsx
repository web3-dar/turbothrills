
import React from 'react';
import { useParams } from 'react-router-dom';
import images from '../CarImages/images';
import { Link } from 'react-router-dom';
import { FaHome , FaArrowLeft } from 'react-icons/fa';


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

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = cars.find(car => car.id === Number(id));

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    
    <div className="container mx-auto py-10">
        <Link to="/" className="flex items-center justify-center p-4 bg-[#c30101] text-white fixed bottom-0 left-0 right-0 shadow-lg">
        <div className="text-3xl mr-2">
         <FaHome  /> </div>
      </Link>
      <br />
        <Link to="/featured-cars" className="flex items-center justify-center p-4 bg-[#c30101] text-white fixed bottom-0 left-0 right-0 shadow-lg">
        <div className="text-3xl mr-2">
         <FaArrowLeft  /> </div>
      </Link>
      <h2 className="flex items-center justify-center p-4 bg-[#c30101] text-white text-2xl shadow-lg">{car.title}</h2>
      <img src={car.image} alt={car.title} className="w-full p-4 h-auto mb-4" />

      <p className='text-lg border border-gray-300 rounded-md p-4 mb-4 bg-gray-100 text-center'> {car.title}</p>
      <p className="text-lg border border-gray-300 rounded-md p-4 mb-4 bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-center">
        {car.description} 
      </p>
      
      {/* Price Section */}
      <p className="text-xl font-bold text-[#6f0000] border border-gray-300 rounded-md p-4 bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-center"> <span className='px-6'>Price</span> 
        {car.price}
      </p>

      
    </div>

    
  );
};

export default CarDetails;
