import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      title: 'Services',
      dropdown: ['Individual Therapy', 'Couples Therapy', 'Family Therapy', 'Group Sessions']
    },
    {
      title: 'About',
      dropdown: [
        { text: 'Our Team', path: '/team' },
        { text: 'Our Approach', path: '/approach' },
        { text: 'Testimonials', path: '/testimonials' },
        { text: 'FAQ', path: '/faq' }
      ]
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
        <Link to="/">
          <h1>PsyKit</h1>
        </Link>
      </div>
      <div className={`nav-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
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
                      {typeof subItem === 'object' ? (
                        <Link to={subItem.path}>{subItem.text}</Link>
                      ) : (
                        <a href="#">{subItem}</a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="nav-buttons">
          <button className="demo-btn" onClick={() => navigate('/demo-request')}>Request a Demo</button>
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