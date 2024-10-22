import React from 'react';
import { FaLaptop, FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 import SellCar from '../../assets/images/sell-removebg-preview.png';

const SellYourCarSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-10 px-5 md:px-20 bg-white">
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-2xl font-semibold mb-2 shadow-md p-5 px-10 text-red-400 text-center mb-4 hover:bg-gray-100">Sell your car your way</h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Card 1 */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#C30101] p-4 rounded-full">
             <div className="text-white text-3xl"><FaLaptop  />
              </div> 
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Get an offer online</h3>
              <p className="text-gray-600">Quickly complete the transaction with a local dealer.</p>
            </div>
          </div>
          <div className="hidden md:block border-r border-gray-300 h-16 mx-4"></div>
          <p className="text-xl font-bold md:hidden">OR</p>

          {/* Card 2 */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#C30101] p-4 rounded-full">
              <div className="text-white text-3xl"><FaCar  />
                </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">List your car for free</h3>
              <p className="text-gray-600">Set your own price and easily showcase your car.</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <Link to="/sell">
  <button className="mt-8 px-6 py-2 border-2 border-black rounded-full text-black font-semibold hover:bg-[#C30101] hover:text-white transition-colors">
    Get started
  </button>
</Link>
      </div>

      {/* Right-side image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img src={SellCar} alt="People with cars" className="w-full max-w-xs md:max-w-md" />
      </div>
    </div>
  );
};

export default SellYourCarSection;
