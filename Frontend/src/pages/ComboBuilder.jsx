// src/pages/ComboBuilder.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const mains = [
  { id: 'm1', name: 'Paneer Butter Masala', price: 220 },
  { id: 'm2', name: 'Butter Chicken', price: 250 },
];

const sides = [
  { id: 's1', name: 'Naan', price: 40 },
  { id: 's2', name: 'Jeera Rice', price: 60 },
];

const drinks = [
  { id: 'd1', name: 'Coke', price: 40 },
  { id: 'd2', name: 'Lassi', price: 50 },
];

const ComboBuilder = () => {
  const [main, setMain] = useState(null);
  const [side, setSide] = useState(null);
  const [drink, setDrink] = useState(null);
  const { addToCart } = useCart();

  const total = [main, side, drink]
    .filter(Boolean)
    .reduce((sum, item) => sum + item.price, 0);

  const handleAddCombo = () => {
    if (!main || !side || !drink) {
      alert('Please select all items');
      return;
    }

    const comboItem = {
      id: `combo-${Date.now()}`,
      name: `${main.name} + ${side.name} + ${drink.name} Combo`,
      price: total,
      quantity: 1,
    };

    addToCart(comboItem);
    alert('Combo added to cart!');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-6">🍽️ Build Your Combo</h2>

      {/* Main Course Selection */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Main Course</h3>
        <div className="flex gap-4">
          {mains.map(item => (
            <button
              key={item.id}
              className={`border px-4 py-2 rounded ${main?.id === item.id ? 'bg-red-500 text-white' : ''}`}
              onClick={() => setMain(item)}
            >
              {item.name} (₹{item.price})
            </button>
          ))}
        </div>
      </div>

      {/* Side Dish Selection */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Side Dish</h3>
        <div className="flex gap-4">
          {sides.map(item => (
            <button
              key={item.id}
              className={`border px-4 py-2 rounded ${side?.id === item.id ? 'bg-red-500 text-white' : ''}`}
              onClick={() => setSide(item)}
            >
              {item.name} (₹{item.price})
            </button>
          ))}
        </div>
      </div>

      {/* Drink Selection */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Drink</h3>
        <div className="flex gap-4">
          {drinks.map(item => (
            <button
              key={item.id}
              className={`border px-4 py-2 rounded ${drink?.id === item.id ? 'bg-red-500 text-white' : ''}`}
              onClick={() => setDrink(item)}
            >
              {item.name} (₹{item.price})
            </button>
          ))}
        </div>
      </div>

      {/* Final Summary */}
      <div className="text-center mt-6">
        <p className="text-xl font-bold">Total: ₹{total}</p>
        <button
          onClick={handleAddCombo}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Add Combo to Cart ✅
        </button>
      </div>
    </div>
  );
};

export default ComboBuilder;
