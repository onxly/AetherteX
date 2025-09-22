import "../stylesheets/AddressBox.css";
import {updateAddress} from "../jsfunctions/alljsfunctions";
import { useState } from "react";

export function AddressBox(addr,Name,line1,line2,city,postal,phone,addressToEdit )
{
   /*
    const [clientId,setclientId]=useState();
    const [line1,setline1]=useState();
    const [line2,setline2]=useState();
    const [city,setcity]=useState();
    const [region,setregion]=useState();
    const [postalCode,setpostalCode]=useState();*/

    async function setAddressUpdate()
    {
        const res=await createAddress(clientId,line1,line2,City,region,postalCode);
        return res.data;
    async function updateAddr( ){

        const NewAddressID= await updateAddress(addressToEdit.ID,Line1,Line2,City,region,postalCode);
    }
    
    return(       
    <div className="AddrBox">

        <div>
            <u>{addr.Name}</u>
            <address>{addr.line1},{addr.line2}, {addr.City}, {addr.Region} , {addr.Postal}</address>
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