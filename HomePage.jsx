import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import img1 from './assets/WhatsApp Image 2024-09-02 at 11.05.38 AM.jpeg';
import img2 from './assets/WhatsApp Image 2024-09-02 at 11.05.53 AM.jpeg';
import img3 from './assets/WhatsApp Image 2024-09-02 at 11.05.36 AM.jpeg';

const HomePage = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false); // State to control About modal visibility
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State to control Services modal visibility
  const [isContactOpen, setIsContactOpen] = useState(false); // State to control Contact modal visibility
  const [isReviewsOpen, setIsReviewsOpen] = useState(false); // State to control Reviews modal visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const handleStartClick = () => {
    navigate('/marketing-form'); // Navigate to MarketingForm page
  };

  const toggleAboutModal = () => {
    setIsAboutOpen(!isAboutOpen); // Toggle the "About" modal
  };

  const toggleServicesModal = () => {
    setIsServicesOpen(!isServicesOpen); // Toggle the "Services" modal
  };

  const toggleContactModal = () => {
    setIsContactOpen(!isContactOpen); // Toggle the "Contact Us" modal
  };

  const toggleReviewsModal = () => {
    setIsReviewsOpen(!isReviewsOpen); // Toggle the "Reviews" modal
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Empower Your Business with Digital Marketing</h1>
          <p>Transform your reach and engagement with our cutting-edge strategies.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="section-tags">
          <span className="section-tag-item" onClick={toggleAboutModal}>ABOUT</span> {/* Click to open About modal */}
          <span className="section-tag-item" onClick={toggleServicesModal}>SERVICES</span> {/* Click to open Services modal */}
          <span className="section-tag-item" onClick={toggleReviewsModal}>REVIEWS</span> {/* Click to open Reviews modal */}
          <span className="section-tag-item" onClick={toggleContactModal}>CONTACT US</span> {/* Click to open Contact modal */}
          <div className="avatar-container">
            <img
              src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" 
              alt="Profile Avatar"
              className="profile-avatar" onClick={()=>navigate('/Profile')}
            />
          </div>
        </div>

        <h2>Services</h2>
        <div className="services-list">
          <div className="service-item">
            <img src={img1} className="img" alt="SEO Optimization"/>
            <h3>SEO Optimization</h3>
            <p>Increase your website's visibility on search engines.</p>
          </div>
          <div className="service-item">
            <img src={img2} className="img" alt="Social Media Marketing"/>
            <h3>Social Media Marketing</h3>
            <p>Build your brand on all social media platforms.</p>
          </div>
          <div className="service-item">
            <img src={img3} className="img" alt="Content Creation"/>
            <h3>Content Creation</h3>
            <p>Craft engaging content that attracts and retains customers.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Reviews</h2>
        <div className="testimonials-list">
          <div className="testimonial-item">
            <p>"Our traffic doubled within months of working with this team!"</p>
            <p className="client-name">- Alex Johnson, CEO</p>
          </div>
          <div className="testimonial-item">
            <p>"Their digital strategy brought our business to new heights."</p>
            <p className="client-name">- Linda Smith, Marketing Director</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Elevate Your Business?</h2>
        <p>Start Your Business journey with us.</p>
        <button className="cta-button" onClick={handleStartClick}>Start</button> {/* Updated button */}
        <button className="cta-button" onClick={()=>navigate('/UserList')} >Registered Details</button> {/* Updated button */}
      </section>

      {/* About Modal */}
      {isAboutOpen && (
        <div className="about-modal">
          <div className="about-modal-content">
            <span className="close-button" onClick={toggleAboutModal}>&times;</span> {/* Close button */}
            <h2>About Us</h2>
            <p>At our Company, we specialize in delivering innovative digital marketing solutions designed to help businesses succeed in the modern digital landscape. Our experienced team works with companies of all sizes to create tailor-made strategies that drive growth, increase visibility, and engage with customers in meaningful ways.</p>
            <p>Whether you're looking for SEO optimization, social media marketing, content creation, or influencer partnerships, we are here to help your business thrive online. Our commitment is to deliver measurable results and sustainable growth for all our clients.</p>
          </div>
        </div>
      )}

      {/* Services Modal */}
      {isServicesOpen && (
        <div className="services-modal">
          <div className="services-modal-content">
            <span className="close-button" onClick={toggleServicesModal}>&times;</span> {/* Close button */}
            <h2>Our Services</h2>
            <p>We offer a full range of digital marketing services to help businesses thrive in the digital landscape:</p>
            <ul>
              <li><strong>SEO Optimization</strong>: Improve your search engine rankings and drive organic traffic to your website.</li>
              <li><strong>Social Media Marketing</strong>: Build a strong social media presence and engage with your audience across platforms like Facebook, Instagram, Twitter, and LinkedIn.</li>
              <li><strong>Content Creation</strong>: Craft compelling and relevant content that resonates with your audience and improves engagement.</li>
              <li><strong>Pay-Per-Click (PPC) Advertising</strong>: Get immediate traffic and leads through targeted advertising on platforms like Google Ads and social media.</li>
              <li><strong>Email Marketing</strong>: Keep your audience informed and engaged with effective email marketing campaigns.</li>
              <li><strong>Influencer Marketing</strong>: Leverage influencers to reach a wider audience and build trust in your brand.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Contact Us Modal */}
      {isContactOpen && (
        <div className="contact-modal">
          <div className="contact-modal-content">
            <span className="close-button" onClick={toggleContactModal}>&times;</span> {/* Close button */}
            <h2 >Contact Us</h2>
            <p>Feel free to reach out to us for any inquiries or support. Our team is always here to help!</p>
            <p><strong>Email:</strong> Digimark@gmail.com</p>
            <p><strong>Phone:</strong> +123-456-7890</p>
            <p><strong>Office Hours:</strong> Monday - Friday, 9 AM - 5 PM</p>
          </div>
        </div>
      )}

      {/* Reviews Modal */}
      {isReviewsOpen && (
        <div className="reviews-modal">
          <div className="reviews-modal-content">
            <span className="close-button" onClick={toggleReviewsModal}>&times;</span> {/* Close button */}
            <h2>Customer Reviews</h2>
            <div>
              <p>"Our traffic doubled within months of working with this team!"</p>
              <p className="client-name">- Alex Johnson, CEO</p>
            </div>
            <div>
              <p>"Their digital strategy brought our business to new heights."</p>
              <p className="client-name">- Linda Smith, Marketing Director</p>
            </div>
            <div>
              <p>"Amazing service! Highly recommend for anyone looking to grow their business."</p>
              <p className="client-name">- Samuel Green, Entrepreneur</p>
            </div>
            <div>
              <p>Outstanding Social Media Strategy!</p>
              <p className="client-name">- Alex,Entrepreneur</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
