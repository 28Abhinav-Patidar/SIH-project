import React from "react";
import { Link } from "react-router-dom";
import "./Career.css";

const careerSuggestions = [
  {
    title: "Software Developer",
    description: "Build applications and software solutions using modern technologies.",
   link: "/career/software-developer",
  },
  {
    title: "Data Scientist",
    description: "Analyze complex data to help organizations make informed decisions.",
    link: "/career/data-scientist",
  },
  {
    title: "UI/UX Designer",
    description: "Design intuitive user interfaces and experiences for web and mobile apps.",
    link: "/career/ui-ux-designer",
  },
  {
    title: "Product Manager",
    description: "Oversee product development, strategy, and execution across teams.",
    link: "/career/product-manager",
  },
];

function Career() {
  return (
    <div className="career-container">
      <h2 className="career-heading">Personalized Career Guidance</h2>
      <p className="career-subtitle">
        Get personalized career guidance based on your skills, interests, and experience. 
        Explore the right career paths, discover emerging opportunities, and plan your next steps with confidence.
      </p>
      <div className="career-grid">
        {careerSuggestions.map((career) => (
          <div key={career.title} className="career-card">
            <h3>{career.title}</h3>
            <p>{career.description}</p>
            <Link to={career.link}>
              <button className="explore-btn">Explore</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;
