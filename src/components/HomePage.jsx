import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import FictionImg from '../assets/fiction.webp';
import NonFictionImg from '../assets/nonfiction.jpg';
import MysteryImg from '../assets/mystery.jpg';
import RomanceImg from '../assets/romance.jpg';
import SciFiImg from '../assets/scifi.jpg';
import FantasyImg from '../assets/fantasy.jpg';
import BiographyImg from '../assets/biography.jpg';
import HistoryImg from '../assets/history.jpg';
import SelfHelpImg from '../assets/selfhelp.jpg';
import ChildrensImg from '../assets/childrens.jpg';
import BGImage from '../assets/BG-IMG.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Fiction', img: FictionImg },
    { name: 'Nonfiction', img: NonFictionImg },
    { name: 'Mystery', img: MysteryImg },
    { name: 'Romance', img: RomanceImg },
    { name: 'Scifi', img: SciFiImg },
    { name: 'Fantasy', img: FantasyImg },
    { name: 'Biography', img: BiographyImg },
    { name: 'History', img: HistoryImg },
    { name: 'Selfhelp', img: SelfHelpImg },
    { name: 'Childrens', img: ChildrensImg },
  ];

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="flex-grow relative"
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: -1,
          }}
        ></div>

        {/* Categories Grid */}
        <div className="relative z-10 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="category-card p-4 bg-black rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-[0_0_10px_3px_white,0_0_20px_5px_white,0_0_30px_10px_yellow]"

                onClick={() => handleCategoryClick(category.name)}
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-xl  text-white text-center mt-2">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
