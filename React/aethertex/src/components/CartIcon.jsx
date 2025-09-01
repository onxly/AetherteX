import "../stylesheets/CartIcon.css";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

export default function CartIcon({ numItems, iconColor, numColor, iconSize }) {
  return (
    <div className="cart-wrap">
      <FaCartShopping
        className="cart-icon"
        color={iconColor || "white"}
        size={iconSize || "100px"}
      />

      {numItems > 0 && (
        <span className="cart-badge" style={{ color: numColor || "white" }}>
          {numItems > 99 ? "99+" : numItems}
        </span>
      )}
    </div>
  );
}
