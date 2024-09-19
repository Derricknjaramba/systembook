import React from 'react';
import HelpForm from '../components/HelpForm';
import Navbar from '../components/Navbar';

const Help = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-2xl font-bold text-center my-4">help</h1>
            <HelpForm />
        </div>
    );
};

export default Help;