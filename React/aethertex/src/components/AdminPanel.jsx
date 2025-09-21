import { Avatar } from "@mui/joy";
import "../stylesheets/AdminPanel.css";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function AdminPanel() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="avatar-container">
        <Avatar size="lg" />
        <span>{user.name}</span>
      </div>
    </div>
  );
}

export default AdminPanel;
