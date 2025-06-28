import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sendotp = () => {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const res = await axios.post(
        'https://ecommerce-shop-qg3y.onrender.com/api/user/send-otp',
        { number }
      );

      setMessage(res.data.message || ' OTP sent successfully!');
      setNumber(''); // Reset input after success

      // Redirect to Verifyotp.jsx after short delay
      setTimeout(() => navigate('/Verifyotp'), 1000);
    } catch (err) {
      console.error('OTP Send Error:', err.response?.data || err.message);
      setError(err.response?.data?.message || ' Failed to send OTP.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Send OTP</h2>

        {message && <p className="text-green-600 text-sm mb-4 text-center">{message}</p>}
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Enter phone Number</label>
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter Your Phone Number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sendotp;
