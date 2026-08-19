import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="footer-content">
        
        {/* Cyberpunk Terminal Status */}
        <div className="system-status">
          <span className="dot"></span>
          SYSTEM.STATUS: [ <span>ONLINE</span> ]
        </div>
        
        {/* Credits */}
        <p className="designer">
          Designed & Engineered by <a href="#home">Braveen</a>
        </p>
        
        {/* Copyright */}
        <p className="copyright">
          © {currentYear} All Rights Reserved.
        </p>

      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 40px 8%;
  margin-top: 80px;
  
  /* Glassmorphism Top Border & Background */
  border-top: 1px solid var(--surface-border, rgba(178, 19, 24, 0.15));
  background: var(--card-bg, rgba(0, 0, 0, 0.02));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  .footer-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  /* Status Indicator Styling */
  .system-status {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 5px;
    background: rgba(178, 19, 24, 0.05);
    padding: 6px 14px;
    border-radius: 4px;
    border: 1px solid rgba(178, 19, 24, 0.1);

    span {
      color: var(--accent-color);
    }

    .dot {
      width: 8px;
      height: 8px;
      background: var(--accent-color);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--accent-color);
      animation: pulse 2s infinite;
    }
  }

  .designer {
    color: var(--text-color);
    font-size: 1.05rem;
    font-weight: 600;
    margin: 0;

    a {
      color: var(--accent-color);
      text-decoration: none;
      transition: all 0.3s ease;

      /* Adds a neon glow to your name on hover */
      &:hover {
        text-shadow: 0 0 12px rgba(178, 19, 24, 0.8);
      }
    }
  }

  .copyright {
    color: var(--text-muted);
    font-size: 0.85rem;
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
    opacity: 0.8;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

export default Footer;