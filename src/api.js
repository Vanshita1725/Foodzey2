// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecommerce-shop-qg3y.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
