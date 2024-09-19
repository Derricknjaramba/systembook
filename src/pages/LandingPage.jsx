// LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg' }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Book Management System</h1>
          <p className="text-lg mb-8">Manage your books efficiently and easily.</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={() => navigate('/admin-dashboard')}
          >
            Go to Admin Dashboard
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate('/user-dashboard')}
          >
            Go to User Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
