import "../stylesheets/profile.css";
import { useState,useContext, useEffect } from "react";
import AddressBox from "../components/AddressBox";
import { AuthContext } from "../contexts/AuthContext";
import {createAddress} from "../jsfunctions/alljsfunctions"

function AddressModel({Addr}){

    const { isLoggedIn, setIsLoggedIn, user, cart = [] } = useContext(AuthContext);

    const [line1,setLine1]=useState();
    const [line2,setLine2]=useState();
    const [city,setCity]=useState();
    const [region,setRegion]=useState();
    const [postalCode,setPostalCode]=useState();

    useEffect(()=>
    {
        async function setNewAddress()
        {
            const res=await createAddress(user.id,line1,line2,City,region,postalCode)
            return res.data;
        }
        setNewAddress();
    },[])

    const [showModal, setShowModal] = useState(false);

    return(

        <>
        <section className="AddressPage">
            <h2>Address Book</h2>
            {Addr.map(address => (
                <AddressBox 
                    key={address.id} 
                    Name={address.name} 
                    Line1={address.line1} 
                    Line2={address.line2} 
                    City={address.city} 
                    Postal={address.postalCode} 
                    Phone={address.phone} 
                />
            ))}
            <button className="btnAddAddr" onClick={() => setShowModal(true)} >
                Add an address
            </button>
        </section>
            
        {showModal && (<section className="addAddressPage">

                <h2>Address Details</h2>

                <div className="addressDetailBox">
                    <h3>Reciever name</h3>
                    <input type="text" defaultValue={address.name} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="addressDetailBox">
                    <h3>Street</h3>
                    <input type="text" defaultValue={address.line1} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="addressDetailBox">
                    <h3>Street</h3>
                    <input type="text" defaultValue={address.line2} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="addressDetailBox">
                    <h3>City</h3>
                    <input type="text" defaultValue={address.city} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="addressDetailBox">
                    <h3>Postal</h3>
                    <input type="email" defaultValue={address.postalCode} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="addressDetailBox">
                    <h3>Phone</h3>
                    <input type="password" defaultValue={address.phone} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>
                
                <button className="btnSave">Save Changes</button>
            </section>)}
        </>
    );
} export default AddressModel