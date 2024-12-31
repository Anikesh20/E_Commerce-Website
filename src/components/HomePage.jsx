import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import FictionImg from '../assests/fiction.webp';
import NonFictionImg from '../assests/nonfiction.jpg';
import MysteryImg from '../assests/mystery.jpg';
import RomanceImg from '../assests/romance.jpg';
import SciFiImg from '../assests/scifi.jpg';
import FantasyImg from '../assests/fantasy.jpg';
import BiographyImg from '../assests/biography.jpg';
import HistoryImg from '../assests/history.jpg';
import SelfHelpImg from '../assests/selfhelp.jpg';
import ChildrensImg from '../assests/childrens.jpg';
import BGImage from '../assests/BG-IMG.jpg'; 

const HomePage = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Fiction", img: FictionImg },
    { name: "nonfiction", img: NonFictionImg },
    { name: "Mystery", img: MysteryImg },
    { name: "Romance", img: RomanceImg },
    { name: "Scifi", img: SciFiImg },
    { name: "Fantasy", img: FantasyImg },
    { name: "Biography", img: BiographyImg },
    { name: "History", img: HistoryImg },
    { name: "Selfhelp", img: SelfHelpImg },
    { name: "Childrens", img: ChildrensImg },
  ];

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${BGImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          height: '100vh',
        }}
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
        <div className="relative z-10">
        
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="category-card p-4 bg-white rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleCategoryClick(category.name)}
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-xl text-center mt-2">{category.name}</h3>
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
