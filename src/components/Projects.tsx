import React from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaExternalLinkAlt, FaGithub, FaLightbulb } from 'react-icons/fa';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "EduConnect: Course Selling Platform",
      overview: "A full-stack course marketplace with dynamic course modals and secure payment flow, enabling seamless buying and selling of educational content.",
      objectives: [
        "Create a scalable course marketplace with modern UI/UX",
        "Implement secure payment integration with Razorpay",
        "Ensure JWT-based authentication and authorization",
        "Optimize backend to handle high concurrent traffic"
      ],
      methodologies: [
        "React with Vite for fast frontend development",
        "Tailwind CSS for responsive design",
        "Node.js with Express for RESTful APIs",
        "MySQL with indexing for optimized queries",
        "JWT for secure authentication"
      ],
      outcomes: [
        "Successfully handled 500+ concurrent requests",
        "Integrated Razorpay with simulated 100+ test transactions",
        "Achieved responsive design across all devices",
        "Implemented secure authentication system",
        "Deployed with efficient API structuring"
      ],
      challenges: [
        {
          challenge: "Handling high concurrent user traffic",
          solution: "Optimized MySQL queries with proper indexing and efficient API structuring"
        },
        {
          challenge: "Secure payment integration",
          solution: "Implemented Razorpay checkout flow with transaction validation and error handling"
        }
      ],
      technologies: ["React", "Node.js", "MySQL", "JWT", "Razorpay API", "Vite", "Tailwind CSS"],
      github: "https://github.com/Hyper099/EduConnect",
      demo: "https://edu-connect-project.vercel.app/"
    },
    {
      title: "Mentorship Platform",
      overview: "A full-featured mentorship system enabling mentor-candidate interactions with video calling and automated scheduling, reducing manual coordination effort significantly.",
      objectives: [
        "Enable seamless mentor-mentee matching and interaction",
        "Integrate real-time video calling capabilities",
        "Automate scheduling with calendar integration",
        "Provide persistent conversation and session history"
      ],
      methodologies: [
        "React for interactive frontend",
        "Node.js backend with Express",
        "Supabase for database and authentication",
        "WebRTC for peer-to-peer video communication",
        "Calendly API for automated scheduling"
      ],
      outcomes: [
        "Simulated 50+ mentor-candidate interactions successfully",
        "Reduced manual scheduling effort by over 80%",
        "Integrated high-quality video calling with WebRTC",
        "Automated calendar management via Calendly API",
        "Built persistent session history storage"
      ],
      challenges: [
        {
          challenge: "Implementing reliable video calling",
          solution: "Used WebRTC with proper STUN/TURN server configuration for NAT traversal"
        },
        {
          challenge: "Calendar synchronization across users",
          solution: "Integrated Calendly API for seamless scheduling with automatic conflict resolution"
        }
      ],
      technologies: ["React", "Node.js", "Supabase", "Calendly API", "WebRTC"],
      github: "https://github.com/Hyper099/SIH-Project",
      demo: "#"
    },
    {
      title: "Second Brain: Digital Organizer",
      overview: "A personal knowledge manager for organizing notes, links, and reminders with embedded content previews from YouTube and Twitter, handling 1000+ entries efficiently.",
      objectives: [
        "Create a centralized knowledge management system",
        "Support multiple content types (notes, links, reminders)",
        "Integrate external content previews (YouTube, Twitter)",
        "Ensure secure authentication and data protection"
      ],
      methodologies: [
        "React with TypeScript for type-safe development",
        "Tailwind CSS for modern, responsive design",
        "MongoDB for flexible document storage",
        "JWT-based authentication",
        "YouTube and Twitter API integration"
      ],
      outcomes: [
        "Successfully manages 1000+ entries across content types",
        "Integrated YouTube and Twitter APIs for rich previews",
        "Implemented secure JWT authentication",
        "Achieved 95%+ test coverage on protected routes",
        "Built intuitive tagging and search functionality"
      ],
      challenges: [
        {
          challenge: "Handling multiple content types efficiently",
          solution: "Designed flexible MongoDB schema with content type abstraction and indexing"
        },
        {
          challenge: "API rate limiting with external services",
          solution: "Implemented caching strategy for YouTube and Twitter previews to reduce API calls"
        }
      ],
      technologies: ["React", "TypeScript", "MongoDB", "JWT", "Tailwind CSS", "YouTube API", "Twitter API"],
      github: "https://github.com/Hyper099/Second-Brain-App-Project",
      demo: "https://second-brain-app-project.vercel.app/"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Interdisciplinary Projects & Research</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">
            Showcasing projects that demonstrate the integration of multiple disciplines 
            and engagement in complex problem-solving
          </p>
        </div>

        <div className="projects-content">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.demo} className="project-link">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>

              <p className="project-overview">{project.overview}</p>

              <div className="project-section">
                <h4><FaLightbulb /> Project Objectives</h4>
                <ul className="objectives-list">
                  {project.objectives.map((objective, idx) => (
                    <li key={idx}>{objective}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h4>Methodologies Employed</h4>
                <ul className="methodologies-list">
                  {project.methodologies.map((method, idx) => (
                    <li key={idx}>{method}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h4><FaCheckCircle /> Outcomes & Innovations</h4>
                <ul className="outcomes-list">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h4><FaExclamationTriangle /> Challenges & Solutions</h4>
                <div className="challenges-grid">
                  {project.challenges.map((item, idx) => (
                    <div key={idx} className="challenge-item">
                      <div className="challenge">
                        <strong>Challenge:</strong> {item.challenge}
                      </div>
                      <div className="solution">
                        <strong>Solution:</strong> {item.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-technologies">
                <strong>Technologies:</strong>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
