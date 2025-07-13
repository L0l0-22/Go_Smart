import React from 'react';
import projects from "../assets/projects.png";
import frame from "../assets/Frame 109.png";
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

      <h5 className="flex items-center justify-end lg:max-w-[90%] text-main font-medium text-base mt-5 lg:mt-0 cursor-pointer">
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
              Project Name
            </h3>
            <p className="text-sm font-normal leading-[150%] capitalize font-[Poppins] text-[#03030C4D] px-4 py-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s...
            </p>
          </div>
          <img src={frame} alt="Project visual" className="object-contain mx-auto w-full max-w-[300px]" />
          <button className="w-full mt-6 rounded bg-[#000066] text-white text-base md:text-lg font-semibold px-4 py-3">
            Mobile App & Website
          </button>
        </div>

        {/* Middle Card */}
        <div className="w-full sm:w-[90%] md:w-[406px] rounded-[24px] border border-gray-300 bg-white p-6 flex flex-col justify-between lg:-mt-16 z-20">
          <div>
            <h3 className="text-[20px] md:text-[24px] font-bold capitalize leading-tight font-[Poppins] text-[#000066] px-4 py-2">
              Project Name
            </h3>
            <p className="text-sm font-normal leading-[150%] capitalize font-[Poppins] text-[#03030C4D] px-4 py-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s...
            </p>
          </div>
          <img src={frame} alt="Project visual" className="object-contain mx-auto w-full max-w-[300px]" />
          <button className="w-full mt-6 rounded bg-[#000066] text-white text-base md:text-lg font-semibold px-4 py-3">
            Mobile App & Website
          </button>
        </div>

        {/* Third Card */}
        <div className="w-full sm:w-[90%] md:w-[406px] rounded-[24px] border border-gray-300 bg-white p-6 flex flex-col justify-between z-10">
          <div>
            <h3 className="text-[20px] md:text-[24px] font-bold capitalize leading-tight font-[Poppins] text-[#000066] px-4 py-2">
              Project Name
            </h3>
            <p className="text-sm font-normal leading-[150%] capitalize font-[Poppins] text-[#03030C4D] px-4 py-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s...
            </p>
          </div>
          <img src={frame} alt="Project visual" className="object-contain mx-auto w-full max-w-[300px]" />
          <button className="w-full mt-6 rounded bg-[#000066] text-white text-base md:text-lg font-semibold px-4 py-3">
            Mobile App & Website
          </button>
        </div>
      </div>

      <Link to="/allprojects" className="flex items-center justify-end max-w-[90%] text-main font-medium text-xl underline underline-offset-2 cursor-pointer">
        See More
      </Link>
    </div>
  );
}
