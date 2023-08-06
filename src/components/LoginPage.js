import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginSignupStyles.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "Prajjwal" && password === "Pr123") {
      setLoginError(false);
      navigate("/welcome");
    } else {
      setLoginError(false);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        {loginError && (
          <p style={{ color: "red" }}>Invalid Login Username or Password</p>
        )}

        <button type="submit">Login</button>
      </form>
      <p>
        Forgot password? <a href="#forgotPassword_link">Reset here</a>
      </p>
      <p>
        Don't have an account? <a href="/signup">Create one here</a>
      </p>
    </div>
  );
};

export default LoginPage;
