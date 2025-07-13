import { FaTimes, FaBars} from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo2.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClasses = "block py-1 xl:py-0 text-gray-500 font-semibold transition-colors duration-200 hover:text-main hover:underline hover:underline-offset-4";
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
        <div className="xl:hidden">
          <button className="text-main mt-1" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars size={24} />
          </button>
        </div>
        <NavLink to="/">
          <img src={logo} alt="Logo" className="xl:w-[167px] xl:h-[48px] md:w-32 w-24" />
        </NavLink>

        <ul
          className={`hidden absolute top-full left-0 w-full bg-white px-6 py-4 
          xl:static xl:flex xl:w-auto xl:bg-transparent xl:p-0 text-xl
          space-y-4 xl:space-y-0 xl:space-x-6 transition-all duration-300`}
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
        </ul>
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-white shadow-md flex flex-col gap-4 xl:hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 shadow">
              <h2 className="text-2xl font-bold text-[#000066]">Menu</h2>
              <button onClick={() => setMenuOpen(false)} className="text-white p-2 rounded-full font-light bg-gray-400">
                <FaTimes size={16} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-6 text-lg text-gray-500 font-medium p-6">
              <button onClick={() => { handleScrollToSection("home"); setMenuOpen(false); }} className="text-left border-b pb-2">Home</button>
              <button onClick={() => { handleScrollToSection("services"); setMenuOpen(false); }} className="text-left border-b pb-2">Services</button>
              <NavLink to="/about" onClick={() => setMenuOpen(false)} className="text-left border-b pb-2">About</NavLink>
              <NavLink to="/itsolutions" onClick={() => setMenuOpen(false)} className="text-left border-b pb-2">Solutions</NavLink>
              <button onClick={() => { handleScrollToSection("technologies"); setMenuOpen(false); }} className="text-left border-b pb-2">Technologies</button>
              <NavLink to="/allprojects" onClick={() => setMenuOpen(false)} className="text-left border-b pb-2">Projects</NavLink>
              <NavLink to="/products" onClick={() => setMenuOpen(false)} className="text-left border-b pb-2">Products</NavLink>
            </nav>
          </div>
        )}

        <div className=" xl:flex ">
          <NavLink to="/requestdemo" className="md:px-6 md:py-2 px-4 py-1 text-sm md:text-lg text-white hover:bg-transparent hover:text-main hover:border hover:border-main rounded-full shadow bg-main font-medium transition-colors duration-200">
            Request Demo
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
