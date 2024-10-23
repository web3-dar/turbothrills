import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from './productsimg';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component
import RandomProducts from './RandomProducts';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStar = '★';
  const emptyStar = '☆';

  // Render the star rating based on the price
  return (
    <div className="text-yellow-500 text-xl flex justify-center mt-2">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? fullStar : emptyStar}
        </span>
      ))}
    </div>
  );
};

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // Hook to navigate between routes
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <p className='text-xl font-bold text-[#6f0000] border border-gray-300 rounded-md p-4 bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-center m-4'>
        Product not found!
      </p>
    ); // Handle case if product doesn't exist
  }

  const handleViewMoreProducts = () => {
    navigate('/product-list'); // Redirect to the product list page
  };

  // Calculate 30% of the product's price for the down payment
  const downPayment = product.price * 0.3;

  // Function to calculate rating based on price
  const getRatingBasedOnPrice = (price: number) => {
    if (price <= 10000) return 1;
    if (price <= 20000) return 2;
    if (price <= 30000) return 3;
    if (price <= 40000) return 4;
    return 5;
  };

  // Get the rating for the current product
  const rating = getRatingBasedOnPrice(product.price);

  return (
    <div className="p-4">
      <h1 className="flex items-center justify-center p-4 text-gray-500 text-xl shadow-lg m-3">{product.name}</h1>
      
      {/* Use the ImageSlider Component */}
      <ImageSlider images={product.images} />
      
      {/* Display product price */}
      <p className="text-xl font-bold text-[#6f0000] border border-gray-300 rounded-md p-4 bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-center m-1"> <span className='p-2'>Current Price:</span>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
      </p>

      {/* Display Star Rating based on price */}
      <div className='text-xl  border border-gray-300 rounded-md p-4 bg-gray-100 text-center  '> <StarRating rating={rating} />
        </div>

      {/* Display Down Payment */}
      <p className="text-xl  border border-gray-300 rounded-md p-4 bg-gray-100 text-center m-1">
      <span className='p-2'>Down Payment:</span> 
        <span className="font-bold text-[#c30101]">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(downPayment)}
        </span>
      </p>

      <p className="text-lg text-gray-700 mt-4 m-5 p-4">{product.description}</p>
      
      {/* Button to view more products */}
      <button 
        className="m-6 p-4 py-2 bg-[#c30101] flex justify-center text-white rounded hover:bg-red-500 transition duration-300"
        onClick={handleViewMoreProducts}
      >
        View More Products
      </button>

      <div className='m-6 p-4 py-2 text-xl text-center flex justify-center text-gray-500 shadow-md rounded hover:bg-gray-200 transition duration-300'>
        Check Out More Featured Vehicles
      </div>

      <Link to="/product-list" className="flex items-center justify-center p-4 bg-[#c30101] text-white fixed bottom-0 left-0 right-0 shadow-lg">
        <div className="text-3xl mr-2">
          <FaArrowLeft  /> 
        </div>
      </Link>

      <RandomProducts />
    </div>
  );
};

export default ProductDetails;
