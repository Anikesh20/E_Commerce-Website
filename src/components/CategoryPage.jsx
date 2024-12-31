import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';


import booksData from './booksData.json';

const CategoryPage = () => {
  const { category } = useParams(); 
  const [categoryBooks, setCategoryBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); 

  useEffect(() => {
   
    if (booksData[category.toLowerCase()]) {
      setCategoryBooks(booksData[category.toLowerCase()]);
    } else {
      setCategoryBooks([]);
    }
    setIsLoaded(true); 
  }, [category]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="p-8">
          <h1 className="text-3xl font-semibold text-center mt-8">{category} Books</h1>
          <Section category={category} books={categoryBooks} />
        </section>
      </main>
      
      {isLoaded && <Footer />}
    </div>
  );
};

export default CategoryPage;
