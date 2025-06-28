import React, { useState } from 'react';
import Nevbar from './Componenets/Nevbar';
import Footer from './Componenets/Fotter';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Forgetpassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('https://ecommerce-shop-qg3y.onrender.com/api/user/forgotPassword', {
        email,
        newPassword,
      });

      setMessage(response.data.message || '✅ Password reset successfully. Check your email.');
      setEmail('');
      setNewPassword('');
    } catch (err) {
      console.error('Reset Error:', err.response || err.message);
      setError(err.response?.data?.message || '❌ Failed to reset password. Try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nevbar />

      <main className="flex-grow flex items-center justify-center px-4 bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-xl my-10 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Your Password?</h2>

          {message && <p className="text-green-600 text-sm text-center mb-4">{message}</p>}
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your new password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link to="/Login" className="text-sm text-black no-underline hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Forgetpassword;
