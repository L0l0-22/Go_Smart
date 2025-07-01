import { FaTimes, FaBars} from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo2.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClasses = "block py-1 lg:py-0 text-gray-500 font-semibold transition-colors duration-200 hover:text-main hover:underline hover:underline-offset-4";
  const navigate = useNavigate();
  const handleScrollToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
  return (
    <div className="fixed left-0 top-0 w-full z-50 text-gray-500 bg-[#F8FAFF] shadow transition-colors duration-700">
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="lg:w-[167px] lg:h-[48px] w-48" />
        </NavLink>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white px-6 py-4 
          lg:static lg:flex lg:w-auto lg:bg-transparent lg:p-0 text-xl
          space-y-4 lg:space-y-0 lg:space-x-6 transition-all duration-300`}
        >
          <li>
            <button
              onClick={() => {
                handleScrollToSection("home");
                setMenuOpen(false);
              }}
              className={linkClasses}
            >
              Home
            </button>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? 'text-main underline underline-offset-4 decoration-main scale-[1.02] -translate-y-1 transition-all duration-300' : ''}`
              }
              >
              About
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => {
                handleScrollToSection("services");
                setMenuOpen(false);
              }}
              className={linkClasses}
            >
              Services
            </button>
          </li>
          <li>
            <NavLink to="/itsolutions" onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? 'text-main underline underline-offset-4 decoration-main scale-[1.02] -translate-y-1 transition-all duration-300' : ''}`
              }
              >
              Solutions
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => {
                handleScrollToSection("technologies");
                setMenuOpen(false);
              }}
              className={linkClasses}
            >
              Technologies
            </button>
          </li>
          <li>
            <NavLink to="/allprojects" 
            className={({ isActive }) =>
                `${linkClasses} ${isActive ? 'text-main underline underline-offset-4 decoration-main scale-[1.02] -translate-y-1 transition-all duration-300' : ''}`
              }
            onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" 
            className={({ isActive }) =>
                `${linkClasses} ${isActive ? 'text-main underline underline-offset-4 decoration-main scale-[1.02] -translate-y-1 transition-all duration-300' : ''}`
              }
            onClick={() => setMenuOpen(false)}>
              Products
            </NavLink>
          </li>
          {/* Mobile-only buttons */}
          <div className="lg:hidden flex gap-4">
           <NavLink to="/requestdemo" className="px-6 py-2 text-lg text-white hover:bg-transparent hover:text-main hover:border hover:border-main rounded-full shadow text-forest bg-main font-medium transition-colors duration-200">
            Request Demo
          </NavLink>
          </div>
        </ul>

        {/* Desktop buttons */}
        <div className="hidden lg:flex ">
          <NavLink to="/requestdemo" className="px-6 py-2 text-lg text-white hover:bg-transparent hover:text-main hover:border hover:border-main rounded-full shadow text-forest bg-main font-medium transition-colors duration-200">
            Request Demo
          </NavLink>
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
