import { useState } from "react";
import { Link } from "react-scroll";
import { Link as Movelink} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[80px] px-10 lg:px-20">
        
        {/* Logo */}
        <img
          src="/logo1.png"
          alt="Logo"
          className="cursor-pointer w-[180px] lg:w-[200px]"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <Link to="hero" smooth={true} duration={800} className="text-lg font-medium text-gray-700 hover:text-red-500 transition">
            Home
          </Link>
          <Link to="featured" smooth={true} duration={800} className="text-lg font-medium text-gray-700 hover:text-red-500 transition">
            About Us
          </Link>
          <Link to="contact" smooth={true} duration={800} className="text-lg font-medium text-gray-700 hover:text-red-500 transition">
            Contact Us
          </Link>
          <Movelink to="/login" smooth={true} duration={800} className="text-lg font-medium text-gray-700 hover:text-red-500 transition">
              Login/SignUp
            </Movelink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-2xl text-red-500" /> : <FaBars className="text-2xl text-gray-700" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-md flex flex-col text-center space-y-6 py-6">
          <Link to="hero" smooth={true} duration={800} className="text-lg font-medium text-gray-700 hover:text-red-500 transition" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="featured" smooth={true} duration={800} className="text-lg font-medium text-gray-700 hover:text-red-500 transition" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link to="contact" smooth={true} duration={800} className="text-lg font-medium text-gray-700 hover:text-red-500 transition" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <Movelink to="/login" smooth={true} duration={800} className="text-lg font-medium text-gray-700 hover:text-red-500 transition">
            Login/SignUp
          </Movelink>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
