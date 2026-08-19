import React from 'react';
import styled from 'styled-components';

const Quote = () => {
  return (
    <QuoteContainer>
      <div className="quote-box">
        {/* Decorative Quote Mark */}
        <div className="quote-icon">❝</div>
        
        <blockquote>
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
        </blockquote>
        
        <div className="author">
          <span className="line"></span>
          Martin Fowler
        </div>
      </div>
    </QuoteContainer>
  );
};

const QuoteContainer = styled.section`
  padding: 40px 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  .quote-box {
    max-width: 800px;
    width: 100%;
    text-align: center;
    
    /* Matches your existing glassmorphism cards perfectly */
    background: var(--card-bg, rgba(0, 0, 0, 0.03));
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--surface-border, rgba(178, 19, 24, 0.15));
    border-radius: 15px;
    padding: 50px 40px;
    position: relative;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      border-color: rgba(178, 19, 24, 0.4);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(178, 19, 24, 0.1);
    }
  }

  .quote-icon {
    font-size: 3rem;
    color: var(--accent-color);
    opacity: 0.6;
    margin-bottom: 15px;
    line-height: 1;
    text-shadow: 0 0 15px rgba(178, 19, 24, 0.4);
  }

  blockquote {
    font-size: 1.35rem;
    color: var(--text-color);
    font-style: italic;
    line-height: 1.6;
    margin: 0 0 25px 0;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    
    /* Terminal-style font to keep the developer aesthetic */
    font-family: 'Courier New', Courier, monospace;
    color: var(--accent-color);
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;

    .line {
      width: 40px;
      height: 2px;
      background: var(--accent-color);
      opacity: 0.7;
    }
  }

  /* Responsive Adjustments for Mobile */
  @media (max-width: 768px) {
    padding: 30px 5%;
    
    .quote-box {
      padding: 40px 25px;
    }
    
    blockquote {
      font-size: 1.1rem;
    }
  }
`;

export default Quote;