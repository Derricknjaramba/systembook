import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import Navbar from '../components/Navbar';

const Feedback = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-2xl font-bold text-center my-4">Feedback</h1>
            <FeedbackForm />
        </div>
    );
};

export default Feedback;