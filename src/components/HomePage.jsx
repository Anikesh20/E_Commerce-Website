import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

// Importing images from assets folder
import FictionImg from '../assests/fiction.png';
import NonFictionImg from '../assests/nonfiction.png';
import MysteryImg from '../assests/mystery.png';
import RomanceImg from '../assests/romance.png';
import SciFiImg from '../assests/scifi.png';
import FantasyImg from '../assests/fantasy.png';
import BiographyImg from '../assests/biography.png';
import HistoryImg from '../assests/history.png';
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
