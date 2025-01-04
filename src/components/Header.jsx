import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHome } from "react-icons/fa"; 
import { FaEnvelope } from "react-icons/fa";
import { FaTags } from "react-icons/fa"; 
import logo from '../assets/logo.png';  

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    "Fiction",
    "Nonfiction",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Fantasy",
    "Biography",
    "History",
    "Selfhelp",
    "Childrens",
  ];

  return (
    <header
      className="text-white p-4 flex justify-between items-center shadow-lg relative rounded-bl-lg rounded-br-lg z-50"
      style={{
        background: "linear-gradient(-45deg, #6a5acd, #4b0082, #00ced1, #1e90ff, #9370db)",
        backgroundSize: "300% 300%",
        animation: "gradient-wave 10s ease infinite",
      }}
    >
      <style>
        {`
          @keyframes gradient-wave {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

        
          @keyframes gradientRing {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      
      <img
  src={logo}
  alt="BookStore"
  className="h-12 w-12 rounded-full transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_3px_rgba(255,0,0,0.7),0_0_20px_5px_rgba(255,0,0,0.5)] hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-400 hover:to-yellow-300 hover:bg-[length:300%_300%] hover:animate-[gradientRing_2s_ease_infinite]"
/>



      <nav className="hidden md:flex space-x-6 relative">
        <Link to="/" className="flex items-center hover:underline">
          <FaHome className="w-5 h-5 mr-2" /> 
          Home
        </Link>

        <div className="relative">
          <button
            className="w-full text-left flex items-center hover:underline"
            onClick={() => setShowCategories((prev) => !prev)}
          >
            <FaTags className="w-5 h-5 mr-2" />
            Categories
          </button>
          {showCategories && (
            <ul className="absolute left-0 top-full bg-white text-black shadow-lg rounded-md w-48 py-2 z-50">
              {categories.map((category) => (
                <li key={category} className="px-4 py-2 hover:bg-purple-100 cursor-pointer">
                  <Link to={`/category/${category.toLowerCase().replace(' ', '-')}`}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link to="/contact" className="flex items-center hover:underline">
          <FaEnvelope className="w-5 h-5 mr-2" />
          Contact Us
        </Link>
        <Link to="/cart" className="hover:underline flex items-center">
          <FaShoppingCart className="text-lg" />
          Cart
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {/* Mobile menu */}
      {showMenu && (
        <div className="absolute top-16 left-0 w-full bg-white text-blue-600 shadow-md z-50">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link to="/" className="flex items-center hover:underline">
                <FaHome className="w-5 h-5 mr-2" /> 
                Home
              </Link>
            </li>
            <li>
              <button
                className="w-full text-left flex items-center hover:underline"
                onClick={() => setShowCategories((prev) => !prev)}
              >
                <FaTags className="w-5 h-5 mr-2" />
                Categories
              </button>
              {showCategories && (
                <ul className="pl-4">
                  {categories.map((category) => (
                    <li key={category} className="py-1 hover:underline">
                      <Link to={`/category/${category.toLowerCase().replace(' ', '-')}`}>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" className="flex items-center hover:underline">
                <FaEnvelope className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:underline flex items-center">
                <FaShoppingCart className="text-lg" />
                Cart
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
