import "../stylesheets/profile.css";
import AddressBox from "../components/AddressBox";

function AddressModel({Addr}){
    return(
        <section className="AddressPage">
            <h2>Address Book</h2>
            {Addr.map(address => (
                <AddressBox 
                    key={address.id} 
                    Name={address.Name} 
                    Street={address.Street} 
                    City={address.City} 
                    Postal={address.Postal} 
                    Phone={address.Phone} 
                />
            ))}
            <button className="btnAddAddr">Add</button>
        </section>
    );
} export default AddressModel