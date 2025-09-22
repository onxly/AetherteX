import "../stylesheets/profile.css";
import AddressBox from "../components/AddressBox";
import { useState } from "react";
import {getNewAddress} from "../jsfunctions/alljsfunctions"

function AddressModel({Addr=[]}){

    [addresToEdit,setaddresToEdit]=useState(null);

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

    const [showModal, setShowModal] = useState(false);
    
    return(
        <section className="AddressPage">
            {Addr.length!=0?(
            <div>
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
                        addressToEdit=
                        {
                            setaddresToEdit(address)
                        }
                    />
                    
                ))}
                <button className="btnAddAddr" onClick={()=>addAddr()}>Add</button>

                {showModal && (
                            <div className="WriteModel">          
                            <div className="WriteContent">
                                <span className="close" onClick={() => setShowModal(false)}>
                                    ×
                                </span>

                                <label>line1</label>
                                <input type="text" defaultValue={line1}></input>

                                <label>line2</label>
                                <input type="text" defaultValue={line2}></input>

                                <label>city</label>
                                <input type="text" defaultValue={city}></input>

                                <label>region</label>
                                <input type="text" defaultValue={region}></input>

                                <label>postalCode</label>
                                <input type="text" defaultValue={postalCode}></input>
                                
                            </div>
                            </div>
                        )}
            </div>
            ):(
                <div>
                    <label>You havent added any address yet</label>
                </div>
            )}
        </section>
    );
} export default AddressModel