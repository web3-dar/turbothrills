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
    description: 'A heavy-duty tow truck is a robust and powerful vehicle designed for towing large, heavy vehicles such as buses, trucks, RVs, and even commercial or construction equipment. These trucks are equipped with advanced towing mechanisms like',
    price: '$280,000',
    category: 'Truck',
  },
  {
    id: 2,
    image: images.car2,
    title: 'Chevrolet',
    description: 'The Chevrolet is a powerful and versatile full-size pickup truck known for its durability, towing capacity, and advanced technology features. It’s available in a variety of trims and configurations, making it suitable for everything from daily driving to heavy-duty hauling and off-road adventures.',
    price: '$80,000',
    category: 'Truck',
  },
  {
    id: 3,
    image: images.car3,
    title: 'Black Tow Truck',
    description: 'A heavy-duty tow truck is a robust and powerful vehicle designed for towing large, heavy vehicles such as buses, trucks, RVs, and even commercial or construction equipment. These trucks are equipped with advanced towing mechanisms like',
    price: '$200,000',
    category: 'Truck',
  },
  
  {
    id: 4,
    image: images.car4,
    title: 'GMC',
    description: 'The GMC  is a premium full-size pickup truck that combines rugged capability with upscale features and advanced technology. Known for its strong performance and refined interior, the Sierra is designed for both work and play, catering to those who need a capable truck without sacrificing comfort.',
    price: '$60,000',
    category: 'SUV',
  },
  
  {
    id: 5,
    image: images.car5,
    title: 'Gmc Red',
    description: 'The GMC  is a premium full-size pickup truck that combines rugged capability with upscale features and advanced technology. Known for its strong performance and refined interior, the Sierra is designed for both work and play, catering to those who need a capable truck without sacrificing comfort.',
    price: '$55,000',
    category: 'SUV',
  },
  
  {
    id: 6,
    image: images.car6,
    title: 'Toyota Altis',
    description: 'The Toyota Altis, commonly known in many markets as the Toyota Corolla, is a compact sedan known for its reliability, fuel efficiency, and comfortable driving experience. It combines modern design with practical features, making it a popular choice among families and commuters.',
    price: '$20,000',
    category: 'Sedan',
  },
  
  {
    id: 7,
    image: images.car7,
    title: 'Mazda',
    description: 'The Mazda6 is a stylish mid-size sedan known for its engaging driving dynamics, upscale interior, and elegant design. It strikes a balance between performance and comfort, making it a popular choice for those who enjoy a spirited driving experience without compromising on everyday practicality.',
    price: '$30,000',
    category: 'Sedan',
  },
  
  {
    id: 8,
    image: images.car8,
    title: 'Mercedez AMG c63',
    description: 'The Mercedes-AMG C63 is a high-performance version of the Mercedes-Benz C-Class sedan, renowned for its thrilling driving dynamics, luxurious features, and aggressive styling. As part of the AMG lineup, the C63 offers a perfect blend of power, precision, and prestige.',
    price: '$80,000',
    category: 'Sedan',
  },
  
  {
    id: 9,
    image: images.car9,
    title: 'Mercedez C Class c300',
    description: 'The Mercedes-Benz C300 is a luxury sedan that offers a perfect combination of style, performance, and advanced technology. Part of the C-Class lineup, the C300 is designed for drivers seeking a refined driving experience with a touch of sportiness.',
    price: '$55,000',
    category: 'Sedan',
  },
  
  {
    id: 10,
    image: images.car10,
    title: 'Honda Civic 2016',
    description: 'The 2016 Honda Civic is a compact car that stands out for its reliability, fuel efficiency, and sporty design. Available in various body styles, including sedan, coupe, and hatchback, the 2016 Civic offers a comfortable ride with a host of modern features.',
    price: '$28,000',
    category: 'Sedan',
  },
  
  {
    id: 11,
    image: images.car11,
    title: 'Mercedez G63',
    description: 'The Mercedes-AMG G63 is a high-performance luxury SUV that combines iconic design, exceptional off-road capabilities, and impressive power. Known for its bold styling and luxurious features, the G63 represents the pinnacle of the G-Class lineup.',
    price: '$190,000',
    category: 'SUV',
  },
  
  {
    id: 12,
    image: images.car12,
    title: 'Lamborghini Urus',
    description: 'The Lamborghini Urus is a high-performance luxury SUV that combines the iconic styling and performance characteristics of Lamborghini with the practicality of an SUV. Launched in 2018, the Urus represents a bold entry into the luxury SUV market, offering exceptional power, advanced technology, and a distinctive design.',
    price: '$230,000',
    category: 'SUV',
  },
  
  {
    id: 13,
    image: images.car13,
    title: 'Lexus Lx570',
    description: 'The Lexus LX 570 is a full-size luxury SUV known for its opulent features, off-road capability, and robust performance. Combining ruggedness with refined luxury, the LX 570 is designed for both urban driving and adventurous excursions, making it a versatile choice for those seeking a premium SUV experience.',
    price: '$90,000',
    category: 'SUV',
  },
  
  {
    id: 14,
    image: images.car14,
    title: 'Rolls Royce Ghost',
    description: 'The Rolls-Royce Ghost is a flagship luxury sedan that epitomizes opulence, sophistication, and unparalleled craftsmanship. Renowned for its serene driving experience and bespoke luxury features, the Ghost is designed for those who demand the very best in automotive excellence.',
    price: '$400,000',
    category: 'SUV',
  },
  
  {
    id: 15,
    image: images.car15,
    title: 'Lexus Lx450',
    description: 'The Lexus LX 450 is a luxury full-size SUV that offers a blend of rugged off-road capability, premium features, and the renowned reliability of Lexus. The LX 450 shares many components with the Toyota Land Cruiser, but it adds a more upscale feel with luxury-focused enhancements.',
    price: '$50,000',
    category: 'SUV',
  },
  
  {
    id: 16,
    image: images.car16,
    title: 'Brabus 800',
    description: 'The Brabus 800 is a high-performance luxury SUV based on the Mercedes-AMG G63, customized and enhanced by Brabus, a renowned German tuning company specializing in Mercedes-Benz vehicles. The Brabus 800 combines extreme power, bold styling, and luxurious features, offering an even more aggressive and exclusive version of the already iconic G63.',
    price: '$400,000',
    category: 'SUV',
  },
  
  {
    id: 17,
    image: images.car17,
    title: 'Infiniti QX80',
    description: 'The Infiniti QX80 is a full-size luxury SUV that offers a blend of commanding power, refined comfort, and advanced technology. With its bold design, spacious interior, and capable performance, the QX80 is a top choice for families or individuals seeking a luxurious yet practical vehicle for both city driving and long-distance travel.',
    price: '$74,000',
    category: 'SUV',
  },
  
  {
    id: 18,
    image: images.car18,
    title: 'The Mercedes-Benz GLE 450',
    description: 'The Mercedes-Benz GLE 450 is a luxury midsize SUV that offers a balance of power, elegance, and advanced technology. Positioned in the Mercedes-Benz lineup as a high-performance, well-appointed SUV, the GLE 450 combines sporty performance with premium comfort, making it an ideal choice for drivers seeking both luxury and practicality.',
    price: '$67,000',
    category: 'SUV',
  },
  
  {
    id: 19,
    image: images.car3,
    title: 'Brabus White',
    description: 'The Brabus White refers to a custom, high-performance vehicle tuned by Brabus in a sleek and striking white color finish. Brabus, a renowned German tuning company, is known for enhancing Mercedes-Benz models, particularly the AMG lineup, by boosting engine performance, adding bespoke luxury features, and incorporating unique styling elements. A Brabus-tuned vehicle in white offers a combination of bold power, luxury, and exclusivity.',
    price: '$500,000',
    category: 'Truck',
  },
  
  {
    id: 20,
    image: images.car20,
    title: 'Aston Martin DBX',
    description: 'The Aston Martin DBX is the brand’s first-ever luxury SUV, blending the British marque’s signature elegance, sports car performance, and utility. Introduced in 2020, the DBX combines the craftsmanship and design that Aston Martin is known for, with the practicality and versatility of an SUV, making it ideal for both daily driving and grand touring.',
    price: '$230,000',
    category: 'SUV',
  }
  
];

