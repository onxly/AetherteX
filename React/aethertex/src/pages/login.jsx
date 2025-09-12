import React from "react";
import Zeus from "../assets/Zeus.jpg"; // <-- import the image
import "../stylesheets/login.css";
import { Link } from "react-router";

function Login() {
  document.title = "Login | AetherteX";
  return (
    <div className="formStyle">
      <div>
        <img src={Zeus} width={300} height={300} alt="Zeus" />
      </div>

      <div style={{ }}>
        <input
          type="text"
          id="email"
          placeholder="Member email"
          className="Boxs"
        />{" "}
      </div>
      <div style={{ }}>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="Boxs"
        />
      </div>

      <button type="submit" className="loginbtn">
        Log in
      </button>
      <p>
        Not a member? <Link to="/register">Register here!</Link>
      </p>
    </div>
  );
}

export default Login;
