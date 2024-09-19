
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManagePurchasedBooks = () => {
  const [purchasedBooks, setPurchasedBooks] = useState([]);

  useEffect(() => {
    // Adjust URL to your backend endpoint
    axios.get('/api/purchased-books')
      .then(response => setPurchasedBooks(response.data))
      .catch(error => console.error('Error fetching purchased books:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Manage Purchased Books</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="py-2 px-4">Book Title</th>
            <th className="py-2 px-4">Author</th>
            <th className="py-2 px-4">Purchased Date</th>
          </tr>
        </thead>
   
      </table>
    </div>
  );
};

export default ManagePurchasedBooks;

