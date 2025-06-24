// src/pages/GroupOrderPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const menuItems = [
  { id: 1, name: 'Burger', price: 150 },
  { id: 2, name: 'Fries', price: 80 },
  { id: 3, name: 'Coke', price: 50 },
  { id: 4, name: 'Paneer Wrap', price: 120 },
];

const GroupOrderPage = () => {
  const { groupId } = useParams();
  const [sharedCart, setSharedCart] = useState([]);
  const [userName, setUserName] = useState('');

  const addItemToGroup = (item) => {
    const user = userName || 'Guest';
    const updatedItem = { ...item, addedBy: user };
    setSharedCart(prev => [...prev, updatedItem]);
  };

  const total = sharedCart.reduce((acc, item) => acc + item.price, 0);
  const contributors = [...new Set(sharedCart.map(item => item.addedBy))];
  const perPerson = (total / contributors.length).toFixed(2);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-4">
        Group Order 🍽️
      </h2>
      <p className="text-center mb-6 text-gray-600">Group ID: <strong>{groupId}</strong></p>

      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 rounded mr-2"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {menuItems.map(item => (
          <div key={item.id} className="bg-white shadow p-4 rounded-lg">
            <h4 className="font-semibold">{item.name}</h4>
            <p>₹{item.price}</p>
            <button
              className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              onClick={() => addItemToGroup(item)}
              disabled={!userName}
            >
              Add to Group Cart
            </button>
          </div>
        ))}
      </div>

      {sharedCart.length > 0 && (
        <div className="bg-white p-6 rounded shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center text-green-700">Shared Cart</h3>
          <ul className="divide-y">
            {sharedCart.map((item, index) => (
              <li key={index} className="py-2 flex justify-between">
                <span>{item.name} - ₹{item.price}</span>
                <span className="text-sm text-gray-500">by {item.addedBy}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg font-semibold">Total: ₹{total}</p>
          <p className="text-md text-gray-600">Split Between ({contributors.length}) Users: ₹{perPerson} each</p>

          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Place Group Order 🚀
          </button>
        </div>
      )}
    </div>
  );
};

export default GroupOrderPage;
