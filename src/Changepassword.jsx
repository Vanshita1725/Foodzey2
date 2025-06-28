import React, { useState } from 'react';
import Nevbar from './Componenets/Nevbar';
import Footer from './Componenets/Fotter';
import axios from 'axios';

const Changepassword = () => {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const token = localStorage.getItem('token');
    console.log("Auth Token:", token); // Debugging

    if (!token) {
      setError('User is not logged in.');
      return;
    }

    try {
      const res = await axios.put(
        'https://ecommerce-shop-qg3y.onrender.com/api/user/changePassword', // ✅ double-check the actual backend route
        {
          currentPassword: form.currentPassword,
          newPassword: form.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setMessage(res.data.message || '✅ Password changed successfully!');
      setForm({
        currentPassword: '',
        newPassword: '',
      });
    } catch (err) {
      console.error('API Error:', err.response?.data || err.message);
      setError(err.response?.data?.message || '❌ Failed to change password.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nevbar />

      <main className="flex-grow flex items-center justify-center px-4 py-10 bg-gray-50">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Change Password
          </h2>

          {message && <p className="text-green-600 text-sm text-center mb-4">{message}</p>}
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium">Old Password</label>
              <input
                type="password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Change Password
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Changepassword;
