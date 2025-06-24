import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Starters', 'Mains', 'Desserts'];

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  useEffect(() => {
  const fetchMenu = async () => {
    try {
      const { data } = await axios.get('/api/menu');
      setMenuItems(data);
    } catch (error) {
      console.error('❌ Error fetching menu:', error.message);
    }
  };

  fetchMenu();
}, []);

  const filteredMenu = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-600">Our Menu</h2>

      <div className="flex justify-center mb-8 space-x-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === category
                ? 'bg-red-500 text-white'
                : 'bg-white text-red-500 border-red-500'
            } hover:bg-red-600 hover:text-white transition`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMenu.map(item => (
          <div key={item._id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-red-600">{item.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">₹{item.price}</span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMenu.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No items in this category.</p>
      )}
    </div>
  );
};

export default MenuPage;




