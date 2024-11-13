// MarketingForm.js
import React, { useState } from 'react';
import './MarketingForm.css';
import Modal from './Modal'; // Import the Modal component

const MarketingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [budget, setBudget] = useState('');
  const [marketingChannels, setMarketingChannels] = useState([]);
  const [comments, setComments] = useState('');
  const [errorMessages, setErrorMessages] = useState('');
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Regex pattern for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessages(''); // Reset error messages

    // Validate inputs
    let errors = '';

    if (!name) errors += 'Name is required.\n';
    if (!emailRegex.test(email)) errors += 'Please enter a valid email address.\n';
    if (!phoneNumber) errors += 'Phone number is required.\n';
    if (!productName) errors += 'Product/Page Name is required.\n';
    if (!description) errors += 'Description is required.\n';
    if (!targetAudience) errors += 'Target Audience is required.\n';
    if (!budget) errors += 'Budget is required.\n';

    if (errors) {
      setErrorMessages(errors);
    } else {
      // Show modal with form data
      setShowModal(true);
    }
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhoneNumber('');
    setProductName('');
    setDescription('');
    setTargetAudience('');
    setBudget('');
    setMarketingChannels([]);
    setComments('');
  };

  const handleFinalSubmit = () => {
    // You can perform the actual submit logic here (e.g., send to a server)
    const marketingData = {
      name,
      email,
      phoneNumber,
      productName,
      description,
      targetAudience,
      budget,
      marketingChannels,
      comments,
    };
    console.log('Marketing Data Submitted:', marketingData);
    alert('Thank you for your submission! We will get back to you shortly.');
    
    // Clear the form after submission
    clearForm();
    setShowModal(false); // Close the modal
  };

  return (
    <div className="form-container">
      <h1 className="heading">Digital Marketing Inquiry</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="input"
          />
        </div>

        <div className="input-container">
          <label className="label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="input"
          />
        </div>

        <div className="input-container">
          <label className="label">Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            required
            className="input"
          />
        </div>

        <div className="input-container">
          <label className="label">Product/Page Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter the product/page name"
            required
            className="input"
          />
        </div>

        <div className="input-container">
          <label className="label">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description of your product/page"
            required
            className="textarea"
            style={{ width: '90%' }}
          />
        </div>

        <div className="input-container">
          <label className="label">Target Audience:</label>
          <input
            type="text"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            placeholder="Describe your target audience"
            required
            className="input"
          />
        </div>

        <div className="input-container">
          <label className="label">Budget:</label>
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter your budget"
            required
            className="input"
          />
        </div>

        <div className="input-container">
          <label className="label">Preferred Marketing Channels:</label>
          <select
            multiple
            value={marketingChannels}
            onChange={(e) =>
              setMarketingChannels(Array.from(e.target.selectedOptions, option => option.value))
            }
            className="input"
          >
            <option value="Social Media">Social Media</option>
            <option value="Email">Email</option>
            <option value="SEO">SEO</option>
            <option value="PPC">PPC</option>
            <option value="Content Marketing">Content Marketing</option>
            <option value="Influencer Marketing">Influencer Marketing</option>
          </select>
          <small>Select multiple options by holding down the Ctrl (Windows) or Command (Mac) key.</small>
        </div>

        <div className="input-container">
          <label className="label">Additional Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Any additional comments or questions"
            className="textarea"
          />
        </div>

        <div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>

        {errorMessages && <p className="error">{errorMessages}</p>} {/* Display error messages */}
      </form>

      {/* Modal for confirmation */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        formData={{
          
          name,
          email,
          phoneNumber,
          productName,
          description,
          targetAudience,
          budget,
          marketingChannels,
          comments,
        }}
        onFinalSubmit={handleFinalSubmit}
      />
    </div>
  );
};

export default MarketingForm;
