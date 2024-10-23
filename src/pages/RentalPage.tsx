// RentalPage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../pages/Products/productsimg"; // Adjust the import based on your project structure

const RentalPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found!</p>; // Handle case if product doesn't exist
  }

  const hirePrice = (product.price * 0.1).toFixed(2); // Calculate 10% of the price

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4 m-6 p-4 py-2 text-2xl text-center flex justify-center text-gray-500 shadow-md rounded hover:bg-gray-200">
        {product.name}
      </h1>
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <p className="text-lg text-gray-700 mb-2 p-5 ">
        Description: {product.description}
      </p>
      <p className="text-xl font-bold text-[#6f0000] border border-gray-300 rounded-md p-4 bg-gray-100   text-center m-4">
        Price:{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </p>
      <p className="text-xl font-semibold text-green-600 mb-4 text-xl font-bold text-[#6f0000] border border-gray-300 rounded-md p-4 bg-gray-100   text-center m-4">
        Hire Price:{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(Number(hirePrice))}
      </p>
      <div className="flex flex-wrap justify-evenly gap-8">
        {/* Link to rent the product */}
        <Link to={`/purchase/${product.id}`}>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300 ">
            Rent Now
          </button>
        </Link>

        <Link to={`/purchase/${product.id}`}>
          <button className=" p-4 py-2 bg-green-600 flex justify-center text-white rounded hover:bg-green-500 transition duration-300">
            Purchase Now
          </button>
        </Link>

        <Link to="/product-list">
          <button className="ml-4 px-4 py-2 bg-gray-400 text-gray-700 rounded hover:bg-gray-200 transition duration-300 ">
            Back to Product List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RentalPage;
