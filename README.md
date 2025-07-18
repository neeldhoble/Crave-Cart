# Crave-Cart 🍔

Crave-Cart is a feature-rich restaurant website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS. It provides a modern, responsive, and interactive food ordering experience for users, with real-time cart management, secure authentication, and admin functionalities.

## 🚀 Features

### 👥 User Features
- Login / Register with JWT Authentication
- Menu Filtering and Search (including voice search)
- Add to Cart with Persistent State
- Cart Count in Navbar
- Order Placement with Real Payment Integration (Razorpay)
- Meal Recommender using AI
- Group Order Mode with Smart Bill Split
- Scheduled Orders
- Live Kitchen Tracker
- Loyalty Points & Rewards System
- WhatsApp Chat Support for Orders
- Photo Uploads in Reviews

### 🔐 Admin Features
- Secure Admin Dashboard (only accessible by admin)
- Manage Orders, Users, and Menu
- Track Sales and Analytics

## 🧰 Tech Stack

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **AI/ML**: Meal Recommender (AI feature)
- **Other**: MongoDB Compass, Voice Recognition API, FastAPI (for future enhancements)

## 🛠️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/neeldhoble/Crave-Cart.git
   ```

2. Install dependencies:
   ```bash
   cd crave-cart
   npm install
   cd backend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the backend folder with the following:
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_SECRET=your_razorpay_secret
   ```

4. Run the development server:
   - Backend: `npm run server`
   - Frontend: `npm start`

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by [Neel Dhoble](https://github.com/neeldhoble)
