import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import BooksOnSale from './pages/BooksOnSale';
import BooksToBorrow from './pages/BooksToBorrow';
import BorrowedBooks from './pages/BorrowedBooks';
import PurchasedBooks from './pages/PurchasedBooks';
import Feedback from './pages/Feedback';
import Help from './pages/Help';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserDashboard />} />
                <Route path="/books-on-sale" element={<BooksOnSale />} />
                <Route path="/books-to-borrow" element={<BooksToBorrow />} />
                <Route path="/borrowed-books" element={<BorrowedBooks />} />
                <Route path="/purchased-books" element={<PurchasedBooks />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </Router>
    );
};

export default App;
