import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (book) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, book];
      return updatedCart;
    });
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== bookId));
  };

  const totalPrice = cart.reduce((total, book) => total + book.price, 0); 

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
