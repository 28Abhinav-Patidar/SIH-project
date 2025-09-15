import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

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

      {/* Login Form */}
      {!isCreatingAccount ? (
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            // For now, just log in without validation
            onLogin();
          }}
        >
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      ) : (
        /* Create Account Form */
        <form
          className="create-account-form"
          onSubmit={(e) => {
            e.preventDefault();

            const newUser = {
              name: e.target[0].value,
              email: e.target[1].value,
              linkedin: e.target[2].value,
              college: e.target[3].value,
              username: e.target[4].value,
              enrollment: e.target[5].value,
              passOutYear: e.target[6].value,
              position: e.target[7].value,
              password: e.target[8].value,
            };

            // Save in localStorage
            localStorage.setItem("userProfile", JSON.stringify(newUser));

            alert("Account Created Successfully!");
            setIsCreatingAccount(false); // Switch back to login
          }}
        >
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="LinkedIn Profile" />
          <input type="text" placeholder="College Name" required />
          <input type="text" placeholder="Username" required />
          <input type="text" placeholder="Enrollment Number" />
          <input type="number" placeholder="Pass Out Year" required />
          <input type="text" placeholder="Current Position" />
          <input type="password" placeholder="Password" required />
          <button type="submit">Create Account</button>
        </form>
      )}
    </div>
  );
}

export default Login;
