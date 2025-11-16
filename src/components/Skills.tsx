import React from 'react';
import { FaCode, FaComments, FaFileCode, FaMicrophone, FaPalette, FaPencilRuler } from 'react-icons/fa';
import './Skills.css';

const Skills: React.FC = () => {
  const skillsData = [
    {
      category: "Technical Proficiencies",
      icon: FaCode,
      skills: [
        {
          name: "Full-Stack Web Development",
          description: "Proficient in building end-to-end web applications using modern frameworks and technologies.",
          proficiency: 90,
          artifacts: [
            "Built 5+ production-ready web applications",
            "Implemented RESTful APIs with authentication and authorization",
            "Created responsive UIs with React and modern CSS frameworks",
            "Optimized application performance achieving <2s load times"
          ]
        },
        {
          name: "Database Management",
          description: "Expert in designing and optimizing relational and NoSQL databases for various use cases.",
          proficiency: 85,
          artifacts: [
            "Designed normalized database schemas for complex applications",
            "Optimized queries reducing execution time by 60%",
            "Implemented database indexing and caching strategies",
            "Experience with MongoDB, MySQL, and PostgreSQL"
          ]
        },
        {
          name: "Python Programming & Data Science",
          description: "Strong foundation in Python for automation, data analysis, and machine learning applications.",
          proficiency: 80,
          artifacts: [
            "Developed data analysis scripts processing 100K+ records",
            "Created ML models with 85%+ accuracy using scikit-learn",
            "Automated repetitive tasks saving 10+ hours weekly",
            "Built visualization dashboards using matplotlib and seaborn"
          ]
        },
        {
          name: "Cloud Computing (AWS)",
          description: "Experience deploying and managing applications on cloud infrastructure with focus on scalability.",
          proficiency: 75,
          artifacts: [
            "Deployed applications on AWS EC2 and S3",
            "Configured load balancers and auto-scaling groups",
            "Implemented CI/CD pipelines using AWS services",
            "Managed cloud costs through optimization strategies"
          ]
        }
      ]
    },
    {
      category: "Soft Skills",
      icon: FaComments,
      skills: [
        {
          name: "Leadership & Team Management",
          description: "Proven ability to lead teams, delegate tasks effectively, and drive projects to successful completion.",
          proficiency: 88,
          artifacts: [
            "Led team of 5 developers in academic projects",
            "Coordinated sprint planning and daily standups",
            "Mentored 3 junior students in programming fundamentals",
            "Resolved team conflicts through effective communication"
          ]
        },
        {
          name: "Communication & Presentation",
          description: "Excellent verbal and written communication skills with ability to explain complex technical concepts clearly.",
          proficiency: 85,
          artifacts: [
            "Presented technical projects to audiences of 50+ people",
            "Created comprehensive technical documentation",
            "Conducted workshops on web development basics",
            "Regular blog posts explaining programming concepts"
          ]
        },
        {
          name: "Problem Solving & Critical Thinking",
          description: "Analytical approach to breaking down complex problems and developing innovative solutions.",
          proficiency: 90,
          artifacts: [
            "Solved 200+ algorithmic problems on coding platforms",
            "Debugged critical production issues efficiently",
            "Designed architecture for scalable applications",
            "Applied design patterns to solve recurring problems"
          ]
        }
      ]
    },
    {
      category: "Creative Competencies",
      icon: FaPalette,
      skills: [
        {
          name: "UI/UX Design & Design Thinking",
          description: "Creating intuitive and aesthetically pleasing user interfaces with focus on user experience.",
          proficiency: 82,
          artifacts: [
            "Designed wireframes and prototypes using Figma",
            "Conducted user research and usability testing",
            "Implemented responsive designs for mobile-first approach",
            "Created design systems for consistent UI across applications"
          ]
        },
        {
          name: "Creative Problem Solving",
          description: "Applying innovative thinking to technical challenges and finding elegant solutions.",
          proficiency: 85,
          artifacts: [
            "Developed creative solutions to optimize application performance",
            "Designed novel algorithms for specific use cases",
            "Created engaging interactive features for web applications",
            "Contributed ideas in brainstorming sessions for product features"
          ]
        }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Advanced Skill Development & Mastery</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">
            Highlighting advanced skills acquired with artifacts demonstrating proficiency
          </p>
        </div>

        <div className="skills-content">
          {skillsData.map((category, catIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={catIndex} className="skill-category-section">
                <div className="category-header">
                  <IconComponent className="category-icon" />
                  <h3>{category.category}</h3>
                </div>

                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-card">
                      <div className="skill-card-header">
                        <h4>{skill.name}</h4>
                        <div className="proficiency-badge">
                          {skill.proficiency}%
                        </div>
                      </div>

                      <p className="skill-description">{skill.description}</p>

                      <div className="proficiency-bar">
                        <div 
                          className="proficiency-fill"
                          data-proficiency={skill.proficiency}
                        ></div>
                      </div>

                      <div className="skill-artifacts">
                        <h5>Key Achievements & Artifacts:</h5>
                        <ul>
                          {skill.artifacts.map((artifact, idx) => (
                            <li key={idx}>{artifact}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Code Snippet Example */}
        <div className="artifacts-showcase">
          <h3><FaFileCode /> Code Artifact Example</h3>
          <div className="code-example">
            <div className="code-header">
              <FaCode /> Optimized Database Query
            </div>
            <pre className="code-block">
{`// Before: Inefficient query with N+1 problem
const users = await User.find();
for (let user of users) {
  user.posts = await Post.find({ userId: user.id });
}

// After: Optimized with aggregation pipeline
const usersWithPosts = await User.aggregate([
  {
    $lookup: {
      from: 'posts',
      localField: '_id',
      foreignField: 'userId',
      as: 'posts'
    }
  }
]);

// Result: 95% reduction in query time`}
            </pre>
          </div>

          <div className="design-example">
            <h4><FaPencilRuler /> Design Portfolio Highlight</h4>
            <p>
              Created responsive dashboard designs with focus on data visualization 
              and user accessibility. Utilized color theory and typography principles 
              to enhance readability and user engagement.
            </p>
          </div>

          <div className="presentation-example">
            <h4><FaMicrophone /> Presentation Skills</h4>
            <p>
              Regularly present technical concepts to diverse audiences, from fellow 
              students to faculty members. Skilled at breaking down complex topics 
              into digestible explanations with visual aids and live demonstrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
