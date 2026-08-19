import React, { useState } from 'react';
import styled from 'styled-components';
import Switch from './Switch'; // Importing your animated dark/light switch

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Invisible overlay to close menu when clicking outside */}
      {isOpen && <MenuOverlay onClick={() => setIsOpen(false)} />}
      
      <NavContainer>
        {/* LEFT: Your Name / Logo */}
        <div className="logo">
          Braveen<span>.</span>R
        </div>

        {/* MIDDLE: Navigation Links */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          
          {/* Added CV button exclusively for the mobile dropdown */}
          <a href="src/assets/CV.pdf" className="cv-btn mobile-only-cv" download onClick={() => setIsOpen(false)}>
            Download CV
          </a>
        </div>

        {/* RIGHT: Actions (Switch & CV) */}
        <div className="action-items">
          {/* Switch is now always visible */}
          <div className="switch-wrapper">
            <Switch />
          </div>
          
          <a href="src/assets/CV.pdf" className="cv-btn desktop-only-cv" download>
            Download CV
          </a>
          
          {/* Mobile Hamburger Menu Icon */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </div>
        </div>
      </NavContainer>
    </>
  );
};

// --- Styled Components ---

// Overlay to detect outside clicks
const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3); /* Subtle darkening */
  backdrop-filter: blur(2px);
  z-index: 999; /* Sits exactly one layer below the header (1000) */

  @media (min-width: 901px) {
    display: none; /* Prevent rendering on desktop */
  }
`;

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  background: var(--nav-bg);
  backdrop-filter: blur(10px); /* Desktop Glassmorphism effect */
  position: sticky;
  top: 0;
  z-index: 1000;

  .logo {
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 1px;
    color: var(--text-color);
    
    span {
      color: var(--accent-color);
    }
  }

  .nav-links {
    display: flex;
    gap: 30px;
    align-items: center;

    a {
      text-decoration: none;
      color: var(--text-color);
      font-weight: 600;
      font-size: 1rem;
      transition: color 0.3s ease;

      &:hover {
        color: var(--accent-color);
      }
    }
  }

  .action-items {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .cv-btn {
    text-decoration: none;
    background-color: var(--cv-btn-bg);
    color: var(--cv-btn-text);
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.9rem;
    transition: transform 0.2s ease, opacity 0.2s ease;

    &:hover {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }

  .hamburger {
    display: none;
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--text-color);
  }

  /* Hide mobile CV button by default on desktop */
  .mobile-only-cv {
    display: none;
  }

  /* Responsive Mobile Styles */
  @media (max-width: 900px) {
    .hamburger {
      display: block;
    }

    /* Hide desktop CV button to make room for the Theme Switch */
    .desktop-only-cv {
      display: none;
    }

    /* Show CV button inside the mobile dropdown */
    .mobile-only-cv {
      display: inline-block;
      margin-top: 15px;
    }

    .action-items {
      gap: 15px;
    }

    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      
      /* New Glassmorphism Gradient using your Theme Variables */
      background: linear-gradient(180deg, var(--nav-bg) 0%, var(--card-bg, rgba(20, 20, 20, 0.95)) 100%);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border-bottom: 1px solid var(--card-border, rgba(178, 19, 24, 0.2));
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      
      flex-direction: column;
      align-items: center;
      padding: 0;
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease;

      &.open {
        max-height: 400px;
        opacity: 1;
        padding: 25px 0;
        box-shadow: 0px 15px 30px var(--crimson-shadow, rgba(0,0,0,0.4));
      }
    }
  }
`;

export default Header;