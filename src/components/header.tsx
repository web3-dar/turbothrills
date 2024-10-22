import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Importing the shopping cart icon

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Explicitly set the type for isMenuOpen

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-bold text-black">
          <img src={logo} width={150} height={200} alt="Logo" />
        </Link>

        {/* Cart Icon for Mobile */}
        <div className="flex items-center lg:hidden">
          <button className="text-black mr-4 focus:outline-none">
            <div className="w-6 h-6 text-red-500">
              {" "}
              <FaShoppingCart />
            </div>
          </button>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`lg:flex ${
            isMenuOpen
              ? "absolute top-full left-0 w-full bg-white border-t border-gray-200"
              : "hidden"
          } lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 text-black lg:items-center">
            <li className="py-2 font-bold lg:py-0 border-b border-gray-200 lg:border-none hover:text-gray-600 pl-4 lg:pl-0">
              <Link
                to="/"
                className="hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Car Listings
              </Link>
            </li>
            <li className="py-2 lg:py-0 font-bold  border-b border-gray-200 lg:border-none hover:text-gray-600 pl-4 lg:pl-0">
              <Link
                to="/about-us"
                className="hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li className="py-2 lg:py-0 font-bold hover:text-gray-600 pl-4 lg:pl-0">
              <Link
                to="/contact-us"
                className="hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li className="py-2 lg:py-0 font-bold hover:text-gray-600 pl-4 lg:pl-0">
              <Link
                to="/sell"
                className="hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell Your Car
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
