import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const navigate = useNavigate();

  // State for form fields and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Regex patterns for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; // Updated regex

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset error messages
    setEmailError('');
    setPasswordError('');

    let errors = '';

    // Validate email
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email.');
      errors += 'Please enter a valid email.\n'; // Collect error messages
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      setPasswordError('Please enter a valid password.');
      errors += 'Password must meet the complexity requirements.\n'; // Collect error messages
    }

    // Show popup with error messages if there are any
    if (errors) {
      alert(errors); // Show the error messages in a popup
      return; // Exit the function if there are errors
    }

    // Fetch users from the JSON server
    const response = await fetch('http://localhost:3001/users');
    const users = await response.json();

    // Validate credentials against users
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      navigate('/home'); // Navigate to home page if credentials are valid
    } else {
      alert('Invalid email or password.'); // Show error for invalid credentials
    }
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div id="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <h3>Email</h3>
        <input
          type="email"
          placeholder="Enter Email Here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error">{emailError}</p>} {/* Display email error */}

        <h3>Password</h3>
        <input
          type="password"
          placeholder="Enter password Here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error">{passwordError}</p>} {/* Display password error */}

        <h5>Forget Password?</h5>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleSignupClick}>
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
