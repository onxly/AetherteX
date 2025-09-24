import { useState,useContext, useEffect } from "react";
import AddressBox from "../components/AddressBox";
import { AuthContext } from "../contexts/AuthContext";
import {createAddress,getAllAddress} from "../jsfunctions/alljsfunctions";
import "../stylesheets/AddressBox.css";

function AddressModel({Addr= []}){

    const { isLoggedIn, setIsLoggedIn, user, cart = [] } = useContext(AuthContext);

    const [line1, setLine1]=useState("");
    const [line2, setLine2]=useState("");
    const [city, setCity]=useState("");
    const [region, setRegion]=useState("");
    const [postalCode, setPostalCode]=useState("");
    const [addresses, setaddress]=useState(Addr||[]);
    const [bChange, setChange] = useState(true);
    const [bAdd, setbAdd] = useState(false);

    useEffect(()=>
    {
        async function loadAddress()
        {
            const updatedaddresses=await getAllAddress(user.userId);
            setaddress(updatedaddresses);
            setChange(false);
        }
        if (bChange === true)
        {
            loadAddress();
        }
    },[bChange])
    
    useEffect(() => {
        async function setNewAddress() {
            const uID = parseInt(user.userId);
            try {
            const res = await createAddress(uID, line1, line2, city, region, postalCode);
            setChange(true);
            setbAdd(false);
            alert("Address added successfully");
            } catch (err) {
            if (err.response) {
                if (err.response.status === 404) {
                alert("Couldd not add (404)");
                } else {
                alert(`Server error: ${err.response.status}`);
                }
            } else {
                alert(`Network error: ${err.message}`);
            }
            }
        }

        if (bAdd === true) {
            setNewAddress();
        }
        }, [bAdd]);

    const [showModal, setShowModal] = useState(false);

    return(
        <>
        {showModal?(
            <section className="addAddressPage">

                <h2>Address Details</h2>

                <div className="addressDetailBox">
                    <h3>Line1</h3>
                    <input type="text" id="Line1" onChange={(e) => setLine1(e.target.value)}></input>
                </div>

                <div className="addressDetailBox">
                    <h3>Line2</h3>
                    <input type="text" id="Line2" onChange={e => setLine2(e.target.value)}></input>
                </div>

                <div className="addressDetailBox">
                    <h3>City</h3>
                    <input type="text" id="City" onChange={e => setCity(e.target.value)}></input>
                   
                </div>

                <div className="addressDetailBox">
                    <h3>Region</h3>
                    <input type="text" id="Region" onChange={e => setRegion(e.target.value)}></input>
                
                </div>

                <div className="addressDetailBox">
                    <h3>Postal</h3>
                    <input type="text" id="Postal" onChange={e => setPostalCode(e.target.value)}></input>
                </div>
                
                <button className="btnSave" onClick={()=> {

                                                        setbAdd(true);
                                                        setShowModal(false)
                                                    }}>Save Changes</button>
                
            </section>

            
        ):(
            <section className="AddressPage">
            <h2>Address Book</h2>
            {addresses.map(address => (
                <AddressBox 
                    key={address.addressId} 
                    address={address} 
                    setChange={setChange}
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