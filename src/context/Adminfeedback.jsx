import { useEffect, useState } from 'react';
import axios from 'axios';

const Adminfeedback = () => {
  const [feedback, setFeedback] = useState([]);

  // Fetch feedback data from the backend API
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Adminfeedback'); 
        setFeedback(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-5xl font-bold mb-4 text-white">User Feedback</h1>

      {/* Feedback Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-700 text-white">
          <thead>
            <tr className="bg-gray-900 text-left">
              <th className="py-2 px-4">User Name </th>
              <th className="py-2 px-4">Feedback Message</th>
              <th className="py-2 px-4">Date Submitted</th>
              <th className="py-2 px-4">Rating</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((item) => (
              <tr key={item.id} className="border-b border-gray-600">
                <td className="py-2 px-4">{item.username || 'Anonymous'}</td>
                <td className="py-2 px-4">
                  {item.message.length > 50
                    ? `${item.message.substring(0, 50)}...`
                    : item.message}
                </td>
                <td className="py-2 px-4">{new Date(item.date).toLocaleString()}</td>
                <td className="py-2 px-4">
                  {item.rating >= 4 ? 'Positive' : item.rating === 3 ? 'Neutral' : 'Negative'}
                </td>
                <td className="py-2 px-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded mr-2"
                    onClick={() => alert(`Viewing feedback from ${item.username}`)}
                  >
                    View Full Feedback
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                    onClick={() => alert(`Replying to feedback from ${item.username}`)}
                  >
                    Reply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminfeedback;