const truncateDescription = (description: string): string => {
  const words = description.split(' ');

  // Return the first 30 words, joined into a string
  if (words.length > 30) {
    return words.slice(0, 30).join(' ') + '...'; // Add ellipsis to indicate more content
  }

  return description; // Return the full description if it's under 30 words
};

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
      <h2 className="text-3xl font-bold mb-5 text-center text-red-400 shadow-md p-4">Featured Cars</h2>
      <div className="mb-5 m-auto flex justify-center space-x-4 shadow-md p-4">
        <button onClick={() => filterCars('All')} className="mr-2 bg-[#6f0000] px-4 py-2 border-black rounded text-white hover:bg-[#c30101]">All</button>
        <button onClick={() => filterCars('SUV')} className="mr-2 bg-[#6f0000] px-4 py-2 border-black rounded text-white hover:bg-[#c30101]">SUV</button>
        <button onClick={() => filterCars('Sedan')} className="mr-2 bg-[#6f0000] px-4 py-2 border-black rounded text-white hover:bg-[#c30101]">Sedan</button>
        <button onClick={() => filterCars('Truck')} className="bg-[#6f0000] px-4 py-2 border-black rounded text-white hover:bg-[#c30101]">Truck</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredCars.map(car => (
          <div key={car.id} className="border rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-64 object-contain" // Fixed height and width for consistency
            />
            <div className="p-7 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-center text-red-400">{car.title}</h3>
              <p className="text-gray-700 flex-grow p-5">{truncateDescription(car.description)}</p>
              <p className="font-bold text-lg mb-2 border border-gray-200 shadow-md p-4 rounded text-center m-4">{car.price}</p>

              {/* Button Container */}
              <div className="flex justify-between m-4">
                <Link to={`/car/${car.id}`} className="bg-[#6f0000] text-white rounded px-4 py-2 hover:bg-[#900000] transition duration-300">
                  View More
                </Link>
                <Link to={`/contact-us`} className="bg-[#6f0000] text-white rounded px-4 py-2 hover:bg-[#900000] transition duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Home Icon */}
      <Link to="/" className="flex items-center justify-center p-4 bg-[#c30101] text-white fixed bottom-0 left-0 right-0 shadow-lg">
        <div className="text-3xl mr-2">
          <FaHome />
        </div>
      </Link>
    </div>
  );
};

export default FeaturedCars;
