import Order from '../models/Order.js';

export const placeOrder = async (req, res) => {
  try {
    const { items, total, scheduledAt } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items in order' });
    }

    const newOrder = new Order({
      user: req.user._id, // 🧠 From authMiddleware
      items,
      total,
      scheduledAt,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (err) {
    console.error('Order Error:', err);
    res.status(500).json({ message: 'Failed to place order' });
  }
};
