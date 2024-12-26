import React from 'react';

const AdminDashboard = () => {
  return (
    <div className=" bg-gray-100 flex flex-col justify-center items-center">
    
      <div className="w-full p-8 bg-indigo-600 text-white text-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-4">Welcome to the Admin Dashboard!</p>
      </div>

    
      <div className="w-full p-8 text-center">
        <h2 className="text-2xl font-semibold">Admin Actions</h2>
        <p className="mt-2 text-gray-700">SYSTEM SETTINGS</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
