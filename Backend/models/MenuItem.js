// // import mongoose from 'mongoose';

// // const menuItemSchema = new mongoose.Schema({
// //   name: String,
// //   description: String,
// //   price: Number,
// //   category: String,
// //   image: String,
// // });

// // const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// // export default MenuItem;



// import mongoose from 'mongoose';

// const menuItemSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   category: { type: String, required: true },
//   price: { type: Number, required: true },
//   description: { type: String },
//   image: { type: String }
// });

// const MenuItem = mongoose.model('MenuItem', menuItemSchema);
// export default MenuItem;







import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: String
}, {
  timestamps: true
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;
