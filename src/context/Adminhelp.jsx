import { useEffect, useState } from 'react';
import axios from 'axios';

const Adminhelp = () => {
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null); // Added state for error handling

  // Fetch the help requests from the backend API
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/adminhelp');
        // Check if response data is an array
        if (Array.isArray(response.data)) {
          setRequests(response.data);
          setFilteredRequests(response.data); // Initially, filtered requests are the same
        } else {
          throw new Error('Unexpected data structure');
        }
      } catch (error) {
        console.error('Error fetching help requests:', error);
        setError('Failed to fetch help requests. Please try again later.');
      }
    };

    fetchRequests();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    
    // Filter requests based on search term (user name or issue)
    const filtered = requests.filter((request) =>
      request.username.toLowerCase().includes(value) || 
      request.message.toLowerCase().includes(value)
    );
    setFilteredRequests(filtered);
  };

  return (
    <div className="p-4">
      <h1 className="text-5xl font-bold mb-4 text-white">Help Requests</h1>
      {error && <p className="text-white">{error}</p>} {/* Display error message if any */}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by user name or issue"
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 w-full border border-gray-300 rounded-md"
      />

      {/* Help Requests Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-700 text-white">
          <thead>
            <tr className="bg-gray-900 text-left">
              <th className="py-2 px-4">User Name</th>
              <th className="py-2 px-4">Issue</th>
              <th className="py-2 px-4">Date Submitted</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr key={request.id} className="border-b border-gray-600">
                <td className="py-2 px-4">{request.username || 'Anonymous'}</td>
                <td className="py-2 px-4">
                  {request.message.length > 50
                    ? `${request.message.substring(0, 50)}...`
                    : request.message}
                </td>
                <td className="py-2 px-4">{new Date(request.date).toLocaleString()}</td>
                <td className="py-2 px-4">
                  {request.status === 'pending'
                    ? 'Pending'
                    : request.status === 'in-progress'
                    ? 'In Progress'
                    : 'Resolved'}
                </td>
                <td className="py-2 px-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded mr-2"
                    onClick={() => alert(`Viewing details of request #${request.id}`)}
                  >
                    View Details
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded mr-2"
                    onClick={() => alert(`Responding to request #${request.id}`)}
                  >
                    Respond
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                    onClick={() => alert(`Closing request #${request.id}`)}
                  >
                    Close Request
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

export default Adminhelp;
