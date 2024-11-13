// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Adjust the path if needed
import MarketingForm from './MarketingForm'; // Adjust the path if needed
import Login from './Login'; // Import Login component
import Signup from './Signup'; // Import Signup component
import Start from './Start'; // Import Start component
import UserList from './UserList'; // Import Start component
import Profile from './Profile'; // Import Start component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} /> {/* Start page as the initial route */}
        <Route path="/home" element={<HomePage />} /> {/* HomePage route */}
        <Route path="/marketing-form" element={<MarketingForm />} /> {/* MarketingForm route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/signup" element={<Signup />} /> {/* Signup route */}
        <Route path="/UserList" element={<UserList />} /> {/* Signup route */}
        <Route path="/Profile" element={<Profile />} /> {/* Signup route */}
        
      </Routes>
    </Router>
  );
};

export default App;
