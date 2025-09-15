import React, { useState } from "react";

function Community() {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [communities, setCommunities] = useState({
    Acropolis: ["John", "Aarav", "Priya"],
    Symbiosis: ["Meera", "Karan", "Ravi"],
  });

  const [newMember, setNewMember] = useState("");

  // Handle community click
  const handleCommunityClick = (name) => {
    setSelectedCommunity(name);
  };

  // Handle adding new member
  const handleAddMember = () => {
    if (newMember.trim() !== "" && selectedCommunity) {
      setCommunities({
        ...communities,
        [selectedCommunity]: [...communities[selectedCommunity], newMember],
      });
      setNewMember("");
    }
  };

  return (
    <div className="card">
      <h2>Community Section</h2>

      {/* Show community list if none is selected */}
      {!selectedCommunity ? (
        <div>
          <h3>Select a Community:</h3>
          <ul>
            {Object.keys(communities).map((community) => (
              <li
                key={community}
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => handleCommunityClick(community)}
              >
                {community}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h3>{selectedCommunity} Members:</h3>
          <ul>
            {communities[selectedCommunity].map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>

          {/* Add member input */}
          <input
            type="text"
            placeholder="Enter new member"
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
          />
          <button onClick={handleAddMember}>Add Member</button>

          <br />
          <button
            style={{ marginTop: "10px", background: "gray" }}
            onClick={() => setSelectedCommunity(null)}
          >
            Back to Communities
          </button>
        </div>
      )}
    </div>
  );
}

export default Community;
