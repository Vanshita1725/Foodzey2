import React, { useState } from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';
import salad1 from "./assets/Fattoush salad.png";
import salad2 from "./assets/Vegetable salad.png";
import salad3 from "./assets/Egg salad.png";
import Nevbar from './Componenets/Nevbar';
import Footer from './Componenets/Fotter';

const Wishlist = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Fattoush Salad',
      image: salad1,
      description: 'A refreshing salad with mixed greens, tomatoes, cucumbers, and a tangy dressing.',
    },
    {
      id: 2,
      name: 'Vegetable Salad',
      image: salad2,
      description: 'Crispy vegetable salad with light herbs and seasoning.',
    },
    {
      id: 3,
      name: 'Egg Salad',
      image: salad3,
      description: 'Classic egg salad with mayo and fresh spices.',
    },
  ]);

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Nevbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Your Wishlist</h2>
        {items.length === 0 ? (
          <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute top-2 right-2 text-2xl text-red-500 cursor-pointer">
                  <ion-icon
                    name="trash-sharp"
                    onClick={() => removeItem(item.id)}
                  ></ion-icon>
                </div>
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="absolute bottom-2 left-2 text-red-500 cursor-pointer">
                  <ion-icon name="heart-sharp"></ion-icon>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
