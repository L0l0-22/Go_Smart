import React from 'react'
import logo1 from "../assets/workLogo.png";
import logo2 from "../assets/workLogo2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import { Link } from 'react-router-dom';
export default function Products() {
  return (
    <div className='bg-bg-[#F8FAFF] px-8 py-24 relative'>
      <div className="absolute left-0 top-[-1px] hidden md:block h-full z-10">
        <img src={logo1} alt="Go Smart logo" className="h-full"/>
      </div>
      <div className="absolute right-0 top-[-1px] hidden md:block h-full z-10">
        <img src={logo2} alt="Go Smart logo" className="h-full"/>
      </div>
      <div className="max-w-[95%] mx-auto z-30">
        <div className='flex gap-10 flex-wrap '>
          <div className='w-full lg:w-[45%] rounded-xl border border-[#7DAFFF] bg-gradient-to-b from-white to-[#E4EEFF] p-6 z-30'>
          {/* slider */}
            <div className='relative'>
               <style>
                {`
                  .swiper-slide {
                    opacity: 0;
                    transition: opacity 1s ease-in-out, filter 1s ease-in-out;
                    filter: blur(10px);
                  }
                  .swiper-slide-active {
                    opacity: 1;
                    filter: blur(0px);
                  }
                  .swiper-pagination {
                    position: relative !important;
                    margin-top: 20px;
                    text-align: center;
                  }
                  .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #CBD2D6;
                    opacity: 0.6;
                    border-radius: 9999px;
                    margin: 0 6px !important;
                    transition: all 0.9s ease;
                  }
                  .swiper-pagination-bullet-active {
                    width: 50px;
                    height: 12px;
                    opacity: 1;
                    transform: scale(1.1);
                    background: linear-gradient(to right, #4383C4, #65C1DD);
                    border-radius: 9999px;
                  }
                `}
              </style>
                <Swiper
                  modules={[ Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  loop
                  className="h-full"
                >
                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide1} alt="slide 1" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>
          
                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide2} alt="slide 2" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide3} alt="slide 3" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide4} alt="slide 4" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>
                </Swiper>
            </div>
          {/* text */}
            <div className='flex justify-between mx-auto max-w-3xl'>
                <p className='text-main text-xl md:text-3xl font-medium'>KDS</p>
                <Link to="/requestdemo" className='bg-main hover:bg-[#000099] text-white rounded-full px-3 py-1 md:px-6 md:py-2 md:text-xl'>
                  Ask  A  Demo
                </Link>
            </div>
            <p className="text-base md:text-lg font-normal leading-[1.9rem] mt-3 text-gray-500">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
            </p>
          </div>
          <div className='w-full lg:w-[45%] rounded-xl border border-[#7DAFFF] bg-gradient-to-b from-white to-[#E4EEFF] p-6 z-30'>
          {/* slider */}
            <div className='relative'>
               <style>
                {`
                  .swiper-slide {
                    opacity: 0;
                    transition: opacity 1s ease-in-out, filter 1s ease-in-out;
                    filter: blur(10px);
                  }
                  .swiper-slide-active {
                    opacity: 1;
                    filter: blur(0px);
                  }
                  .swiper-pagination {
                    position: relative !important;
                    margin-top: 20px;
                    text-align: center;
                  }
                  .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #CBD2D6;
                    opacity: 0.6;
                    border-radius: 9999px;
                    margin: 0 6px !important;
                    transition: all 0.9s ease;
                  }
                  .swiper-pagination-bullet-active {
                    width: 50px;
                    height: 12px;
                    opacity: 1;
                    transform: scale(1.1);
                    background: linear-gradient(to right, #4383C4, #65C1DD);
                    border-radius: 9999px;
                  }
                `}
              </style>
                <Swiper
                  modules={[ Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  loop
                  className="h-full"
                >
                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide1} alt="slide 1" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>
          
                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide2} alt="slide 2" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide3} alt="slide 3" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide4} alt="slide 4" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>
                </Swiper>
            </div>
          {/* text */}
            <div className='flex justify-between mx-auto max-w-3xl'>
                <p className='text-main text-3xl font-medium'>KDS</p>
                <Link to="/requestdemo" className='bg-main hover:bg-[#000099] text-white rounded-full px-6 py-2 text-xl'>
                  Ask  A  Demo
                </Link>
            </div>
            <p className="text-base md:text-lg font-normal leading-[1.9rem] mt-3 text-gray-500">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
            </p>
          </div>
          <div className='w-full lg:w-[45%] rounded-xl border border-[#7DAFFF] bg-gradient-to-b from-white to-[#E4EEFF] p-6 z-30'>
          {/* slider */}
            <div className='relative'>
               <style>
                {`
                  .swiper-slide {
                    opacity: 0;
                    transition: opacity 1s ease-in-out, filter 1s ease-in-out;
                    filter: blur(10px);
                  }
                  .swiper-slide-active {
                    opacity: 1;
                    filter: blur(0px);
                  }
                  .swiper-pagination {
                    position: relative !important;
                    margin-top: 20px;
                    text-align: center;
                  }
                  .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #CBD2D6;
                    opacity: 0.6;
                    border-radius: 9999px;
                    margin: 0 6px !important;
                    transition: all 0.9s ease;
                  }
                  .swiper-pagination-bullet-active {
                    width: 50px;
                    height: 12px;
                    opacity: 1;
                    transform: scale(1.1);
                    background: linear-gradient(to right, #4383C4, #65C1DD);
                    border-radius: 9999px;
                  }
                `}
              </style>
                <Swiper
                  modules={[ Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  loop
                  className="h-full"
                >
                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide1} alt="slide 1" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>
          
                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide2} alt="slide 2" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide3} alt="slide 3" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide4} alt="slide 4" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>
                </Swiper>
            </div>
          {/* text */}
            <div className='flex justify-between mx-auto max-w-3xl'>
                <p className='text-main text-3xl font-medium'>KDS</p>
                <Link to="/requestdemo" className='bg-main hover:bg-[#000099] text-white rounded-full px-6 py-2 text-xl'>
                  Ask  A  Demo
                </Link>
            </div>
            <p className="text-base md:text-lg font-normal leading-[1.9rem] mt-3 text-gray-500">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
            </p>
          </div>
          <div className='w-full lg:w-[45%] rounded-xl border border-[#7DAFFF] bg-gradient-to-b from-white to-[#E4EEFF] p-6 z-30'>
          {/* slider */}
            <div className='relative'>
               <style>
                {`
                  .swiper-slide {
                    opacity: 0;
                    transition: opacity 1s ease-in-out, filter 1s ease-in-out;
                    filter: blur(10px);
                  }
                  .swiper-slide-active {
                    opacity: 1;
                    filter: blur(0px);
                  }
                  .swiper-pagination {
                    position: relative !important;
                    margin-top: 20px;
                    text-align: center;
                  }
                  .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #CBD2D6;
                    opacity: 0.6;
                    border-radius: 9999px;
                    margin: 0 6px !important;
                    transition: all 0.9s ease;
                  }
                  .swiper-pagination-bullet-active {
                    width: 50px;
                    height: 12px;
                    opacity: 1;
                    transform: scale(1.1);
                    background: linear-gradient(to right, #4383C4, #65C1DD);
                    border-radius: 9999px;
                  }
                `}
              </style>
                <Swiper
                  modules={[ Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  loop
                  className="h-full"
                >
                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide1} alt="slide 1" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>
          
                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide2} alt="slide 2" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide3} alt="slide 3" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="relative w-full">
                      <img src={slide4} alt="slide 4" className="h-full w-full object-cover z-30" />
                    </div>
                  </SwiperSlide>
                </Swiper>
            </div>
          {/* text */}
            <div className='flex justify-between mx-auto max-w-3xl'>
                <p className='text-main text-3xl font-medium'>KDS</p>
                <Link to="/requestdemo" className='bg-main hover:bg-[#000099] text-white rounded-full px-6 py-2 text-xl'>
                  Ask  A  Demo
                </Link>
            </div>
            <p className="text-base md:text-lg font-normal leading-[1.9rem] mt-3 text-gray-500">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}
