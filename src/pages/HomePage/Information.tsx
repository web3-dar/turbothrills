import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; // Importing icons

const Info = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 bg-gray-100 p-10 hover:bg-gray-100">
      {/* Left section with contact details */}
      <div className="flex flex-col md:w-1/2 p-5 bg-white shadow-md">
        <h2 className="text-2xl p-2 font-bold mb-4 text-center text-red-400 shadow-md hover:bg-gray-100">
          Talk To Us
        </h2>

        {/* Phone Section */}
        <p className="flex text-xl items-center mb-2 mb-4 p-3 text-gray-400 shadow-md hover:bg-gray-100">
          <div className='"mr-2'>
            <FiPhone />
          </div>{" "}
          +13345280640
        </p>

        {/* Email Section */}
        <p className="flex text-xl items-center mb-2 mb-4 p-3 text-gray-400 shadow-md hover:bg-gray-100">
          <div className="mr-2">
            <FiMail />
          </div>{" "}
          Turbothrills.vercel@gmail.com
        </p>

        {/* Location Section */}
        <p className="flex text-xl items-center mb-2 mb-4 p-3 text-gray-400 shadow-md hover:bg-gray-100">
          <div className="mr-2">
            <FiMapPin />
          </div>{" "}
          West Roxbury Massachusetts 02132
        </p>
      </div>
    </div>
  );
};

export default Info;
