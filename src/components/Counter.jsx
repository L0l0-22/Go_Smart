/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import left from "../assets/LogoRight.png";
import right from "../assets/LogoLeft.png";
import frame from "../assets/FrameCounter.png";
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
export default function Counter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  // const [start, setStart] = useState(false);

  // useEffect(() => {
  //   if (isInView) setStart(true);
  // }, [isInView]);

  return (
    <div className="bg-main relative py-7 md:py-10 lg:py-20">
      <img src={right} alt="Right Logo" className="absolute top-32 md:top-0 right-0 lg:w-32 md:w-16 w-28 " />
      <img src={left} alt="Left Logo" className="absolute top-32 md:top-0 left-0 lg:w-32 md:w-16 w-28 " />
      <div className="relative z-10 max-w-2xl lg:max-w-6xl mx-auto text-white py-6 md:py-0 px-4 text-center md:text-justify">
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0 lg:gap-14 ">
            <div className=' '>
               <div className="relative w-24 md:w-28 lg:w-36 mx-auto">
                  <img
                    src={frame}
                    alt="Frame"
                    className="absolute top-[-10px] left-[-10px] md:left-[-24px] w-14 lg:top-[-15px] lg:left-[-40px] lg:w-24"
                  />
                  <p className="font-medium text-4xl lg:text-7xl text-sec relative z-10">
                      {/* {start && <CountUp end={57} duration={8} suffix="+" />}    */}
                      {isInView && <CountUp key={isInView.toString() + '-57'} end={57} duration={8} suffix="+" />}
                </p>
                </div>
                <p className='text-sm lg:text-lg mt-5 font-bold'>Compelete Projects</p>
            </div>
            <div className=' '>
                 <div className="relative w-24 md:w-28 lg:w-36 mx-auto">
                  <img
                    src={frame}
                    alt="Frame"
                    className="absolute top-[-10px] left-[-10px] md:left-[-24px] w-14 lg:top-[-15px] lg:left-[-40px] lg:w-24"
                  />
                  <p className="font-medium text-4xl lg:text-7xl text-sec relative z-10">
                    {/* {start && <CountUp end={113} duration={8} suffix="+" />}    */}
                    {isInView && <CountUp key={isInView.toString() + '-113'} end={113} duration={8} suffix="+" />}
                  </p>
                </div>
                <p className='text-sm lg:text-lg mt-5 font-bold'>Satisfied Customers</p>
            </div>
            <div className=' '>
                 <div className="relative w-24 md:w-28 lg:w-36 mx-auto">
                  <img
                    src={frame}
                    alt="Frame"
                    className="absolute top-[-10px] left-[-10px] md:left-[-24px] w-14 lg:top-[-15px] lg:left-[-40px] lg:w-24"
                  />
                  <p className="font-medium text-4xl lg:text-7xl text-sec relative z-10">
                    {/* {start && <CountUp end={34} duration={8} suffix="+" />}    */}
                    {isInView && <CountUp key={isInView.toString() + '-34'} end={34} duration={8} suffix="+" />}
                  </p>
                </div>
                <p className='text-sm lg:text-lg mt-5 font-bold'>Qualified Employees</p>
            </div>
            <div className='relative '>
                  <div className="relative w-24 md:w-28 lg:w-36 mx-auto">
                  <img
                    src={frame}
                    alt="Frame"
                    className="absolute top-[-10px] left-[-10px] md:left-[-24px] w-14 lg:top-[-15px] lg:left-[-40px] lg:w-24"
                  />
                  <p className="font-medium text-4xl lg:text-7xl text-sec relative z-10">
                    {/* {start && <CountUp end={2} duration={8} suffix="+" />}    */}
                    {isInView && <CountUp key={isInView.toString() + '-2'} end={2} duration={8} suffix="+" />}
                  </p>
                </div>
                <p className='text-sm lg:text-lg mt-5 font-bold'>Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
