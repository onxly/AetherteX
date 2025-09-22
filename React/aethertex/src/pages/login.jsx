import React, { useContext, useState } from "react";
import Zeus from "../assets/Zeus.jpg"; // <-- import the image
import "../stylesheets/login.css";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const { isLoggedIn, setIsLoggedIn, user, cart, login } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />{" "}
      </div>
      <div style={{ }}>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="Boxs"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="loginbtn" onClick={async()=> await login(email,password)}>
        Log in
      </button>
      <p>
        Not a member? <Link to="/register">Register here!</Link>
      </p>
    </div>
  );
}

export default Login;
