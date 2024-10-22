import React from 'react';
import { Link } from 'react-router-dom';
import { products } from './productsimg';

const getRandomProducts = (count: number) => {
  const shuffled = products.sort(() => 0.5 - Math.random()); // Shuffle the products array
  return shuffled.slice(0, count); // Return the first 'count' products
};

const sliceDescription = (description: string, wordLimit: number) => {
  const words = description.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
};

const RandomProducts: React.FC = () => {
  const randomProducts = getRandomProducts(3); // Get 3 random products

  return (
    <div className="p-4">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {randomProducts.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h3 className="flex items-center justify-center p-4  text-black font-semibold text-xl m-8 shadow-lg"> {product.name}</h3> 
            
            <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover mb-2" />
           
            <p className="text-xl font-bold text-[#6f0000] border border-gray-300 rounded-md p-4 bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-center">
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
            </p>
            <p className="text-lg border border-gray-300 rounded-md p-9 mb-4 bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-center">{sliceDescription(product.description, 20)}</p>

            <Link to="/product-list">
        <button className="m-6 p-4 py-2 bg-[#c30101] flex  justify-center text-white rounded hover:bg-red-500 transition duration-300">
          View More
        </button>
      </Link>  
          </div>
        ))}
      </div>

      
      
    </div>
  );
};

export default RandomProducts;
