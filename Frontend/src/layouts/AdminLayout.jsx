import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (!userInfo?.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-red-600">👑 Admin Dashboard</h1>
      {children}
    </div>
  );
};

export default AdminLayout;
