import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import './Signup.css'; 

const Signup = () => {
  const navigate = useNavigate();

  // State for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Regex patterns for validation
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; // Updated regex

  const handleRegister = async (event) => {
    event.preventDefault();

    let errorMessages = ''; // Store error messages

    // Check if any fields are empty
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill out all fields."); // Show popup if any field is empty
      return;
    }

    // Validate username
    if (!usernameRegex.test(username)) {
      errorMessages += 'Username must be 3-15 characters long and can only contain letters, numbers, and underscores.\n';
    }

    // Validate email
    if (!emailRegex.test(email)) {
      errorMessages += 'Please enter a valid email address.\n';
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      errorMessages += 'Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.\n';
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      errorMessages += 'Passwords do not match.\n';
    }

    // If there are errors, show them in a popup
    if (errorMessages) {
      alert(errorMessages); // Display the error messages in a popup
    } else {
      // If no errors, send user data to the JSON server
      const newUser = {
        username,
        email,
        password, // In a real application, this should be hashed before sending
      };

      try {
        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          alert("Registration successful!"); // Show success message
          navigate('/login'); // Navigate to the login page
        } else {
          alert("Registration failed. Please try again."); // Show error message for failed registration
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while registering. Please try again."); // Handle network errors
      }
    }
  };

  return (
    <div id="container">
      <h1>Signup</h1>
      <form onSubmit={handleRegister}>
        <h3>Username</h3>
        <input 
          type="text" 
          placeholder="Enter Username Here" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h3>Email</h3>
        <input 
          type="email" 
          placeholder="Enter Email Here" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h3>Password</h3>
        <input 
          type="password" 
          placeholder="Enter Password Here" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <h3>Confirm Password</h3>
        <input 
          type="password" 
          placeholder="Enter Password Here" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div>
          <button type="submit">Register</button> 
        </div>
      </form>
    </div>
  );
};

export default Signup;
