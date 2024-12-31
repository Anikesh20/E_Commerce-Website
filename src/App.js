import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import AdminDashboard from './components/AdminDashboard';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage'; 
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
