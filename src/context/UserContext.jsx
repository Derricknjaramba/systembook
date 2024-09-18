import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [purchasedBooks, setPurchasedBooks] = useState([]);

    const borrowBook = (book) => {
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14); // Set due date to 14 days from now

        setBorrowedBooks((prev) => [
            ...prev,
            { ...book, dueDate, fine: 0 }
        ]);
    };

    const buyBook = (book) => {
        setPurchasedBooks((prev) => [
            ...prev,
            { ...book, purchaseDate: new Date() }
        ]);
    };

    const calculateFine = (bookId) => {
        const book = borrowedBooks.find(b => b.id === bookId);
        if (book) {
            const today = new Date();
            const dueDate = new Date(book.dueDate);
            const timeDiff = today - dueDate;
            const daysLate = Math.ceil(timeDiff / (1000 * 3600 * 24));
            return daysLate > 0 ? daysLate * 20 : 0; // Fine of 20 shillings per day
        }
        return 0;
    };

    const updateFines = () => {
        setBorrowedBooks((prev) => 
            prev.map(book => ({
                ...book,
                fine: calculateFine(book.id)
            }))
        );
    };

    return (
        <UserContext.Provider value={{ borrowedBooks, purchasedBooks, borrowBook, buyBook, updateFines }}>
            {children}
        </UserContext.Provider>
    );
};