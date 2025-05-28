import React from 'react'
import bg from "../assets/bg.png"
import { BiCompass } from 'react-icons/bi'
import Food from '../components/Food'
import Works from '../components/Works'
import BenefitsSection from '../components/BenefitsSection'
import Pricing from '../components/Pricing'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-brightBeige w-[90%] mx-auto space-y-5">
          <p className="md:text-6xl text-3xl leading-relaxed font-semibold text-Darkgreen">
            Save Time,
          </p>
          <p className="md:text-5xl text-3xl leading-relaxed font-semibold">
            with Prep Kitchen
          </p>
          <p className='text-lg text-beige'>
          Eat your best diet ever, without any prep,<br/> cooking or snacking
          </p>
          <NavLink
            to="/plan"
           className="flex justify-between items-center px-4 py-2 text-forest border-2 font-semibold text-lg border-beige hover:border-forest rounded-full mt-4 bg-beige hover:bg-transparent hover:text-beige transition-all duration-300 ease-in-out">
                Discover Your Plan
                <BiCompass className="ml-3" />
           </NavLink>
        </div>
      </div>
      <Food/>
      <Works/>
      <BenefitsSection/>
      <Pricing/>
     <div className="relative bg-beige">
      <div className="h-32 md:h-40 lg:h-72 w-full -mb-1"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full absolute -top-[1px] left-0"
      >
        <path
          fill="#3A5A40"
          fillOpacity="1"
          d="M0,0L60,53.3C120,107,240,213,360,218.7C480,224,600,128,720,106.7C840,85,960,139,1080,170.7C1200,203,1320,213,1380,218.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </div>


    </>
  )
}
