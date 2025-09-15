import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaUser, FaUsers, FaBriefcase, FaInfoCircle, FaLaptop } from "react-icons/fa";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SearchBar from "./components/SearchBar";
import Community from "./components/Community";
import Career from "./components/Career";
import CareerSuggestion from "./components/CareerSuggestion";
import Inbox from "./components/Inbox";
import JobsInternships from "./components/JobsInternships";
import JobsInternshipsPage from "./components/JobsInternshipsPage";
import ChatBox from "./components/ChatBox";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
  <div className="App">
    <header className="header">
      <h1>Alumni Connect</h1>
    </header>

    {!isLoggedIn ? (
      <Login onLogin={() => setIsLoggedIn(true)} />
    ) : (
      <Routes>
        {/* Main Dashboard */}
        <Route
          path="/"
          element={
            <div className="dashboard">
              {/* Sidebar - Left */}
              <div className="sidebar">
  {/* Profile menu */}
  <div className="menu-item">
    <FaUser /> <span>Profile</span>
  </div>

  {/* Community menu */}
  <div className="menu-item">
    <FaUsers /> <span>Community</span>
  </div>  

  {/* Career menu */}
  <div className="menu-item">
    <FaBriefcase /> <span>Career</span>
  </div>
  {/* Jobs menu */}
  <div className="menu-item">
    <FaLaptop /> <span>Jobs & Internships</span>
  </div>
    {/* Inbox menu */}
  <div className="menu-item">
   <FaInfoCircle /> <span>About Us</span>
  </div>
</div>

              {/* Main Content - Right */}
              <div className="main-content">
                <div className="search-bar-wrapper">
                  <SearchBar />
                </div>
                <div className="posts-section">
                  {/* Example posts - you can replace with dynamic posts */}
                  <div className="post">Post 1: Alumni meet this weekend 🎉</div>
                  <div className="post">Post 2: Internship opportunity at Google 🚀</div>
                  <div className="post">Post 3: Job opening at Microsoft 💼</div>
                  <div className="post">Post 4: Alumni success story 🌟</div>
                  <div className="post">Post 5: Symbiosis Alumni event 📢</div>
                  <div className="post">Post 6: Career guidance session 🧑‍🏫</div>
                  <div className="post">Post 7: New project collaboration 🤝</div>
                </div>
              </div>
            </div>
          }
        />

        {/* Other Pages */}
        <Route path="/career-suggestions" element={<CareerSuggestion />} />
        <Route path="/jobs" element={<JobsInternshipsPage />} />
        <Route path="/chat" element={<ChatBox />} />
      </Routes>
    )}
  </div>
</Router>

  );
}

export default App;
