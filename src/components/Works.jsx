import React from 'react';

import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

export default function Works() {
  return (
    <div
      className="relative bg-beige pt-12 -mt-1"    >
      <div className="text-center text-5xl font-bold text-Darkgreen mb-20">
        How it works
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-evenly gap-10">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center space-y-4 relative w-full md:w-1/4">
          <div className="relative">
            <img
              src={step1}
              alt="Step 1"
              className="w-32 h-32 rounded-full object-cover"
            />
            <span className="absolute -top-2 -right-2 bg-Darkgreen text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md font-bold">
              1
            </span>
          </div>
          <h3 className="font-semibold text-lg text-green-950">Pick your plans & meals</h3>
          <p className="text-sm text-gray-700">
            Define your goal and choose meals from our biweekly rotating menu
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center space-y-4 relative w-full md:w-1/4">
          <div className="relative">
            <img
              src={step2}
              alt="Step 2"
              className="w-32 h-32 rounded-full object-cover"
            />
            <span className="absolute -top-2 -right-2 bg-Darkgreen text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md font-bold">
              2
            </span>
          </div>
          <h3 className="font-semibold text-lg text-green-950">Each meal is freshly prepared</h3>
          <p className="text-sm text-gray-700">
            Our chefs freshly prepare your dishes with macro precision
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center space-y-4 relative w-full md:w-1/4">
          <div className="relative">
            <img
              src={step3}
              alt="Step 3"
              className="w-32 h-32 rounded-full object-cover"
            />
            <span className="absolute -top-2 -right-2 bg-Darkgreen text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md font-bold">
              3
            </span>
          </div>
          <h3 className="font-semibold text-lg text-green-950">Then couriered to your door</h3>
          <p className="text-sm text-gray-700">
            Receive your fresh cooked meals, chilled & ready for the fridge or freezer
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center space-y-4 relative w-full md:w-1/4">
          <div className="relative">
            <img
              src={step4}
              alt="Step 4"
              className="w-32 h-32 rounded-full object-cover"
            />
            <span className="absolute -top-2 -right-2 bg-Darkgreen text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md font-bold">
              4
            </span>
          </div>
          <h3 className="font-semibold text-lg text-green-950">Just heat, eat, & enjoy</h3>
          <p className="text-sm text-gray-700">
            Heat them up, enjoy the delicious flavours, track your macros
          </p>
        </div>
      </div>
     

    </div>
  );
}
