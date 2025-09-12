import Icon from "../assets/AetherteXIcon.png";
import UserIcon from "../assets/userIcon.png";
import "../stylesheets/header.css";
import { Link } from "react-router";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import CartIcon from "./CartIcon";

function Header(HeadElm) {
  const [showModel, setShowModel] = useState(false);
  return (
    <header className="navBar">
      <Link to="/">
        <img
          className="imgAetherteX"
          src={Icon}
          alt="AetherteX Icon"
          height={35}
          width={115}
        />
      </Link>

      <input className="searchBar" type="text" placeholder="Search..." />
      <button className="btnSearch">Search</button>

    <div
      className="UserBox"
      onMouseEnter={() => setShowModel(true)}
      onMouseLeave={() => setShowModel(false)}
    >
      {/* Trigger button */}
      <div className="userOptions">
        <FaUser width={20} height={20} color="black" />
        <p>{HeadElm.AccName}</p>
      </div>

      {/* Floating panel */}
      {showModel && (
        <div className="AccModel">
          <div className="AccContent">
            <span className="close" onClick={() => setShowModel(false)}>
              ×
            </span>

            <Link className="lkSign" to="/login">
              <button className="btnSign">Sign in</button>
            </Link>
            <span className="txtRegister">
              New customer? <Link to="/register">Register</Link>
            </span>
          </div>
        </div>
      )}
    </div>

      <Link to={"/cart"} style={{ textDecorationLine: "none" }}>
        <CartIcon iconColor={"white"} numItems={17} />
      </Link>

    </header>
  );
}

export default Header;
