import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

import FictionImg from '../assests/fiction.webp';
import NonFictionImg from '../assests/nonfiction.jpg';
import MysteryImg from '../assests/mystery.jpg';
import RomanceImg from '../assests/romance.jpg';
import SciFiImg from '../assests/scifi.jpg';
import FantasyImg from '../assests/fantasy.jpg';
import BiographyImg from '../assests/biography.jpg';
import HistoryImg from '../assests/history.jpg';
import SelfHelpImg from '../assests/selfhelp.png';
import ChildrensImg from '../assests/childrens.png';

const HomePage = () => {
  const categories = [
    { name: "Fiction", img: FictionImg },
    { name: "Non-fiction", img: NonFictionImg },
    { name: "Mystery", img: MysteryImg },
    { name: "Romance", img: RomanceImg },
    { name: "Science Fiction", img: SciFiImg },
    { name: "Fantasy", img: FantasyImg },
    { name: "Biography", img: BiographyImg },
    { name: "History", img: HistoryImg },
    { name: "Self-Help", img: SelfHelpImg },
    { name: "Children's Books", img: ChildrensImg },
  ];

  return (
    <div>
      <Header />
      {categories.map((category, index) => (
        <Section
          key={category.name}
          category={category.name}
          image={category.img}
          transitionTime={10 + index} 
        />
      ))}
      <Footer />
    </div>
  );
};

export default HomePage;
