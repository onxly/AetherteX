import React, { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({username: "Boyzn", LPoints: 142, IsPremium: false, name: "Boyzn", surname: "Fem", email: "example@gmail.com", phone: "0123456789", password: "example"});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const apilink="http://localhost:3000/AeatherAPI/";
  const [cart, setCart] = useState([]);

  /**
   *Logs in a user
   *
   * @param {String} email Email address of user
   * @param {String} password Password of user
   */
  async function login(email, password) 
  {
      try{
        const userdata={Email:email,
                        Password:password };
        const res=await axios.post(apilink+"users/login",userdata,{withCredentials:true });
         return res.data;
      }catch(err)
      {
        return null;
      }
  }

  async function verifyAdmin(email, password) 
  {
      try{
        const userdata={Email:email,
                        Password:password };
        const res=await axios.post(apilink+"users/verifyadmin",userdata);
         return res.data;
      }catch(err)
      {
        return null;
      }
  }

  /**
   * Logs out the current user
   */
  function logout() 
  {
    setUser(null);
  }

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
  async function register(name, surname, email, phoneNumber, password) 
  {
    
      try{
        const res=await axios.post(apilink+"users/register",{Name:name,Surname:surname,
                                                            Email:email,PhoneNumber:phoneNumber,
                                                            Password:password});
        console.log(res.data);

        return res.data;
      }catch(err)
      {
        return null;
      }
  }

  function addCart(newid, newImg, newTitle, newPrice, newStock, newQuantity)
  {  
    if (!newid) {
    console.error("Cart item missing ID:", {newid, newTitle});
    return;
  }  
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === newid);

      if (existing) {
        return prevCart.map(item =>
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
            Quantity: newQuantity
          }
        ];
      }
    });
    {/*}
      const ckCart = cart.find(c => c.id === newid);

      if (ckCart == null)
      {
        setCart(prev => [
          ...prev,
          {
            id: newid,
            Img: newImg,
            Title: newTitle,
            Price: newPrice,
            Stock: newStock,
            Quantity: newQuantity
          }
        ]);
      }
    */}
  }

  return (
    <AuthContext.Provider value={{ user, setUser, cart, setCart, isLoggedIn, setIsLoggedIn, login, logout, register, addCart }}>
      {children}
    </AuthContext.Provider>
  );
}
