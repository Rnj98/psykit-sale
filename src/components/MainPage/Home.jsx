import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [activeSpecialty, setActiveSpecialty] = useState(0);

  const specialties = [
    {
      title: 'Therapists',
      description: 'Our software includes integrated genogram creation tools, customizable templates, and secure client management features, making it easy for therapists to focus on what matters most - helping their clients.',
      icon: '🧠'
    },
    {
      title: 'Psychiatrists',
      description: 'Streamline your practice with our comprehensive genogram tools, patient history tracking, and secure documentation features. Perfect for managing complex family histories and treatment plans.',
      icon: '👨‍⚕️'
    },
    {
      title: 'Social Workers',
      description: 'Easily create and manage family genograms, track case histories, and maintain secure client records. Our tools help you provide better support for families and individuals in need.',
      icon: '🤝'
    },
    {
      title: 'Family Counselors',
      description: 'Our advanced genogram tools help you visualize and track complex family relationships, making it easier to provide effective family counseling and support.',
      icon: '👨‍👩‍👧‍👦'
    }
  ];

  return (
    <div className="main-page">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <div className="welcome-text">
            <h1><span className="gradient-text">Psykit</span>: Built for psychiatrists. Designed for better care.</h1>
            <p className="subtitle">Enhance your practice with Psykit, a psychiatrist-focused toolkit designed to simplify daily workflows, improve patient engagement, and support exceptional mental health care.</p>
            <div className="cta-buttons">
              <button className="primary-cta">Start Free Trial</button>
              <button className="secondary-cta">Schedule Demo</button>
            </div>
          </div>
          <div className="welcome-image">
            <img src={new URL('../../assets/home-page-image.png', import.meta.url).href} alt="Psykit Dashboard Preview" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-content">
          <h2 className="vision-title">Our Vision</h2>
          <p className="vision-statement">
            We believe in creating a world where mental health is prioritized and accessible to all.
            Our practice is built on the foundation of understanding, empathy, and professional excellence.
          </p>
          
          <div className="values-container">
            <h3 className="values-title">Our Core Values</h3>
            <div className="values-grid">
              <div className="value-card">
                <h4>Honesty</h4>
                <p>We maintain transparency in all our interactions and treatments.</p>
              </div>
              <div className="value-card">
                <h4>Hard Work</h4>
                <p>We are committed to providing the best care through continuous effort.</p>
              </div>
              <div className="value-card">
                <h4>Growing Intellect</h4>
                <p>We stay updated with the latest research and treatment methods.</p>
              </div>
              <div className="value-card">
                <h4>Purpose</h4>
                <p>We are driven by our mission to improve mental health outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're For Section */}
      <section className="specialties-section">
        <div className="specialties-content">
          <h2 className="specialties-title">Who We're For</h2>
          <div className="specialties-container">
            <div className="specialties-list">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="specialty-item"
                  onMouseEnter={() => setActiveSpecialty(index)}
                >
                  <span className="specialty-icon">{specialty.icon}</span>
                  <span className="specialty-title">{specialty.title}</span>
                </div>
              ))}
            </div>
            <div className="specialty-details">
              <div className="specialty-icon">{specialties[activeSpecialty].icon}</div>
              <h3>{specialties[activeSpecialty].title}</h3>
              <p>{specialties[activeSpecialty].description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 