import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-red-100 to-yellow-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4">Welcome to FlavorFiesta 🍕</h1>
      <p className="text-xl text-gray-700 mb-8">Delicious meals. Fast delivery. Happy you!</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">Login</Link>
        <Link to="/register" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">Register</Link>
      </div>
    </div>
  );
};

export default LandingPage;
