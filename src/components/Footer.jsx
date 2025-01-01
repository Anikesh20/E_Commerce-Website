import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white p-4 flex justify-between items-center shadow-lg relative rounded-tl-lg rounded-tr-lg"
      style={{
        background: "linear-gradient(-45deg, #6a5acd, #4b0082, #00ced1, #1e90ff, #9370db)",
        backgroundSize: "300% 300%",
        animation: "gradient-wave 10s ease infinite",
        minHeight: "200px",
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
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .social-icon:hover {
            animation: spin 3s linear;
          }
        `}
      </style>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">ABOUT BOOKS</h3>
            <p className="text-sm leading-relaxed">
              It is my Bookstore, buy anything you like.
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
            <a href="https://www.facebook.com/people/Anikesh-Singh/pfbid02Fo7XGuhYyUGuSt5MVFnB4WeYPsmWw6gLJuM9rtDn7R9NjsrPfTWQoJ5fgvnvNUExl/?mibextid=ZbWKwL" className="hover:text-blue-900">
              <FaFacebook className="social-icon w-6 h-6" />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fanikeshsingh420" className="hover:text-black">
              <FaTwitter className="social-icon w-6 h-6" />
            </a>
            <a href="#" className="hover:text-pink-700">
              <FaInstagram className="social-icon w-6 h-6" />
            </a>
          </div>

          <p className="text-sm mt-4 md:mt-0">&copy; 2024 - Anikesh Book Store</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
