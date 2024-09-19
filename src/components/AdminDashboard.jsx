
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      <nav className="space-y-4">
        <Link to="/manage-purchased-books" className="block p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">Manage Purchased Books</Link>
        <Link to="/manage-borrowed-books" className="block p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">Manage Borrowed Books</Link>
        <Link to="/add-book" className="block p-4 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600">Add Book</Link>
        <Link to="/remove-book" className="block p-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">Remove Book</Link>
        
        <Link to="/restrict-user" className="block p-4 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600">Restrict User</Link>
      </nav>
    </div>
  );
};

export default AdminDashboard;
