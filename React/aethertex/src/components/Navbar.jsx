import React from "react";
import "./Navbar.css";
import Input from "@mui/joy/Input";

function Navbar() {
  return (
    <div className="container">
      <div className="Logo">
        <h1>Logo</h1>
      </div>
      <div>
        <Input placeholder="Search" />
      </div>
      <div className="user-container">
        <h1>User</h1>
      </div>
    </div>
  );
}

export default Navbar;
