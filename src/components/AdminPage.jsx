import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assests/logo.png'; 

const AdminPage = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (adminId === 'admin' && password === 'admin') {
      navigate('/admin-dashboard'); 
    } else {
      setErrorMessage('Invalid Admin ID or Password');
    }
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600"
      style={{
        backgroundSize: '300% 300%',
        animation: 'outer-gradient-wave 10s ease infinite',
      }}
    >
      <style>
        {`
          @keyframes outer-gradient-wave {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes inner-gradient-wave {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      <div 
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
        style={{
          background: "linear-gradient(-45deg, #6a5acd, #4b0082, #00ced1, #1e90ff, #9370db)",
          backgroundSize: "300% 300%",
          animation: "inner-gradient-wave 15s ease infinite",
        }}
      >
    
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-32 h-auto rounded-full" />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Admin Login</h2>
        
        {errorMessage && (
          <div className="bg-red-100 text-red-600 border border-red-400 p-2 mb-4 rounded-md">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label htmlFor="adminId" className="block text-sm font-medium text-white">
              Admin ID
            </label>
            <input
              type="text"
              id="adminId"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Admin ID"
              required
            />
          </div>

         
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Password"
              required
            />
          </div>

          
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
