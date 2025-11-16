import React from 'react';
import { FaBalanceScale, FaGlobeAmericas, FaHandHoldingHeart, FaLeaf } from 'react-icons/fa';
import './GlobalAwareness.css';

const GlobalAwareness: React.FC = () => {
  const caseStudies = [
    {
      title: "Digital Accessibility & Educational Technology",
      globalIssue: "Access to quality education and digital resources remains limited for many students, particularly in remote areas with poor internet connectivity.",
      projectConnection: "EduConnect Course Selling Platform",
      ethicalConsiderations: [
        "Ensuring platform remains accessible to users with limited bandwidth",
        "Considering pricing models that don't exclude economically disadvantaged students",
        "Designing responsive interfaces that work on low-end devices",
        "Balancing feature richness with simplicity for diverse user base"
      ],
      analysis: "While building EduConnect, I realized that creating a feature-rich course platform could inadvertently exclude users with limited resources. This led to implementing optimizations for performance and considering how platform design impacts accessibility.",
      personalReflection: "This experience taught me that as developers, we should consider the diverse contexts of our users. Creating inclusive technology means thinking beyond ideal scenarios and designing for real-world constraints.",
      impact: "Optimized platform to handle 500+ concurrent requests efficiently, used responsive design for mobile devices, and minimized resource-heavy features to ensure broader accessibility."
    },
    {
      title: "Data Privacy in Communication Platforms",
      globalIssue: "Increasing digitalization raises concerns about personal privacy, data security, and how personal information is collected and used in communication platforms.",
      projectConnection: "Mentorship Platform with WebRTC",
      ethicalConsiderations: [
        "Ensuring secure video communication without storing recordings",
        "Protecting user scheduling data and conversation history",
        "Implementing transparent data usage policies",
        "Balancing convenience features with privacy protection",
        "Securing integration with third-party APIs (Calendly)"
      ],
      analysis: "The Mentorship Platform required integrating video calling and calendar features, which involved handling sensitive user data. This raised questions about what data is necessary, how long to retain it, and how to protect user privacy while providing useful features.",
      personalReflection: "I learned that convenience and privacy often require careful balance. As developers, we should advocate for user privacy and implement security measures proactively, not just because regulations require it but because it's the right thing to do.",
      impact: "Implemented end-to-end considerations for WebRTC communication, used Supabase for secure data storage with proper authentication, and minimized data collection to only what's necessary for platform functionality."
    },
    {
      title: "Information Organization & Digital Wellbeing",
      globalIssue: "Information overload and fragmented digital tools can negatively impact productivity and mental wellbeing in our increasingly connected world.",
      projectConnection: "Second Brain Digital Organizer",
      ethicalConsiderations: [
        "Creating tools that enhance rather than distract from productivity",
        "Designing interfaces that respect users' time and attention",
        "Handling personal data (notes, links, reminders) securely",
        "Integrating external APIs (YouTube, Twitter) responsibly",
        "Ensuring data portability and user ownership"
      ],
      analysis: "While building Second Brain to help organize digital information, I considered how the tool itself could contribute to digital clutter if not designed thoughtfully. The project manages 1000+ user entries, requiring careful thought about data organization, security, and user experience.",
      personalReflection: "This project highlighted the responsibility we have when building productivity tools - they should genuinely help users rather than becoming another source of distraction. Design choices around notifications, data presentation, and feature complexity directly impact user wellbeing.",
      impact: "Implemented clean, intuitive interface with TypeScript for type safety, secure JWT authentication, efficient data retrieval with MongoDB, and integrated external content previews without overwhelming the user experience."
    }
  ];

  return (
    <section className="global-awareness" id="global">
      <div className="container">
        <div className="section-header">
          <h2>Global Awareness & Ethical Considerations</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">
            Exploring how global issues and ethical dilemmas influence technical work
          </p>
        </div>

        <div className="global-content">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <div className="case-study-header">
                <FaGlobeAmericas className="global-icon" />
                <h3>{study.title}</h3>
              </div>

              <div className="global-issue-section">
                <h4>Global Issue Context</h4>
                <p>{study.globalIssue}</p>
                <div className="project-connection">
                  <strong>Project Connection:</strong> {study.projectConnection}
                </div>
              </div>

              <div className="ethical-section">
                <h4><FaBalanceScale /> Ethical Considerations</h4>
                <ul className="ethical-list">
                  {study.ethicalConsiderations.map((consideration, idx) => (
                    <li key={idx}>{consideration}</li>
                  ))}
                </ul>
              </div>

              <div className="analysis-section">
                <h4>Analysis of Ethical Implications</h4>
                <p>{study.analysis}</p>
              </div>

              <div className="reflection-section">
                <h4>Personal Reflection on Responsibility</h4>
                <p>{study.personalReflection}</p>
              </div>

              <div className="impact-section">
                <h4><FaHandHoldingHeart /> Actions Taken</h4>
                <p>{study.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ethical-principles">
          <h3><FaLeaf /> Core Ethical Principles in My Work</h3>
          <div className="principles-grid">
            <div className="principle-card">
              <h4>Inclusivity</h4>
              <p>
                Designing technology that is accessible and beneficial to all users, 
                regardless of their background, abilities, or resources.
              </p>
            </div>
            <div className="principle-card">
              <h4>Transparency</h4>
              <p>
                Being open about how technology works, what data is collected, 
                and how decisions are made by automated systems.
              </p>
            </div>
            <div className="principle-card">
              <h4>Sustainability</h4>
              <p>
                Considering environmental impact and striving to create solutions 
                that contribute positively to our planet's future.
              </p>
            </div>
            <div className="principle-card">
              <h4>Privacy</h4>
              <p>
                Respecting user privacy as a fundamental right and implementing 
                robust protections against data misuse.
              </p>
            </div>
            <div className="principle-card">
              <h4>Accountability</h4>
              <p>
                Taking responsibility for the consequences of technical decisions 
                and being willing to address issues proactively.
              </p>
            </div>
            <div className="principle-card">
              <h4>Social Good</h4>
              <p>
                Leveraging technology to address societal challenges and improve 
                quality of life for communities worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="global-perspective-statement">
          <blockquote>
            "As a student developer, I'm learning that technology is never neutral - every design 
            decision has implications for users and society. Through projects like EduConnect, 
            the Mentorship Platform, and Second Brain, I'm developing awareness of how technology 
            can impact accessibility, privacy, and wellbeing. I'm committed to building solutions 
            that are not only technically sound but also ethically responsible and genuinely helpful 
            to diverse users."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default GlobalAwareness;
