import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
