import Welcome from "../assets/Welcome.png";
import "../stylesheets/register.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Register() {
  const { register } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  document.title = "Register | AetherteX";

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    await register(username, name, surname, email, phoneNumber, password);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <img src={Welcome} alt="Welcome" className="register-logo" />

        <h2 className="register-title">Create Your Account</h2>
        <p className="register-subtitle">Join the AetherteX community today</p>

        <div className="input-group">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="RegisterBoxs"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            id="name"
            placeholder="First Name"
            className="RegisterBoxs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            id="surname"
            placeholder="Surname"
            className="RegisterBoxs"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="RegisterBoxs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            id="phoneNumber"
            placeholder="Phone Number"
            className="RegisterBoxs"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="RegisterBoxs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="RegisterBoxs"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="Registerloginbtn" onClick={handleRegister}>
          Create Account
        </button>

        <p className="login-link">
          Already a Member? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
