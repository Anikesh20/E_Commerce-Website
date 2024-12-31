// App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

const HomePage = React.lazy(() => import('./components/HomePage'));
const CategoryPage = React.lazy(() => import('./components/CategoryPage'));
const AdminPage = React.lazy(() => import('./components/AdminPage'));
const AdminDashboard = React.lazy(() => import('./components/AdminDashboard'));
const Contact = React.lazy(() => import('./components/Contact'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const CartPage = React.lazy(() => import('./components/CartPage'));

const App = () => {
  const isAuthenticated = true; 

  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route
              path="/admin"
              element={isAuthenticated ? <AdminPage /> : <Navigate to="/" />}
            />
            <Route
              path="/admin-dashboard"
              element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/" />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
};

export default App;
