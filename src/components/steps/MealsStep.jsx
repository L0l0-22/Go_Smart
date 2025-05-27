import React from 'react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import FixedMeals from './FixedMeals';

export default function MealsStep({ onNext, onBack }) {
  return (
    <>
    <FixedMeals/>
    <div className="mt-5 flex justify-between items-center max-w-4xl mx-auto px-4">
      <button
        onClick={onBack}
        className="flex items-center justify-center w-32 py-3 bg-beige text-forest font-semibold rounded-md shadow-sm 
        hover:bg-[#d8cfbf] transition-colors duration-200"
      >
        <IoMdArrowBack size={20} className="mr-2" />
        Back
      </button>
      <button
        onClick={onNext}
        className="flex items-center justify-center w-32 py-3 bg-forest text-white font-semibold rounded-md shadow-sm 
        hover:bg-[#2f4834] transition-colors duration-200"
      >
        Next
        <IoMdArrowForward size={20} className="ml-2" />
      </button>
    </div>
    </>
   
  );
}
