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

  /** *Registers a user *
   * * @param {String} name Name of user
   * * @param {String} surname Last name of user *
   * @param {String} username Preffered name of user *
   * @param {String} email Email address of user *
   * @param {String} phoneNumber Phone Number of user *
   * @param {String} password Password of user */

  async function VerifyAdmin(UserId, AdminCode) {
    const reqdata = { userId: UserId, adminCode: AdminCode };
    const res = await axios.post(apilink + "users/verifyadmin", reqdata);
  }

  async function register(Name, Surname, Email, PhoneNumber, Password) {
    const reqdata = {
      name: Name,
      surname: Surname,
      email: Email,
      phoneNumber: PhoneNumber,
      password: await hashPassword(Password),
    };
    try {
      const res = await axios.post(apilink + "users/register", reqdata);
    } catch (ex) {
      console.log("ERROR: <REGISTER>: " + JSON.stringify(ex));
    }
  }

  async function updateUser(id, Name, Email) {
    const reqdata = { name: Name, email: Email };
    const res = await axios.put(apilink + "users/update" + id, reqdata);
  }

  async function changePassword(UserId, OldPassword, NewPassword) {
    const reqdata = {
      userId: UserId,
      oldPassword: OldPassword,
      newPassword: NewPassword,
    };
    const res = await axios.put(apilink + "users/changepassword", reqdata);
  }

  async function updateLoyaltyPoints(ClientId, PointsToAdd) {
    const reqdata = { clientId: ClientId, pointsToAdd: PointsToAdd };
    const res = await axios.put(apilink + "users/loyaltypoints", reqdata);
  }
  async function getLoyaltyPoints(id) {
    const res = await axios.get(apilink + "users/loyaltypoints" + id, reqdata);
  }

  async function updatePremiumStatus(ClientId, IsPremium) {
    const reqdata = { clientId: ClientId, isPremium: IsPremium };
    const res = await axios.put(apilink + "users/premiumstatus" + id, reqdata);
  }

  function addCart(newid, newImg, newTitle, newPrice, newStock, newQuantity) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === newid);
      if (existing) {
        return prevCart.map((item) =>
          item.id === newid
            ? { ...item, Quantity: item.Quantity + newQuantity }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: newid,
            Img: newImg,
            Title: newTitle,
            Price: newPrice,
            Stock: newStock,
            Quantity: newQuantity,
          },
        ];
      }
    });
    {
      /*} const ckCart = cart.find(c => c.id === newid); if (ckCart == null) { setCart(prev => [ ...prev, { id: newid, Img: newImg, Title: newTitle, Price: newPrice, Stock: newStock, Quantity: newQuantity } ]); } */
    }
  }

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
        register,
        addCart
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
