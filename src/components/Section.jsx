import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Section = ({ category, books }) => {
  const navigate = useNavigate();

  const visibleBooks = window.innerWidth >= 768 ? 3 : 1; 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredBookIndex, setHoveredBookIndex] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length);
  };

  const addToCart = (bookTitle) => {
    alert(`${bookTitle} has been added to the cart!`);
  };

  return (
    <section className="relative p-8 bg-gradient-to-r from-purple-500 via-blue-300 to-blue-100 overflow-hidden rounded-full shadow-inner">
      <h2
        className="text-3xl font-semibold mb-6 text-center text-gray-800 cursor-pointer hover:underline"
        onClick={() => navigate(`/category/${category}`)}
      >
        {category}
      </h2>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
          onClick={prevSlide}
        >
          <FaArrowLeft className="text-gray-700" />
        </button>

        <div className="overflow-hidden w-full max-w-4xl relative">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleBooks)}%)` }}
          >
            {books.map((book, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 p-4 text-center relative group`}
                onMouseEnter={() => setHoveredBookIndex(index)}
                onMouseLeave={() => setHoveredBookIndex(null)}
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className={`w-40 h-60 mx-auto object-cover rounded-lg shadow-md transition-opacity duration-300 ${
                    hoveredBookIndex === index ? 'opacity-60' : 'opacity-100'
                  }`}
                />
                {hoveredBookIndex === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg p-4 flex flex-col justify-center items-center shadow-lg text-white transition-opacity duration-300">
                    <h3 className="text-lg font-medium">{book.title}</h3>
                    <p className="mt-2 text-sm">{book.description}</p>
                    <button
                      onClick={() => addToCart(book.title)}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-900 text-white rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 relative z-10"
                    >
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
          onClick={nextSlide}
        >
          <FaArrowRight className="text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default Section;
