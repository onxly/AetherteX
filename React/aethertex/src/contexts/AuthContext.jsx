import React, { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({username: "Boyzn", LPoints: 142, IsPremium: false, name: "Boyzn", surname: "Fem", email: "example@gmail.com", phone: "0123456789", password: "example"});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const apilink="http://localhost:3000/AeatherAPI/";
  const [cart, setCart] = useState([
    {
      id: 1,
      Img: "https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg",
      Title: "AetherteX Prometheus II i9 12900K PC Desktop",
      Price: 21000,
      Stock: true,
      Quantity: 2,
    }, 
    {
      id: 2,
      Img: "https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg",
      Title: "AetherteX Prometheus II i9 12900K PC Desktop",
      Price: 21000,
      Stock: true,
      Quantity: 1,
    },
    {
      id: 3,
      Img: "https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg",
      Title: "AetherteX Prometheus II i9 12900K PC Desktop",
      Price: 15000,
      Stock: true,
      Quantity: 2,
    }
  ]);

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
        const res=await axios.post(apilink+"users/login",userdata,{withCredentials: true});
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
        const res=await axios.post(apilink+"users/verifyadmin",userdata,{withCredentials: true});
         return res.data;
      }catch(err)
      {
        return null;
      }
  }

  /**
   * Logs out the current user
   */
  async function logout() 
  {
      const res=await axios.post(apilink+"logout",{withCredentials: true})
      return res.data;
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
  async function register(name, surname, email, phoneNumber, password,type) 
  {
    
      try{
        const res=await axios.post(apilink+"users/register",{Name:name,Surname:surname,
                                                            Email:email,PhoneNumber:phoneNumber,
                                                            Password:password, Type:"client"});
        console.log(res.data);

        return res.data;
      }catch(err)
      {
        return null;
      }
  }

  function addCart(newid, newImg, newTitle, newPrice, newStock, newQuantity)
  {    
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
