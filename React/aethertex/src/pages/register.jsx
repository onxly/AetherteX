import Welcome from "../assets/Welcome.png";
import "../stylesheets/register.css";
import { Link } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";


function Register() {
  const { user, setUser, isLoggedIn, setIsLoggedIn, login, logout, register } = useContext(AuthContext);
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  
  document.title = "Register | AetherteX"
  return (
    <div style={{ }}>
      <div className="column">
        <img src={Welcome} alt="" width={450} height={150}/>

        <label htmlFor="username" style={{ marginRight: "335px" ,fontSize:12}}>
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Type your Username"
          className="RegisterBoxs"
          style={{ height: "60px" }}
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <label htmlFor="name" style={{ marginRight: "360px",fontSize:12 }}>
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Type your Name"
          className="RegisterBoxs"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <label htmlFor="surname" style={{ marginRight: "345px",fontSize:12 }}>
          Surname
        </label>
        <input
          type="text"
          id="surname"
          placeholder="Type your Surname"
          className="RegisterBoxs"
          value={surname}
          onChange={(e)=>setSurname(e.target.value)}
        />

        <label htmlFor="email" style={{ marginRight: "360px" ,fontSize:12}}>
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Type your Email"
          className="RegisterBoxs"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <label htmlFor="phoneNumber" style={{ marginRight: "304px" ,fontSize:12}}>
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Type your Phone Number"
          className="RegisterBoxs"
          value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
        />

        <label htmlFor="password" style={{ marginRight: "340px",fontSize:12 }}>
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Type your Password"
          className="RegisterBoxs"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword" style={{ marginRight: "284px",fontSize:12 }}>
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your Password"
          className="RegisterBoxs"
        />

        <button className="Registerloginbtn" onClick={async () => await register(name, surname, email, phoneNumber, password)}>
          Create Account
        </button>
        <p style={{ marginTop: "10px",fontSize:13 }}>
          Already a Member? <Link to="/login">Click here!</Link>
        </p>
        <hr />
      </div>
    </div>
  );
}

export default Register;
