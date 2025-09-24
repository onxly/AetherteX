import "../stylesheets/AddressBox.css";
import {updateAddress} from "../jsfunctions/alljsfunctions"
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function AddressBox({address={}, setChange, addressToEdit} )
{
    const { user } = useContext(AuthContext);

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