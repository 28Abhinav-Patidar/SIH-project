import React from "react";

function JobsInternships() {
  const jobs = [
    { title: "Frontend Developer", company: "Google" },
    { title: "Data Analyst Intern", company: "Amazon" },
    { title: "Backend Engineer", company: "Microsoft" },
  ];

  return (
    <div className="card">
      <h2>Jobs & Internships</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job.title} - {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobsInternships;
