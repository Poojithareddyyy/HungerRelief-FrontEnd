import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [user, setUser] = useState({
    emailOrPhone: "",
    password: "",
  });

  const navigate = useNavigate(); // For redirection

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", user);
    navigate("/dashboard"); // Redirect to the new homepage after login
  };

  return (
    <div className="login-page">
       <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="emailOrPhone" placeholder="Email or Phone Number" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
