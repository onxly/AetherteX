import React, { useContext } from "react";
import { Link } from "react-router";
import InputSubmit from "./InputSubmit";
import UserCard from "./UserCard";
import { FaCartShopping } from "react-icons/fa6";
import "../styles/Navbar.css";
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
  const { user, isLoggedIn, login, logout, register } = useContext(AuthContext);
  return (
    <div className="navbar-container">
      {/* Logo Section */}
      <div className="logo">
        <Link to={"/"} style={{ textDecorationLine: "none" }}>
          <h1>AetherteX</h1>
        </Link>
      </div>

      {/* Search Section */}
      <div>
        <InputSubmit
          buttonLabel={"Search"}
          containerClassName={"search-container"}
          inputClassName={"search-input"}
          buttonClassName={"search-button"}
        />
      </div>

      {/* User Section */}

      <div className="navbarRightContainer">
        <Link
          to={isLoggedIn ? `/profile/${user.id}` : "/login"}
          style={{ textDecorationLine: "none" }}
        >
          <UserCard
            containerClassName={"user-container"}
            avatarContainerClassName={"user-avatar-container"}
            userInfoContainerClassName={"user-info-container"}
          >
            {isLoggedIn ? user.username || "Bob" : "Login"}
          </UserCard>
        </Link>

        <Link to={"/cart"} style={{ textDecorationLine: "none" }}>
          <FaCartShopping className="cart-icon" color="white" size={"32px"} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
