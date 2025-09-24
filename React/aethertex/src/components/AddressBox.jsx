import "../stylesheets/AddressBox.css";
import {updateAddress} from "../jsfunctions/alljsfunctions"
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function AddressBox({address={}, setChange, addressToEdit} )
{
    const { user } = useContext(AuthContext);
    
    useEffect(() => {
    async function changePass() {
    const uID = parseInt(user.userId);
    try {
      const res = await changePassword(uID, password, newPassword);
      setChange(false);
      alert("Password changed");
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          alert("Incorrect password (404)");
        } else {
          alert(`Server error: ${err.response.status}`);
        }
      } else {
        alert(`Network error: ${err.message}`);
      }
    }
  }

  if (bchangePass && bSubmit) {
    changePass();
  }
}, [password, newPassword, bchangePass, bSubmit]);

    return(       
    <div className="AddrBox">

        <div>
            <u>{user.username}</u>
            <address>{address.line1},{address.line2}, {address.city}, {address.region} , {address.postalCode}</address>
            <em>{user.phoneNumber}</em>
        </div>
        <div className="Addrbuttons">
            <button className="editadress" >Edit</button>
            <button className="editadress">Remove</button>
        </div>                          
    </div>
    );
} export default AddressBox