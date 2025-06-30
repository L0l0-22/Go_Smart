import React from 'react'
import servieces from "../assets/services.png";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";
import ser1 from "../assets/ser1.png";
import ser2 from "../assets/ser2.png";
import ser3 from "../assets/ser3.png";

export default function Services() {
  return (
    <section id="services">
      <div className="px-8 py-16 bg-[#F8FAFF]">
        {/* header */}
        <div className="flex flex-col items-center justify-center">
            <p className=" text-main font-semibold uppercase flex items-center text-xl">
              <span className="inline-block w-10 h-[2px] bg-main mr-2"></span>
              Our Services
              <span className="inline-block w-10 h-[2px] bg-main ml-2"></span>
            </p>
            <h2 className="text-xl md:text-4xl font-bold text-center md:leading-[3.2rem] lg:leading-[3.2rem]">
              <span className='flex items-center '>
                We Provide Exclusive
                <img src={servieces} alt="Go Smart servieces" className='ml-2 lg:mb-1 lg:w-44 md:w-36 w-[5.5rem]'/>
              </span>
              <span>For Your Business </span>
            </h2>
        </div>
        {/* services */}
        <div className="flex gap-6 flex-col md:flex-row flex-wrap max-w-[95%] mx-auto mt-12 justify-center">
            <div className="bg-white shadow-md rounded py-4 pl-5 relative w-full md:w-[48%] lg:w-[32%] ">
                <img src={service1} alt="Go Smart serviece 1"/>
                <div className="mt-5">
                    <h3 className="font-semibold text-2xl mb-3">Mobile Apps</h3>
                    <p className="text-base font-normal leading-[1.9rem] md:max-w-xs max-w-full text-gray-500">
                      We Specialize in Developing Mobile Apps, Delivering Tallared Solutions That Enhance User Experience, 
                      Engagement And Business Efficiency
                    </p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <img src={ser1}/>
                </div>
            </div>
            <div className="bg-white shadow-md rounded py-4 pl-5 relative w-full md:w-[48%] lg:w-[32%] ">
                <img src={service2} alt="Go Smart serviece 1"/>
                <div className="mt-5">
                    <h3 className="font-semibold text-2xl mb-3">Website</h3>
                    <p className="text-base font-normal leading-[1.9rem] md:max-w-xs max-w-full text-gray-500">
                      We Specialize in Developing Dynamic And Responsive Websites, Combining Creativity And Functionality To Enhance Our Customers Online Presence And Needs
                    </p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <img src={ser2}/>
                </div>
            </div>
            <div className="bg-white shadow-md rounded py-4 pl-5 relative w-full md:w-[48%] lg:w-[32%] ">
                <img src={service3} alt="Go Smart serviece 1"/>
                <div className="mt-5">
                    <h3 className="font-semibold text-2xl mb-3">Computer Vision</h3>
                    <p className="text-base font-normal leading-[1.9rem] md:max-w-xs max-w-full text-gray-500">
                      We Provide Advanced Computer Vision Solutions, Leveraging Innovative Technologies And Addressing Clients Diverse Needs
                    </p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <img src={ser3}/>
                </div>
            </div>
            <div className="bg-white shadow-md rounded py-4 pl-5 relative w-full md:w-[48%] lg:w-[32%]">
                <img src={service4} alt="Go Smart serviece 1"/>
                <div className="mt-5">
                    <h3 className="font-semibold text-2xl mb-3">Docker & Pods & Containers</h3>
                    <p className="text-base font-normal leading-[1.9rem] md:max-w-xs max-w-full text-gray-500">
                      We Specialize in Developing Dynamic And Responsive Websites, Combining Creativity And Functionality To Enhance Our Customers Online Presence And Needs
                    </p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <img src={ser3}/>
                </div>
            </div>
            <div className="bg-white shadow-md rounded py-4 pl-5 relative w-full md:w-[48%] lg:w-[32%]">
                <img src={service5} alt="Go Smart serviece 1"/>
                <div className="mt-5">
                    <h3 className="font-semibold text-2xl mb-3">Full Stack</h3>
                    <p className="text-base font-normal leading-[1.9rem] md:max-w-xs max-w-full text-gray-500">
                      We Specialize in Developing Dynamic And Responsive Websites, Combining Creativity And Functionality To Enhance Our Customers Online Presence And Needs
                    </p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <img src={ser1}/>
                </div>
            </div>
            <div className="bg-white shadow-md rounded py-4 pl-5 relative w-full md:w-[48%] lg:w-[32%]">
                <img src={service6} alt="Go Smart serviece 1"/>
                <div className="mt-5">
                    <h3 className="font-semibold text-2xl mb-3">Machine Learning</h3>
                    <p className="text-base font-normal leading-[1.9rem] md:max-w-xs max-w-full text-gray-500">
                      We Specialize in Developing Dynamic And Responsive Websites, Combining Creativity And Functionality To Enhance Our Customers Online reisence And Needs
                    </p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <img src={ser2}/>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
