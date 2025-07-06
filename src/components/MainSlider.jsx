import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpeg";
import { Link } from "react-router-dom";

export default function MainSlider() {
  
  return (
    <section id="home" className="h-screen">
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
          bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.6;
          border-radius: 9999px;
          margin: 0 6px !important;
          transition: all 0.9s ease;
        }
        .swiper-pagination-bullet-active {
          width: 50px;
          height: 14px;
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
          <div className="relative h-screen w-full">
            <img src={slider1} alt="slide 1" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-65 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto">
              <p className="text-base md:text-xl text-center mb-4">
                Empowering Businesses
              </p>
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 text-center line-clamp-2 md:leading-[3.2rem] lg:leading-[4.2rem]">
                Elevate Your Business With Our Software Expertise
              </h2>
              <a href="#services" className="rounded-full border px-5 py-2 md:text-2xl flex items-center relative">
                Get Started Now
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-screen w-full">
            <img src={slider2} alt="slide 2" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-65 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 max-w-xs md:max-w-xl lg:max-w-4xl mx-auto">
              <p className="text-base md:text-xl text-center mb-4">
                Our Solutions
              </p>
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 text-center line-clamp-2 md:leading-[3.2rem] lg:leading-[4.2rem]">
                We Providing It Solution For Your Business
              </h2>
              <Link to="/itsolutions" className="rounded-full border px-5 py-2 md:text-2xl flex items-center ">
                Learn More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
