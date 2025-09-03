import React from 'react';
import './Toolkit.css';

const AddictionTimeline = () => {
  return (
    <div className="toolkit-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Addiction Timeline</h1>
            <p className="hero-subtitle">Track and visualize addiction patterns, triggers, and recovery milestones with our comprehensive timeline tool. Understand the journey to better support recovery.</p>
            <div className="hero-cta">
              <button className="secondary-button">View Demo</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <p>Addiction Timeline Interface Preview</p>
              <span>Add your timeline screenshot here</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddictionTimeline; 