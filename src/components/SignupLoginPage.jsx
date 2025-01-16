import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const SignupLoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      
      if (username && email && password) {
        try {
          const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
          });

          const data = await response.json();

          if (response.ok) {
            console.log('User signed up:', data);
            setErrorMessage('');
            setSuccessMessage('User data saved successfully!'); 
            setIsSignup(false); 
          } else {
            setErrorMessage(data.message || 'Error during signup');
            setSuccessMessage(''); 
          }
        } catch (error) {
          console.error('Error during signup:', error);
          setErrorMessage('Server error during signup.');
          setSuccessMessage(''); 
        }
      } else {
        setErrorMessage('Please fill in all fields.');
        setSuccessMessage(''); 
      }
    } else {
      
      try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('User logged in:', data);
          localStorage.setItem('token', data.token); 
          navigate('/cart'); 
        } else {
          setErrorMessage(data.message || 'Invalid email or password.');
          setSuccessMessage(''); 
        }
      } catch (error) {
        console.error('Error during login:', error);
        setErrorMessage('Server error during login.');
        setSuccessMessage(''); 
      }
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

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          {isSignup ? 'Sign Up' : 'Log In'}
        </h2>

        
        {successMessage && (
          <div className="bg-green-100 text-green-600 border border-green-400 p-2 mb-4 rounded-md">
            {successMessage}
          </div>
        )}

       
        {errorMessage && (
          <div className="bg-red-100 text-red-600 border border-red-400 p-2 mb-4 rounded-md">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your username"
                required
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
            >
              {isSignup ? 'Sign Up' : 'Log In'}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-indigo-500 hover:underline"
          >
            {isSignup ? 'Already have an account? Log In' : 'New here? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupLoginPage;
