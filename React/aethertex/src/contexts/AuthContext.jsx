import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { hashPassword } from "../functions/Secrecy";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const apilink = "http://localhost:3000/AeatherAPI/";

  // Initialize user from localStorage if present
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => !!user);
  const [cart, setCart] = useState([]);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem("user");
      setIsLoggedIn(false);
    }
  }, [user]);

  async function login(Email, Password) {
    const reqdata = { email: Email, password: Password };
    try {
      const res = await axios.post(apilink + "users/login", reqdata, {
        withCredentials: true,
      });
      if (res.status === 200) {
        setUser(res.data);
      }
    } catch (ex) {
      console.log("ERROR: <LOGIN>: " + JSON.stringify(ex));
    }
  }

  async function logout() {
    try {
      const res = await axios.post(apilink + "users/logout", {
        withCredentials: true,
      });
      if (res.status === 200) {
        setUser(null);
      }
    } catch (ex) {
      console.log("ERROR: <LOGOUT>: " + JSON.stringify(ex));
    }
  }

  // Keep your other functions (register, addCart, etc.) here as before

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        cart,
        setCart,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
