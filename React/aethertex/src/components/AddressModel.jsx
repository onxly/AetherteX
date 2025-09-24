import { useState,useContext, useEffect } from "react";
import AddressBox from "../components/AddressBox";
import { AuthContext } from "../contexts/AuthContext";
import {createAddress,getAllAddress} from "../jsfunctions/alljsfunctions";
import "../stylesheets/AddressBox.css";

function AddressModel({Addr= []}){

    const { isLoggedIn, setIsLoggedIn, user, cart = [] } = useContext(AuthContext);

    const [line1,setLine1]=useState("");
    const [line2,setLine2]=useState("");
    const [city,setCity]=useState("");
    const [region,setRegion]=useState("");
    const [postalCode,setPostalCode]=useState("");
    const [addresses,setaddress]=useState(Addr||[]);

    useEffect(()=>
    {
        async function loadAddress()
        {
            const updatedaddresses=await getAllAddress(user.userId);
            setaddress(updatedaddresses);
        }
        loadAddress();
    },[user.userId])
    
    async function setNewAddress()
        {
            const res=await createAddress(user.userId,line1,line2,city,region,postalCode);
            const updatedaddresses=await getAllAddress(user.userId);
            setaddress(updatedaddresses);
        }

    const [showModal, setShowModal] = useState(false);

    return(
        <>
        {showModal?(
            <section className="addAddressPage">

                <h2>Address Details</h2>

                <div className="addressDetailBox">
                    <h3>Line1</h3>
                    <input type="text" id="Line1" onChange={e => setLine1(e.target.value)}></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="addressDetailBox">
                    <h3>Line2</h3>
                    <input type="text" id="Line2" onChange={e => setLine2(e.target.value)}></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="addressDetailBox">
                    <h3>City</h3>
                    <input type="text" id="City" onChange={e => setCity(e.target.value)}></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="addressDetailBox">
                    <h3>Region</h3>
                    <input type="text" id="Region" onChange={e => setRegion(e.target.value)}></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="addressDetailBox">
                    <h3>Postal</h3>
                    <input type="text" id="Postal" onChange={e => setPostalCode(e.target.value)}></input>
                    <button className="btnEditDet">Edit</button>
                </div>
                
                <button className="btnSave" onClick={()=> {
                                                        setNewAddress();
                                                        setShowModal(false)
                                                    }}>Save Changes</button>
                
            </section>

            
        ):(
            <section className="AddressPage">
            <h2>Address Book</h2>
            {addresses.map(address => (
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
        )}

            
        </>
       
    );
} export default AddressModel