import React from 'react';
import projects from "../assets/projects.png";
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import equina from "../assets/Projects/Equin.png";
import orderawy from "../assets/Projects/orderawy.png";
import OmegaCare from "../assets/Projects/OmegaCare.png";

export default function Projects() {
  return (
    <div className="py-8 px-4 sm:px-8 md:px-14 pt-12 bg-[#F8FAFF]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-main font-semibold uppercase flex items-center text-xl mb-3">
          <span className="inline-block w-10 h-[2px] bg-main mr-2"></span>
          Our Projects
          <span className="inline-block w-10 h-[2px] bg-main ml-2"></span>
        </p>
        <h2 className="text-xl md:text-5xl font-bold text-center">
          <span className="flex items-center justify-center">
            Our Recent Latest
            <img
              src={projects}
              alt="Go Smart elevate"
              className="md:mx-3 mx-2 md:w-44 w-[5.5rem] mt-1 md:mt-3"
            />
          </span>
        </h2>
      </div>
      <h5 className="flex items-center justify-end xl:max-w-[90%] text-main font-medium text-base mt-5 xl:mt-0 cursor-pointer">
        <span className="bg-main rounded-full text-white p-2 mr-2">
          <FaArrowDown />
        </span>
        Download Portfolio Now
      </h5>

      {/* Projects Grid */}
      <div className="relative flex flex-wrap justify-center items-start gap-8 py-16">
        {/* First Card */}
        <div className="w-full sm:w-[90%] md:w-[406px] rounded-[24px] border border-gray-300 bg-white p-6 flex flex-col justify-between z-10">
          <div>
            <h3 className="text-[20px] md:text-[24px] font-bold capitalize leading-tight font-[Poppins] text-[#000066] px-4 py-2">
              Equina
            </h3>
            <p className="text-sm font-normal leading-[150%] capitalize font-[Poppins] text-[#03030C4D] px-4 py-2">
              ERP system and mobile app for horse clubs and lesson bookings.
            </p>
          </div>
          <img src={equina} alt="equina" className="object-cover mx-auto w-full max-w-[400px] rounded-md" />
          <button className="w-full mt-6 rounded bg-[#000066] text-white text-base md:text-lg font-semibold px-4 py-3">
            Website & Mobile App
          </button>
        </div>
        {/* Middle Card */}
        <div className="w-full sm:w-[90%] md:w-[406px] rounded-[24px] border border-gray-300 bg-white p-6 flex flex-col justify-between xl:-mt-16 z-20">
          <div>
            <h3 className="text-[20px] md:text-[24px] font-bold capitalize leading-tight font-[Poppins] text-[#000066] px-4 py-2">
              OmegaCare
            </h3>
            <p className="text-sm font-normal leading-[150%] capitalize font-[Poppins] text-[#03030C4D] px-4 py-2">
              CRM system for healthcare company integrated with WhatsApp messaging.
            </p>
          </div>
          <img src={OmegaCare} alt="OmegaCare" className="object-cover mx-auto w-full max-w-[400px] rounded-md" />
          <button className="w-full mt-6 rounded bg-[#000066] text-white text-base md:text-lg font-semibold px-4 py-3">
            ERP
          </button>
        </div>
        {/* Third Card */}
        <div className="w-full sm:w-[90%] md:w-[406px] rounded-[24px] border border-gray-300 bg-white p-6 flex flex-col justify-between z-10">
          <div>
            <h3 className="text-[20px] md:text-[24px] font-bold capitalize leading-tight font-[Poppins] text-[#000066] px-4 py-2">
              Ordarawy Market
            </h3>
            <p className="text-sm font-normal leading-[150%] capitalize font-[Poppins] text-[#03030C4D] px-4 py-2">
              Full grocery app with ERP, POS, and delivery applications integrated.
            </p>
          </div>
          <img src={orderawy} alt="orderawy" className="object-cover mx-auto w-full max-w-[400px] rounded-md" />
          <button className="w-full mt-6 rounded bg-[#000066] text-white text-base md:text-lg font-semibold px-4 py-3">
            Mobile App
          </button>
        </div>
      </div>
      <Link to="/allprojects" className="flex items-center justify-end max-w-[90%] text-main font-medium text-xl underline underline-offset-2 cursor-pointer">
        See More
      </Link>
    </div>
  );
}
