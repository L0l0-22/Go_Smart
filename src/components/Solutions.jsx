import React from 'react'
import logo1 from "../assets/workLogo.png";
import logo2 from "../assets/workLogo2.png";
import erp from "../assets/erp.png";
import health from "../assets/health.png";
import food from "../assets/food.png";
import logistic from "../assets/logistic.png";
import realState from "../assets/realState.png";
import { FaArrowRight } from 'react-icons/fa6';
import frame from "../assets/FrameCounter.png";
import logoresp2 from "../assets/logoresp2.png";
import logoresp from "../assets/logoresp.png";

export default function Solutions() {
  return (
  <section id="solutions" className="py-12 px-4 bg-main relative">
    <div className="absolute left-0 top-[-50px] lg:top-[-1px] hidden md:block lg:h-full z-10">
                <img src={logo1} alt="Go Smart logo" className="lg:h-full lg:w-auto w-[22rem]"/>
              </div>
              <div className="absolute right-0 bottom-0 lg:top-[-1px] hidden md:block lg:h-full z-10">
                <img src={logo2} alt="Go Smart logo" className="lg:h-full"/>
              </div>
              <div className="absolute left md:hidden block">
                <img src={logoresp} alt="Go Smart logo" />
              </div>
              <div className="absolute right-0 bottom-0 md:hidden block">
                <img src={logoresp2} alt="Go Smart logo" />
              </div>
    {/* header */}
    <div className="flex flex-col items-center justify-center">
        <p className=" text-sec font-semibold uppercase flex items-center text-xl mb-3">
          <span className="inline-block w-10 h-[2px] bg-sec mr-2"></span>
          What We Do
          <span className="inline-block w-10 h-[2px] bg-sec ml-2"></span>
        </p>
        <h2 className="text-xl md:text-5xl font-bold text-center text-white">
          <span className='flex items-center '>
            We Provide 
            <span className='text-sec mx-3'> IT </span>
            Solution
          </span>
        </h2>
    </div>  
    {/* cards */}
     <div className="flex gap-6 flex-col md:flex-row flex-wrap max-w-[90%] mx-auto mt-12 justify-center text-white">
        <div className="p-4 relative w-full md:w-[48%] lg:w-[18.5%] z-30">
              <div className="relative w-24 md:w-32">
                <img
                  src={frame}
                  alt="Frame"
                  className="absolute inset-0 w-32"
                />
                <img src={erp} alt="Go Smart serviece 1" className='relative z-10 p-4'/>
              </div>
            <div className="mt-5">
                <h3 className="font-semibold text-2xl mb-3">ERP SYSTEM</h3>
                <p className="text-base font-normal leading-[1.9rem] md:max-w-xs max-w-full text-gray-200">
                  Streamline And Integrate Your Business Operations With Our Comprehensive ERP Solutions Manage Finance, Inventory, Hurnon Resources, And Supply Chaine Efficiently, Ensuring Dato Accuracy And Real-Time Insights
                </p>
                <button className='text-sec flex items-center text-lg'>
                  Learn More
                  <FaArrowRight  className='ml-2'/>
                </button>
            </div>
        </div>
        <div className="p-4 relative w-full md:w-[48%] lg:w-[18.5%] z-30">
            <div className="relative w-24 md:w-32">
                <img
                  src={frame}
                  alt="Frame"
                  className="absolute inset-0 w-32"
                />
                <img src={health} alt="Go Smart serviece 1" className='relative z-10 p-4'/>
              </div>
            <div className="mt-5">
                <h3 className="font-semibold text-2xl mb-3">HEALTHCARE</h3>
                <p className="text-base font-normal leading-[1.9rem] md:max-w-xs max-w-full text-gray-200">
                  Improve Fatient Care And Streamline Administrative Tasks With Our Heultticare Management Solutions Features Include Appointroent Scheduling Electronic Health Records, Billing Management, And Reporting Toon
                </p>
                <button className='text-sec flex items-center text-lg '>
                  Learn More
                  <FaArrowRight  className='ml-2'/>
                </button>
            </div>
        </div>
        <div className="p-4 relative w-full md:w-[48%] lg:w-[18.5%] z-30">
            <div className="relative w-24 md:w-32">
                <img
                  src={frame}
                  alt="Frame"
                  className="absolute inset-0 w-32"
                />
                <img src={food} alt="Go Smart serviece 1" className='relative z-10 p-4'/>
              </div>
            <div className="mt-5">
                <h3 className="font-semibold text-2xl mb-3">RETAIL... FOOD & BEVERAGE</h3>
                <p className="text-base font-normal leading-[1.9rem] md:max-w-xs max-w-full text-gray-200">
                  Optimize Operations With Our All-in-One Software For Retail And F&B Businesses. Manage Inventory, Sales, And Customer Engagement Effortlessly.Our Solutions Feature Advanced POS Systems, Cloud Kitchen
                </p>
                <button className='text-sec flex items-center text-lg '>
                  Learn More
                  <FaArrowRight  className='ml-2'/>
                </button>
            </div>
        </div>
        <div className="p-4 relative w-full md:w-[48%] lg:w-[18.5%] z-30">
            <div className="relative w-24 md:w-32">
                <img
                  src={frame}
                  alt="Frame"
                  className="absolute inset-0 w-32"
                />
                <img src={logistic} alt="Go Smart serviece 1" className='relative z-10 p-4'/>
              </div>
            <div className="mt-5">
                <h3 className="font-semibold text-2xl mb-3">LOGISTIC MANAGEMENT</h3>
                <p className="text-base font-normal leading-[1.9rem] md:max-w-xs max-w-full text-gray-200">
                  Enhance Logistics Operations With Real-Time Tracking Automoted Workhom And RoutR Optimization Our System Eneures Seamless Coordination Of Shipments, Inventory, And Warehouse Management
                </p>
                <button className='text-sec flex items-center text-lg '>
                  Learn More
                  <FaArrowRight  className='ml-2'/>
                </button>
            </div>
        </div>
        <div className="p-4 relative w-full md:w-[48%] lg:w-[18.5%] z-30">
            <div className="relative w-24 md:w-32">
                <img
                  src={frame}
                  alt="Frame"
                  className="absolute inset-0 w-32"
                />
                <img src={realState} alt="Go Smart serviece 1" className='relative z-10 p-4'/>
              </div>
            <div className="mt-5">
                <h3 className="font-semibold text-2xl mb-3">REAL ESTATE</h3>
                <p className="text-base font-normal leading-[1.9rem] md:max-w-xs max-w-full text-gray-200">
                  Streamline And integrate Your Business Operations With Our Comprehensive ERP Solutions. Manage Finance, Inventory, Human Resources, And Supply Chains Efficiently, Ensuring Data Accuracy And Real-Time Insights
                </p>
                <button className='text-sec flex items-center text-lg '>
                  Learn More
                  <FaArrowRight  className='ml-2'/>
                </button>
            </div>
        </div>
    </div> 
  </section>
  )
}
