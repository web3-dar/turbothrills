import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, Product } from './productsimg';
import { FaHeart } from 'react-icons/fa';

const ProductList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  const filteredProducts = products.filter(product => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const withinPrice = maxPrice ? product.price <= maxPrice : true;
    return (
      (product.name.toLowerCase().includes(lowercasedQuery) ||
        product.description.toLowerCase().includes(lowercasedQuery)) &&
      withinPrice
    );
  });

  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#c30101] transition duration-200"
        />
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <input
          type="number"
          placeholder="Price Range"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#c30101] transition duration-200"
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likes, setLikes] = useState<number>(Math.floor(Math.random() * 1501) + 100); // Random likes between 100 and 1000
  const [isLiked, setIsLiked] = useState<boolean>(false);

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

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikes(likes + 1); // Increment likes
      setIsLiked(true); // Mark as liked
    }
  };

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
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full"
        >
          &gt;
        </button>
      </div>

      <p className="text-xl font-bold text-[#6f0000] border border-gray-300 rounded-md p-4 bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-center m-4"> 
        PRICE : {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
      </p>
      <p className="text-gray-700 m-4 p-4">{truncatedDescription}</p>

      {/* Likes Section */}
      <div className="flex items-center justify-between m-4">
        <div className="flex items-center">
          <button onClick={handleLikeClick} className="mr-2">
            <FaHeart className={`cursor-pointer ${isLiked ? 'text-red-500' : 'text-black'}`} />
          </button>
          <span className="text-black">{likes} Likes</span>
        </div>
      </div>
<div className='flex flex-wrap justify-evenly'>
      <Link to={`/products/${product.id}`}>
        <button className=" p-4 py-2 bg-[#c30101] flex justify-center text-white rounded hover:bg-red-500 transition duration-300">
          View Details
        </button>
      </Link>

      <Link to={`/purchase/${product.id}`}>
  <button className=" p-4 py-2 bg-green-600 flex justify-center text-white rounded hover:bg-green-500 transition duration-300">
    Purchase / Rent
  </button>
</Link>


</div>
    </div>
  );
};

export default ProductList;
