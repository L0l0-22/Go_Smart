// import React from 'react'
// import logo1 from "../assets/workLogo.png";
// import logo2 from "../assets/workLogo2.png";
// import morelogo from "../assets/morelogo.png";
// import one from "../assets/one.png";
// import two from "../assets/two.png";
// import three from "../assets/three.png";
// import { MdOutlineArrowOutward } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import logoresp2 from "../assets/logoresp2.png";
// import logoresp from "../assets/logoresp.png";

// export default function LearnMoreAbout() {
//   return (
//     <div className='bg-main px-8 py-24 relative'>
//       <div className="absolute left-0 top-[-50px] lg:top-[-1px] hidden md:block lg:h-full z-10">
//         <img src={logo1} alt="Go Smart logo" className="lg:h-full lg:w-auto w-[22rem]"/>
//       </div>
//       <div className="absolute right-0 bottom-0 lg:top-[-1px] hidden md:block lg:h-full z-10">
//         <img src={logo2} alt="Go Smart logo" className="lg:h-full"/>
//       </div>
//       <div className="absolute left md:hidden block top-[-20px] ">
//         <img src={logoresp} alt="Go Smart logo" />
//       </div>
//       <div className="absolute right-0 bottom-0 md:hidden block">
//         <img src={logoresp2} alt="Go Smart logo" />
//       </div>
//       <div className="max-w-[85%] mx-auto text-white">
//         <div className='mt-12'>
//           <h1
//             className="text-white text-5xl font-bold"
//             style={{ textShadow: '8px 8px #292B85' }}
//           >
//             About Us
//           </h1>
//         </div>
//         <div className='max-w-7xl mx-auto flex flex-col gap-10 mt-16 items-'>
//           <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-24'>
//             <div className='w-1/2 lg:w-1/4'>
//               <img src={one}  className=""/>
//             </div>
//             <div className='3/4'>
//             <div className='flex items-center'>
//               <img src={morelogo}  className="w-[48px] h-[48px]"/>
//               <p className='text-3xl md:text-4xl font-bold ml-4'>Our Mission</p>
//             </div> 
//             <div className="inline-block h-[0.5px] bg-gray-200 mr-2 w-full"></div>
//              <p className="text-base md:text-lg font-normal leading-[1.9rem] max-w-4xl text-gray-300">
//               Empowering Businesses Through Seamless And Scalable Software Solutions, We Seamlessly Transform Ideas Into Reality, Accelerating Growth And Driving Innovation.
//              </p>
//             </div>
//           </div>
//            <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-24'>
//             <div className='w-1/2 lg:w-1/4'>
//               <img src={two}  className=""/>
//             </div>
//             <div className='3/4'>
//             <div className='flex items-center'>
//               <img src={morelogo}  className="w-[48px] h-[48px]"/>
//               <p className='text-3xl md:text-4xl font-bold ml-4'>Our Vision</p>
//             </div> 
//             <div className="inline-block h-[0.5px] bg-gray-200 mr-2 w-full"></div>
//              <p className="text-base md:text-lg font-normal leading-[1.9rem] max-w-4xl text-gray-300">
//               To Be The World's Premier Software Development Partner, Empowering Businesses To Achieve Their Digital Aspirations Through Our Expertise, Innovation And Unwavering Commitment To Success.
//              </p>
//             </div>
//           </div>
//            <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-24'>
//             <div className='w-1/2 lg:w-1/4'>
//               <img src={three}  className=""/>
//             </div>
//             <div className='3/4'>
//             <div className='flex items-center'>
//               <img src={morelogo}  className="w-[48px] h-[48px]"/>
//               <p className='text-3xl md:text-4xl font-bold ml-4'>Our Values</p>
//             </div> 
//             <div className="inline-block h-[0.5px] bg-gray-200 mr-2 w-full"></div>
//              <p className="text-base md:text-lg font-normal leading-[1.9rem] max-w-4xl text-gray-300">
//               Driven By Excellence, Innovation, And Customer-Centricity, We Forge Lasting Partnerships, Delivering Exceptional Software Solutions That Empower Businesses To Thrive.
//              </p>
//             </div>
//           </div>
//           <div className='flex justify-end z-30'>
//             <Link to="/requestdemo" className='px-4 py-2 border rounded shadow w-fit flex items-center' >
//               Request A Demo
//               <MdOutlineArrowOutward className='ml-3' size={20}/>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



