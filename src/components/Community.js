import React, { useState } from "react";
import "./Community.css";

const exampleCommunities = [
  { name: "Acropolis", members: 120 },
  { name: "DAVV", members: 95 },
  { name: "Symbiosis", members: 140 },
  { name: "CDGI", members: 80 },
  { name: "Madicaps", members: 60 },
];

const Community = () => {
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Join Form state
  const [joinData, setJoinData] = useState({
    communityName: "",
    userName: "",
    email: "",
    linkedin: "",
  });

  // Create Form state
  const [createData, setCreateData] = useState({
    communityName: "",
    description: "",
    adminName: "",
    adminEmail: "",
  });

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    console.log("Join Community Data:", joinData);
    alert("Successfully joined community!");
    setShowJoinForm(false);
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    console.log("Create Community Data:", createData);
    alert("Community created successfully!");
    setShowCreateForm(false);
  };

  return (
    <div className="community-container">
      <h2 className="community-heading">Alumni Communities</h2>

      <div className="community-actions">
        <button className="join-btn" onClick={() => setShowJoinForm(true)}>
          Join Community
        </button>
        <button className="create-btn" onClick={() => setShowCreateForm(true)}>
          Create Community
        </button>
      </div>

      <h3 className="example-heading">Example Communities</h3>
      <div className="communities-grid">
        {exampleCommunities.map((comm, index) => (
          <div key={index} className="community-card">
            <h4>{comm.name}</h4>
            <p>{comm.members} Members</p>
          </div>
        ))}
      </div>

      {/* Join Community Form */}
      {showJoinForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h3>Join Community</h3>
            <form onSubmit={handleJoinSubmit}>
              <input
                type="text"
                placeholder="Community Name"
                value={joinData.communityName}
                onChange={(e) =>
                  setJoinData({ ...joinData, communityName: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Your Name"
                value={joinData.userName}
                onChange={(e) =>
                  setJoinData({ ...joinData, userName: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={joinData.email}
                onChange={(e) =>
                  setJoinData({ ...joinData, email: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="LinkedIn URL"
                value={joinData.linkedin}
                onChange={(e) =>
                  setJoinData({ ...joinData, linkedin: e.target.value })
                }
              />
              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowJoinForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create Community Form */}
      {showCreateForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h3>Create Community</h3>
            <form onSubmit={handleCreateSubmit}>
              <input
                type="text"
                placeholder="Community Name"
                value={createData.communityName}
                onChange={(e) =>
                  setCreateData({ ...createData, communityName: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Community Description"
                value={createData.description}
                onChange={(e) =>
                  setCreateData({ ...createData, description: e.target.value })
                }
                required
              ></textarea>
              <input
                type="text"
                placeholder="Admin Name"
                value={createData.adminName}
                onChange={(e) =>
                  setCreateData({ ...createData, adminName: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Admin Email"
                value={createData.adminEmail}
                onChange={(e) =>
                  setCreateData({ ...createData, adminEmail: e.target.value })
                }
                required
              />
              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowCreateForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
