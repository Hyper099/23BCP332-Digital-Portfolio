import React from 'react';
import { FaAward, FaBriefcase, FaCode, FaDownload, FaGamepad, FaGraduationCap, FaHeart, FaUsers } from 'react-icons/fa';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <div className="section-header">
          <h2>Resume / CV</h2>
          <div className="header-line"></div>
        </div>

        <div className="resume-download">
          <a href="/assets/resume.pdf" download className="download-btn">
            <FaDownload /> Download Full Resume
          </a>
        </div>

        <div className="resume-content">
          {/* Education */}
          <div className="resume-section">
            <div className="section-title">
              <FaGraduationCap className="title-icon" />
              <h3>Education</h3>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>B.Tech in Computer Engineering</h4>
                  <p className="institution">Pandit Deendayal Energy University (PDEU), Gandhinagar, India</p>
                  <p className="duration">July 2023 - May 2027 (Expected)</p>
                  <p className="description">
                    <strong>CGPA: 9.57/10</strong><br />
                    Comprehensive program covering software engineering, AI/ML, web technologies, 
                    system design, and data structures. Strong focus on practical application and 
                    industry-relevant projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="resume-section">
            <div className="section-title">
              <FaBriefcase className="title-icon" />
              <h3>Work Experience</h3>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>SDE Intern – AI and Web Development</h4>
                  <p className="company">L&T Technology Services (LTTS), Vadodara, India</p>
                  <p className="duration">May 2025 - July 2025</p>
                  <p className="description"><strong>AIPDS Project</strong></p>
                  <ul>
                    <li>Co-developed and trained a Machine Learning model to automate client proposal generation using a custom Retrieval-Augmented Generation (RAG) framework with optimized chunking logic, improving proposal drafting efficiency by 30%</li>
                    <li>Engineered a ChatGPT-like interface supporting concurrent query handling for up to 10 users, with queuing and persistent conversation history storage using a local database; added support for prompt editing</li>
                    <li>Established an editable chatbot workflow supporting the full lifecycle: RFQ → DOU → Proposal</li>
                    <li>Implemented a fully offline and secure architecture (no external APIs or cloud storage) and integrated security audits using Snyk and Garak to ensure compliance and data protection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="resume-section">
            <div className="section-title">
              <FaCode className="title-icon" />
              <h3>Technical Skills</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skill-tags">
                  <span>C/C++</span>
                  <span>Java</span>
                  <span>Python</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Web Technologies</h4>
                <div className="skill-tags">
                  <span>HTML/CSS</span>
                  <span>Tailwind CSS</span>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Next.js</span>
                  <span>WebSockets</span>
                  <span>Django</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>AI/ML</h4>
                <div className="skill-tags">
                  <span>Fine-tuning LLMs</span>
                  <span>RAG</span>
                  <span>Prompt Engineering</span>
                  <span>CrewAI</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Databases</h4>
                <div className="skill-tags">
                  <span>MySQL</span>
                  <span>MongoDB</span>
                  <span>PostgreSQL</span>
                  <span>Prisma ORM</span>
                  <span>Supabase</span>
                  <span>Firebase</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Core Concepts</h4>
                <div className="skill-tags">
                  <span>Data Structures</span>
                  <span>Algorithms</span>
                  <span>Operating Systems</span>
                  <span>DBMS</span>
                  <span>System Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="resume-section">
            <div className="section-title">
              <FaUsers className="title-icon" />
              <h3>Soft Skills</h3>
            </div>
            <div className="soft-skills-grid">
              <div className="soft-skill-item">Leadership & Team Management</div>
              <div className="soft-skill-item">Problem Solving</div>
              <div className="soft-skill-item">Communication</div>
              <div className="soft-skill-item">Time Management</div>
              <div className="soft-skill-item">Critical Thinking</div>
              <div className="soft-skill-item">Adaptability</div>
            </div>
          </div>

          {/* Achievements */}
          <div className="resume-section">
            <div className="section-title">
              <FaAward className="title-icon" />
              <h3>Achievements & Participations</h3>
            </div>
            <div className="certifications-list">
              <div className="cert-item">
                <h4>CodeForces - Pupil Rating</h4>
                <p>Highest Rating: 1235 (Pupil)</p>
              </div>
              <div className="cert-item">
                <h4>CodeChef - 3-Star Rating</h4>
                <p>Highest Rating: 1655 (Top 15% Globally)</p>
              </div>
              <div className="cert-item">
                <h4>LeetCode</h4>
                <p>Highest Rating: 1561</p>
              </div>
              <div className="cert-item">
                <h4>Smart India Hackathon</h4>
                <p>Shortlisted in Top 150+ Teams (Internal Round)</p>
              </div>
              <div className="cert-item">
                <h4>VS Code Website Clone</h4>
                <p>Built using HTML/CSS</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="resume-section">
            <div className="section-title">
              <FaHeart className="title-icon" />
              <h3>Additional Information</h3>
            </div>
            <div className="awards-list">
              <div className="award-item">
                <h4>Languages</h4>
                <p>English (Fluent), Hindi (Fluent), Gujarati (Intermediate)</p>
              </div>
              <div className="award-item">
                <h4>Interests</h4>
                <p>Table Tennis, Coding, Blogging about Tech Trends</p>
              </div>
            </div>
          </div>

          {/* Co-Curricular Activities */}
          <div className="resume-section">
            <div className="section-title">
              <FaGamepad className="title-icon" />
              <h3>Hobbies & Interests</h3>
            </div>
            <div className="hobbies-grid">
              <div className="hobby-item">Competitive Coding</div>
              <div className="hobby-item">Technology Blogging</div>
              <div className="hobby-item">Table Tennis</div>
              <div className="hobby-item">Building Clones & Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
