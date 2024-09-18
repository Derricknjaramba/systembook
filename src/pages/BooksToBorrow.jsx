import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const BooksToBorrow = () => {
    const books = [
        { id: 1, title: "Book One", author: "Author A", genre: "Fiction" },
        { id: 2, title: "Book Two", author: "Author B", genre: "Non-Fiction" },
        // Add more sample books
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBorrow = (book) => {
        console.log(`Borrowing ${book.title}`);
        // Add logic for borrowing
    };

    return (
        <div>
            <Navbar />
            <h1 className="text-2xl font-bold text-center my-4">Books to Borrow</h1>
            <input
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 mb-4 w-full max-w-md mx-auto"
            />
            <ul className="max-w-md mx-auto">
                {filteredBooks.map(book => (
                    <li key={book.id} className="flex justify-between border p-2 mb-2">
                        <div>
                            <strong>{book.title}</strong> by {book.author}
                        </div>
                        <button onClick={() => handleBorrow(book)} className="ml-2 bg-blue-500 text-white p-1 rounded">Borrow</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksToBorrow;