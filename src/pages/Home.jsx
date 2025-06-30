import React from 'react'
import MainSlider from '../components/MainSlider'
import About from '../components/About'
import Counter from '../components/Counter'
import Services from '../components/Services'
import WorkProcess from '../components/WorkProcess'
import Solutions from '../components/Solutions'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'
import Partner from '../components/Partner'
import { MdOutlineChat } from 'react-icons/md'
export default function Home() {
  return (
    <div className='my-10'>
     <MainSlider />
     <About />
      <Counter />
      <Services />
      <WorkProcess />
      <Solutions />
      <Technologies />
      <Projects />
      <Partner />
      <div className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-gradient-to-r from-[#DBE0FF] to-[#FFFFFF] shadow-lg">
        <button
          className="bg-main text-white px-5 py-3 rounded-full flex items-center transition-all duration-300"
        >
          Start Chat
          <MdOutlineChat className="ml-2" />
        </button>
      </div>

    </div>
  );
}



