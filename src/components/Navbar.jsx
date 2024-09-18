import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-around bg-gray-800 text-white h-12"> {/* Set a fixed height */}
            <Link className="hover:underline" to="/">Home</Link>
            <Link className="hover:underline" to="/books-on-sale">Books on Sale</Link>
            <Link className="hover:underline" to="/books-to-borrow">Books to Borrow</Link>
            <Link className="hover:underline" to="/borrowed-books">Borrowed Books</Link>
            <Link className="hover:underline" to="/purchased-books">Purchased Books</Link>
            <Link className="hover:underline" to="/feedback">Feedback</Link>
            <Link className="hover:underline" to="/help">Help</Link>
        </nav>
    );
};

export default Navbar;