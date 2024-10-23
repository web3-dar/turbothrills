import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, Product } from './productsimg';

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const truncatedDescription = product.description.split(' ').slice(0, 30).join(' ') + '...';

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="flex items-center justify-center p-4 bg-[#c30101] text-white text-xl shadow-lg">{product.name}</h2>
      
      <div className="relative m-4">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
        <button
          onClick={handlePreviousImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 p-1 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 p-1 rounded-full"
        >
          &gt;
        </button>
      </div>

      <p className="text-xl font-bold text-[#6f0000] border border-gray-300 rounded-md p-4 bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-center m-4"> 
        PRICE : {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
      </p>
      <p className="text-gray-700 m-4 p-4">{truncatedDescription}</p>

      <Link to={`/products/${product.id}`}>
        <button className="m-6 p-4 py-2 bg-[#c30101] flex justify-center text-white rounded hover:bg-red-500 transition duration-300">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
