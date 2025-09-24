import React, { useContext } from "react";
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useContext(AuthContext);
  const APILink = "http://localhost:3000/AeatherAPI/";

  // Initialize cart from localStorage if present
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : null;
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    async () => {
      if (cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        localStorage.removeItem("cart");
      }
    };
  }, [cart]);

  async function getCart() {
    try {
      const res = await axios.get(APILink + "cart/" + user.userId);
      if (res.status === 200) {
        setCart(res.data);
      }
    } catch (ex) {
      console.log("ERROR: <GET_CART>: " + JSON.stringify(ex));
    }
  }

  async function addToCart(productId, quantity) {
    const req = {
      productId,
      quantity,
    };
    try {
      const res = await axios.post(APILink + "cart/" + user.userId, req);
      if (res.status === 200) {
        await getCart();
      }
    } catch (ex) {
      console.log("ERROR: <ADD_TO_CART>: " + JSON.stringify(ex));
    }
  }

  async function removeFromCart(productId, quantity) {
    const req = {
      productId,
      quantity,
    };
    try {
      const res = await axios.delete(APILink + "cart/" + user.userId, req);
      if (res.status === 200) {
        await getCart();
      }
    } catch (ex) {
      console.log("ERROR: <REMOVE_FROM_CART>: " + JSON.stringify(ex));
    }
  }

  async function clearCart() {
    try {
      const res = await axios.delete(APILink + "cart/clear/" + user.userId);
      if (res.status === 200) {
        await getCart();
      }
    } catch (ex) {
      console.log("ERROR: <REMOVE_FROM_CART>: " + JSON.stringify(ex));
    }
  }

  return (
    <CartContext.Provider
      value={{
        getCart,
        addToCart,
        removeFromCart,
        clearCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
