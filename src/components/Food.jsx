/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import food from "../assets/food.png";
import upper from "../assets/upperArrow.png";
import lower from "../assets/lowerArrow.png";

export default function Food() {
  const items = [
    "Nutritionally balanced with always fresh carbs and veg",
    "Avg. 40g portions of protein per meal, ethically farmed in the UK",
    "Bold, tasty, never-bland flavours with tons of variety",
    "Always ready in 3 minutes or less with zero prep, shopping or cooking",
  ];

  return (
    <div className="relative bg-cover bg-center overflow-hidden pb-20 lg:pb-0 lg:min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row mt-10 px-4 md:px-0 relative">
        <div className="relative w-full lg:w-1/2 flex items-center">
          <img src={food} className="max-w-full h-auto lg:h-[70vh] relative z-10" />
          <img src={upper} className="hidden lg:block absolute top-[10%] left-[65%] lg:w-64 h-36 z-20 -rotate-6" />
          <img src={upper} className="hidden lg:block absolute top-[30%] left-[75%] lg:w-48 h-36 z-20" />
          <img src={lower} className="hidden lg:block absolute top-[55%] left-[75%] lg:w-48 h-36 z-20" />
          <img src={lower} className="hidden lg:block absolute top-[73%] left-[65%] lg:w-72 h-36 z-20 rotate-12" />
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-20 z-30 px-4 lg:px-0">
          <ul className="text-base md:text-2xl lg:text-3xl font-semibold leading-relaxed text-green-950 space-y-4 md:space-y-10">
            {items.map((text, i) => (
             <motion.li
              key={i}
              custom={i}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }} // animate every time 50% is visible
              transition={{ delay: i * 0.3, type: 'spring', stiffness: 50 }}
            >
              {text}
            </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full absolute bottom-0 block -mb-1"
      >
        <path
          fill="#EDE6D6"
          fillOpacity={1}
          d="M0,224L80,192C160,160,320,96,480,106.7C640,117,800,203,960,213.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  );
}
