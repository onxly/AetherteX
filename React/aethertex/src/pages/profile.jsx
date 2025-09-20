import imgProfile from "../assets/ProfilepageIcons/PersonalIcon.png";
import imgAddress from "../assets/ProfilepageIcons/AdressbookIcon.png";
import imgOrder from "../assets/ProfilepageIcons/OrdersIcon.png";
import imgInvoice from "../assets/ProfilepageIcons/InvoiceIcon.png";
import AddressModel from "../components/AddressModel.jsx";
import DetailsModel from "../components/DetailsModel.jsx";
import OrdersModel from "../components/OrdersModel.jsx";

import "../stylesheets/profile.css";
import { useState,useEffect } from "react";

import {getAllAddresses,getAllOrders} from "../jsfunctions/alljsfunctions.js";

function Profile() {
    const { isLoggedIn, setIsLoggedIn, user, cart, login } = useContext(AuthContext);

    document.title = "Profile | AetherteX";
    const [activeModel, setActiveModel] = useState("details"); 

    [AddrList,setAddrList]=useState();
    [OrderList,setOrderList]=useState();

    useEffect=(()=>
    {
        async function setAddr()
        {
            const actAddrlist= await getAllAddresses();
            setAddrList(actAddrlist);
        }
        setAddr();
    },[]);
  
    useEffect(()=>{
            async function setOrders()
            {
                const orderlist=await getAllOrders();
                setOrderList(orderlist);
            }
            setOrders();
    },[]);

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
            {activeModel === "details" && <DetailsModel User={user}/>}
            {activeModel === "address" && <AddressModel Addr={AddrList}/>}
            {activeModel === "orders" && <OrdersModel Orders={OrderList} Addr={Addr}/>}
        </div>
        
    </section>    
  );

  
}

export default Profile;
