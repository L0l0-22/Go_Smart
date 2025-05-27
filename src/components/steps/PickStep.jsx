import React from 'react';
import { IoIosArrowForward, IoMdArrowBack } from "react-icons/io";

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
          <h4 className="text-xl font-semibold text-forest mb-4">Scheduled Pickup</h4>
          <ul className="text-gray-700 space-y-3">
            <li>- Date: <span className="font-medium">Wednesday, June 5</span></li>
            <li>- Time: <span className="font-medium">10:00 AM - 12:00 PM</span></li>
            <li>- Location: <span className="font-medium">PrepKitchen Hub, Cairo</span></li>
          </ul>
        </div>

        {/* Right Section - Personal Info */}
        <div className="lg:w-[35%] w-full bg-[#f9fafc] p-6 rounded-xl shadow border">
          <h4 className="text-xl font-semibold text-forest mb-4">Contact Details</h4>
          <div className="text-forest space-y-2 text-sm">
            <p>- Ahmed Talaat</p>
            <p>- 6th October, Giza, Egypt</p>
            <p className="flex items-center">
              - 01112290181
            </p>
          </div>

          <button type="button" className="w-full mt-6 bg-forest text-beige py-2 rounded-lg font-medium hover:bg-[#2f4834] transition">
            Update Pickup
          </button>

          <div className="mt-6 text-forest relative">
            <h3 className="font-semibold text-lg">View order summary</h3>
            <p className="text-sm text-gray-600">See your selected meals & plan cost</p>
            <IoIosArrowForward size={24} className="absolute top-2 right-2 text-forest" />
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
