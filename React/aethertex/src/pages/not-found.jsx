import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1a1a1a",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "72px", fontWeight: "bold", margin: "0" }}>404</h1>
      <p style={{ fontSize: "20px", margin: "10px 0 30px" }}>
        Oops! WTF did you search??? 🚀
      </p>
      <Link
        to="/"
        style={{
          padding: "12px 24px",
          backgroundColor: "#007bff",
          borderRadius: "10px",
          textDecoration: "none",
          color: "white",
          fontSize: "18px",
          fontWeight: "500",
          transition: "background-color 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
