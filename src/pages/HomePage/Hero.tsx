// src/components/Home.tsx
import React from 'react';
import Carousel from './Carousel'; 
import { Link } from 'react-router-dom';
import SellYourCarSection from './SellYourCar.section';
import YourGarage from './Garage';
import Reviews from './Review';
import Info from './Information';

import RandomProducts from '../Products/RandomProducts';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Carousel />

      <br />
      <Link to="/featured-cars" className="mt-5 inline-block bg-[#c30101] text-white px-5 py-4 rounded flex justify-center text-xl ">View Featured Cars Here</Link>
<SellYourCarSection/>
<Link to="/featured-cars" className="mt-5 inline-block bg-[#c30101] text-white px-5 py-4 rounded flex justify-center text-xl ">View Featured Cars Here</Link>
<YourGarage/>

<Link to="/featured-cars" className="mt-5 inline-block bg-[#c30101] text-white px-5 py-4 rounded flex justify-center text-xl ">View Featured Cars Here</Link>

<Reviews/>

<div className='m-6 p-4 py-2 text-xl  text-center  flex  justify-center text-gray-500 shadow-md rounded hover:bg-gray-200 transition duration-300'>Check Out Top Sellers</div>
<RandomProducts/>

<Link to="/featured-cars" className="mt-5 inline-block bg-[#c30101] text-white px-5 py-4 rounded flex justify-center text-xl ">View Featured Cars Here</Link>

<Info/>
    

      
    </div>
  );
};

export default Home;

