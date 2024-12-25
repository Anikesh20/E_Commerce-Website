import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Section = ({ category, image, transitionTime }) => {
  const books = Array(10)
    .fill(null)
    .map((_, index) => ({
      title: `${category} Book ${index + 1}`,
      img: image,
    }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length); 
  };

  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length); 
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, transitionTime * 1000); 
    return () => clearInterval(interval); 
  }, [transitionTime]);

  return (
    <section className="relative p-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 overflow-hidden">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">{category}</h2>
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
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {books.map((book, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-1/3 p-4 text-center">
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-40 h-60 mx-auto object-cover rounded-lg shadow-md"
                />
                <h3 className="mt-4 text-lg font-medium text-gray-800">{book.title}</h3>
                <button className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded hover:bg-blue-700">
                  Add to Cart
                </button>
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
