import "../stylesheets/AddressBox.css";

export function AddressBox(addr){
    
    return(
    <div className="AddrBox">
        <div>
            <u>{addr.Name}</u>
            <address>{addr.Street}, {addr.City}, {addr.Postal}</address>
            <em>{addr.Phone}</em>
            <p>{animes[0].title}</p>
        </div>
        <div className="Addrbuttons">
            <button className="editadress">Edit</button>
            <button className="editadress">Remove</button>
            <button className="editadress">Set as default</button>
            <button className="getanime" onClick={async ()=> await getAnimes()}>Get Animes</button>
        </div>                          
    </div>
    );
} export default AddressBox