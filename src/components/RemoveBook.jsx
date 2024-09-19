// src/components/RemoveBook.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RemoveBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const handleRemove = (e) => {
    e.preventDefault();
    axios.delete(`/api/remove-book/${selectedBook}`)
      .then(response => {
        setMessage('Book removed successfully!');
        setBooks(books.filter(book => book.id !== selectedBook));
        setSelectedBook('');
      })
      .catch(error => {
        console.error('Error removing book:', error);
        setMessage('Failed to remove book.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Remove Book</h1>
      <form onSubmit={handleRemove} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Select Book</label>
          <select
            value={selectedBook}
            onChange={(e) => setSelectedBook(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            
          </select>
        </div>
        <button type="submit" className="p-2 bg-red-500 text-white rounded">Remove Book</button>
        {message && <p className="mt-4 text-gray-700">{message}</p>}
      </form>
    </div>
  );
};

export default RemoveBook;
