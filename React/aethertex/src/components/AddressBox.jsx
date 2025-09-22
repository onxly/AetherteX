import "../stylesheets/AddressBox.css";
import {updateAddress} from "../jsfunctions/alljsfunctions"
import { useState } from "react";

export function AddressBox(addr,Name,Line1,Line2,City,Postal,Phone,addressToEdit )
{
   
   /*[clientId,setclientId]=useState();
    [line1,setline1]=useState();
    [line2,setline2]=useState();
    [city,setcity]=useState();
    [region,region]=useState();
    [postalCode,postalCode]=useState();*/

    async function updateAddr( ){

        const NewAddressID= await updateAddress(addressToEdit.ID,Line1,Line2,City,region,postalCode);
    }
    
    return(       
    <div className="AddrBox">

        <div>
            <u>{addr.Name}</u>
            <address>{addr.Line1},{addr.Line2}, {addr.City}, {addr.Region} , {addr.Postal}</address>
            <em>{addr.Phone}</em>
        </div>
        <div className="Addrbuttons">
            <button className="editadress" onClick={addressToEdit}>Edit</button>
            <button className="editadress">Remove</button>
            <button className="editadress">Set as default</button>
        </div>                          
    </div>
    );
} export default AddressBox