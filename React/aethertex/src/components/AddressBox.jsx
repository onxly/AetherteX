import "../stylesheets/AddressBox.css"

function AddressBox(addr){
    return(
    <div className="AddrBox">
        <div>
            <u>{addr.Name}</u>
            <address>{addr.Street}, {addr.City}, {addr.Postal}</address>
            <em>{addr.Phone}</em>
        </div>
        <div className="Addrbuttons">
            <button className="editadress">Edit</button>
            <button className="editadress">Remove</button>
            <button className="editadress">Set as default</button>
        </div>                          
    </div>
    );
} export default AddressBox