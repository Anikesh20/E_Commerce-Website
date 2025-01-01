import React from 'react';
import { useCart } from '../context/CartContext';
import Header from './Header';
import Footer from './Footer';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (bookId) => {
    removeFromCart(bookId);
  };

  return (
    <div>
      <Header />
      <main className="py-8 px-4 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty!</p>
        ) : (
          <div className="space-y-4">
            {cart.map((book) => (
              <div
                key={book.id}
                className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg"
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-24 h-36 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{book.title}</h3>
                  <p className="text-sm text-gray-600">{book.description}</p>
                  <p className="mt-2 text-xl font-semibold">Rs. {book.price}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(book.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-8 flex justify-end">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                Total: Rs.{' '}
                {cart.reduce((acc, book) => acc + book.price, 0).toFixed(2)}
              </h3>
              <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-800">
                Checkout
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
