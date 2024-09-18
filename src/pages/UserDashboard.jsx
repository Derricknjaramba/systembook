import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const UserDashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">Welcome to Your BookStore Dashboard!</h1>
                <p className="mb-6 text-gray-700 text-center">Explore our collection of books, manage your borrowing, and provide valuable feedback.</p>
                <img 
                    src="https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Best-Reviewed-Books.jpeg" 
                    alt="Best Reviewed Books" 
                    className="w-full h-auto rounded mb-6 shadow-md"
                />
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">Explore Our Features:</h2>
                <ul className="space-y-2">
                    {[
                        { path: '/books-on-sale', label: '📚 Books on Sale' },
                        { path: '/books-to-borrow', label: '🔍 Books to Borrow' },
                        { path: '/borrowed-books', label: '📖 Borrowed Books' },
                        { path: '/purchased-books', label: '💳 Purchased Books' },
                        { path: '/feedback', label: '💬 Feedback' },
                        { path: '/help', label: '❓ Help' },
                    ].map((item) => (
                        <li key={item.path}>
                            <Link to={item.path} className="text-blue-600 hover:underline transition duration-300">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserDashboard;