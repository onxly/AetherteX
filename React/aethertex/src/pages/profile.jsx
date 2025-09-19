import imgProfile from "../assets/ProfilepageIcons/PersonalIcon.png";
import imgAddress from "../assets/ProfilepageIcons/AdressbookIcon.png";
import imgOrder from "../assets/ProfilepageIcons/OrdersIcon.png";
import imgInvoice from "../assets/ProfilepageIcons/InvoiceIcon.png";
import AddressModel from "../components/AddressModel.jsx";
import DetailsModel from "../components/DetailsModel.jsx";
import OrdersModel from "../components/OrdersModel.jsx";
import InvoiceModel from "../components/InvoiceModel.jsx"
import "../stylesheets/profile.css";
import { useState } from "react";

function Profile() {
    document.title = "Profile | AetherteX";
    const [activeModel, setActiveModel] = useState("details"); 

    let Addr = [
        {id: 1, Name: "Boyzn", Street: "1234 The streets", City: "Mahikeng", Postal: 2732, Phone: "0123456789"},
        {id: 2, Name: "Boyzn1", Street: "56789 The streets1", City: "Mahikeng1", Postal: 2732, Phone: "0123456789"},
        {id: 3, Name: "Boyzn2", Street: "1111 The streets2", City: "Mahikeng2", Postal: 2732, Phone: "0123456789"}
    ]
    let User = {Username: "Boyzn", FirstName: "Orefemetse", LastName: "Mokotedi", Email: "example@gmail.com", Phone: "0123456789", Password: "example"};
    let Orders = {id: 1, Date: "01-05-2025", TotalPrice: 10200};

    let orders = [
  {
    id: 1,
    Price: 10000,
    Date: "12-07-2025",
    Address: 1,
    Quantity: 3,
    products: [ 
      {
        id: 1,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        Quantity: 1,
      },
      {
        id: 2,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        Quantity: 2,
      },
      {
        id: 3,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        Quantity: 3,
      },
    ]
  },

  {
    id: 2,
    Price: 12000,
    Date: "13-04-2025",
    Address: 2,
    Quantity: 3,
    products: [ 
      {
        id: 1,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        Quantity: 2,
      },
      {
        id: 2,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        Quantity: 1,
      },
      {
        id: 3,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        Quantity: 3,
      },
     
    ]
  }
];


  return (
    <section className="ProfileSec" id="Profile">
        <div className="ProfileNav">
            <h1>My Account</h1>
            <div className="ProfileItem" onClick={() => setActiveModel("details")}>
                <img src={imgProfile} alt="Profile image" width={50} height={50}/>
                <span>Profile Details</span>
            </div>

            <div className="ProfileItem" onClick={() => setActiveModel("address")}>
                <img src={imgAddress} alt="Address image" width={50} height={50}/>
                <span>Addresses</span>
            </div>

            <div className="ProfileItem" onClick={() => setActiveModel("orders")}>
                <img src={imgOrder} alt="Order image" width={50} height={50}/>
                <span>Orders</span>
            </div>

            <div className="ProfileItem" onClick={() => setActiveModel("invoices")}>
                <img src={imgInvoice} alt="Order image" width={50} height={50}/>
                <span>Invoices</span>
            </div>
        </div>

        <div>
            {activeModel === "details" && <DetailsModel User={User}/>}
            {activeModel === "address" && <AddressModel Addr={Addr}/>}
            {activeModel === "orders" && <OrdersModel Orders={orders} Addr={Addr}/>}
            {activeModel === "invoices" && <InvoiceModel Orders={orders} Addr={Addr}/>}
        </div>
        
    </section>    
  );

  
}

export default Profile;
