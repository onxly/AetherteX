import "../stylesheets/profile.css";
import AddressBox from "../components/AddressBox";
import { useState } from "react";
import {getNewAddress} from "../jsfunctions/alljsfunctions"

function AddressModel({Addr}){

    [clientId,setclientId]=useState();
    [line1,setline1]=useState();
    [line2,setline2]=useState();
    [city,setcity]=useState();
    [region,region]=useState();
    [postalCode,postalCode]=useState();

    async function addAddr(clientId,line1,line2,city,region,postalCode){
        const NewAddressID= await getNewAddress(clientId,line1,line2,City,region,postalCode);
        Addr.add(NewAddressID);
    }

    [addresToEdit,setaddresToEdit]=useState(null);

    return(
        <section className="AddressPage">
            <h2>Address Book</h2>
            {Addr.map(address => (
                <AddressBox 
                    key={address.id} 
                    ID={address.id} 
                    Name={address.Name} 
                    Street={address.Street} 
                    City={address.City} 
                    Postal={address.Postal} 
                    Phone={address.Phone}
                    addressToEdit={
                        setaddresToEdit(address)
                    }
                    />
                
            ))}
            <button className="btnAddAddr" onClick={()=>addAddr()}>Add</button>
        </section>
    );
} export default AddressModel