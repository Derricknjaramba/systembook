
import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your API endpoint
    axios.post('http://127.0.0.1:8000/books/', { title, author })
      .then(response => {
        setMessage('Book added successfully!');
        setTitle('');
        setAuthor('');
      })
      .catch(error => {
        console.error('Error adding book:', error);
        setMessage('Failed to add book.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Add Book</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Book</button>
        {message && <p className="mt-4 text-gray-700">{message}</p>}
      </form>
    </div>
  );
};

export default AddBook;
