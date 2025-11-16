import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './CoverPage.css';

const CoverPage: React.FC = () => {
  return (
    <section className="cover-page" id="cover">
      <div className="cover-content">
        <div className="profile-section">
          <img 
            src="/assets/profile.jpg" 
            alt="Jayneel" 
            className="profile-photo"
          />
        </div>
        
        <h1 className="name">Jayneel Mukeshkumar Mahival</h1>
        
        <div className="academic-info">
          <p className="program">Bachelor of Technology</p>
          <p className="institution">Pandit Deendayal Energy University</p>
          {/* <p className="submission-date">November 2025</p> */}
        </div>
        
        <blockquote className="tagline">
          "Passionate about leveraging technology to create innovative solutions 
          that make a difference in people's lives"
        </blockquote>
        
        <div className="contact-section">
          <h3 className="contact-title">Connect With Me</h3>
          <div className="contact-buttons">
            <a href="mailto:jayneel.mmahival@gmail.com" className="contact-btn" title="Email">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/jayneel-mahival-a3b756280" target="_blank" rel="noopener noreferrer" className="contact-btn" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Hyper099" target="_blank" rel="noopener noreferrer" className="contact-btn" title="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;
