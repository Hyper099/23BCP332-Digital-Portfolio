import React from 'react';
import { FaBook, FaBullseye, FaCode, FaGraduationCap, FaRocket, FaRoute, FaUsers } from 'react-icons/fa';
import './FutureAspirations.css';

const FutureAspirations: React.FC = () => {
  return (
    <section className="future-aspirations" id="future">
      <div className="container">
        <div className="section-header">
          <h2>Future Aspirations & Professional Development</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">
            Outlining career goals, areas for further study, and strategies for continuous improvement
          </p>
        </div>

        <div className="aspirations-content">
          {/* Career Goals */}
          <div className="aspirations-section">
            <div className="section-title-with-icon">
              <FaRocket className="section-icon" />
              <h3>Career Goals & Vision</h3>
            </div>

            <div className="goals-timeline">
              <div className="goal-card">
                <div className="timeline-marker">
                  <span className="year">2027</span>
                </div>
                <div className="goal-content">
                  <h4>Near-Term Goals (Graduation & Beyond)</h4>
                  <ul>
                    <li>Graduate with B.Tech in Computer Engineering with high CGPA (maintaining 9.5+)</li>
                    <li>Secure full-time SDE role at product-based company or innovative startup</li>
                    <li>Continue competitive programming, achieve Expert rating on CodeForces</li>
                    <li>Contribute to open-source projects and build GitHub presence</li>
                    <li>Deepen expertise in AI/ML and full-stack development</li>
                    <li>Build strong professional network through internships and tech communities</li>
                  </ul>
                </div>
              </div>

              <div className="goal-card">
                <div className="timeline-marker">
                  <span className="year">2029</span>
                </div>
                <div className="goal-content">
                  <h4>Medium-Term Goals (2-3 years post-graduation)</h4>
                  <ul>
                    <li>Gain 2-3 years industry experience working on production systems</li>
                    <li>Consider pursuing Master's degree in Computer Science (AI/ML specialization) from top university</li>
                    <li>Become proficient in system design and scalable architecture</li>
                    <li>Work on impactful projects reaching thousands of users</li>
                    <li>Share knowledge through technical blogs and community contributions</li>
                    <li>Explore entrepreneurial opportunities or side projects</li>
                  </ul>
                </div>
              </div>

              <div className="goal-card">
                <div className="timeline-marker">
                  <span className="year">2032+</span>
                </div>
                <div className="goal-content">
                  <h4>Long-Term Vision (5+ years)</h4>
                  <ul>
                    <li>Grow into Senior SDE or Tech Lead role at reputable company</li>
                    <li>Build expertise in specialized area (AI/ML, distributed systems, or cloud architecture)</li>
                    <li>Consider launching own tech product or startup solving real problems</li>
                    <li>Mentor aspiring developers and give back to student community</li>
                    <li>Balance professional growth with personal development and interests</li>
                    <li>Make meaningful contributions to technology that positively impacts people</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Areas for Further Study */}
          <div className="aspirations-section">
            <div className="section-title-with-icon">
              <FaGraduationCap className="section-icon" />
              <h3>Areas for Further Study & Exploration</h3>
            </div>

            <div className="study-areas-grid">
              <div className="study-area-card">
                <h4>Artificial Intelligence & Machine Learning</h4>
                <p>
                  Building on RAG framework experience from LTTS internship, deepen knowledge in 
                  LLMs, fine-tuning techniques, and practical AI applications.
                </p>
                <div className="learning-path">
                  <strong>Learning Path:</strong>
                  <ul>
                    <li>Advanced prompt engineering and LLM optimization</li>
                    <li>Model fine-tuning and deployment (PyTorch, TensorFlow)</li>
                    <li>AI agents and autonomous systems (CrewAI, LangChain)</li>
                    <li>Computer vision and NLP applications</li>
                  </ul>
                </div>
              </div>

              <div className="study-area-card">
                <h4>System Design & Scalability</h4>
                <p>
                  Strengthen understanding of designing scalable systems, building on experience 
                  with handling 500+ concurrent requests in projects.
                </p>
                <div className="learning-path">
                  <strong>Learning Path:</strong>
                  <ul>
                    <li>Distributed systems and microservices architecture</li>
                    <li>Database optimization and caching strategies</li>
                    <li>Load balancing and high-availability systems</li>
                    <li>System design interview preparation</li>
                  </ul>
                </div>
              </div>

              <div className="study-area-card">
                <h4>Cloud Technologies & DevOps</h4>
                <p>
                  Learn cloud platforms and DevOps practices to deploy and manage applications 
                  at scale effectively.
                </p>
                <div className="learning-path">
                  <strong>Learning Path:</strong>
                  <ul>
                    <li>AWS/Azure cloud services and deployment</li>
                    <li>Docker containerization and Kubernetes orchestration</li>
                    <li>CI/CD pipelines and automated testing</li>
                    <li>Infrastructure as Code basics</li>
                  </ul>
                </div>
              </div>

              <div className="study-area-card">
                <h4>Advanced Data Structures & Algorithms</h4>
                <p>
                  Continue competitive programming journey to reach higher ratings and master 
                  complex problem-solving techniques.
                </p>
                <div className="learning-path">
                  <strong>Learning Path:</strong>
                  <ul>
                    <li>Advanced graph algorithms and dynamic programming</li>
                    <li>Segment trees, Fenwick trees, and advanced data structures</li>
                    <li>Target: CodeForces Expert (1600+), CodeChef 4-star</li>
                    <li>Interview preparation for top tech companies</li>
                  </ul>
                </div>
              </div>

              <div className="study-area-card">
                <h4>Modern Web Technologies</h4>
                <p>
                  Stay updated with latest web development trends and frameworks to build 
                  cutting-edge applications.
                </p>
                <div className="learning-path">
                  <strong>Learning Path:</strong>
                  <ul>
                    <li>Advanced React patterns and Next.js features</li>
                    <li>GraphQL and modern API design</li>
                    <li>WebRTC and real-time communication (building on Mentorship Platform)</li>
                    <li>Progressive Web Apps and performance optimization</li>
                  </ul>
                </div>
              </div>

              <div className="study-area-card">
                <h4>Software Engineering Best Practices</h4>
                <p>
                  Learn industry-standard practices for writing maintainable, scalable, and 
                  production-ready code.
                </p>
                <div className="learning-path">
                  <strong>Learning Path:</strong>
                  <ul>
                    <li>Design patterns and SOLID principles</li>
                    <li>Testing strategies (unit, integration, e2e)</li>
                    <li>Code review practices and documentation</li>
                    <li>Agile methodologies and team collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Improvement Strategies */}
          <div className="aspirations-section">
            <div className="section-title-with-icon">
              <FaRoute className="section-icon" />
              <h3>Strategies for Continuous Improvement</h3>
            </div>

            <div className="strategies-grid">
              <div className="strategy-card">
                <div className="strategy-icon">
                  <FaBook />
                </div>
                <h4>Continuous Learning</h4>
                <ul>
                  <li>Practice competitive programming regularly (CodeForces, CodeChef, LeetCode)</li>
                  <li>Take online courses on Coursera, Udemy for new technologies</li>
                  <li>Read technical blogs and documentation</li>
                  <li>Follow industry leaders and tech communities on social media</li>
                  <li>Stay updated with latest frameworks and best practices</li>
                </ul>
              </div>

              <div className="strategy-card">
                <div className="strategy-icon">
                  <FaCode />
                </div>
                <h4>Hands-On Projects</h4>
                <ul>
                  <li>Build personal projects using new technologies</li>
                  <li>Contribute to open-source repositories on GitHub</li>
                  <li>Participate in hackathons like Smart India Hackathon</li>
                  <li>Deploy projects and maintain live demos</li>
                  <li>Document projects and learnings on GitHub</li>
                </ul>
              </div>

              <div className="strategy-card">
                <div className="strategy-icon">
                  <FaUsers />
                </div>
                <h4>Community & Networking</h4>
                <ul>
                  <li>Engage with college coding community and peers</li>
                  <li>Attend tech meetups and university workshops</li>
                  <li>Connect with seniors and alumni working in tech</li>
                  <li>Help juniors with coding problems and projects</li>
                  <li>Build LinkedIn presence and professional network</li>
                </ul>
              </div>

              <div className="strategy-card">
                <div className="strategy-icon">
                  <FaBullseye />
                </div>
                <h4>Goal Tracking & Growth</h4>
                <ul>
                  <li>Set semester-wise academic and coding goals</li>
                  <li>Track competitive programming rating progress</li>
                  <li>Review completed projects and identify improvements</li>
                  <li>Seek feedback from professors and industry mentors</li>
                  <li>Maintain consistent GitHub activity and portfolio updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Commitment Statement */}
          <div className="commitment-statement">
            <h3>Commitment to Growth & Excellence</h3>
            <p>
              As a B.Tech student with strong academic performance (9.57 CGPA) and competitive 
              programming achievements, I'm committed to continuous learning and improvement. 
              Technology evolves rapidly, and I embrace this by staying curious, building projects, 
              and challenging myself through competitions and real-world problem-solving.
            </p>
            <p>
              My experience at L&T Technology Services and various projects has shown me the 
              importance of combining theoretical knowledge with practical application. I'm excited 
              to continue this journey, contribute to meaningful projects, and grow into a skilled 
              software engineer who can make positive impact through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureAspirations;
