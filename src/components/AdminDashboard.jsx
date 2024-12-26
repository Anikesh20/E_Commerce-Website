import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full p-8 bg-indigo-600 text-white text-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-4">Welcome to the Admin Dashboard!</p>
      </div>
      <div className="w-full p-8">
        <h2 className="text-2xl font-semibold text-center">Received Messages</h2>
        <table className="table-auto w-full mt-6 bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2">{msg.name}</td>
                  <td className="border px-4 py-2">{msg.email}</td>
                  <td className="border px-4 py-2">{msg.phone}</td>
                  <td className="border px-4 py-2">{msg.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 px-4 py-6">
                  No messages yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
