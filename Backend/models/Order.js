import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // 👈 to get name/email via populate
    required: true,
  },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  total: Number,
  scheduledAt: Date,
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
