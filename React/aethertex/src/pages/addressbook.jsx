import { useState } from "react";
import AddressBox from "../components/AddressBox";
import "../stylesheets/AddressBook.css"

function addressbook ()
{
    let Addr = [
        {id: 1, Name: "Boyzn", Street: "1234 The streets", City: "Mahikeng", Postal: 2732, Phone: "0123456789"},
        {id: 2, Name: "Boyzn1", Street: "56789 The streets1", City: "Mahikeng1", Postal: 2732, Phone: "0123456789"},
        {id: 3, Name: "Boyzn2", Street: "1111 The streets2", City: "Mahikeng2", Postal: 2732, Phone: "0123456789"}
    ]

    return(
    <div className="AddressPage">
        <h2>Address Book</h2>
        {Addr.map(Addr => (
            <AddressBox key={Addr.id} Name={Addr.Name} Street={Addr.Street} City={Addr.City} Postal={Addr.Postal} Phone={Addr.Phone}/>
        ))}
        <button className="btnAddAddr">Add</button>
    </div>

    );
}
export default addressbook