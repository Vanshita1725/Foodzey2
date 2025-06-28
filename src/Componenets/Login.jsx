import React, { useState } from 'react';
import axios from 'axios';
import Nevbar from './Nevbar';
import Footer from './Fotter';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for redirection

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://ecommerce-shop-qg3y.onrender.com/api/user/login', {
        email,
        password,
        
      });

      console.log('Login Response:', response);

      if (response.status !== 200) {
        throw new Error('Login failed');
      } else {
        console.log('Login successful:', response.data.data);

        localStorage.setItem("token", response.data.data);

        navigate('/');
      }

    } catch (err) {
      console.error('Login Error:', err.response?.data || err.message);
      setErrorMsg(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div>
      <Nevbar />
      <div className="flex text-white bg-red-600 justify-between text-center py-3 lg:ps-42 lg:pe-37 px-4 items-center">
        <p className="m-0">Login</p>
        <p className="m-0">Home / Login</p>
      </div>

      <div className="flex items-center justify-center bg-gray-50 p-6 my-10">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
          {/* Logo */}
          <div className="text-center mb-6">
            <img src={logo} alt="Logo" className="mx-auto w-12 h-12" />
            <h1 className="!font-black !text-2xl mt-2" style={{ fontFamily: '"Fontdiner Swanky", cursive' }}>FoodTrove</h1>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="mb-4 text-center text-red-600 text-sm font-medium">{errorMsg}</div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email Address*</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password*</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-red-500" />
                <span>Remember Me</span>
              </label>
            <Link to="/Forgetpassword" className='!no-underline text-sm text-black hover:text-gray-700'>Forgot Password?</Link>
            <Link to="/Sendotp" className='!no-underline text-sm text-black hover:text-gray-700 '>Change Password?</Link>

            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
              >
                Login
              </button>
              <Link to="/Ragistion" className="text-sm text-black hover:text-gray-800 !no-underline">
                Signup?
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
