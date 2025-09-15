import React, { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const storedPic = localStorage.getItem("profilePic");
    if (storedPic) {
      setProfilePic(storedPic);
    }
  }, []);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        localStorage.setItem("profilePic", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) {
    return <div className="profile-container">No profile found. Please create an account.</div>;
  }

  return (
    <div className="profile-container">
      {/* Left side - Profile Card */}
      <div className="profile-card">
        <div className="profile-photo">
          {profilePic ? (
            <img src={profilePic} alt="Profile" />
          ) : (
            <div className="placeholder">+</div>
          )}
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        </div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.college}</p>
        <p>Pass Out: {user.passOutYear}</p>
        <a href={user.linkedin} target="_blank" rel="noreferrer">
          LinkedIn Profile
        </a>
      </div>

      {/* Right side - Details */}
      <div className="profile-details">
        <h3>About Me</h3>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Enrollment No:</strong> {user.enrollment}</p>
        <p><strong>Current Position:</strong> {user.position}</p>
        <p><strong>Skills:</strong> (You can add skills feature later)</p>
      </div>
    </div>
  );
}

export default Profile;
