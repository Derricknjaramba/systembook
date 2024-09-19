// src/components/RestrictUser.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestrictUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [restriction, setRestriction] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleRestrict = (e) => {
    e.preventDefault();
    axios.post(`/api/restrict-user/${selectedUser}`, { restriction })
      .then(response => {
        setMessage('User restricted successfully!');
        setSelectedUser('');
        setRestriction('');
      })
      .catch(error => {
        console.error('Error restricting user:', error);
        setMessage('Failed to restrict user.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Restrict User</h1>
      <form onSubmit={handleRestrict} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Select User</label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
        
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Restriction</label>
          <input
            type="text"
            value={restriction}
            onChange={(e) => setRestriction(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="p-2 bg-purple-500 text-white rounded">Restrict User</button>
        {message && <p className="mt-4 text-gray-700">{message}</p>}
      </form>
    </div>
  );
};

export default RestrictUser;
