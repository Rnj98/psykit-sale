import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      title: 'Services',
      dropdown: ['Individual Therapy', 'Couples Therapy', 'Family Therapy', 'Group Sessions']
    },
    {
      title: 'About',
      dropdown: ['Our Team', 'Our Approach', 'Testimonials', 'FAQ']
    },
    {
      title: 'Resources',
      dropdown: ['Blog', 'Self-Help Guides', 'Mental Health Resources', 'Contact Us']
    },
    {
      title: 'Book Appointment',
      dropdown: ['New Patients', 'Existing Patients', 'Emergency Contact']
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (index) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>PsyKit</h1>
      </div>
      <div className="nav-container">
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li 
              key={index}
              className={activeDropdown === index ? 'active' : ''}
              onMouseEnter={() => window.innerWidth > 768 && setActiveDropdown(index)}
              onMouseLeave={() => window.innerWidth > 768 && setActiveDropdown(null)}
              onClick={() => handleNavItemClick(index)}
            >
              <a href="#">{item.title}</a>
              {(activeDropdown === index || window.innerWidth <= 768) && (
                <ul className="dropdown-menu">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href="#">{subItem}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="nav-buttons">
          <button className="demo-btn">Request a Demo</button>
          <button className="trial-btn">Start Free Trial</button>
        </div>
      </div>
      <button 
        className="mobile-menu-btn"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar; 