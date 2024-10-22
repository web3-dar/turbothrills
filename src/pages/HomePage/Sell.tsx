// src/Sell.tsx

import React from "react";
import { useState } from "react";
import { FaCheck , FaArrowLeft } from "react-icons/fa"; 
import { Link } from 'react-router-dom';


const Sell: React.FC = () => {
  const [tab, setTab] = useState('instant-offer');

  return (
    <div>
      {/* Heading */}
      <div className="mt-5 inline-block bg-[#c30101] text-white px-5 py-4 rounded flex justify-center text-xl">
        <p>Sell your car your way</p>
      </div>

      {/* Description */}
      <p className="m-6">
        <span className="text-[#c30101]">Quickly</span> and securely cash-in your offer from a local dealer, or create a
        free listing to sell it yourself on TT
      </p>

      {/* Tab Navigation */}
      <div className="flex justify-around mb-4">
        <button
          onClick={() => setTab('instant-offer')}
          className={`font-bold pb-2 ${tab === 'instant-offer' ? 'border-b-2 border-[#c30101]' : ''}`}
        >
          Get instant offer
        </button>
        <button
          onClick={() => setTab('list-on-cars')}
          className={`font-bold pb-2 ${tab === 'list-on-cars' ? 'border-b-2 border-[#c30101]' : ''}`}
        >
          List on Cars
        </button>
      </div>

      {/* Tab Content */}
      {tab === 'instant-offer' && (
        <div>
          <h2 className="text-xl font-bold m-3">Get instant offer</h2>
          <p className="m-4">
            Take the next step to get an exact, no obligation cash offer on your car from a local dealer right now, and
            get paid after a quick inspection of your vehicle’s condition at the dealership.
          </p>
          <ul className="list-disc ml-6 mt-4">
          <ul className="list-none ml-6 mt-4">
            <li className="flex items-center">
            <div className="text-[#c30101] mr-2">
              <FaCheck  />
                </div> Sell your car quickly
            </li>
            <li className="flex items-center mt-2">
            <div className="text-[#c30101] mr-2">
              <FaCheck  />
                </div> Transact with full transparency
            </li>
            <li className="flex items-center mt-2">
              <div className="text-[#c30101] mr-2">
              <FaCheck  />
                </div> Secure easy payment
            </li>
          </ul>
          </ul>
          <button className="m-4 px-4 py-2 bg-[#c30101] text-white rounded">Get your instant offer</button>
        </div>
      )}

      {tab === 'list-on-cars' && (
        <div>
          <div className="lg:w-1/2">
        <h1 className="text-xl font-bold m-4">List your car on TurboThrills</h1>
        <p className="m-6">
          Quickly and easily create a free listing at your own asking price and wait for interested shoppers to contact
          you directly.
        </p>

        <ul className="list-none ml-0 space-y-4">
          <li className="flex items-start">
           <div className="text-green-500 mr-2 mt-1"> <FaCheck  />
            </div>
            <span>
              <strong>List your car for free.</strong> There are no costs or hidden fees to selling your car yourself on
              ThurboThrills.
            </span>
          </li>
          <li className="flex items-start">
          <div className="text-green-500 mr-2 mt-1"> <FaCheck  />
          </div>
            <span>
              <strong>Set your own price.</strong> Use TT’s insights into your vehicle’s market value to set your
              asking price.
            </span>
          </li>
          <li className="flex items-start">
          <div className="text-green-500 mr-2 mt-1"> <FaCheck  />
          </div>
            <span>
              <strong>
                <span className="text-[#c30101]">NEW</span> Transact with Laramel.
              </strong>{" "}
              We’ve partnered with Laramel to level-up your TT listing. Give verified buyers a handy way to add
              financing, vehicle protection, insurance, and delivery. Laramel will handle the paperwork, DMV, and get
              you paid safely.{" "}
              <a
                href="#how-it-works"
                className="underline text-[#c30101] hover:text-gray-800"
                target="_blank"
                rel="noreferrer"
              >
                How it works
              </a>
            </span>
          </li>
        </ul>

        <p className="mt-6">
          Already have a listing?{" "}
          <a href="#view-garage" className="underline text-[#c30101] hover:text-gray-800">
            View Your Garage
          </a>
        </p>
        <p className="mt-2">
          Want expert advice on how to sell your used car?{" "}
          <a href="#check-it-out" className="underline text-[#c30101] hover:text-gray-800">
            Check it out.
          </a>
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 mt-8 lg:mt-0 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <button className="px-4 py-2 bg-[#c30101] text-white rounded-l-lg">License plate</button>
          <button className="px-4 py-2 bg-gray-300 text-black rounded-r-lg">VIN</button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="License plate"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          />
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
          
  <option value="">State</option>
  <option value="AL">Alabama</option>
  <option value="AK">Alaska</option>
  <option value="AZ">Arizona</option>
  <option value="AR">Arkansas</option>
  <option value="CA">California</option>
  <option value="CO">Colorado</option>
  <option value="CT">Connecticut</option>
  <option value="DE">Delaware</option>
  <option value="FL">Florida</option>
  <option value="GA">Georgia</option>
  <option value="HI">Hawaii</option>
  <option value="ID">Idaho</option>
  <option value="IL">Illinois</option>
  <option value="IN">Indiana</option>
  <option value="IA">Iowa</option>
  <option value="KS">Kansas</option>
  <option value="KY">Kentucky</option>
  <option value="LA">Louisiana</option>
  <option value="ME">Maine</option>
  <option value="MD">Maryland</option>
  <option value="MA">Massachusetts</option>
  <option value="MI">Michigan</option>
  <option value="MN">Minnesota</option>
  <option value="MS">Mississippi</option>
  <option value="MO">Missouri</option>
  <option value="MT">Montana</option>
  <option value="NE">Nebraska</option>
  <option value="NV">Nevada</option>
  <option value="NH">New Hampshire</option>
  <option value="NJ">New Jersey</option>
  <option value="NM">New Mexico</option>
  <option value="NY">New York</option>
  <option value="NC">North Carolina</option>
  <option value="ND">North Dakota</option>
  <option value="OH">Ohio</option>
  <option value="OK">Oklahoma</option>
  <option value="OR">Oregon</option>
  <option value="PA">Pennsylvania</option>
  <option value="RI">Rhode Island</option>
  <option value="SC">South Carolina</option>
  <option value="SD">South Dakota</option>
  <option value="TN">Tennessee</option>
  <option value="TX">Texas</option>
  <option value="UT">Utah</option>
  <option value="VT">Vermont</option>
  <option value="VA">Virginia</option>
  <option value="WA">Washington</option>
  <option value="WV">West Virginia</option>
  <option value="WI">Wisconsin</option>
  <option value="WY">Wyoming</option>


          </select>
        </div>

        <button className="w-full py-2 bg-[#c30101] text-white rounded-lg hover:bg-black">Get started</button>

        <p className="text-xs text-gray-500 mt-4">
          By clicking here, you authorize ThurboThrills to continue with collecting your information. We only save this data
          to provide you a listing to sell your car. We value and protect your privacy.{" "}
          <a href="#privacy-notice" className="underline text-red-600 hover:text-red-200">
            ThurboThrills Privacy Notice
          </a>
        </p>
      </div>
    
        </div>
      )}

<Link to="/" className="flex items-center justify-center p-4 bg-[#c30101] text-white fixed bottom-0 left-0 right-0 shadow-lg">
 <div className="text-3xl mr-2">
 <FaArrowLeft  />
  </div></Link>
    </div>
  );
};

export default Sell;
