import React, { useState, useEffect } from "react";

function JobsInternshipsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://remotive.com/api/remote-jobs");
        const data = await response.json();

        if (data && data.jobs) {
          setJobs(data.jobs.slice(0, 15)); // Limit to 15 jobs
        } else {
          setJobs([]);
        }
      } catch (err) {
        console.error(err);
        setError("Could not fetch job listings.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="card" style={{ maxWidth: "800px", margin: "20px auto" }}>
      <h2>Jobs & Internship Opportunities</h2>

      {loading && <p>Loading opportunities...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && jobs.length === 0 && <p>No opportunities found.</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {jobs.map((job, index) => (
          <li
            key={index}
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#f9f9f9"
            }}
          >
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold", color: "#0073e6", textDecoration: "none" }}
            >
              {job.title}
            </a>
            <br />
            <span>{job.company_name}</span> — {job.candidate_required_location || "Remote"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobsInternshipsPage;
