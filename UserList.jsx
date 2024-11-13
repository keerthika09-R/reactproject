import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; // Import the CSS file for styling

const UserList = () => {
  const [details, setDetails] = useState([]); // State to hold the list of details
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State for error handling
  const [successMessage, setSuccessMessage] = useState(''); // State for success messages

  // Function to fetch details from the JSON server
  const fetchDetails = async () => {
    try {
      setLoading(true); // Set loading to true before fetching data
      const response = await axios.get('http://localhost:3001/details'); // Fetch data from the JSON server
      
      setDetails(response.data); // Update state with fetched data
      setSuccessMessage(''); // Clear any previous success messages
    } catch (error) {
      setError('Failed to fetch details. Please try again.'); // Set error message on failure
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Function to handle deleting a detail
  const updateIdsToStrings = async () => {
    try {
        const response = await axios.get('http://localhost:3001/details');
        const updatedDetails = response.data.map(detail => ({
            ...detail,
            id: String(detail.id), // Convert ID to string
        }));

        // Update each detail individually
        await Promise.all(updatedDetails.map(detail => 
            axios.put(`http://localhost:3001/details/${detail.id}`, detail)
        ));
    } catch (error) {
        console.error('Error updating IDs:', error);
    }
};

  
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this detail?')) { // Confirm deletion
      try {
        await axios.delete(`http://localhost:3001/details/${String(id)}`); // Delete the detail from the JSON server
        fetchDetails(); // Refresh the detail list after deletion
        setSuccessMessage('Detail deleted successfully.'); // Set success message
      } catch (error) {
        setError('Failed to delete detail. Please try again.'); // Handle error on delete
      }
    }
  };

  useEffect(() => {
    fetchDetails();
    updateIdsToStrings(); // Call this function after fetching details
  }, []);
  

  return (
    <div className="user-list-container">
      <h2>Details List</h2>
      {loading && <p>Loading details...</p>} {/* Show loading state */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error messages */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Show success messages */}
      <table className="user-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.name}</td>
              <td>{detail.email}</td>
              <td>
                <button onClick={() => handleDelete(detail.id)}>Delete</button> {/* Delete button */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
