import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const BooksOnSale = () => {
    const books = [
        { id: 1, title: "Book One", author: "Author A", price: 10, genre: "Fiction" },
        { id: 2, title: "Book Two", author: "Author B", price: 15, genre: "Non-Fiction" },
        // Add more sample books
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBuy = (book) => {
        console.log(`Buying ${book.title}`);
        // Add logic for cart and checkout
    };

    return (
        <div>
            <Navbar />
            <h1 className="text-2xl font-bold text-center my-4">Books on Sale</h1>
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
                            <strong>{book.title}</strong> by {book.author} - <span className="font-semibold">${book.price}</span>
                        </div>
                        <button onClick={() => handleBuy(book)} className="ml-2 bg-blue-500 text-white p-1 rounded">Buy</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksOnSale;