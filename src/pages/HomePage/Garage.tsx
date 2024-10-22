import { useState } from "react";
import womanPng from '../../assets/images/checking.jpg'

const YourGarage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="">
      <div className="flex justify-between flex-col md:flex-row  items-center  px-10 py-10">
        {/* Left section */}
        <div className="max-w-lg m-7">
          <h1 className="text-4xl font-bold mb-4">Your Garage</h1>
          <p className="text-xl font-semibold mb-2">Add your car. Track its value.</p>
          <p className="text-lg mb-4">
            Add your car to Your Garage to track its market value and cash in when the time is right to sell.{" "}
            <a href="#" className="text-[#c30101] hover:underline">Learn more</a>
          </p>

          <button 
            onClick={toggleModal}
            className="mt-4 px-6 py-3 border-2 border-black rounded-full bg-[#c30101] text-white font-semibold hover:bg-black hover:text-white transition-colors"
          >
            Get started
          </button>

          
        </div>

        {/* Right section: Car image */}
        <div className="max-w-lg">
          <img
            src={womanPng}
            alt="Car value graph"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <h2 className="text-2xl font-bold mb-4">Add Your Car</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold">License Plate</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded-md"
                  placeholder="Enter your license plate"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">State</label>
                <select className="mt-1 w-full p-2 border rounded-md">
                  <option>Choose your state</option>
                  <option value="">Choose your state</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#c30101] text-white rounded-md hover:bg-red-600"
              >
                Submit
              </button>
            </form>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourGarage;
