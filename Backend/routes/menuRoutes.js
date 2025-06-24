import express from 'express';
import MenuItem from '../models/MenuItem.js';

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch menu items' });
  }
});

export default router;
