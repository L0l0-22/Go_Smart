import React, { useState } from 'react'
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
import kds from "../assets/PNG (1)/photos 5-0٥.png"
import kds_screen from "../assets/pos screens/kds_screen.jpg"
import pos_screen from "../assets/pos screens/pos_screen.jpg"
import kiosk_screen from "../assets/pos screens/self_service_screen.jpg"
import splash from "../assets/pos screens/splash_kiosk_and_selfcheckout.jpg"
import signage1 from "../assets/pos screens/8.png"
import signage2 from "../assets/pos screens/9.png"
import signage3 from "../assets/pos screens/10.png"
import signage4 from "../assets/pos screens/11.png"
import pos from "../assets/PNG (1)/photos 5-0٢.png"
import kiosk from "../assets/PNG (1)/photos 5-0٣.png"
import SignageMenu from "../assets/PNG (1)/photos 5-0٤.png"
import Selfcheckout from "../assets/PNG (1)/photos 5-0١.png"
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productData = [
    {
      title: 'KDS',
      images: [kds, kds_screen],
      description: 'Streamline your kitchen operations with our KDS, ensuring faster order preparation and enhanced communication between kitchen staff. It integrates seamlessly with your POS for efficient order management.',
      specs: {
        model: 'POS 3000',
        resolution: '1920x1080',
        os: 'Windows 10',
        motherboard: 'Asus Prime',
        cpu: 'Intel Core i7-9700',
        ddr: '16GB DDR4',
        sdd: '512GB SSD',
        touchscreen: 'Yes',
        network: 'Ethernet, Wi-Fi',
        interface: 'USB, HDMI, Serial',
      }
    },
    {
      title: 'POS',
      images: [pos, pos_screen],
      description: 'Our POS system offers a user-friendly interface, helping businesses manage sales, inventory, and customer data effortlessly. Boost your business efficiency with fast transactions and real-time updates.',

      specs: {
        model: 'POS 3000',
        resolution: '1920x1080',
        os: 'Windows 10',
        motherboard: 'Asus Prime',
        cpu: 'Intel Core i7-9700',
        ddr: '16GB DDR4',
        sdd: '512GB SSD',
        touchscreen: 'Yes',
        network: 'Ethernet, Wi-Fi',
        interface: 'USB, HDMI, Serial',
      }
    },
    {
      title: 'Kiosk',
      images: [kiosk, kiosk_screen],
      description: 'Transform customer interaction with self-service kiosks that enhance the ordering process. Let your customers browse, order, and pay without any hassle, improving efficiency and reducing wait times.',
    },
    {
      title: 'Signage Menu',
      images: [SignageMenu, signage1, signage2, signage3, signage4],
      description: 'Our digital signage menus bring your restaurant offerings to life with high-quality displays. Easily update content and promotions, creating an engaging dining experience for your customers.',
    },
    {
      title: 'Selfcheckout',
      images: [Selfcheckout, splash],
      description: 'Our self-checkout solution enables customers to easily scan, pay, and go, reducing wait times and improving the checkout experience. Perfect for high-traffic stores looking to speed up transactions.',
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className='bg-bg-[#F8FAFF] px-8 py-24 relative'>
      <div className="absolute left-0 top-[-1px] hidden md:block h-full z-10">
        <img src={logo1} alt="Go Smart logo" className="h-full" />
      </div>
      <div className="absolute right-0 top-[-1px] hidden md:block h-full z-10">
        <img src={logo2} alt="Go Smart logo" className="h-full" />
      </div>
      <div className="max-w-[90%] container  mx-auto z-30">
        <div className='flex gap-10 flex-wrap justify-center'>
          {productData.map((product, index) => (
            <div key={index} className='w-full lg:w-[45%] rounded-xl border border-[#7DAFFF] bg-gradient-to-b from-white to-[#E4EEFF] p-6 z-30'>
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
                  modules={[Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop
                  className="h-full"
                >
                  {product.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="relative w-full flex justify-center items-center">
                        <img
                          src={image}
                          alt={`slide ${idx + 1}`}
                          className="h-[450px] w-full object-contain z-30"
                        />                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* text */}
              <div className='flex justify-between mx-auto max-w-3xl'>
                <p className='text-main text-xl md:text-3xl font-medium'>{product.title}</p>
                <button onClick={() => openModal(product)}
                  className='bg-main hover:bg-[#000099] text-white rounded-full px-3 py-1 md:px-6 md:py-2 md:text-xl'>
                  View Aspect
                </button>
              </div>
              <p className="text-base md:text-lg font-normal leading-[1.9rem] mt-3 text-gray-500">
                {product.description}
              </p>
            </div>
          ))}

        </div>
      </div>
      {selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"

        >

          <style>
            {`
.Modal {
  background: white;
  border: 2px solid #EFF0EC;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.Overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}




`}</style>

          <h2 className="text-2xl font-bold text-blue-600">{selectedProduct.title} Specifications</h2>
          <table className="mt-6 w-full table-auto border ">
            <tbody>
              {/* Header Row (First Row) */}
              <tr className="bg-blue-600 text-white">
                <td className="font-medium py-2 px-4 ">Model</td>
                <td className="font-medium py-2 px-4 ">{selectedProduct.specs.model}</td>
              </tr>
              {/* Row 2 */}
              <tr className="bg-white text-white">
                <td className="font-medium py-2 px-4 border bg-blue-600">Screen Resolution</td>
                <td className= "text-gray-500 py-2 px-4 border border-gray-300">{selectedProduct.specs.resolution}</td>
              </tr>
              {/* Row 3 */}
              <tr className="bg-white text-white">
                <td className="font-medium py-2 px-4 border bg-blue-600">OS</td>
                <td className="text-gray-500 py-2 px-4 border border-gray-300">{selectedProduct.specs.os}</td>
              </tr>
              {/* Row 4 */}
              <tr className="bg-white text-white">
                <td className="font-medium py-2 px-4 border bg-blue-600">Motherboard / CPU</td>
                <td className="text-gray-500 py-2 px-4 border border-gray-300">{selectedProduct.specs.motherboard} / {selectedProduct.specs.cpu}</td>
              </tr>
              {/* Row 5 */}
              <tr className="bg-white text-white">
                <td className="font-medium py-2 px-4 border bg-blue-600">DDR</td>
                <td className="text-gray-500 py-2 px-4 border border-gray-300">{selectedProduct.specs.ddr}</td>
              </tr>
              {/* Row 6 */}
              <tr className="bg-white text-white">
                <td className="font-medium py-2 px-4 border  bg-blue-600">SSD</td>
                <td className="text-gray-500 py-2 px-4 border border-gray-300">{selectedProduct.specs.sdd}</td>
              </tr>
              {/* Row 7 */}
              <tr className="bg-white text-white">
                <td className="font-medium py-2 px-4 border  bg-blue-600">Touchscreen</td>
                <td className="text-gray-500 py-2 px-4 border border-gray-300">{selectedProduct.specs.touchscreen}</td>
              </tr>
              {/* Row 8 */}
              <tr className="bg-white text-white">
                <td className="font-medium py-2 px-4 border bg-blue-600">Network</td>
                <td className="text-gray-500 py-2 px-4 border border-gray-300">{selectedProduct.specs.network}</td>
              </tr>
              {/* Row 9 */}
              <tr className="bg-white text-white">
                <td className="font-medium py-2 px-4 border bg-blue-600">Interface</td>
                <td className="text-gray-500 py-2 px-4 border border-gray-300">{selectedProduct.specs.interface}</td>
              </tr>
            </tbody>
          </table>

          <button
            onClick={closeModal}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </Modal>
      )}
    </div>

  )
}


