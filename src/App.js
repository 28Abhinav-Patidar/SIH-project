import React, { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SearchBar from "./components/SearchBar";
import Community from "./components/Community";
import Career from "./components/Career";
import Inbox from "./components/Inbox";
import JobsInternships from "./components/JobsInternships";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="header">
        <h1>Alumni Connect</h1>
      </header>

      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <div className="main-container">
          <SearchBar />
          <div className="sections">
            <Profile />
            <Community />
            <Career/>
            <Inbox/>
            <JobsInternships/>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
