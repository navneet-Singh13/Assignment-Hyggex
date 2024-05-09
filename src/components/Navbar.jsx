import React, { useState } from "react";
import logo from "../assets/navlogo.png";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" w-full ">
      <div className="container mx-auto  py-2 flex justify-between items-center">
        <img src={logo} className="text-center"></img>

        <ul className="hidden md:flex space-x-4 items-center gap-5">
          <li className="text-black ">Home</li>
          <li className="text-black ">Flashcard</li>
          <li className="text-black ">Contact</li>
          <li className="text-black ">FAQ</li>
          <button className=" bg-gradient text-white rounded-full px-10 py-2">
            Login
          </button>
        </ul>
        <button
          className="md:hidden focus:outline-none text-black "
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <ul className="md:hidden    text-center ">
          <li className="py-2 ">Home</li>
          <li className="py-2 ">Flashcard</li>
          <li className="py-2 ">Contact</li>
          <li className="py-2 ">FAQ</li>
          <button className=" bg-gradient text-white rounded-full px-10 py-2">
            Login
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
