import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  
  const apilink="http://localhost:3000/AeatherAPI/";

  const [user, setUser] = useState({username: "Boyzn", LPoints: 142, IsPremium: false, name: "Boyzn", surname: "Fem", email: "example@gmail.com", phone: "0123456789", password: "example"});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [cart,setCart]=useState([]);

  /*
   *Logs in a user
   *
   * @param {String} email Email address of user
   * @param {String} password Password of user
   */

  async function login(Email, Password) 
  {
    const reqdata={ 
                  email: Email, 
                  password: Password
                  } 
 
    const res=await axios.post(apilink+"users/login",reqdata)
  }

  /**
   * Logs out the current user
   */
  async function logout(Status,Message) 
  {
    const reqdata={
                    status: Status, 
                    message: Message 
                  } 

    const res=await axios.post(apilink+"users/logout",reqdata)
  }

  /*
   *Registers a user
   *
   * @param {String} name Name of user
   * @param {String} surname Last name of user
   * @param {String} username Preffered name of user
   * @param {String} email Email address of user
   * @param {String} phoneNumber Phone Number of user
   * @param {String} password Password of user
   */

async function register(Name, Surname, Email, PhoneNumber, Password) 
  {
    const reqdata={  
                    name: Name, 
                    surname: Surname, 
                    email: Email, 
                    phoneNumber:PhoneNumber, 
                    password:Password 
                  } 
 
    const res=await axios.post(apilink+"users/register",reqdata)
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
  
  }

  return (
    <AuthContext.Provider value={{ user, setUser, cart, setCart, isLoggedIn, setIsLoggedIn, login, logout, register, addCart }}>
      {children}
    </AuthContext.Provider>
  );
}