import React from 'react';
import { FaChartLine, FaCheckCircle, FaExclamationTriangle, FaStar } from 'react-icons/fa';
import './Conclusion.css';

const Conclusion: React.FC = () => {
  return (
    <section className="conclusion" id="conclusion">
      <div className="container">
        <div className="section-header">
          <h2>Conclusion & Self-Assessment</h2>
          <div className="header-line"></div>
        </div>

        <div className="conclusion-content">
          {/* Key Achievements */}
          <div className="conclusion-section">
            <div className="section-title-with-icon">
              <FaCheckCircle className="section-icon" />
              <h3>Key Achievements</h3>
            </div>
            <div className="achievements-summary">
              <div className="achievement-category">
                <h4>Academic Excellence</h4>
                <ul>
                  <li>Maintained strong academic performance (CGPA 9.57) throughout B.Tech program</li>
                  <li>Completed L&T Technology Services internship working on RAG-based AI systems</li>
                  <li>Built multiple projects integrating theory with practical implementation</li>
                  <li>Achieved competitive programming milestones (CodeForces 1235, CodeChef 3-star)</li>
                </ul>
              </div>
              <div className="achievement-category">
                <h4>Technical Mastery</h4>
                <ul>
                  <li>Developed proficiency in full-stack web development (MERN stack)</li>
                  <li>Built 3 major production-ready applications (EduConnect, Mentorship Platform, Second Brain)</li>
                  <li>Gained hands-on experience with AI/ML through LTTS internship (RAG framework)</li>
                  <li>Learned modern web technologies including React, Node.js, WebRTC, and databases</li>
                </ul>
              </div>
              <div className="achievement-category">
                <h4>Leadership & Collaboration</h4>
                <ul>
                  <li>Participated in Smart India Hackathon (top 150+ teams nationally)</li>
                  <li>Collaborated with teammates on multiple academic projects</li>
                  <li>Active member of competitive programming community</li>
                  <li>Built strong collaborative relationships with peers and faculty</li>
                </ul>
              </div>
              <div className="achievement-category">
                <h4>Personal Growth</h4>
                <ul>
                  <li>Developed strong problem-solving and critical thinking abilities</li>
                  <li>Enhanced communication and presentation skills</li>
                  <li>Cultivated ethical awareness in technology development</li>
                  <li>Built resilience and adaptability through challenging projects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="conclusion-section">
            <div className="section-title-with-icon">
              <FaStar className="section-icon" />
              <h3>Lessons Learned</h3>
            </div>
            <div className="lessons-grid">
              <div className="lesson-card">
                <h4>Technical Lessons</h4>
                <p>
                  <strong>The importance of fundamentals:</strong> While frameworks and tools 
                  come and go, strong fundamentals in data structures, algorithms, and system 
                  design remain invaluable. Understanding "why" is more important than knowing "how."
                </p>
                <p>
                  <strong>Code quality matters:</strong> Writing clean, maintainable code saves 
                  time in the long run. Testing, documentation, and following best practices 
                  are not optional—they're essential.
                </p>
              </div>
              <div className="lesson-card">
                <h4>Collaborative Lessons</h4>
                <p>
                  <strong>Communication is key:</strong> Technical skills alone aren't enough. 
                  The ability to communicate ideas clearly, listen actively, and work effectively 
                  with diverse teams is crucial for success.
                </p>
                <p>
                  <strong>Embrace feedback:</strong> Constructive criticism is a gift. The best 
                  growth comes from being open to feedback and willing to adjust approaches based 
                  on insights from others.
                </p>
              </div>
              <div className="lesson-card">
                <h4>Personal Lessons</h4>
                <p>
                  <strong>Embrace failure as learning:</strong> Not every project succeeded 
                  perfectly, and that's okay. Mistakes and setbacks provided the most valuable 
                  learning experiences and built resilience.
                </p>
                <p>
                  <strong>Balance is essential:</strong> While dedication is important, 
                  maintaining work-life balance prevents burnout and actually enhances 
                  productivity and creativity.
                </p>
              </div>
              <div className="lesson-card">
                <h4>Professional Lessons</h4>
                <p>
                  <strong>Technology serves people:</strong> The goal isn't just to build 
                  impressive technology but to create solutions that genuinely improve lives. 
                  User-centric thinking should guide all technical decisions.
                </p>
                <p>
                  <strong>Continuous learning is non-negotiable:</strong> The tech field 
                  evolves rapidly. Staying relevant requires commitment to lifelong learning 
                  and curiosity about emerging technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Self-Evaluation */}
          <div className="conclusion-section">
            <div className="section-title-with-icon">
              <FaChartLine className="section-icon" />
              <h3>Self-Evaluation Against Initial Goals</h3>
            </div>
            <div className="evaluation-content">
              <p className="evaluation-intro">
                When I began my B.Tech journey at PDEU, I set out with specific goals. Here's an honest 
                assessment of my progress:
              </p>
              <div className="evaluation-grid">
                <div className="evaluation-item achieved">
                  <div className="eval-status">✓ Achieved</div>
                  <p><strong>Master full-stack development:</strong> Successfully acquired 
                  comprehensive skills in both frontend and backend technologies</p>
                </div>
                <div className="evaluation-item achieved">
                  <div className="eval-status">✓ Achieved</div>
                  <p><strong>Build real-world projects:</strong> Completed multiple projects 
                  with practical applications and measurable outcomes</p>
                </div>
                <div className="evaluation-item achieved">
                  <div className="eval-status">✓ Achieved</div>
                  <p><strong>Develop leadership skills:</strong> Led teams successfully and 
                  mentored peers, demonstrating growth in this area</p>
                </div>
                <div className="evaluation-item in-progress">
                  <div className="eval-status">◐ In Progress</div>
                  <p><strong>Contribute to open source:</strong> Made some contributions but 
                  haven't reached desired consistency; room for improvement</p>
                </div>
                <div className="evaluation-item in-progress">
                  <div className="eval-status">◐ In Progress</div>
                  <p><strong>Build professional network:</strong> Established good connections 
                  but need to expand network beyond academic circles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Areas for Growth */}
          <div className="conclusion-section">
            <div className="section-title-with-icon">
              <FaExclamationTriangle className="section-icon" />
              <h3>Areas for Growth & Improvement</h3>
            </div>
            <div className="growth-areas">
              <div className="growth-card">
                <h4>Technical Depth</h4>
                <p>
                  While I have broad knowledge across technologies, I need to develop deeper 
                  expertise in specific areas like system architecture and advanced algorithms. 
                  Moving from generalist to specialist in chosen domains is a key priority.
                </p>
              </div>
              <div className="growth-card">
                <h4>Industry Experience</h4>
                <p>
                  My projects have been primarily academic. Gaining real-world industry 
                  experience through internships or full-time roles will expose me to 
                  production-scale challenges and professional workflows.
                </p>
              </div>
              <div className="growth-card">
                <h4>Public Speaking & Content Creation</h4>
                <p>
                  While comfortable presenting to small groups, I need to build confidence 
                  speaking at larger conferences and creating technical content consistently 
                  to establish thought leadership.
                </p>
              </div>
              <div className="growth-card">
                <h4>Business Acumen</h4>
                <p>
                  Understanding the business side of technology—market analysis, product 
                  strategy, monetization—is an area I need to develop to become a more 
                  well-rounded technologist.
                </p>
              </div>
            </div>
          </div>

          {/* SWOT Analysis */}
          <div className="conclusion-section swot-section">
            <h3>SWOT Analysis</h3>
            <div className="swot-grid">
              <div className="swot-card strengths">
                <h4>Strengths</h4>
                <ul>
                  <li>Strong technical foundation across multiple technologies</li>
                  <li>Problem-solving and analytical thinking</li>
                  <li>Leadership and team collaboration skills</li>
                  <li>Quick learner and adaptable to new tools</li>
                  <li>Passion for continuous improvement</li>
                  <li>Ethical awareness in technology</li>
                </ul>
              </div>
              <div className="swot-card weaknesses">
                <h4>Weaknesses</h4>
                <ul>
                  <li>Limited real-world industry experience</li>
                  <li>Occasional perfectionism leading to over-engineering</li>
                  <li>Need to improve time management under pressure</li>
                  <li>Sometimes hesitant to delegate tasks</li>
                  <li>Public speaking confidence at large events</li>
                </ul>
              </div>
              <div className="swot-card opportunities">
                <h4>Opportunities</h4>
                <ul>
                  <li>Growing demand for full-stack developers</li>
                  <li>Emerging technologies (AI, Web3, Cloud) to specialize in</li>
                  <li>Expanding tech education and mentorship space</li>
                  <li>Remote work enabling global opportunities</li>
                  <li>Open-source contribution to build reputation</li>
                  <li>Startup ecosystem for entrepreneurial ventures</li>
                </ul>
              </div>
              <div className="swot-card threats">
                <h4>Threats</h4>
                <ul>
                  <li>Rapid technological change requiring constant upskilling</li>
                  <li>High competition in job market</li>
                  <li>AI automation potentially replacing certain development tasks</li>
                  <li>Economic uncertainties affecting tech hiring</li>
                  <li>Risk of burnout from fast-paced industry</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Personal Reflection */}
          <div className="personal-reflection">
            <h3>Personal Reflection on the Learning Process</h3>
            <blockquote>
              <p>
                This portfolio represents more than just a collection of projects and achievements—it 
                documents a transformative journey of growth, learning, and self-discovery. As I reflect 
                on my B.Tech experience at PDEU, I'm proud of how far I've come, from writing my first "Hello World" 
                to architecting complex applications that solve real problems.
              </p>
              <p>
                The challenges I've faced taught me that growth happens outside the comfort zone. The 
                late nights debugging code, the frustration of failed approaches, and the pressure of 
                deadlines all contributed to building not just technical skills but character—resilience, 
                patience, and perseverance.
              </p>
              <p>
                What excites me most about this journey is realizing that I'm just getting started. 
                The more I learn, the more I recognize how much there is to explore. This awareness 
                fuels my passion and commitment to continuous learning. I'm entering the professional 
                world not as someone who knows everything but as someone eager to learn, contribute, 
                and make a meaningful impact through technology.
              </p>
              <p>
                I'm grateful for the support of mentors, peers, and faculty who guided me along this 
                path. I carry forward the lessons learned, the relationships built, and the experiences 
                gained as I step into the next chapter of my professional journey.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
