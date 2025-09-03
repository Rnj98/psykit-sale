import React, { useState } from 'react';
import './Toolkit.css';
import genogramDemo from '../../assets/Genogram Demo.mp4';

const Genogram = () => {
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
            <h1 className="hero-title">Genogram</h1>
            <p className="hero-subtitle">Visualize family relationships and patterns with our advanced genogram creation tool. Understand complex family dynamics at a glance.</p>
            <div className="hero-cta">
              <button className="secondary-button" onClick={openVideoModal}>View Demo</button>
            </div>
          </div>
          <div className="hero-image">
            <video 
              className="demo-video" 
              controls 
              autoPlay 
              muted 
              loop
              poster=""
            >
              <source src={genogramDemo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
              <source src={genogramDemo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Genogram; 