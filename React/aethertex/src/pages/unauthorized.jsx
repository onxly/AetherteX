// src/pages/unauthorized.jsx
import React from "react";
import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#1a1a1a",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>403</h1>
      <p style={{ fontSize: "20px", marginBottom: "20px" }}>
        You don’t have permission to access this page.
      </p>
      <Link
        to="/"
        style={{
          padding: "10px 20px",
          background: "#007bff",
          borderRadius: "8px",
          textDecoration: "none",
          color: "white",
        }}
      >
        Go Home
      </Link>
    </div>
  );
}

export default Unauthorized;
