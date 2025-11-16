import React from 'react';
import { FaQuoteLeft, FaStar, FaUser } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Professor, Computer Science Department",
      institution: "PDEU Gandhinagar",
      image: null,
      testimonial: "Jayneel has consistently demonstrated exceptional technical aptitude and a genuine passion for software development. His projects showcase not just coding ability but also critical thinking and innovation. He has a rare combination of technical excellence and leadership qualities that will serve him well in his career.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Senior Developer & Mentor",
      institution: "Tech Mentor Program",
      image: null,
      testimonial: "Having mentored Jayneel over the past year, I've been impressed by his quick learning ability and dedication to mastering new technologies. He doesn't just learn syntax; he understands underlying principles and applies them creatively. His enthusiasm for learning makes him a valuable team member.",
      rating: 5
    },
    {
      name: "Amit Patel",
      position: "Team Member & Peer",
      institution: "University Project Collaborator",
      image: null,
      testimonial: "Working with Jayneel on our e-commerce project was an excellent experience. He led the team with patience and clarity, always willing to explain concepts and help when someone was stuck. His technical skills are strong, and his ability to bring the team together stands out.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Testimonials & Recommendations</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">
            Feedback from mentors, professors, peers, and mentees
          </p>
        </div>

        <div className="testimonials-content">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>

                <p className="testimonial-text">"{testimonial.testimonial}"</p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} />
                    ) : (
                      <FaUser />
                    )}
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                    <p className="author-institution">{testimonial.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
