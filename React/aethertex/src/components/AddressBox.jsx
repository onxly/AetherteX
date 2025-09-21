import "../stylesheets/AddressBox.css";
import {updateAddress} from "../jsfunctions/alljsfunctions"
import { useState } from "react";

export function AddressBox(addr,Name,Street,City,Postal,Phone,addressToEdit )
{
   
   /*[clientId,setclientId]=useState();
    [line1,setline1]=useState();
    [line2,setline2]=useState();
    [city,setcity]=useState();
    [region,region]=useState();
    [postalCode,postalCode]=useState();*/

    async function updateAddr( ){

        const NewAddressID= await updateAddress(addresToEdit.ID,line1,line2,City,region,postalCode);
    }
    
    return(       
    <div className="AddrBox">

        <div>
            <address>{addr.Line1},{addr.Line2}, {addr.City}, {addr.Region} , {addr.Postal}</address>
        </div>
        <div className="Addrbuttons">
            <button className="editadress" onClick={addressToEdit}>Edit</button>
            <button className="editadress">Remove</button>
            <button className="editadress">Set as default</button>
        </div>                          
    </div>
    );
} export default AddressBox