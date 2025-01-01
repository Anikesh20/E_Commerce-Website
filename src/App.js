import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Lazy-loaded components
const HomePage = React.lazy(() => import('./components/HomePage'));
const CategoryPage = React.lazy(() => import('./components/CategoryPage'));
const AdminPage = React.lazy(() => import('./components/AdminPage'));
const AdminDashboard = React.lazy(() => import('./components/AdminDashboard'));
const Contact = React.lazy(() => import('./components/Contact'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const CartPage = React.lazy(() => import('./components/CartPage'));

// Simulated authentication status
const isAuthenticated = true;

// Wrapper for protected routes
const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />

            {/* Protected Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
};

export default App;
