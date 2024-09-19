import { Link } from 'react-router-dom';

const Admindashelp = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="py-6 px-4 bg-gray-900">
                    <h2 className="text-3xl font-bold">Admin Dashboard</h2>
                </div>
                <nav className="flex-grow px-4 py-6 space-y-2">
                    <Link to="/adminhelp" className="block text-lg hover:bg-gray-700 px-3 py-2 rounded">
                        User Help
                    </Link>
                    <br></br>
                    <Link to="/adminfeedback" className="block text-lg hover:bg-gray-700 px-3 py-2 rounded">
                        Feedback
                    </Link>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-grow bg-gray-100 p-10 text-gray-900">
                <header className="border-b pb-6 mb-6">
                    <h1 className="text-5xl font-bold">User Support</h1>
                </header>

                <main className="space-y-6">
                    {/* Placeholder for future content */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Welcome to User Support</h2>
                        <p>
                            Use the sidebar to navigate by clicking on the User Help to view help requests, Feedback for user feedback.</p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Admindashelp;
