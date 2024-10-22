
import { Link } from 'react-router-dom';
import { FaHome ,  } from 'react-icons/fa';

import FeaturedCars from './FeaturedCars/FeaturedCars';


const AboutUs = () => {
  return (
    <div className="p-8">
      <h1 className="flex items-center justify-center p-4 bg-[#c30101] text-white  shadow-lg">About Us</h1>
      
      <p className='p-10'> Welcome to <span className='font-bold text-[#C30101]'>Turbo Thrills</span>, where your automotive dreams accelerate into reality! At Turbo Thrills, we are passionate about cars and dedicated to providing an unparalleled experience in buying, selling, and swapping vehicles.

      <br /> <br />

<span className='font-bold text-[#C30101]'> With </span>years of experience in the automotive industry, our team of experts understands that each customer has unique needs and preferences. Whether you're looking to upgrade your ride, sell your current vehicle, or make a trade, we offer personalized solutions tailored just for you.

<br /><br /><br />
<span className='font-bold text-[#C30101]'>Our </span> commitment to transparency, quality, and customer satisfaction sets us apart. We carefully select each car in our inventory to ensure it meets our high standards. When you choose Turbo Thrills, you're not just getting a vehicle; you're gaining a partner in your automotive journey.
<br /><br /><br />
<span className='font-bold text-[#C30101]'>Explore</span> our extensive selection of cars, each with a unique story, and let us help you find the perfect match. At Turbo Thrills, we believe in making every transaction smooth and hassle-free, so you can enjoy the thrill of the drive without the stress.

<br /> <br />

<span className='font-bold text-[#C30101]'>Join us at Turbo Thrills and experience the excitement of a new ride today!</span>
      </p>

      <Link to="/" className="flex items-center justify-center p-4 bg-[#c30101] text-white fixed bottom-0 left-0 right-0 shadow-lg">
        <div className=' className="text-3xl mr-2" '>
        <FaHome/>
          </div>
      </Link>

    <FeaturedCars/>  
    </div>
  );
};

export default AboutUs;