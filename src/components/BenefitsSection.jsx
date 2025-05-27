import React from 'react';
import { FiCoffee, FiPieChart, FiSmartphone } from 'react-icons/fi';
import { GiBiceps } from 'react-icons/gi';
import model from "../assets/woman.jpg";

export default function BenefitsSection() {
    return (
      <div className="relative">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full rotate-180 -mt-1"
      >
        <path
          fill="#EDE6D6"
          fillOpacity={1}
          d="M0,224L80,192C160,160,320,96,480,106.7C640,117,800,203,960,213.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
        <div className="flex flex-col md:flex-row items-center justify-between w-[90%] container mx-auto">
          {/* Left content */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="flex items-center space-x-4">
              <FiCoffee size={36} className=" text-Darkgreen mt-1" />
              <p className="text-lg font-medium text-green-950">
                Satisfy hunger, control cravings and stop snacking with +40g of protein per meal
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FiPieChart size={36} className=" text-Darkgreen mt-1" />
              <p className="text-lg font-medium text-green-950">
                Control calories with ample pre-portioned meal sizes – no hitting the fridge between meals
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FiSmartphone size={36} className=" text-Darkgreen mt-1" />
              <p className="text-lg font-medium text-green-950">
                Calorie tracking’s a breeze with macros pre-uploaded to MyFitnessPal
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <GiBiceps size={36} className=" text-Darkgreen mt-1" />
              <p className="text-lg font-medium text-green-950">
                Gain bulk with our muscle-building max protein plan
              </p>
            </div>
          </div>
  
          {/* Right image */}
          <div className="w-full md:w-[40%] mt-12 md:mt-0 flex justify-center">
            <div className="rounded-full overflow-hidden w-72 h-72 md:w-[33rem] md:h-[33rem] relative">
              <img
                src={model}
                alt="Model"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
          <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto block -mb-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#3A5A40"
            fillOpacity="1"
            d="M0,0L60,53.3C120,107,240,213,360,218.7C480,224,600,128,720,106.7C840,85,960,139,1080,170.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    );
  }
  