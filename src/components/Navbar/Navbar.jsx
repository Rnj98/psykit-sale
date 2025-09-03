import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      title: 'Our Toolkit',
      dropdown: [
        { text: 'Genogram', path: '/genogram' },
        { text: 'Paitent Rings', path: '/patient-rings' },
        { text: 'Addiction Timeline', path: '/addiction-timeline' },
        { text: 'AI Notes', path: '/ai-notes' }
      ]
    },
    {
      title: 'Our Team',
      path: '/team'
    },
    {
      title: 'Contact Us',
      dropdown: ['Email Us']
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
              onMouseEnter={() => window.innerWidth > 768 && item.dropdown && setActiveDropdown(index)}
              onMouseLeave={() => window.innerWidth > 768 && setActiveDropdown(null)}
              onClick={() => handleNavItemClick(index)}
            >
              {item.path ? (
                <Link to={item.path}>{item.title}</Link>
              ) : item.title === 'Our Toolkit' ? (
                <Link to="/">{item.title}</Link>
              ) : (
                <a href="#">{item.title}</a>
              )}
              {(activeDropdown === index || window.innerWidth <= 768) && item.dropdown && (
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