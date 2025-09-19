import imgProfile from "../assets/ProfilepageIcons/PersonalIcon.png";
import imgAddress from "../assets/ProfilepageIcons/AdressbookIcon.png";
import imgOrder from "../assets/ProfilepageIcons/OrdersIcon.png";
import imgInvoice from "../assets/ProfilepageIcons/InvoiceIcon.png";
import AddressModel from "../components/AddressModel.jsx";
import DetailsModel from "../components/DetailsModel.jsx";
import OrdersModel from "../components/OrdersModel.jsx";
<<<<<<< HEAD

=======
import InvoiceModel from "../components/InvoiceModel.jsx"
>>>>>>> 6380522e3c3d47086bbfed0d9cb6cee7f4d2e22d
import "../stylesheets/profile.css";
import { useState } from "react";

import {getAddresses} from "../jsfunctions/alljsfunctions.js";

function Profile() {
  const { isLoggedIn, setIsLoggedIn, user, cart, login } = useContext(AuthContext);

  document.title = "Profile | AetherteX";
  const [activeModel, setActiveModel] = useState("details"); 


  [AddrList,setAddrList]=useState();
  async function setAddr()
  {
<<<<<<< HEAD
      const actAddrlist= await getAddresses();
      setAddrList(actAddrlist);
=======
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
>>>>>>> 6380522e3c3d47086bbfed0d9cb6cee7f4d2e22d
  }

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
<<<<<<< HEAD
            {activeModel === "details" && <DetailsModel User={user}/>}
            {activeModel === "address" && <AddressModel Addr={AddrList}/>}
            {activeModel === "orders" && <OrdersModel Orders={Orderdet} Addr={Addr}/>}
=======
            {activeModel === "details" && <DetailsModel User={User}/>}
            {activeModel === "address" && <AddressModel Addr={Addr}/>}
            {activeModel === "orders" && <OrdersModel Orders={orders} Addr={Addr}/>}
            {activeModel === "invoices" && <InvoiceModel Orders={orders} Addr={Addr}/>}
>>>>>>> 6380522e3c3d47086bbfed0d9cb6cee7f4d2e22d
        </div>
        
    </section>    
  );

  
}

export default Profile;
