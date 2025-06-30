import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { getLoyaltyPoints, addLoyaltyPoints } from '../utils/loyalty';
import axios from 'axios';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [scheduledAt, setScheduledAt] = useState('');

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {
    if (!scheduledAt) {
      alert('Please select a delivery date & time.');
      return;
    }

    if (!userInfo || !userInfo.token) {
      alert('You must be logged in to place an order');
      navigate('/login');
      return;
    }

    const orderData = {
      items: cartItems,
      total: totalAmount,
      scheduledAt,
    };

    try {
      // await axios.post(
      //   `${process.env.REACT_APP_API_URL}/api/order`,
      //   orderData,
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Authorization: `Bearer ${userInfo.token}`,
      //     },
      //   }
      // );

            const apiUrl = process.env.REACT_APP_API_URL || '';

          await axios.post(`${apiUrl}/api/order`, orderData, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
            },
          });

          console.log(`${apiUrl}/api/order`);


      const earned = Math.floor(totalAmount / 100);
      addLoyaltyPoints(earned);
      clearCart();
      navigate('/order-success', { state: { scheduledAt } });
    } catch (err) {
      console.error('Order failed:', err.response?.data || err.message);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4 max-w-2xl mx-auto">
          {cartItems.map(item => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-md"
            >
              <div>
                <h4 className="text-lg font-semibold text-red-600">{item.name}</h4>
                <p className="text-sm text-gray-600">₹{item.price} × {item.quantity}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(item._id)}
              >
                ❌ Remove
              </button>
            </div>
          ))}

          <div className="mt-6">
            <label className="block font-semibold mb-2 text-gray-700">Select Delivery Time:</label>
            <input
              type="datetime-local"
              className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-300"
              value={scheduledAt}
              onChange={(e) => setScheduledAt(e.target.value)}
            />
          </div>

          <div className="text-right mt-6">
            <p className="text-xl font-bold text-gray-800">Total: ₹{totalAmount}</p>
            <p className="text-md text-gray-600 mb-1">
              Earnable Loyalty Points: <strong>{Math.floor(totalAmount / 100)}</strong>
            </p>
            <p className="text-sm text-green-600 mb-4">
              Your Loyalty Balance: {getLoyaltyPoints()} points
            </p>

            <button
              className="mt-4 px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-3"
              onClick={handleOrder}
            >
              ✅ Place Order & Earn Points
            </button>

            <button
              className="mt-4 px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={clearCart}
            >
              🗑️ Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
