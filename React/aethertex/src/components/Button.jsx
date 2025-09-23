import React from "react";

function Button({ children, buttonClassName, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        height: 40,
        width: 90,
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      className={buttonClassName}
    >
      {children}
    </button>
  );
}

export default Button;
