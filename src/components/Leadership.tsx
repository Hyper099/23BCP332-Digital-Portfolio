import React from 'react';
import { FaChalkboardTeacher, FaHandshake, FaTrophy, FaUsers } from 'react-icons/fa';
import './Leadership.css';

const Leadership: React.FC = () => {
  const experiences = [
    {
      title: "Smart India Hackathon",
      role: "Full-Stack Developer & Team Member",
      duration: "2024 - 2025",
      teamSize: 6,
      description: "Participated in Smart India Hackathon, qualifying in top 150+ teams nationwide, developing innovative solution for real-world problem statement.",
      responsibilities: [
        "Collaborated on problem analysis and solution architecture",
        "Developed backend APIs using Node.js and Express",
        "Integrated frontend components with React",
        "Coordinated with team members for feature integration",
        "Contributed to final presentation and demo preparation"
      ],
      teamDynamics: "Worked collaboratively with diverse team members, adapting to different coding styles and communication approaches to achieve common goals.",
      conflictResolution: "Addressed technical disagreements through code reviews and testing different approaches to find optimal solutions.",
      achievements: [
        "Qualified in top 150+ teams from thousands of participants",
        "Built working prototype within 36-hour timeframe",
        "Successfully integrated multiple technologies (React, Node.js, databases)",
        "Gained valuable experience in rapid prototyping"
      ],
      contributions: "Developed key backend features, implemented database schemas, and ensured smooth API integration with frontend."
    },
    {
      title: "EduConnect Course Platform",
      role: "Full-Stack Developer & Project Lead",
      duration: "2024 - 2025",
      teamSize: 3,
      description: "Led development of course selling platform as academic project, coordinating with team members to deliver complete solution.",
      responsibilities: [
        "Designed system architecture and database schema",
        "Implemented secure payment integration with Razorpay",
        "Coordinated feature development across team members",
        "Conducted code reviews and debugging sessions",
        "Managed Git workflow and version control"
      ],
      teamDynamics: "Collaborated with teammates to divide tasks based on strengths, maintaining regular communication through meetings and code reviews.",
      conflictResolution: "Resolved merge conflicts and technical debates through discussion and prioritizing user experience and code quality.",
      achievements: [
        "Successfully handled 500+ concurrent requests in testing",
        "Integrated Razorpay payment gateway with 100+ test transactions",
        "Delivered fully functional platform with responsive design",
        "Implemented JWT-based secure authentication"
      ],
      contributions: "Built backend API structure, implemented authentication system, and integrated payment processing while guiding team through challenges."
    },
    {
      title: "Competitive Programming Community",
      role: "Active Participant & Peer Learner",
      duration: "2023 - Present",
      teamSize: 15,
      description: "Actively participating in competitive programming on CodeForces, CodeChef, and LeetCode, collaborating with peers to solve challenging problems.",
      responsibilities: [
        "Participate in weekly coding contests on multiple platforms",
        "Discuss problem-solving approaches with peers",
        "Share solutions and learn from others' approaches",
        "Practice data structures and algorithms regularly",
        "Help classmates understand competitive programming concepts"
      ],
      teamDynamics: "Engaged with coding community through online forums, college groups, and study sessions to improve problem-solving skills.",
      conflictResolution: "Learned from failures in contests, analyzed mistakes, and sought feedback from higher-rated coders to improve.",
      achievements: [
        "Achieved CodeForces rating of 1235 (Specialist)",
        "Reached CodeChef 3-star rating (1655), top 15% percentile",
        "Maintained LeetCode rating of 1561",
        "Solved 500+ problems across platforms"
      ],
      contributions: "Consistently participated in contests, shared knowledge with peers, and maintained dedicated practice schedule."
    },
    {
      title: "Academic Project Collaborations",
      role: "Team Member & Developer",
      duration: "2023 - Present",
      teamSize: 4,
      description: "Collaborated with classmates on multiple academic and personal projects including Mentorship Platform and Second Brain application.",
      responsibilities: [
        "Coordinated with team members on project requirements",
        "Implemented features using React, Node.js, and databases",
        "Participated in code reviews and debugging sessions",
        "Used Git for version control and collaboration",
        "Contributed to project documentation and presentations"
      ],
      teamDynamics: "Built effective working relationships through regular communication, task division based on skills, and mutual support during challenges.",
      conflictResolution: "Resolved technical disagreements through testing different approaches and prioritizing project requirements and deadlines.",
      achievements: [
        "Completed 3+ full-stack projects with working deployments",
        "Integrated complex features like WebRTC, Calendly API, and payment gateways",
        "Managed projects with 1000+ entries and 50+ simulated users",
        "Gained experience in team-based software development"
      ],
      contributions: "Developed core features, maintained code quality, and ensured successful project completion through effective collaboration."
    }
  ];

  return (
    <section className="leadership" id="leadership">
      <div className="container">
        <div className="section-header">
          <h2>Collaborative & Leadership Experiences</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">
            Demonstrating interpersonal skills and ability to work effectively in diverse teams
          </p>
        </div>

        <div className="leadership-content">
          {experiences.map((exp, index) => (
            <div key={index} className="leadership-card">
              <div className="leadership-header">
                <div className="leadership-title-section">
                  <h3>{exp.title}</h3>
                  <p className="leadership-role">{exp.role}</p>
                  <div className="leadership-meta">
                    <span className="duration">{exp.duration}</span>
                    <span className="team-size">
                      <FaUsers /> Team Size: {exp.teamSize}
                    </span>
                  </div>
                </div>
              </div>

              <p className="leadership-description">{exp.description}</p>

              <div className="leadership-section">
                <h4><FaChalkboardTeacher /> Roles & Responsibilities</h4>
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="dynamics-grid">
                <div className="dynamics-item">
                  <h4><FaHandshake /> Team Dynamics</h4>
                  <p>{exp.teamDynamics}</p>
                </div>
                <div className="dynamics-item">
                  <h4>Conflict Resolution</h4>
                  <p>{exp.conflictResolution}</p>
                </div>
              </div>

              <div className="leadership-section">
                <h4><FaTrophy /> Achievements & Contributions</h4>
                <div className="achievements-grid">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="achievement-item">
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>

              <div className="contributions-highlight">
                <strong>Personal Contribution:</strong> {exp.contributions}
              </div>
            </div>
          ))}
        </div>

        <div className="leadership-summary">
          <h3>Key Collaboration Insights</h3>
          <div className="insights-grid">
            <div className="insight-card">
              <h4>Team Collaboration</h4>
              <p>
                Learned to work effectively in diverse teams by understanding individual strengths, 
                communicating clearly, and contributing meaningfully to shared goals.
              </p>
            </div>
            <div className="insight-card">
              <h4>Communication</h4>
              <p>
                Developed strong communication skills through project discussions, code reviews, 
                and collaborative problem-solving with peers and teammates.
              </p>
            </div>
            <div className="insight-card">
              <h4>Continuous Learning</h4>
              <p>
                Embraced challenges as learning opportunities, sought feedback from peers and mentors, 
                and continuously improved technical and interpersonal skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
