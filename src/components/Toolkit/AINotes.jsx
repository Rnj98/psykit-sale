import React, { useState } from 'react';
import './Toolkit.css';
import notesDemo from '../../assets/Notes Demo.mp4';

const AINotes = () => {
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
            <h1 className="hero-title">AI Notes</h1>
            <p className="hero-subtitle">Transform your session documentation with AI-powered note-taking. Focus on your patients while our intelligent system captures and organizes everything.</p>
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
              <source src={notesDemo} type="video/mp4" />
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
              <source src={notesDemo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default AINotes; 