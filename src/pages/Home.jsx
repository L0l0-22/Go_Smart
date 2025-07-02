import React, { useState } from 'react';
import MainSlider from '../components/MainSlider';
import About from '../components/About';
import Counter from '../components/Counter';
import Services from '../components/Services';
import WorkProcess from '../components/WorkProcess';
import Solutions from '../components/Solutions';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import Partner from '../components/Partner';
import { MdOutlineChat } from 'react-icons/md';
import subscribe from "../assets/Subscribe.png"
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className='mt-10'>
      <MainSlider />
      <About />
      <Counter />
      <Services />
      <WorkProcess />
      <Solutions />
      <Technologies />
      <Projects />
      <Partner />

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-gradient-to-r from-[#DBE0FF] to-[#FFFFFF] shadow-lg">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-main hover:bg-[#000099] text-white px-5 py-3 rounded-full flex items-center transition-all duration-300"
        >
          Start Chat
          <MdOutlineChat className="ml-2" />
        </button>
      </div>

      {/* Chat Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-xl max-w-md w-[90%] p-6 relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-3xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <div className='flex justify-center items-center'>
              <img src={subscribe } className='w-80'/>
            </div>
            <h2 className="text-xl font-semibold mb-4 text-main text-center">Please Subscribe For Chating With Us</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Enter Your Email"
            />
            <button
              onClick={() => {
                // You can handle the email here
                console.log('Email submitted:', email);
                setIsModalOpen(false);
              }}
             className="mt-4 w-full bg-main text-white py-2 rounded-lg hover:bg-[#000066] transition text-lg">
              Subscribe Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
