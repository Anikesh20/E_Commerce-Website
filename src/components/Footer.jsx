import React, { useState } from 'react';

const Footer = () => {
  return (
    <footer className="text-white p-4 flex justify-between items-center shadow-lg relative rounded-tl-lg rounded-tr-lg"
    style={{
      background: "linear-gradient(-45deg, #6a5acd, #4b0082, #00ced1, #1e90ff, #9370db)",
      backgroundSize: "300% 300%",
      animation: "gradient-wave 10s ease infinite",
    }}
  >
    <style>
      {`
        @keyframes gradient-wave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}
    </style>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">ABOUT BOOKS</h3>
            <p className="text-sm leading-relaxed">
              It is my Bookstore buy anything you like. 
              <a href="#" className="text-blue-400"> Read More</a>
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Payments</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Shipping</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">About Us</a>
              </li>
            </ul>
            <h3 className="text-white text-lg font-semibold mt-6 mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="hover:text-blue-400">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center">
   
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-facebook"></i> 
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <p className="text-sm mt-4 md:mt-0">&copy; 2024 - Anikesh Book Store</p>

    
        </div>
      </div>
    </footer>
  );
};

export default Footer;
