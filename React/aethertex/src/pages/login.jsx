import React, { useContext, useEffect, useState } from "react";
import Zeus from "../assets/Zeus.jpg"; // <-- import the image
import "../stylesheets/login.css";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const navigation = useNavigate();
  const { isLoggedIn, setIsLoggedIn, user, login } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  document.title = "Login | AetherteX";

  const handleLogin = async () => {
    await login(email, password);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigation("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (user != null) {
      navigation("/");
    }
  }, [user]);

  return (
    <div className="formStyle">
      <div>
        <img src={Zeus} width={300} height={300} alt="Zeus" />
      </div>

      <div style={{}}>
        <input
          type="text"
          id="email"
          placeholder="Member email"
          className="Boxs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
      </div>
      <div style={{}}>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="Boxs"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="loginbtn"
        onClick={async () => {
          await handleLogin();
        }}
      >
        Log in
      </button>
      <p>
        Not a member? <Link to="/register">Register here!</Link>
      </p>
    </div>
  );
}

export default Login;
