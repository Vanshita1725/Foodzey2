import React, { useState } from 'react';
import Nevbar from './Nevbar';
import Footer from './Fotter';
import logo from '../assets/logo.png'; // Adjust the path if needed
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Ragistion = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    gender: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://ecommerce-shop-qg3y.onrender.com/api/user/register',
        formData
      );
      setMessage('✅ Registration successful!');
      setTimeout(() => navigate('/Login'), 2000);
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      setMessage(err.response?.data?.message || '❌ Registration failed.');
    }
  };

  return (
    <div>
      <Nevbar />

      <div className="flex text-white bg-red-600 justify-between text-center py-3 ps-42 pe-37 items-center">
        <p className="m-0">Ragistion</p>
        <p className="m-0">Home / Ragistion</p>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-3xl p-6 md:p-10">
          {/* Logo */}
          <div className="flex mx-auto items-center justify-center text-center mb-6">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <h1
              className="!font-black !text-2xl mt-2"
              style={{ fontFamily: '"Fontdiner Swanky", cursive' }}
            >
              FoodTrove
            </h1>
          </div>

          {/* Message */}
          {message && (
            <p className="text-center text-sm font-semibold text-red-500 mb-4">
              {message}
            </p>
          )}

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Phone Number*</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Password*</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Gender*</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">City*</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter Your City"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Post  Code*</label>
                <input
                  type="text"
                  name="postCode"
                  placeholder="Post Code"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Country*</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter Your Country"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Region State*</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter Your State"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            </div>  

            {/* Submit Button & Login Link */}
            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
              >
                Signup
              </button>
              <Link
                to="/Login"
                className="text-sm text-black hover:text-gray-800 !no-underline"
              >
                Have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ragistion;
