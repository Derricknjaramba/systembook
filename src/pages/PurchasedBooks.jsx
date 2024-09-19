import React from 'react';
import Navbar from '../components/Navbar';

const PurchasedBooks = () => {
    const purchasedBooks = [
        { id: 1, title: "Book One", author: "Author A", purchaseDate: "2024-09-01" },
        { id: 2, title: "Book Two", author: "Author B", purchaseDate: "2024-09-10" },
        // Add more sample purchased books
    ];

    return (
        <div>
            <Navbar />
            <h1 className="text-2xl font-bold text-center my-4">Purchased Books</h1>
            <table className="min-w-full border mx-auto">
                <thead>
                    <tr>
                        <th className="border">Title</th>
                        <th className="border">Author</th>
                        <th className="border">Purchase Date</th>
                    </tr>
                </thead>
                <tbody>
                    {purchasedBooks.map(book => (
                        <tr key={book.id}>
                            <td className="border">{book.title}</td>
                            <td className="border">{book.author}</td>
                            <td className="border">{book.purchaseDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PurchasedBooks;