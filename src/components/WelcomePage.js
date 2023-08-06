import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WelcomeStyle.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="welcome-container">
      <h2 className="welcome-header">Welcome to out Website</h2>
      <h4>You have Successfully Logged In!</h4>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default WelcomePage;
