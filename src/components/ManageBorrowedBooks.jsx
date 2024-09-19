
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageBorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    // Adjust URL to your backend endpoint
    axios.get('/api/borrowed-books')
      .then(response => setBorrowedBooks(response.data))
      .catch(error => console.error('Error fetching borrowed books:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Manage Borrowed Books</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="py-2 px-4">Book Title</th>
            <th className="py-2 px-4">Author</th>
            <th className="py-2 px-4">Borrowed Date</th>
            <th className="py-2 px-4">Username</th>
          </tr>
        </thead>
        
      </table>
    </div>
  );
};

export default ManageBorrowedBooks;
