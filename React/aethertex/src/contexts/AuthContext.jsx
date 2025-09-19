import React, { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
<<<<<<< HEAD
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  
  const apilink="http://localhost:3000/AeatherAPI/";
=======
  const [user, setUser] = useState({username: "Boyzn", LPoints: 142, IsPremium: false, name: "Boyzn", surname: "Fem", email: "example@gmail.com", phone: "0123456789", password: "example"});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [cart, setCart] = useState({numOf: 4});

>>>>>>> 6380522e3c3d47086bbfed0d9cb6cee7f4d2e22d
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
        const res=await axios.post(apilink+"users/login",userdata);
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

  return (
    <>
    <AuthContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, login, logout, register }}>
      
      {children}
    </AuthContext.Provider>
    </>
  );
}
