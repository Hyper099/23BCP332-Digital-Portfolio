import React from 'react';
import { FaCode, FaHeart, FaLightbulb } from 'react-icons/fa';
import './Introduction.css';

const Introduction: React.FC = () => {
  return (
    <section className="introduction" id="introduction">
      <div className="container">
        <div className="section-header">
          <h2>Introduction & Learning Philosophy</h2>
          <div className="header-line"></div>
        </div>

        <div className="intro-content">
          <div className="intro-card">
            <div className="card-icon">
              <FaLightbulb />
            </div>
            <h3>My Learning Journey</h3>
            <p>
              As a B.Tech Computer Engineering student at Pandit Deendayal Energy University (PDEU) 
              with a CGPA of 9.57, my journey in computer science has been driven by an insatiable 
              curiosity to understand how technology shapes our world. From competitive programming 
              achievements (CodeForces 1235, CodeChef 3-star) to building production-ready full-stack 
              applications, each step has reinforced my belief that continuous learning and practical 
              implementation are the cornerstones of innovation.
            </p>
          </div>

          <div className="intro-card">
            <div className="card-icon">
              <FaHeart />
            </div>
            <h3>Core Values</h3>
            <ul className="values-list">
              <li><strong>Innovation:</strong> Constantly seeking creative solutions to complex problems</li>
              <li><strong>Collaboration:</strong> Believing that the best outcomes emerge from teamwork</li>
              <li><strong>Excellence:</strong> Striving for quality in every project and endeavor</li>
              <li><strong>Integrity:</strong> Maintaining ethical standards in all technical decisions</li>
              <li><strong>Growth:</strong> Embracing challenges as opportunities to learn</li>
            </ul>
          </div>

          <div className="intro-card">
            <div className="card-icon">
              <FaCode />
            </div>
            <h3>Academic Philosophy</h3>
            <p>
              I believe that education extends beyond textbooks and lectures. My approach 
              integrates theoretical knowledge with practical application through internships 
              (L&T Technology Services) and hands-on projects. Whether it's building RAG-based 
              AI systems, developing course marketplaces, or creating mentorship platforms with 
              WebRTC integration, I strive to create holistic solutions that address real-world 
              challenges while maintaining strong fundamentals in DSA, System Design, and DBMS.
            </p>
            <p className="philosophy-quote">
              "Technology is best when it brings people together and makes complex tasks simple."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
