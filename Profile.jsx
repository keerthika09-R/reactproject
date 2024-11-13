import React, { useState } from 'react';
import './Profile.css'; // Import CSS for basic styling

const Profile = () => {
  // Mock user data
  const [user, setUser] = useState({
    name: 'Keerthika',
    email: '727723eucs104@skcet.ac.in',
    bio: 'CEO.',
  });

  const [editing, setEditing] = useState(false); // State to toggle edit mode
  const [newBio, setNewBio] = useState(user.bio); // State to store the new bio

  // Function to handle bio change
  const handleBioChange = (e) => {
    setNewBio(e.target.value);
  };

  // Function to save the updated bio
  const saveBio = () => {
    setUser({ ...user, bio: newBio }); // Update user bio
    setEditing(false); // Exit edit mode
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <img
              src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" 
              alt="Profile Avatar"
              className="profile-avatar" 
            />
      <div className="profile-card">
        <p><strog>Name:</strog>{user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong></p>
        {editing ? (
          <>
            <textarea
              value={newBio}
              onChange={handleBioChange}
              rows="4"
              className="bio-textarea"
            />
            <button onClick={saveBio} className="save-button">Save</button>
            <button onClick={() => setEditing(false)} className="cancel-button">Cancel</button>
          </>
        ) : (
          <>
            <p>{user.bio}</p>
            <button onClick={() => setEditing(true)} className="edit-button">Edit Bio</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
