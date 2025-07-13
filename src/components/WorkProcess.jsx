import React from 'react'
import elevate from "../assets/elevate.png";
import process from "../assets/process.png";
import logo1 from "../assets/workLogo.png";
import logo2 from "../assets/workLogo2.png";
import process1 from "../assets/process1.png";
import process2 from "../assets/process2.png";
import process3 from "../assets/process3.png";
import process4 from "../assets/process4 .png";
import process5 from "../assets/process5.png";
import dott from "../assets/dott.png";
import logoresp2 from "../assets/logoresp2.png";
import logoresp from "../assets/logoresp.png";

export default function WorkProcess() {

  return (
 <section>
  <style>
        {`
        .custom-card::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 30px;
          background-color: #767FFF; 
          border-radius: 28px ;
          opacity: 0;
          transition: opacity 0.6s ease, transform 0.6s ease;
          z-index: -1;
        }
        .group:hover .custom-card::after {
          opacity: 1;
          transform: translateX(-50%) scaleY(1.1);
        }
      `}
      </style>
      <div className="px-8 py-16 bg-[#F8FAFF] relative">
         <div className="absolute left-0 top-[-50px] xl:top-[-1px] hidden md:block xl:h-full z-10">
            <img src={logo1} alt="Go Smart logo" className="xl:h-full xl:w-auto w-[22rem]"/>
          </div>
          <div className="absolute right-0 bottom-0 xl:top-[-1px] hidden md:block xl:h-full z-10">
            <img src={logo2} alt="Go Smart logo" className="xl:h-full"/>
          </div>
          <div className="absolute left md:hidden block">
            <img src={logoresp} alt="Go Smart logo" />
          </div>
          <div className="absolute right-0 bottom-0 md:hidden block">
            <img src={logoresp2} alt="Go Smart logo" />
          </div>
        {/* header */}
        <div className="flex flex-col items-center justify-center">
            <p className=" text-main font-semibold uppercase flex items-center text-xl mb-3">
              <span className="inline-block w-10 h-[2px] bg-main mr-2"></span>
              Work Process
              <span className="inline-block w-10 h-[2px] bg-main ml-2"></span>
            </p> 
            <h2 className="text-4xl xl:text-5xl font-bold text-center">
              <span className='hidden md:flex items-center '>
                Smarter Way To
                <img src={elevate} alt="Go Smart elevate" className='mx-3 w-32 xl:w-40 '/> 
                Your Business
              </span>
              <span className='flex flex-col md:hidden items-center '>
                Smarter Way To
                <img src={elevate} alt="Go Smart elevate" className='my-3 w-32'/> 
                Your Business
              </span>
            </h2>
        </div>   
        {/* process */}
        <div className=' mt-8 '>
          <div className='max-w-[85%] mx-auto hidden xl:block'>
            <img src={process} alt="Go Smart process" className='w-full'/>
          </div>
         <div className="flex flex-col flex-wrap xl:flex-nowrap md:flex-row gap-12 xl:gap-[7.5rem] justify-center mt-10">
            <div className="group relative w-full md:w-[45%] xl:w-[13%] z-30 xl:mb-20 xl:-mt-20">
              <div className='flex justify-center items-center xl:hidden absolute -top-5 z-40  w-full'>
                <img src={dott} alt="Go Smart process" className='w-10'/>
              </div>
              <div className="custom-card bg-white shadow-lg hover:shadow-2xl hover:shadow-third transition-all duration-500 rounded-xl p-4 pt-6 flex flex-col justify-center items-center text-center relative">
                <img src={process1} alt="Go Smart process 1" className='w-[72px] h-[72px]' />
                <div className="mt-5">
                  <h3 className="font-bold text-2xl mb-3">Discover</h3>
                  <p className="text-base font-normal leading-[1.5rem] max-w-44 text-gray-500">
                    We begin by thoroughly understanding your business needs and objectives to tailor the best software solution for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative w-full md:w-[45%] xl:w-[13%] z-30">
            <div className='flex justify-center items-center xl:hidden absolute -top-5 z-40  w-full'>
                <img src={dott} alt="Go Smart process" className='w-10'/>
              </div>
              <div className="custom-card bg-white shadow-lg hover:shadow-third transition-all duration-500 rounded-xl p-4 pt-6 flex flex-col justify-center items-center text-center relative">
                <img src={process2} alt="Go Smart process 2" className='w-[72px] h-[72px]' />
                <div className="mt-5">
                  <h3 className="font-bold text-2xl mb-3">Design</h3>
                  <p className="text-base font-normal leading-[1.5rem] max-w-44 text-gray-500">
                    Our expert designers create intuitive and user-friendly interfaces that ensure seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative w-full md:w-[45%] xl:w-[13%] z-30 xl:mb-20 xl:-mt-20">
              <div className='flex justify-center items-center xl:hidden absolute -top-5 z-40  w-full'>
                <img src={dott} alt="Go Smart process" className='w-10'/>
              </div>
              <div className="custom-card bg-white shadow-lg hover:shadow-third transition-all duration-500 rounded-xl p-4 pt-6 flex flex-col justify-center items-center text-center relative">
                <img src={process3} alt="Go Smart process 3" className='w-[72px] h-[72px]' />
                <div className="mt-5">
                  <h3 className="font-bold text-2xl mb-3">Develop</h3>
                  <p className="text-base font-normal leading-[1.5rem] max-w-44 text-gray-500">
                    Our developers build robust, scalable, and secure software applications using modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative w-full md:w-[45%] xl:w-[13%] z-30">
              <div className='flex justify-center items-center xl:hidden absolute -top-5 z-40  w-full'>
                <img src={dott} alt="Go Smart process" className='w-10'/>
              </div>
              <div className="custom-card bg-white shadow-lg hover:shadow-third transition-all duration-500 rounded-xl p-4 pt-6 flex flex-col justify-center items-center text-center relative">
                <img src={process4} alt="Go Smart process 4" className='w-[72px] h-[72px]' />
                <div className="mt-5">
                  <h3 className="font-bold text-2xl mb-3">Deliver</h3>
                  <p className="text-base font-normal leading-[1.5rem] max-w-44 text-gray-500">
                    We deliver and deploy your custom solution with thorough testing and quality assurance to ensure optimal performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative w-full md:w-[45%] xl:w-[13%] z-30 xl:mb-20 xl:-mt-20">
              <div className='flex justify-center items-center xl:hidden absolute -top-5 z-40  w-full'>
                <img src={dott} alt="Go Smart process" className='w-10'/>
              </div>
              <div className="custom-card bg-white shadow-lg hover:shadow-third transition-all duration-500 rounded-xl p-4 pt-6 flex flex-col justify-center items-center text-center relative">
                <img src={process5} alt="Go Smart process 5" className='w-[72px] h-[72px]' />
                <div className="mt-5">
                  <h3 className="font-bold text-2xl mb-3">Support</h3>
                  <p className="text-base font-normal leading-[1.5rem] max-w-44 text-gray-500">
                    Our dedicated support team provides ongoing assistance and maintenance to keep your software running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>  
    )
}
