import "../stylesheets/profile.css";
import { useState,useContext, useEffect } from "react";
import AddressBox from "../components/AddressBox";
import { AuthContext } from "../contexts/AuthContext";
import {createAddress} from "../jsfunctions/alljsfunctions"

function AddressModel({Addr}){

    const { isLoggedIn, setIsLoggedIn, user, cart = [] } = useContext(AuthContext);

    const [line1,setline1]=useState();
    const [line2,setline2]=useState();
    const [city,setcity]=useState();
    const [region,setregion]=useState();
    const [postalCode,setpostalCode]=useState();

    async function setNewAddress()
        {
            const res=await createAddress(user.id,line1,line2,city,region,postalCode);
        }    
            
    const [showModal, setShowModal] = useState(false);
    const [lockline1input,setlockline1input]=useState(true);
    const [lockline2input,setlockline2input]=useState(true);
    const [lockCityinput,setlockCityinput]=useState(true);
    const [lockregioninput,setlockregioninput]=useState(true);
    const [lockpostalinput,setlockpostalinput]=useState(true);


    return(

        <>
            
        {showModal? (<section className="addAddressPage">

                <h2>Address Details</h2>

                <div className="addressDetailBox">
                    <h3>line1</h3>
                    <input type="text" onChange={(e) => setline1(e.target.value)} defaultValue={Addr.line1} disabled={lockline1input}></input>
                    <button className="btnEditAddressDet" onClick={()=>setlockline1input(false)}>Edit</button>
                </div>

                <div className="addressDetailBox">
                    <h3>line2</h3>
                    <input type="text" onChange={(e) => setline2(e.target.value)} defaultValue={Addr.line2} disabled={lockline2input}></input>
                    <button className="btnEditAddressDet" onClick={()=>setlockline2input(false)}>Edit</button>
                </div>

                <div className="addressDetailBox">
                    <h3>City</h3>
                    <input type="text" onChange={(e) => setcity(e.target.value)} defaultValue={Addr.City} disabled={lockCityinput}></input>
                    <button className="btnEditAddressDet" onClick={()=>setlockCityinput(false)}>Edit</button>
                </div>

                <div className="addressDetailBox">
                    <h3>region</h3>
                    <input type="text" onChange={(e) => setregion(e.target.value)} defaultValue={Addr.region} disabled={lockregioninput}></input>
                    <button className="btnEditAddressDet" onClick={()=>setlockregioninput(false)}>Edit</button>
                    
                </div>

                <div className="addressDetailBox">
                    <h3>postal code</h3>
                    <input type="email" onChange={(e) => setpostalCode(e.target.value)} defaultValue={Addr.postal} disabled={lockpostalinput}></input>
                    <button className="btnEditAddressDet" onClick={()=>setlockpostalinput(false)}>Edit</button>
                </div>

                <button className="btnSaveEdits" onClick={() => {
                                                                setNewAddress();
                                                                setShowModal(false);
                                                            }}>Save Changes</button>
            </section>
            ):(
                <section className="AddressPage">
            <h2>Address Book</h2>
            {Addr.map(address => (
                <AddressBox 
                    key={address.id} 
                    Line1={address.line1} 
                    Line2={address.line2} 
                    City={address.city} 
                    Region={address.region}
                    Postal={address.postal} 
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

