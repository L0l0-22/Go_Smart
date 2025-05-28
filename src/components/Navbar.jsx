/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars, FaSeedling } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo.png";
import HealthModal from "./HealthModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBmiOpen, setIsBmiOpen] = useState(false);
  return (
    <div
      className={`fixed left-0 top-0 w-full z-50 text-beige  transition-colors duration-700 bg-black bg-opacity-80 
        `}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-2 relative">
        <img src={logo} alt="Logo" className="w-24 h-12" />

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black px-6 py-4 
          lg:static lg:flex lg:w-auto lg:bg-transparent lg:p-0 text-beige  font-semibold 
          space-y-4 lg:space-y-0 lg:space-x-6 transition-all duration-300`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-1 lg:py-0 transition-colors duration-200 ${
                  isActive
                    ? "text-peach underline underline-offset-4 decoration-peach"
                    : "text-beige hover:text-peach hover:underline hover:underline-offset-4 hover:decoration-peach"
                }`
              }

              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/meals"
              className={({ isActive }) =>
                `block py-1 lg:py-0 transition-colors duration-200 ${
                  isActive
                    ? "text-peach underline underline-offset-4 decoration-peach"
                    : "text-beige hover:text-peach hover:underline hover:underline-offset-4 hover:decoration-peach"
                }`
              }

              onClick={() => setMenuOpen(false)}
            >
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/whyus"
              className={({ isActive }) =>
                `block py-1 lg:py-0 transition-colors duration-200 ${
                  isActive
                    ? "text-peach underline underline-offset-4 decoration-peach"
                    : "text-beige hover:text-peach hover:underline hover:underline-offset-4 hover:decoration-peach"
                }`
              }

              onClick={() => setMenuOpen(false)}
            >
              Why Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `block py-1 lg:py-0 transition-colors duration-200 ${
                  isActive
                    ? "text-peach underline underline-offset-4 decoration-peach"
                    : "text-beige hover:text-peach hover:underline hover:underline-offset-4 hover:decoration-peach"
                }`
              }

              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </NavLink>
          </li>
            <div className="lg:hidden flex gap-4">
              <button
              onClick={() => {
                setIsBmiOpen(true);
                setMenuOpen(false); 
              }}
              className="px-4 py-2 hover:text-beige hover:bg-transparent rounded-md text-forest bg-beige  font-medium transition-colors duration-200">
              Track My Health
              </button>
                <div className="border-l-2 text-beige"></div>
              <NavLink to="/plan"
              onClick={() => setMenuOpen(false)}
                className="px-4 py-2 flex items-center text-beige rounded-md hover:text-forest hover:bg-beige font-medium transition-colors duration-200">
              View Plans
              <FaSeedling size={18} className="ml-2"/>
              </NavLink>
            </div>
        </ul>
        <HealthModal isOpen={isBmiOpen} onClose={() => setIsBmiOpen(false)} />
        <div className="hidden lg:flex gap-4">
          <button
          onClick={() => setIsBmiOpen(true)}
          className="px-4 py-2 hover:text-beige hover:bg-transparent rounded-md text-forest bg-beige  font-medium transition-colors duration-200">
          Track My Health
          </button>
          <HealthModal isOpen={isBmiOpen} onClose={() => setIsBmiOpen(false)} />
            <div className="border-l-2 text-beige"></div>
          <NavLink to="/plan"
            className="px-4 py-2 flex items-center text-beige rounded-md hover:text-forest hover:bg-beige font-medium transition-colors duration-200">
          View Plans
          <FaSeedling size={18} className="ml-2"/>
          </NavLink>
        </div>


        {/* Mobile toggle */}
        <div className="lg:hidden">
          <button
            className="text-beige "
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
