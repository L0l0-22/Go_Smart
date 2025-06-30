import { FaTimes, FaBars, FaSeedling } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = "block py-1 lg:py-0 text-gray-500 font-semibold transition-colors duration-200 hover:text-main hover:underline hover:underline-offset-4";

  return (
    <div className="fixed left-0 top-0 w-full z-50 text-gray-500 bg-[#F8FAFF] shadow transition-colors duration-700">
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        <a href="#home">
          <img src={logo} alt="Logo" className="lg:w-[167px] lg:h-[48px] w-48" />
        </a>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white px-6 py-4 
          lg:static lg:flex lg:w-auto lg:bg-transparent lg:p-0 text-xl
          space-y-4 lg:space-y-0 lg:space-x-6 transition-all duration-300`}
        >
          <li>
            <a href="#home" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={linkClasses} onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#services" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#solutions" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Solutions
            </a>
          </li>
          <li>
            <a href="#technologies" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Technologies
            </a>
          </li>
          <li>
            <a href="#projects" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#products" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Products
            </a>
          </li>
          {/* Mobile-only buttons */}
          <div className="lg:hidden flex gap-4">
           <button className="px-6 py-2 text-lg text-white hover:bg-transparent hover:text-main hover:border hover:border-main rounded-full shadow text-forest bg-main font-medium transition-colors duration-200">
            Request Demo
          </button>
          </div>
        </ul>

        {/* Desktop buttons */}
        <div className="hidden lg:flex ">
          <button className="px-6 py-2 text-lg text-white hover:bg-transparent hover:text-main hover:border hover:border-main rounded-full shadow text-forest bg-main font-medium transition-colors duration-200">
            Request Demo
          </button>
        </div>
        
        {/* Mobile toggle */}
        <div className="lg:hidden">
          <button
            className="text-main"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
