import React, { useState } from 'react';

const HelpForm = () => {
    const [query, setQuery] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Help query submitted:', { query, email });
        setQuery('');
        setEmail('');
        setSubmitted(true);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Need Help? Ask Us!</h2>
            {submitted && <p className="text-green-500 mb-4">Your question has been submitted successfully!</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="border p-2 w-full rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="query">Your Question:</label>
                    <textarea
                        id="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Your question"
                        className="border p-2 w-full rounded"
                        rows="4"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">Submit</button>
            </form>
        </div>
    );
};

export default HelpForm;