import React, { useState } from 'react';
import './Toolkit.css';
import patientRingsVideo from '../../assets/Patient Rings Demo.mp4';

const PatientRings = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="toolkit-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Patient Rings</h1>
            <p className="hero-subtitle">Map and visualize patient relationships, support networks, and social connections with our intuitive patient rings tool. Understand the complete ecosystem around your clients.</p>
            <div className="hero-cta">
              <button className="secondary-button" onClick={openVideoModal}>View Demo</button>
            </div>
          </div>
          <div className="hero-image">
            <video 
              className="hero-video" 
              autoPlay 
              muted 
              loop 
              playsInline
              controls={false}
            >
              <source src={patientRingsVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-content">
          <h2 className="section-title">Powerful Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Dynamic Mapping</h3>
              <p>Create interactive relationship maps that show connections, influence levels, and support networks at a glance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Relationship Tracking</h3>
              <p>Track family members, friends, healthcare providers, and other key relationships in your patient's life.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Impact Analysis</h3>
              <p>Analyze how different relationships affect treatment outcomes and patient progress over time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Real-time Updates</h3>
              <p>Update relationship maps in real-time as patient circumstances and connections evolve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <div className="benefits-text">
            <h2>Why Choose Our Patient Rings Tool?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <h3>Comprehensive View</h3>
                <p>See the complete picture of your patient's support network, including family dynamics, social connections, and professional relationships.</p>
              </div>
              <div className="benefit-item">
                <h3>Better Treatment Planning</h3>
                <p>Identify key influencers and support systems to create more effective, personalized treatment strategies.</p>
              </div>
              <div className="benefit-item">
                <h3>Collaborative Care</h3>
                <p>Share relationship maps with other healthcare providers to ensure coordinated, comprehensive care.</p>
              </div>
            </div>
          </div>
          <div className="benefits-image">
            <div className="image-placeholder">
              <p>Benefits Visualization</p>
              <span>Add benefits illustration here</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-content">
          <h2 className="section-title">How Patient Rings Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Add Patient</h3>
              <p>Start by adding your patient to the center of the relationship map as the focal point.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Map Relationships</h3>
              <p>Add family members, friends, healthcare providers, and other key relationships around the patient.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Define Connections</h3>
              <p>Specify the nature and strength of each relationship, including influence levels and support types.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Analyze & Plan</h3>
              <p>Use the visual map to identify patterns, gaps in support, and opportunities for intervention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Map Your Patient Relationships?</h2>
          <p>Join thousands of mental health professionals who use Patient Rings to better understand and support their clients.</p>
          <div className="cta-buttons">
            <button className="secondary-button">Schedule Demo</button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal}>×</button>
            <video 
              className="video-modal-video" 
              autoPlay 
              muted 
              loop 
              playsInline
              controls
            >
              <source src={patientRingsVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientRings; 