// Start.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Start.css'; 

const Start = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <div id="container">
      <h1>SignatureSphere Digital Marketing</h1>
      <p>Boost your business with our expert digital marketing solutions.</p>
      <button type="button" onClick={handleLoginClick}>Login</button> {/* This will trigger navigation */}
    </div>
  );
};

export default Start;