import React from 'react'
import logo1 from "../assets/workLogo.png";
import logo2 from "../assets/workLogo2.png";
import morelogo from "../assets/target.png";
import one from "../assets/01.png";
import two from "../assets/02.png";
import three from "../assets/03.png";
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logoresp2 from "../assets/logoresp2.png";
import logoresp from "../assets/logoresp.png";

export default function LearnMoreAbout() {
  return (
    <div className='bg-[#F8FAFF] px-8 py-24 relative'>
      <div className="absolute left-0 top-[-50px] lg:top-[-1px] hidden md:block lg:h-full z-10">
        <img src={logo1} alt="Go Smart logo" className="lg:h-full lg:w-auto w-[22rem]"/>
      </div>
      <div className="absolute right-0 bottom-0 lg:top-[-1px] hidden md:block lg:h-full z-10">
        <img src={logo2} alt="Go Smart logo" className="lg:h-full"/>
      </div>
      <div className="absolute left md:hidden block top-[-20px] ">
        <img src={logoresp} alt="Go Smart logo" />
      </div>
      <div className="absolute right-0 bottom-0 md:hidden block">
        <img src={logoresp2} alt="Go Smart logo" />
      </div>
      <div className="max-w-[85%] mx-auto text-main">
        <div className='mt-12'>
          <h1
            className="text-main text-5xl font-bold"
            style={{ textShadow: '8px 8px ##EFF4FC' }}
          >
            About Us
          </h1>
        </div>
        <div className='max-w-7xl mx-auto flex flex-col gap-10 mt-16 items-'>
          <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-24'>
            <div className='w-1/2 lg:w-1/4'>
              <img src={one}  className="w-36"/>
            </div>
            <div className='3/4'>
            <div className='flex items-center'>
              <img src={morelogo}  className="w-[48px] h-[48px]"/>
              <p className='text-3xl md:text-4xl font-bold ml-4'>Our Mission</p>
            </div> 
            <div className="inline-block h-[0.5px] bg-gray-400 mr-2 w-full"></div>
             <p className="text-base md:text-lg font-normal leading-[1.9rem] max-w-4xl text-gray-700">
              Empowering Businesses Through Seamless And Scalable Software Solutions, We Seamlessly Transform Ideas Into Reality, Accelerating Growth And Driving Innovation.
             </p>
            </div>
          </div>
           <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-24'>
            <div className='w-1/2 lg:w-1/4'>
              <img src={two}  className="w-40"/>
            </div>
            <div className='3/4'>
            <div className='flex items-center'>
              <img src={morelogo}  className="w-[48px] h-[48px]"/>
              <p className='text-3xl md:text-4xl font-bold ml-4'>Our Vision</p>
            </div> 
            <div className="inline-block h-[0.5px] bg-gray-400 mr-2 w-full"></div>
             <p className="text-base md:text-lg font-normal leading-[1.9rem] max-w-4xl text-gray-700">
              To Be The World's Premier Software Development Partner, Empowering Businesses To Achieve Their Digital Aspirations Through Our Expertise, Innovation And Unwavering Commitment To Success.
             </p>
            </div>
          </div>
           <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-24'>
            <div className='w-1/2 lg:w-1/4'>
              <img src={three}  className="w-40"/>
            </div>
            <div className='3/4'>
            <div className='flex items-center'>
              <img src={morelogo}  className="w-[48px] h-[48px]"/>
              <p className='text-3xl md:text-4xl font-bold ml-4'>Our Values</p>
            </div> 
            <div className="inline-block h-[0.5px] bg-gray-400 mr-2 w-full"></div>
             <p className="text-base md:text-lg font-normal leading-[1.9rem] max-w-4xl text-gray-700">
              Driven By Excellence, Innovation, And Customer-Centricity, We Forge Lasting Partnerships, Delivering Exceptional Software Solutions That Empower Businesses To Thrive.
             </p>
            </div>
          </div>
          <div className='flex justify-end z-30'>
            <Link to="/requestdemo" className='px-4 py-2 bg-main hover:bg-[#000099] text-white border rounded shadow w-fit flex items-center' >
              Request A Demo
              <MdOutlineArrowOutward className='ml-3' size={20}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
