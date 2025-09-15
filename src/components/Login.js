import React, { useState } from "react";
import api from "../api";
import "./Login.css";

function Login({ onLogin }) {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Create account states
  const [newFullName, setNewFullName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCollege, setNewCollege] = useState("");
  const [newPassOutYear, setNewPassOutYear] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Login submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", {
        email: loginEmail,
        password: loginPassword,
      });

      alert("✅ Login successful!");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      onLogin();
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert("❌ Login failed: " + (err.response?.data?.error || err.message));
    }
  };

  // Create account submit
  const handleCreateAccountSubmit = async (e) => {
    e.preventDefault();

    if (!newFullName || !newEmail || !newCollege || !newPassOutYear || !newPassword) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      const payload = {
        name: newFullName,
        email: newEmail,
        college: newCollege,
        pass_out_year: parseInt(newPassOutYear), // matches DB
        password: newPassword,
      };

      console.log("Register payload:", payload);

      const response = await api.post("/auth/register", payload);

      alert("✅ Account Created Successfully!");
      setIsCreatingAccount(false);
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      alert(
        "❌ Account creation failed: " +
          (err.response?.data?.error || err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="login-container">
      <h2>Alumni Connect</h2>

      {/* Tabs */}
      <div className="tab-buttons">
        <button
          className={!isCreatingAccount ? "active" : ""}
          onClick={() => setIsCreatingAccount(false)}
        >
          Login
        </button>
        <button
          className={isCreatingAccount ? "active" : ""}
          onClick={() => setIsCreatingAccount(true)}
        >
          Create Account
        </button>
      </div>

      {/* Forms */}
      {!isCreatingAccount ? (
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form className="create-account-form" onSubmit={handleCreateAccountSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={newFullName}
            onChange={(e) => setNewFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="College Name"
            value={newCollege}
            onChange={(e) => setNewCollege(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Pass Out Year"
            value={newPassOutYear}
            onChange={(e) => setNewPassOutYear(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Create Account</button>
        </form>
      )}
    </div>
  );
}

export default Login;
