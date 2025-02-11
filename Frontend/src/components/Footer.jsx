import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { useState } from "react";

const Footer = () => {
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(true);
    setTimeout(() => setHighlight(false), 3000); // Remove highlight after 3 seconds
  };
  return (
    <div className="bg-gray-100 px-[10%] py-[60px] mt-[50px]">
      {/* Top Section */}
      <div className="flex justify-between items-start flex-wrap gap-10">
        {/* Logo & Motto */}
        <div className="flex flex-col items-start w-[300px]">
          <img src="/logo1.png" alt="BloodBridge Logo" className="h-[100px] w-auto" />
          <span className="text-gray-600 mt-3 text-lg">
            Saving lives, one donation at a time.
          </span>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            
            <Scroll to="hero" smooth={true} duration={800} >
            <li className="hover:text-red-500 cursor-pointer transition">Home</li>
            </Scroll>
            <Scroll to="featured" smooth={true} duration={800} >
            <li className="hover:text-red-500 cursor-pointer transition">About Us</li>
            </Scroll>
            <Scroll to="contact" smooth={true} duration={800} >
            <li className="hover:text-red-500 cursor-pointer transition">Donate</li>
            </Scroll>
            
            <li className="hover:text-red-500 cursor-pointer transition" onClick={handleHighlight}>Contact</li>
            <Link to="/login">
              <li className="hover:text-red-500 cursor-pointer transition">Admin</li>
            </Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div
          className={`w-[300px] p-4 transition-all duration-300 rounded-lg ${
            highlight ? "border-4 border-red-500 shadow-lg bg-gray-200" : "border border-gray-300"
          }`}
        >
          <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
          <p className="mt-3 text-gray-700">123 BloodConnect Ave, City, Country</p>
          <p className="mt-1 text-gray-700">Phone: (123) 456-7890</p>
          <p className="mt-1 text-gray-700">Email: info@bloodbridge.com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-gray-300 pt-5 text-center">
        <p className="text-gray-600">&copy; 2024 BloodBridge. All rights reserved</p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          {[
            { href: "#", icon: "M22 12.08c0-5.522-4.477-10-10-10S2 6.558 2 12.08c0 4.411 3.07 8.083 7.305 9.27..." },
            { href: "#", icon: "M22.23 5.924c-.813.36-1.684.603-2.598.711a4.517 4.517 0 001.984-2.486..." },
            { href: "#", icon: "M21.5 0h-19A2.5 2.5 0 000 2.5v19A2.5 2.5 0 002.5 24h10.156v-8.797H9.548v-3.23..." },
          ].map((social, index) => (
            <a key={index} href={social.href} className="hover:text-red-500 transition">
              <svg className="w-7 h-7 fill-current text-gray-600 hover:text-red-500 transition-all duration-200" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
