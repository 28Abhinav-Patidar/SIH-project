import React from "react";
import { useParams } from "react-router-dom";
import "./CareerDetail.css";

const careerDetails = {
  "software-developer": {
    title: "Software Developer",
    description: "As a software developer, you will design, code, test, and maintain software applications. Knowledge of programming languages, frameworks, and problem-solving skills is essential.",
  },
  "data-scientist": {
    title: "Data Scientist",
    description: "A data scientist analyzes large datasets to extract insights and help businesses make data-driven decisions. Requires statistics, machine learning, and programming knowledge.",
  },
  "ui-ux-designer": {
    title: "UI/UX Designer",
    description: "Design engaging interfaces and improve user experiences for digital products. Skills include design tools, prototyping, and understanding user behavior.",
  },
  "product-manager": {
    title: "Product Manager",
    description: "Oversee product development from conception to launch, coordinate teams, define strategy, and ensure the product meets customer needs.",
  },
};

function CareerDetail() {
  const { careerName } = useParams();
  const career = careerDetails[careerName];

  if (!career) {
    return <div className="career-detail-container">Career not found!</div>;
  }

  return (
    <div className="career-detail-container">
      <h2>{career.title}</h2>
      <p>{career.description}</p>
      {/* You can add more sections here: skills, roadmap, resources */}
    </div>
  );
}

export default CareerDetail;
