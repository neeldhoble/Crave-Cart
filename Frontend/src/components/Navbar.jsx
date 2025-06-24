// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext'; 
// import { useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import { useAuth } from '../context/AuthContext';


// const Navbar = () => {
//   const { cartItems } = useCart();
//   const { userInfo, logout } = useAuth();
  

//   // Calculate total quantity
//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

//   const navigate = useNavigate(); // ✅ inside component

//   const handleStartGroup = () => {
//     const groupId = uuidv4();
//     navigate(`/group/${groupId}`);
//   };

//   return (
//     <nav className=" bg-opacity-10 backdrop-blur-md p-4 text-red-500 font-bold flex justify-between">
//       <Link to="/" className="text-2xl font-bold">MyRestaurant</Link>

//       <div className="space-x-6">
//         <Link to="/menu" className="">Menu</Link>

//         <Link to="/combo">
//           <button className="text-red-500">
//             Build a Combo 🧃
//           </button>
//         </Link>

//         <button onClick={handleStartGroup}>Start Group Order</button>


//          {!userInfo ? (
//           <>
//             <Link to="/login" className="text-red-500">Login</Link>
//             <Link to="/register" className="text-red-500">Register</Link>
//           </>
//         ) : (
//           <>
//             <span className="text-green-600 font-medium">Welcome, {userInfo.name}</span>
//             <button
//               onClick={logout}
//               className="text-red-600 hover:underline ml-2"
//             >
//               Logout
//             </button>
//           </>
//         )}

//             <Link to="/cart">
//                🛒 Cart <span className="text-sm text-white bg-red-500 px-2 py-1 rounded-full">{cartItems.length}</span>
//             </Link>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  

  return (
    <nav className="bg-opacity-10 backdrop-blur-md shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-red-600">
        <Link to="/">RASOIYA</Link>
      </h1>
      <div className="space-x-4">
        {!userInfo ? (
          <>
            <Link to="/login" className="text-red-500">Login</Link>
            <Link to="/register" className="text-red-500">Register</Link>
          </>
        ) : (
          <>
            <Link to="/menu">Menu</Link>
            <Link to="/cart" className="relative text-gray-700 hover:text-red-600">
          🛒 Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
              {totalItems}
            </span>
          )}
        </Link>
            {/* <Link to="/order-success">Orders</Link> */}
            <button onClick={handleLogout} className="text-red-500 font-semibold">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
