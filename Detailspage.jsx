import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Detailspage = () => {
  const navigate = useNavigate();  // Initialize navigate function

  const formStyles = {
    container: {
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
    },
    formWrapper: {
      width: '600px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    select: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '12px 24px',
      color: '#fff',
      backgroundColor: '#4CAF50',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };

  // Navigate to Confirmpage on button click
  const handleNext = () => {
    navigate('/Confirmpage');  // Navigate to Confirmpage
  };

  return (
    <div style={formStyles.container}>
      <div style={formStyles.formWrapper}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Where do you work?</h2>
        <form>
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Organization Name</label>
            <input type="text" style={formStyles.input} />
          </div>

          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Organization Website</label>
            <input type="text" style={formStyles.input} />
          </div>

          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Which best describes you?</label>
            <select style={formStyles.select}>
              <option>Select Option</option>
              <option>Individual Contributor</option>
              <option>Manager</option>
              <option>Director</option>
              <option>Vice President</option>
              <option>C-Level</option>
              <option>Other</option>
            </select>
          </div>

          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>What kind of work do you do?</label>
            <select style={formStyles.select}>
              <option>Select Option</option>
              <option>Social Media</option>
              <option>Marketing</option>
              <option>Information Technology (IT)</option>
              <option>Influencer Marketing</option>
              <option>Employer Brand</option>
              <option>Data/Analytics</option>
              <option>Customer Care/Support</option>
              <option>Corporate Communications</option>
              <option>Other</option>
            </select>
          </div>

          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Organization Size</label>
            <select style={formStyles.select}>
              <option>Select Option</option>
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-100 employees</option>
              <option>101-200 employees</option>
              <option>201-400 employees</option>
              <option>401-500 employees</option>
              <option>501-1000 employees</option>
              <option>1001-3000 employees</option>
              <option>3001-4000 employees</option>
              <option>4001-5000 employees</option>
              <option>5001-10000 employees</option>
              <option>10000+ employees</option>
            </select>
          </div>

          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Country</label>
            <select style={formStyles.select}>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Time Zone</label>
            <select style={formStyles.select}>
              <option>Chennai, Kolkata, Mumbai</option>
              <option>New York</option>
              <option>London</option>
            </select>
          </div>

          <button type="button" style={formStyles.button} onClick={handleNext}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Detailspage;