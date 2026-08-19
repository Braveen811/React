import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <div className="section-header">
        <h2>⚡ Featured <span>Projects</span></h2>
      </div>

      <div className="projects-grid">
        
        {/* ACTIVE PROJECT: Completed/Main Showcase */}
        <a href="#" className="project-card active" target="_blank" rel="noopener noreferrer">
          <span className="status">COMPLETED</span>
          <h3>React Cyberpunk Portfolio</h3>
          <p>A highly interactive, glassmorphism-based developer portfolio featuring dynamic theming and 3D interactions.</p>
          <span className="stack">[ React, Styled Components, Vercel ]</span>
        </a>
        
        {/* ACTIVE PROJECT: Completed/Main Showcase (No Link) */}
        <div className="project-card active">
          <span className="status">IN_PROGRESS</span>
          <h3>IoT Data Interface</h3>
          <p>A real-time dashboard visualizing hardware sensor metrics, bridging physical data with a responsive web-based interface.</p>
          <span className="stack">[ JavaScript, WebSockets, Node.js ]</span>
        </div>

        {/* IN-PROGRESS/UPCOMING PROJECT: Dashed Wireframe Style */}
        <div className="project-card">
          <span className="status">COMING_SOON</span>
          <h3></h3>
          <p></p>
          <span className="stack">[ Project 3 ]</span>
        </div>

        {/* IN-PROGRESS/UPCOMING PROJECT: Dashed Wireframe Style */}
        <div className="project-card">
          <span className="status">COMING_SOON</span>
          <h3></h3>
          <p></p>
          <span className="stack">[ Project 4 ]</span>
        </div>

      </div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.section`
  padding: 60px 8%;
  position: relative;
  z-index: 1;

  .section-header h2 {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 20px;
    font-weight: 800;
    
    span {
      color: var(--accent-color);
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 40px;
  }
 
  .project-card {
    /* Uses a subtle border tint for light/dark mode fallback */
    border: 1px dashed var(--surface-border, rgba(178, 19, 24, 0.3));
    border-radius: 10px;
    padding: 32px 22px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    color: var(--text-muted);
    transition: all 0.3s ease;
    text-decoration: none; /* In case it's used as an anchor tag */
  }

  .project-card:hover { 
    border-color: var(--accent-color); 
    transform: translateY(-4px);
  }
 
  .project-card .status {
    font-family: 'Courier New', Courier, monospace;
    font-size: 11px;
    font-weight: bold;
    color: var(--accent-color);
    /* Soft orange/ember border as requested in your CSS */
    border: 1px solid rgba(249,115,22,0.35); 
    padding: 4px 10px;
    border-radius: 100px;
    letter-spacing: 1px;
  }
 
  /* ACTIVE PROJECT OVERRIDES */
  .project-card.active {
    border-style: solid;
    background: var(--card-bg, rgba(0, 0, 0, 0.03));
    backdrop-filter: blur(8px);
  }

  .project-card.active:hover {
    box-shadow: 0 10px 25px rgba(178, 19, 24, 0.15);
  }

  .project-card.active .status {
    color: var(--accent-color);
    border-color: rgba(178, 19, 24, 0.4);
    background: rgba(178, 19, 24, 0.08);
  }

  .project-card.active h3 {
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 700;
    margin: 5px 0;
  }

  .project-card.active p {
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
  }

  .project-card.active .stack {
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    color: var(--text-muted);
    margin-top: auto; /* Pushes stack to the bottom of the card */
    opacity: 0.8;
  }
 
  /* INACTIVE PROJECT OVERRIDES */
  .project-card h3 {
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    color: var(--text-muted);
    margin: 5px 0;
  }

  .project-card p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }

  /* Responsive Design */
  @media (max-width: 900px) {
    padding: 40px 5%;
    
    .projects-grid {
      /* Reverts to 1 column on mobile devices */
      grid-template-columns: 1fr;
    }
  }
`;

export default Projects;