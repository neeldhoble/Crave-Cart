const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const { items, total, scheduledAt } = req.body;
    const newOrder = new Order({ items, total, scheduledAt });
    await newOrder.save();
    res.status(201).json({ message: 'Order placed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
