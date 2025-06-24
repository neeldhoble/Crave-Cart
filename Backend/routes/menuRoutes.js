// // import express from 'express';
// // import MenuItem from '../models/MenuItem.js';

// // const router = express.Router();

// // // Get all menu items
// // router.get('/', async (req, res) => {
// //   const menuItems = await MenuItem.find();
// //   res.json(menuItems);
// // });

// // // Add new item (optional)
// // router.post('/', async (req, res) => {
// //   const newItem = new MenuItem(req.body);
// //   await newItem.save();
// //   res.status(201).json(newItem);
// // });

// // export default router;



// import express from 'express';
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.json([
//     {
//       _id: '1',
//       name: 'Margherita Pizza',
//       price: 299,
//       category: 'Mains',
//       description: 'Classic cheese pizza with tomato sauce and basil.',
//       image: 'https://source.unsplash.com/400x300/?pizza',
//     },
//     {
//       _id: '2',
//       name: 'Paneer Tikka',
//       price: 199,
//       category: 'Starters',
//       description: 'Grilled paneer cubes with spices.',
//       image: 'https://source.unsplash.com/400x300/?paneer',
//     },
//   ]);
// });

// export default router;







import express from 'express';
import MenuItem from '../models/MenuItem.js';

const router = express.Router();

// GET all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch menu items' });
  }
});

export default router;
