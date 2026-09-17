import React, { useState } from "react";
import { NavLink } from "react-router";
import "remixicon/fonts/remixicon.css";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 sm:px-8 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-lime-400 font-bold text-xl">🛒 SkyMart</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <NavLink to="/" className="hover:text-lime-400">
          Home
        </NavLink>
        <NavLink to="/shop" className="hover:text-lime-400">
          Shop
        </NavLink>
        <NavLink to="/about" className="hover:text-lime-400">
          About
        </NavLink>
      </div>
        {/* <h4 className="hover:text-lime-400 cursor-pointer">Home</h4>
        <h4 className="hover:text-lime-400 cursor-pointer">About</h4>
        <h4 className="hover:text-lime-400 cursor-pointer">Shop</h4>
      </div> */}

      {/* User + Icons */}
      <div className="hidden md:flex items-center space-x-4">
        <h4 className="border border-gray-600 rounded-lg px-2 py-1">
          Snehal Solanke
        </h4>
        <button className="border border-gray-600 rounded-lg py-1 px-2">
          <i className="ri-shopping-cart-line"></i>
        </button>
        <button className="border border-gray-600 rounded-lg py-1 px-2">
          <i className="ri-logout-box-r-line"></i>
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-lime-400 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="ri-menu-line"></i>
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden border-t border-gray-700">
          <h4 className="hover:text-lime-400 cursor-pointer">Home</h4>
          <h4 className="hover:text-lime-400 cursor-pointer">About</h4>
          <h4 className="hover:text-lime-400 cursor-pointer">Shop</h4>
          <h4 className="border border-gray-600 rounded-lg px-2 py-1">
            Snehal Solanke
          </h4>
          <div className="flex space-x-4">
            <button className="border border-gray-600 rounded-lg py-1 px-2">
              <i className="ri-shopping-cart-line"></i>
            </button>
            <button className="border border-gray-600 rounded-lg py-1 px-2">
              <i className="ri-logout-box-r-line"></i>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
