import React from "react";
import { Link } from "react-router-dom"; // Import the Link component

const SelectorPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Select Your Role
        </h1>
        <div className="flex flex-col space-y-4">
          {/* Link wrapping the button for Donor */}
          <Link to="/donor?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai" className="text-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
              I am a Donor
            </button>
          </Link>

          {/* Link wrapping the button for Charity Organization */}
          <Link to="/charity?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai" className="text-center">
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full">
              I am a Charity Organization
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectorPage;
