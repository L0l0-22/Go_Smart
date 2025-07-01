import React from 'react'
import logo1 from "../assets/workLogo.png";
import logo2 from "../assets/workLogo2.png";
import morelogo from "../assets/morelogo.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function LearnMoreAbout() {
  return (
    <div className='bg-main px-8 py-24 relative mb-20'>
      <div className="absolute left-0 top-[-1px] hidden md:block h-full z-10">
        <img src={logo1} alt="Go Smart logo" className="h-full"/>
      </div>
      <div className="absolute right-0 top-[-1px] hidden md:block h-full z-10">
        <img src={logo2} alt="Go Smart logo" className="h-full"/>
      </div>
      <div className="max-w-[85%] mx-auto text-white">
        <div className='mt-12'>
          <h1
            className="text-white text-5xl font-bold"
            style={{ textShadow: '8px 8px #292B85' }}
          >
            About Us
          </h1>
        </div>
        <div className='max-w-7xl mx-auto flex flex-col gap-10 mt-16 items-'>
          <div className='flex space-x-24'>
            <div className='w-1/4'>
              <img src={one}  className=""/>
            </div>
            <div className='3/4'>
            <div className='flex items-center'>
              <img src={morelogo}  className="w-[48px] h-[48px]"/>
              <p className='text-4xl font-bold ml-4'>Our Mission</p>
            </div> 
            <div className="inline-block h-[0.5px] bg-gray-200 mr-2 w-full"></div>
             <p className="text-base md:text-lg font-normal leading-[1.9rem] max-w-4xl text-gray-300">
              Empowering Businesses Through Seamless And Scalable Software Solutions, We Seamlessly Transform Ideas Into Reality, Accelerating Growth And Driving Innovation.
             </p>
            </div>
          </div>
           <div className='flex space-x-24'>
            <div className='w-1/4'>
              <img src={two}  className=""/>
            </div>
            <div className='3/4'>
            <div className='flex items-center'>
              <img src={morelogo}  className="w-[48px] h-[48px]"/>
              <p className='text-4xl font-bold ml-4'>Our Vision</p>
            </div> 
            <div className="inline-block h-[0.5px] bg-gray-200 mr-2 w-full"></div>
             <p className="text-base md:text-lg font-normal leading-[1.9rem] max-w-4xl text-gray-300">
              To Be The World's Premier Software Development Partner, Empowering Businesses To Achieve Their Digital Aspirations Through Our Expertise, Innovation And Unwavering Commitment To Success.
             </p>
            </div>
          </div>
           <div className='flex space-x-24'>
            <div className='w-1/4'>
              <img src={three}  className=""/>
            </div>
            <div className='3/4'>
            <div className='flex items-center'>
              <img src={morelogo}  className="w-[48px] h-[48px]"/>
              <p className='text-4xl font-bold ml-4'>Our Values</p>
            </div> 
            <div className="inline-block h-[0.5px] bg-gray-200 mr-2 w-full"></div>
             <p className="text-base md:text-lg font-normal leading-[1.9rem] max-w-4xl text-gray-300">
              Driven By Excellence, Innovation, And Customer-Centricity, We Forge Lasting Partnerships, Delivering Exceptional Software Solutions That Empower Businesses To Thrive.
             </p>
            </div>
          </div>
          <div className='flex justify-end z-30'>
            <Link to="requestdemo" className='px-4 py-2 border rounded shadow w-fit flex items-center' >
              Request A Demo
              <MdOutlineArrowOutward className='ml-3' size={20}/>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}
