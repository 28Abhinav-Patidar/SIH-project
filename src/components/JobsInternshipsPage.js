import React, { useEffect, useState } from "react";
import "./JobsInternshipsPage.css";

function JobsInternshipsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Example API: Remotive.io (remote jobs)
    fetch("https://remotive.io/api/remote-jobs?category=software-dev")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs.slice(0, 10)); // take top 10 jobs
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="jobs-container">
      <h2>Jobs & Internship Opportunities</h2>
      <div className="jobs-grid">
        {jobs.length === 0 && <p>Loading jobs...</p>}
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <img
              src={job.company_logo || "https://via.placeholder.com/80"}
              alt={job.company_name}
              className="job-logo"
            />
            <div className="job-info">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company_name}</p>
              <p><strong>Type:</strong> {job.job_type}</p>
              <a href={job.url} target="_blank" rel="noreferrer">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsInternshipsPage;

