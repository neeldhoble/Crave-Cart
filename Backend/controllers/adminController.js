// import Order from '../models/Order.js';
import MenuItem from '../models/MenuItem.js';

export const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('user', 'name email');
  res.json(orders);
};

export const getAllMenuItems = async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
};





import Order from '../models/Order.js';

// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().populate('user', 'name email'); // 👈 fetch user name & email
//     res.json(orders);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch orders' });
//   }
// };
