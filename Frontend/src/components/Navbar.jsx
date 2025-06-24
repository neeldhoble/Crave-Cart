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
