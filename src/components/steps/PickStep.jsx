import React from 'react';
import { IoIosArrowForward, IoMdArrowBack } from "react-icons/io";
import Track from './Track';

export default function PickStep({ onBack }) {
  return (
    <div className="w-[90%] mx-auto py-10">
      {/* Heading */}
      <div>
        <h3 className="font-bold text-2xl text-forest mb-1">Pickup Information</h3>
        <p className="text-gray-600">Review your pickup location and time preferences</p>
      </div>

      {/* Main layout */}
      <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 lg:space-x-4 mt-6">
        {/* Left Section - Summary */}
        <div className="lg:w-[65%] w-full bg-[#f9fafc] p-6 rounded-xl shadow border">
        <Track/>
        </div>

       {/* Right Section - Contact Summary */}
        <div className="lg:w-[35%] w-full bg-white p-6 rounded-xl shadow border">
          <h4 className="text-xl font-semibold text-forest mb-4">Your Information</h4>
          
          <div className="text-forest space-y-3 text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Name:</span>
              <span className='text-gray-600'>Ahmed Talaat</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Location:</span>
              <span className='text-gray-600'>6th October, Giza, Egypt</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Phone:</span>
              <span className='text-gray-600'>01112290181</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-beige rounded-lg border text-forest shadow">
            <h3 className="font-semibold text-lg">Your Selected Plan</h3>
            <p className="text-sm text-gray-600">
              High-Protein | 4 meals/day | Muscle Gain
            </p>
            <p className="text-sm mt-2 italic text-gray-500">
              “Fuel your body, feed your goals.”
            </p>
          </div>
        </div>
</div>


      {/* Back button */}
      <div className="mt-10 flex justify-start">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-32 py-3 bg-beige text-forest font-semibold rounded-md shadow-sm hover:bg-[#d8cfbf] transition"
        >
          <IoMdArrowBack size={20} className="mr-2" />
          Back
        </button>
      </div>
    </div>
  );
}
