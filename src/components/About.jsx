import React from 'react';
import about from "../assets/about.png";
import empower from "../assets/empower.png";
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="py-12 px-4 bg-[#F8FAFF]">
      <div className="max-w-[95%] mx-auto rounded-md border border-gray-300 bg-white py-8 px-14 md:flex items-center gap-8">
        {/* Left */}
        <div className="md:w-1/2 space-y-8">
          <p className=" text-main font-semibold uppercase flex items-center">
            About Go Smart 
            <span className="inline-block w-10 h-[2px] bg-main ml-2"></span>
          </p>

          <h2 className="text-xl md:text-2xl lg:text-5xl font-bold md:leading-[3.2rem] lg:leading-[3.2rem] max-w-sm lg:max-w-2xl">
            <span className='flex items-center'>
              Our Aim Is To 
              <img src={empower} alt="About Go empower" className='ml-3 mt-1 lg:w-auto md:w-24 w-[4.5rem]'/>
            </span>
            <span>Businesses To Thrive In The </span>
            <span>Digital Age.</span>
          </h2>

          <p className="text-base md:text-lg font-medium leading-[1.9rem] md:max-w-xl max-w-full text-gray-500">
            With a team of highly skilled developers, designers, and innovators, we specialize in developing bespoke software solutions tailored to meet the unique needs of our clients across various industries.
          </p>

          <div className="lg:w-1/3 w-full z-50 p-2 rounded-full bg-gradient-to-r from-[#DBE0FF] to-[#FFFFFF] shadow-lg">
            <Link to="about"
              className="bg-main w-full text-xl font-medium text-white px-5 py-3 rounded-full flex justify-center transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src={about} alt="About Go Smart"/>
        </div>
      </div>
    </section>
  );
}
