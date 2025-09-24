import React, { useContext, useEffect, useState } from "react";
import Zeus from "../assets/AetherteXIcon.png";
import "../stylesheets/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { isLoggedIn, user, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  document.title = "Login | AetherteX";

  const handleLogin = async () => {
    if (!email || !password) return;
    await login(email, password);
  };

  useEffect(() => {
    if (isLoggedIn || user) {
      navigate("/");
    }
  }, [isLoggedIn, user, navigate]);

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={Zeus} alt="Zeus" className="login-logo" />

        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Log in to continue your journey</p>

        <div className="input-group">
          <input
            type="email"
            id="email"
            placeholder="Member email"
            className="Boxs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="Boxs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="loginbtn" onClick={handleLogin}>
          Log in
        </button>

        <p className="register-link">
          Not a member? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
