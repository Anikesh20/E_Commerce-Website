import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false); 

  const categories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Biography",
    "History",
    "Self-Help",
    "Children's Books",
  ];

  return (
    <header className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white p-4 flex justify-between items-center shadow-lg relative">
      <h1 className="text-2xl font-bold">BookStore</h1>

      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
       
        <div className="relative group">
          <button className="hover:underline cursor-pointer">Categories</button>
          <ul className="absolute left-0 top-full bg-white text-black shadow-md rounded-md w-48 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
            {categories.map((category) => (
              <li key={category} className="px-4 py-2 hover:bg-purple-100 cursor-pointer">
                <Link to={`#${category.toLowerCase().replace(' ', '-')}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <Link to="#contact" className="hover:underline">Contact Us</Link>
      </nav>

      <button
        className="md:hidden text-white"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {showMenu && (
        <div className="absolute top-16 left-0 w-full bg-white text-blue-600 shadow-md z-50">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link to="/" className="block hover:underline">Home</Link>
            </li>
            <li>
              <button
                className="w-full text-left hover:underline"
                onClick={() => setShowCategories((prev) => !prev)}
              >
                Categories
              </button>
              {showCategories && (
                <ul className="pl-4">
                  {categories.map((category) => (
                    <li key={category} className="py-1 hover:underline">
                      <Link to={`#${category.toLowerCase().replace(' ', '-')}`}>{category}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="#contact" className="block hover:underline">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
