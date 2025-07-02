import React from 'react';
import logo1 from "../assets/workLogo.png";
import logo2 from "../assets/workLogo2.png";
import logoresp2 from "../assets/logoresp2.png";
import logoresp from "../assets/logoresp.png";
import DemoForm from '../Forms/DemoForm';



export default function RequestDemo() {

  return (
    <div className="relative bg-[#F8FAFF] min-h-screen overflow-hidden">
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

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto py-8 mt-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
        <div className="mx-auto">
          <h1
            className="font-semibold text-[20px] text-[#000066] mb-4"
          >
            Request ERP Demo</h1>
          <p
            className="font-normal text-[18px] text-[#03030C4D]  "
          >
            Experience how our ERP solution can transform your business! Book a 7-day demo now, select your preferred modules, and explore the benefits. With a variety of modules available, we can even customize them to suit your specific needs. See the difference firsthand!
          </p>
        </div>

        <DemoForm />

      </div>


    </div>
  );
}