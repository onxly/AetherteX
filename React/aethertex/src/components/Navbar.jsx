import React from "react";
import { Avatar } from "@mui/joy";
import Button from "./Button";
import Input from "./Input";
import UserCard from "./UserCard";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="navbar-container">
      {/* Logo Section */}
      <div className="logo">
        <h1>AetherteX</h1>
      </div>

      {/* Search Section */}
      <div>
        <Input
          buttonLabel={"Search"}
          containerClassName={"search-container"}
          inputClassName={"search-input"}
          buttonClassName={"search-button"}
        />
      </div>

      {/* User Section */}
      <div className="navbarRightContainer">
        <UserCard
          containerClassName={"user-container"}
          avatarContainerClassName={"user-avatar-container"}
          userInfoContainerClassName={"user-info-container"}
        />
        <FaCartShopping className="cart-icon" color="white" size={"32px"} />
      </div>
    </div>
  );
}

export default Navbar;
