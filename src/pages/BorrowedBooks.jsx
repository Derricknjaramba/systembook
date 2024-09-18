import React from 'react';
import Navbar from '../components/Navbar';

const BorrowedBooks = () => {
    const borrowedBooks = [
        { id: 1, title: "Book One", author: "Author A", dueDate: "2024-09-30" },
        { id: 2, title: "Book Two", author: "Author B", dueDate: "2024-10-05" },
        // Add more sample borrowed books
    ];

    return (
        <div>
            <Navbar />
            <h1 className="text-2xl font-bold text-center my-4">Borrowed Books</h1>
            <table className="min-w-full border mx-auto">
                <thead>
                    <tr>
                        <th className="border">Title</th>
                        <th className="border">Author</th>
                        <th className="border">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {borrowedBooks.map(book => (
                        <tr key={book.id}>
                            <td className="border">{book.title}</td>
                            <td className="border">{book.author}</td>
                            <td className="border">{book.dueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BorrowedBooks;