// src/admin/AdminDashboard.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!userInfo?.token || !userInfo?.isAdmin) return;

      try {
        const config = {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        };

        const ordersRes = await axios.get('/api/admin/orders', config);
        const menuRes = await axios.get('/api/admin/menu', config);

        setOrders(ordersRes.data);
        setMenuItems(menuRes.data);
      } catch (err) {
        console.error('Error fetching admin data:', err);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-red-600 mb-6">📊 Admin Dashboard</h2>

      {/* Orders Section */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">📦 Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-red-100">
              <tr>
                <th className="p-2 border">User</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">Scheduled</th>
                <th className="p-2 border">Items</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id} className="text-sm text-gray-700">
                  <td className="p-2 border">{order.user?.name || 'N/A'}</td>
                  <td className="p-2 border">{order.user?.email || 'N/A'}</td>
                  <td className="p-2 border">₹{order.total}</td>
                  <td className="p-2 border">{new Date(order.scheduledAt).toLocaleString()}</td>
                  <td className="p-2 border">
                    {order.items.map(i => `${i.name} × ${i.quantity}`).join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Menu Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🍽️ Available Menu Items</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map(item => (
            <li key={item._id} className="bg-white rounded shadow p-4">
              <h4 className="font-semibold text-red-600">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="text-sm">₹{item.price}</p>
              <img src={item.image} alt={item.name} className="mt-2 h-32 w-full object-cover rounded" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;



























