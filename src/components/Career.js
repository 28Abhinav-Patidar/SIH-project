import React from "react";
import { useNavigate } from "react-router-dom";

function Career() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Career Section</h2>
      <p>Explore career guidance, mentorship, and workshops.</p>
      <button
        onClick={() => navigate("/career-suggestions")}
        style={{
          padding: "10px 15px",
          borderRadius: "8px",
          border: "none",
          background: "#0073e6",
          color: "white",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        Get Career Suggestions
      </button>
    </div>
  );
}

export default Career;
