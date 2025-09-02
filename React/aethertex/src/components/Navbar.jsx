import React, { useContext } from "react";
import { Link } from "react-router";
import InputSubmit from "./InputSubmit";
import UserCard from "./UserCard";
import "../stylesheets/Navbar.css";
import { AuthContext } from "../contexts/AuthContext";
import Icon from "../assets/AetherteXIcon.png";
import CartIcon from "./CartIcon";

function Navbar() {
  const { user, isLoggedIn, login, logout, register } = useContext(AuthContext);
  return (
    <div className="navbar-container">
      {/* Logo Section */}
      <div className="logo">
        <Link to={"/"} style={{ textDecorationLine: "none" }}>
          <img
            className="imgAetherteX"
            src={Icon}
            alt="AetherteX Icon"
            height={35}
            width={115}
          />
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

      {/* User and Cart */}
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
          <CartIcon iconColor={"white"} numItems={17} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
