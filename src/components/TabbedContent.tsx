import React, { useState } from 'react';
import { FaBolt, FaBriefcase, FaBullseye, FaComments, FaFileAlt, FaUser, FaUsers } from 'react-icons/fa';
import Conclusion from './Conclusion';
import FutureAspirations from './FutureAspirations';
import GlobalAwareness from './GlobalAwareness';
import Introduction from './Introduction';
import Leadership from './Leadership';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';
import './TabbedContent.css';
import Testimonials from './Testimonials';

const TabbedContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'resume', label: 'Resume', icon: FaFileAlt },
    { id: 'projects', label: 'Projects', icon: FaBriefcase },
    { id: 'skills', label: 'Skills', icon: FaBolt },
    { id: 'involvement', label: 'Involvement', icon: FaUsers },
    { id: 'future', label: 'Future Goals', icon: FaBullseye },
    { id: 'testimonials', label: 'Testimonials', icon: FaComments }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <Introduction />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'involvement':
        return (
          <>
            <Leadership />
            <GlobalAwareness />
          </>
        );
      case 'future':
        return (
          <>
            <FutureAspirations />
            <Conclusion />
          </>
        );
      case 'testimonials':
        return <Testimonials />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="tabbed-content">
      <nav className="tabs-navigation">
        <div className="tabs-container">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon"><IconComponent /></span>
                <span className="tab-label">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
      
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabbedContent;
