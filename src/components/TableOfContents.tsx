import React from 'react';
import { FaBook, FaCheckCircle, FaFileAlt, FaGlobeAmericas, FaProjectDiagram, FaQuoteRight, FaRocket, FaTools, FaUser, FaUsers } from 'react-icons/fa';
import './TableOfContents.css';

const TableOfContents: React.FC = () => {
  const sections = [
    { id: 'introduction', icon: FaUser, title: 'Introduction & Learning Philosophy', points: 2 },
    { id: 'resume', icon: FaFileAlt, title: 'Resume/CV', points: 3 },
    { id: 'projects', icon: FaProjectDiagram, title: 'Interdisciplinary Projects & Research', points: 4 },
    { id: 'skills', icon: FaTools, title: 'Advanced Skill Development', points: 3 },
    { id: 'leadership', icon: FaUsers, title: 'Collaborative & Leadership Experiences', points: 2 },
    { id: 'global', icon: FaGlobeAmericas, title: 'Global Awareness & Ethics', points: 2 },
    { id: 'future', icon: FaRocket, title: 'Future Aspirations', points: 2 },
    { id: 'conclusion', icon: FaCheckCircle, title: 'Conclusion & Self-Assessment', points: 1 },
    { id: 'testimonials', icon: FaQuoteRight, title: 'Testimonials', points: 1 },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="table-of-contents" id="toc">
      <div className="container">
        <div className="section-header">
          <FaBook className="header-icon" />
          <h2>Table of Contents</h2>
        </div>
        
        <div className="toc-grid">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <button
                key={section.id}
                className="toc-item"
                onClick={() => scrollToSection(section.id)}
              >
                <div className="toc-icon">
                  <IconComponent />
                </div>
                <div className="toc-content">
                  <h3>{section.title}</h3>
                  <span className="toc-points">{section.points} Marks</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
