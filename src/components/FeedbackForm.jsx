import React, { useState } from 'react';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feedback submitted:', feedback);
        setFeedback('');
        setSubmitted(true);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">We Value Your Feedback</h2>
            {submitted && <p className="text-green-500 mb-4">Thank you for your feedback!</p>}
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Your feedback"
                    className="border p-2 w-full rounded mb-4"
                    rows="4"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;