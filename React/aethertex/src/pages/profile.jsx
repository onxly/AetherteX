import AddressBox from "../components/AddressBox";
import imgProfile from "../assets/ProfilepageIcons/PersonalIcon.png";
import imgAddress from "../assets/ProfilepageIcons/AdressbookIcon.png";
import imgOrder from "../assets/ProfilepageIcons/OrdersIcon.png";
import imgInvoice from "../assets/ProfilepageIcons/InvoiceIcon.png";
import "../stylesheets/profile.css";
import { useState } from "react";

function Profile() {
    document.title = "Profile | AetherteX";
    const [AddressModel, setAddrModel] = useState(false);
    const [DetailssModel, setDetModel] = useState(false);
    const [OrderModel, setOrdModel] = useState(false);

    let Addr = [
        {id: 1, Name: "Boyzn", Street: "1234 The streets", City: "Mahikeng", Postal: 2732, Phone: "0123456789"},
        {id: 2, Name: "Boyzn1", Street: "56789 The streets1", City: "Mahikeng1", Postal: 2732, Phone: "0123456789"},
        {id: 3, Name: "Boyzn2", Street: "1111 The streets2", City: "Mahikeng2", Postal: 2732, Phone: "0123456789"}
    ]

    let User = {Username: "Boyzn", FirstName: "Orefemetse", LastName: "Mokotedi", Email: "example@gmail.com", Phone: "0123456789", Password: "example"};
    
    let Orders = {id: 1, Date: "01-05-2025", TotalPrice: 10200}

  return (
    <section className="ProfileSec" id="Profile">
        <div className="ProfileNav">
            <h1>My Account</h1>
            <div className="ProfileItem" onClick={() => setDetModel(true)}>
                <img src={imgProfile} alt="Profile image" width={50} height={50}/>
                <span>Profile Details</span>
            </div>

            <div className="ProfileItem" onClick={() => setAddrModel(true)}>
                <img src={imgAddress} alt="Address image" width={50} height={50}/>
                <span>Addresses</span>
            </div>

            <div className="ProfileItem">
                <img src={imgOrder} alt="Order image" width={50} height={50}/>
                <span>Orders</span>
            </div>

            <div className="ProfileItem">
                <img src={imgInvoice} alt="Order image" width={50} height={50}/>
                <span>Invoices</span>
            </div>
        </div>

        {AddressModel && (
            <div className="AddressPage">
                <h2>Address Book</h2>
                {Addr.map(Addr => (
                    <AddressBox key={Addr.id} Name={Addr.Name} Street={Addr.Street} City={Addr.City} Postal={Addr.Postal} Phone={Addr.Phone}/>
                ))}
                <button className="btnAddAddr">Add</button>
            </div>
        )}

        {DetailssModel && (
            <div className="DetailsPage">
                <h2>Personal Details</h2>

                <div className="DetailBox">
                    <h3>Username</h3>
                    <input type="text" defaultValue={User.Username} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>First Name</h3>
                    <input type="text" defaultValue={User.FirstName} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>Last Name</h3>
                    <input type="text" defaultValue={User.LastName} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>Email</h3>
                    <input type="email" defaultValue={User.Email} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>Password</h3>
                    <input type="password" defaultValue={User.Password} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>
                <button className="btnSave">Save Changes</button>
            </div>
        )}

        {OrderModel && (
            <div>
                <h2>Orders</h2>
                <span>Delivered </span>
            </div>
        )}
    </section>    
  );

  
}

export default Profile;
