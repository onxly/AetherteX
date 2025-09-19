import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({username: "Boyzn", LPoints: 142, IsPremium: false, name: "Boyzn", surname: "Fem", email: "example@gmail.com", phone: "0123456789", password: "example"});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [cart, setCart] = useState({numOf: 4});

  /**
   *Logs in a user
   *
   * @param {String} email Email address of user
   * @param {String} password Password of user
   */
  function login(email, password) {}

  /**
   * Logs out the current user
   */
  function logout() {}

  /**
   *Registers a user
   *
   * @param {String} name Name of user
   * @param {String} surname Last name of user
   * @param {String} username Preffered name of user
   * @param {String} email Email address of user
   * @param {String} phoneNumber Phone Number of user
   * @param {String} password Password of user
   */
  function register(name, surname, username, email, phoneNumber, password) {}

  return (
    <AuthContext.Provider value={{ user, setUser, cart, setCart, isLoggedIn, setIsLoggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
