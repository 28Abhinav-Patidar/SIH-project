import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaUser, FaUsers, FaBriefcase, FaLaptop, FaInfoCircle, FaEnvelope } from "react-icons/fa";

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
          {isLoggedIn && (
            <div className="header-right">
              {/* Inbox near search bar */}
              <SearchBar />
            </div>
          )}
        </header>

        {!isLoggedIn ? (
          <Login onLogin={() => setIsLoggedIn(true)} />
        ) : (
          <div className="dashboard">
            {/* Sidebar */}
           <aside className="sidebar">
              <Link to="/" className="menu-item">
                <span>🏠</span> <span>Home</span>
              </Link>
              <Link to="/profile" className="menu-item">
                <FaUser /> <span>Profile</span>
              </Link>
              <Link to="/community" className="menu-item">
                <FaUsers /> <span>Community</span>
              </Link>
              <Link to="/career" className="menu-item">
                <FaBriefcase /> <span>Career</span>
              </Link>
              <Link to="/jobs" className="menu-item">
                <FaLaptop /> <span>Jobs & Internships</span>
              </Link>
              <Link to="/about" className="menu-item">
                <FaInfoCircle /> <span>About Us</span>
              </Link>
            </aside>


            {/* Main Content */}
            <main className="main-content">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="posts-section">
                      <div className="post">Post 1: Alumni meet this weekend 🎉</div>
                      <div className="post">Post 2: Internship opportunity at Google 🚀</div>
                      <div className="post">Post 3: Job opening at Microsoft 💼</div>
                      <div className="post">Post 4: Alumni success story 🌟</div>
                      <div className="post">Post 5: Symbiosis Alumni event 📢</div>
                      <div className="post">Post 6: Career guidance session 🧑‍🏫</div>
                      <div className="post">Post 7: New project collaboration 🤝</div>
                    </div>
                  }
                />
                <Route path="/profile" element={<Profile />} />
                <Route path="/community" element={<Community />} />
                <Route path="/career" element={<Career />} />
                <Route path="/career-suggestions" element={<CareerSuggestion />} />
                <Route path="/jobs" element={<JobsInternshipsPage />} />
                <Route path="/chat" element={<ChatBox />} />
                <Route path="/about" element={<div>ℹ️ About Us: Alumni Connect Platform</div>} />
              </Routes>
            </main>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
