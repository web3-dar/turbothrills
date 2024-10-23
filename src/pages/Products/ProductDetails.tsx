import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from './productsimg';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component
import RandomProducts from './RandomProducts';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // Hook to navigate between routes
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="p-4">
        <p className='text-xl font-bold text-red-600'>Product not found!</p>
      </div>
    ); // Handle case if product doesn't exist
  }

   // Calculate 10% of the price

  const handleViewMoreProducts = () => {
    navigate('/product-list'); // Redirect to the product list page
  };

  return (
    <div className="p-4">
      <h1 className="flex items-center justify-center p-4 text-gray-500 text-xl shadow-lg m-4">{product.name}</h1>
      
      {/* Use the ImageSlider Component */}
      <ImageSlider images={product.images} />

      <p className="text-xl font-bold text-[#6f0000] border border-gray-300 rounded-md p-4 bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-center m-4">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
      </p>

      <p className="text-lg text-gray-700 mt-4 m-5 p-4">{product.description}</p>
      
      <div className='flex flex-wrap gap-9 justify-center'>
{/* Button to rent the product */}
<Link to={`/rent/${product.id}`}>
        <button className=" p-4 py-2 bg-[#c30101] flex justify-center text-white rounded hover:bg-red-500 transition duration-300">
          Rent Now
        </button>
      </Link>
      <Link to={`/purchase/${product.id}`}>
        <button className=" p-4 py-2 bg-green-500 flex justify-center text-white rounded hover:bg-green-600 transition duration-300">
          Purchase
        </button>
      </Link>

      </div>
      

      {/* Button to view more products */}
      <button 
        className="m-6 p-4 py-2 bg-gray-400 flex justify-center text-white rounded hover:bg-gray-500 transition duration-300 m-auto mt-4"
        onClick={handleViewMoreProducts}
      >
        View More Products
      </button>

      <div className='m-6 p-4 py-2 text-xl text-center flex justify-center text-gray-500 shadow-md rounded hover:bg-gray-200 transition duration-300'>
        Check Out More Featured Vehicles
      </div>

      <RandomProducts />
    </div>
  );
};

export default ProductDetails;
