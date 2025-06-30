import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post('/api/auth/login', { email, password });

  //     
  //     localStorage.setItem('userInfo', JSON.stringify(data));

  //     
  //     if (data.isAdmin) {
  //       navigate('/admindashboard');
  //     } else {
  //       navigate('/menu');
  //     }
  //   } catch (error) {
  //     console.error('Login failed:', error?.response?.data?.message || error.message);
  //     alert('Invalid credentials');
  //   }
  // };


  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post('/api/auth/login', { email, password });
    localStorage.setItem('userInfo', JSON.stringify(data));

    // ✅ Redirect based on user type
    if (data.isAdmin) {
      navigate('/admin/dashboard');
    } else {
      navigate('/menu');
    }
  } catch (error) {
    console.error('Login failed:', error?.response?.data?.message || error.message);
    alert('Invalid credentials');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-red-600">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
