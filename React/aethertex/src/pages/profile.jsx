import imgProfile from "../assets/ProfilepageIcons/PersonalIcon.png";
import imgAddress from "../assets/ProfilepageIcons/AdressbookIcon.png";
import imgOrder from "../assets/ProfilepageIcons/OrdersIcon.png";
import imgInvoice from "../assets/ProfilepageIcons/InvoiceIcon.png";
import AddressModel from "../components/AddressModel.jsx";
import DetailsModel from "../components/DetailsModel.jsx";
import OrdersModel from "../components/OrdersModel.jsx";
import InvoiceModel from "../components/InvoiceModel.jsx"
import "../stylesheets/profile.css";
import { useEffect, useState ,useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";

function Profile() {
  
    const { user} = useContext(AuthContext);
  
    document.title = "Profile | AetherteX";
    const [activeModel, setActiveModel] = useState("details"); 
    const [allAddresses,setallAddresses]=useState([]);
    const [allOrders,setallOrders]=useState([]);

    useEffect(()=>{
      async function getArrAddresses()
      {
        const arrAddresses=await getAllAddress(user.id);
        setallAddresses(arrAddresses);
      }

      async function getArrOrders()
      {
        const arrOrders=await getAllOrders(user.id)
        setallOrders(arrOrders);
      }

      if(user.id)
      {
        getArrAddresses();
        getArrOrders();
      }
      
    },[user.id]);
    
    let User = {Username: "Boyzn", FirstName: "Orefemetse", LastName: "Mokotedi", Email: "example@gmail.com", Phone: "0123456789", Password: "example"};

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
            {activeModel === "address" && <AddressModel Addr={allAddresses}/>}
            {activeModel === "orders" && <OrdersModel Orders={allOrders} Addr={allAddresses}/>}
            {activeModel === "invoices" && <InvoiceModel Orders={allOrders} Addr={allAddresses}/>}
        </div>
        
    </section>    
  );

  
}

export default Profile;