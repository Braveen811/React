import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <div className="section-header">
        <h2>⚡ Skills & <span>Certifications</span></h2>
      </div>

      {/* Main Skills Dashboard Cards */}
      <div className="skills-grid">
        
        {/* Card 1: Frontend Development */}
        <div className="skill-card">
          <div className="skill-icon">💻</div>
          <h3>Frontend Development</h3>
          <p>Building responsive, user-centric interfaces with modern web standards and component-driven architecture.</p>
        </div>

        {/* Card 2: Programming & Logic */}
        <div className="skill-card">
          <div className="skill-icon">⚡</div>
          <h3>Programming Languages</h3>
          <p>Laying a strong foundational understanding in software logic, object-oriented concepts, and scripting.</p>
        </div>

        {/* Card 3: Tools & Environment */}
        <div className="skill-card">
          <div className="skill-icon">🛠️</div>
          <h3>Tools & Workflow</h3>
          <p>Leveraging modern development pipelines, version control, operating systems, and deployment platforms.</p>
        </div>

      </div>

      {/* Categorized Skill Pills & Certifications Sections */}
      <div className="skill-groups">
        
        {/* Group 1: Web Development & Frontend */}
        <div className="skill-group-container">
          <div className="skill-group-label">Frontend & Web Tech</div>
          <div className="skill-tags">
            <span className="skill-tag primary">React JS</span>
            <span className="skill-tag primary">HTML5</span>
            <span className="skill-tag primary">CSS3 / Styled Components</span>
          </div>
        </div>

        {/* Group 2: Programming Languages */}
        <div className="skill-group-container">
          <div className="skill-group-label">Programming Languages</div>
          <div className="skill-tags">
            <span className="skill-tag">Python <small>(Beginner)</small></span>
            <span className="skill-tag">Java <small>(Beginner)</small></span>
          </div>
        </div>

        {/* Group 3: Tools & Environment */}
        <div className="skill-group-container">
          <div className="skill-group-label">Tools, OS & Deployment</div>
          <div className="skill-tags">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag primary">Linux OS</span>
            <span className="skill-tag primary">Vercel</span>
            <span className="skill-tag">MS Word</span>
            <span className="skill-tag">PowerPoint</span>
          </div>
        </div>

        {/* Group 4: Certifications & Design */}
        <div className="skill-group-container">
          <div className="skill-group-label">Certifications & Design</div>
          <div className="skill-tags">
            <span className="skill-tag primary">Python with ITS (Edumantra)</span>
            <span className="skill-tag primary">Cloud Computing with AWS (Edumantra)</span>
            <span className="skill-tag">Web Designing (Photoshop, Flash, Dreamweaver)</span>
            <span className="skill-tag">Adobe Illustrator & InDesign</span>
          </div>
        </div>

      </div>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.section`
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

  /* 3-Column Top Feature Cards */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .skill-card {
    /* Cleaner background for light mode */
    background: var(--card-bg, rgba(0, 0, 0, 0.03));
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--surface-border, rgba(178, 19, 24, 0.15));
    border-radius: 12px;
    padding: 28px 24px;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .skill-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent-color);
    box-shadow: 0 10px 25px rgba(178, 19, 24, 0.15);
  }

  .skill-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(178, 19, 24, 0.12);
    border-radius: 8px;
    margin-bottom: 18px;
    font-size: 18px;
  }

  .skill-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 8px;
  }

  .skill-card p {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }

  /* Skill Categories & Tags Section */
  .skill-groups {
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-top: 20px;
  }

  .skill-group-label {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.85rem;
    font-weight: bold;
    color: var(--text-muted);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    letter-spacing: 1px;
  }

  .skill-group-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(178, 19, 24, 0.2);
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .skill-tag {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-color);
    /* Cleaned up background */
    background: var(--card-bg, rgba(0, 0, 0, 0.03));
    backdrop-filter: blur(8px);
    border: 1px solid var(--surface-border, rgba(178, 19, 24, 0.15));
    padding: 8px 16px;
    border-radius: 50px;
    transition: all 0.25s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;

    small {
      opacity: 0.7;
      font-size: 0.75rem;
    }
  }

  .skill-tag:hover {
    border-color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(178, 19, 24, 0.15);
  }

  /* Primary Tag Styling */
  .skill-tag.primary {
    border-color: rgba(178, 19, 24, 0.5); 
    background: rgba(178, 19, 24, 0.1); 
    color: var(--text-color); 
  }

  /* Responsive Adjustments */
  @media (max-width: 900px) {
    padding: 40px 5%;

    .skills-grid {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }
`;

export default Skills;