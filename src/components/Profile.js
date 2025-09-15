import React, { useState, useEffect } from "react";
import { FaLinkedin, FaUpload } from "react-icons/fa";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    if (storedUser) setUser(JSON.parse(storedUser));
    const storedPic = localStorage.getItem("profilePic");
    if (storedPic) setProfilePic(storedPic);
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
    return (
      <div className="profile-container">
        <div className="no-profile">No profile found. Please create an account.</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-photo">
          {profilePic ? (
            <img src={profilePic} alt="Profile" />
          ) : (
            <div className="placeholder">+</div>
          )}
          <label htmlFor="upload-photo" className="upload-btn">
            <FaUpload /> Upload Photo
          </label>
          <input
            id="upload-photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </div>

        <h2 className="user-name">{user.name}</h2>
        <p className="user-position">{user.position || "Current Position"}</p>

        <div className="profile-details">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>College:</strong> {user.college}</p>
          <p><strong>Pass Out:</strong> {user.passOutYear}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Enrollment No:</strong> {user.enrollment}</p>
          {user.linkedin && (
            <p>
              <FaLinkedin />{" "}
              <a href={user.linkedin} target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
