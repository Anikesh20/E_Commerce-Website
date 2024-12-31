import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/messages'); 
        if (!response.ok) {
          throw new Error('Failed to fetch messages.');
        }
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full p-8 bg-indigo-600 text-white text-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-4">Welcome to the Admin Dashboard!</p>
      </div>

      {/* Table Section */}
      <div className="w-full p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Received Messages</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading messages...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : messages.length > 0 ? (
          <table className="table-auto w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id} className="text-center">
                  <td className="border px-4 py-2">{msg.name}</td>
                  <td className="border px-4 py-2">{msg.email}</td>
                  <td className="border px-4 py-2">{msg.phone}</td>
                  <td className="border px-4 py-2">{msg.message}</td>
                  <td className="border px-4 py-2">{new Date(msg.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">No messages yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
