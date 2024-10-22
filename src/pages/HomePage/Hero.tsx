// src/components/Home.tsx
import React from 'react';
import Carousel from './Carousel'; 
import { Link } from 'react-router-dom';
import SellYourCarSection from './SellYourCar.section';
import YourGarage from './Garage';
import Reviews from './Review';
import Info from './Information';

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

<Info/>
    

      
    </div>
  );
};

export default Home;

