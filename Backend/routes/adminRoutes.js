import express from 'express';
import { getAllOrders, getAllMenuItems  } from '../controllers/adminController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/orders', protect, adminOnly, getAllOrders); // ✅ admin-only access
router.get('/orders', protect, adminOnly, getAllOrders);
router.get('/menu', protect, adminOnly, getAllMenuItems);

export default router;
