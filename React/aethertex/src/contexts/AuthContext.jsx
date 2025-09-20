import React, { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const apilink="http://localhost:3000/AeatherAPI/";
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
