import RadioButtonList from "../components/RadioButtonList";
import { useParams } from "react-router-dom";
import Icon from "../assets/AetherteXIcon.png";
import { FaLock } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import "../stylesheets/checkout.css"

function checkout(info)
{
    document.title = "Checkout | AetherteX";
    const { isLoggedIn, cart =[], setCart } = useContext(AuthContext);
    const totalItems = cart.reduce((acc, item) => acc + item.Quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + item.Price * item.Quantity, 0);
    const DeliveryFee = subtotal > 0 ? 100 : 0;
    const total = subtotal > 5100 ? subtotal : subtotal - DeliveryFee;
    const currentYear = new Date().getFullYear();
    const endYear = 2035;
    const years = [];
    const radioColor = {
        color: "white",
    "&.Mui-checked": {
      color: "#c29a39",
    },
  };

    let Addr = [
        {id: 1, Name: "Boyzn", Street: "1234 The streets", City: "Mahikeng", Postal: 2732, Phone: "0123456789"},
        {id: 2, Name: "Boyzn1", Street: "56789 The streets1", City: "Mahikeng1", Postal: 2732, Phone: "0123456789"},
        {id: 3, Name: "Boyzn2", Street: "1111 The streets2", City: "Mahikeng2", Postal: 2732, Phone: "0123456789"}
    ]

    for (let y = currentYear; y <= endYear; y++) {
        years.push(y);
    }

    const { id } = useParams();
    
    return(
    <section className="ckPage">
        <div className="PGSection">
            <h2>Delivery address</h2>
            <div className="ckAddress">
                
                <RadioButtonList
                    textcolor={"white"}
                    labels={Addr.map(Addr => Addr.Name + "\n" + Addr.Street + ", " + Addr.City + ", \n" + Addr.Postal)}
                    title={""}
                    buttonColor={radioColor}
                    //onChange={handelCPUSelection}
                />

            </div>  
        </div>
    
        <div className="ckSummary">
            <img
                className="imgAetherteX"
                src={Icon}
                alt="AetherteX Icon"
                height={50}
                width={164}
            />
            <h2>Order Summary</h2>
            <b>{totalItems} items: &nbsp;</b>R {total} <br /> <br />
            <em>No coupons applied</em> <br /> <br />
            <b>To pay: &nbsp;</b> R {total} <br /> <br />
            <FaLock size={20} color="gray" /> Secure checkout
            
        </div>
        
        <div className="Paymentlayout">
                <h2 className="heading">Payments options</h2>
            <img src="https://clipground.com/images/visa-mastercard-logo-png-10.png" alt="Visa-Mastercard picture" width={100} height={33}/>
            <label>
                <b>Card holder name</b>
                <br />
                <input className="Longtext" placeholder="Type you name" type:Text></input>
            </label>
            <label>
                <b>Card number</b>
                <br />
                <input className="Longtext" placeholder="Type you number" type:Text></input>
            </label>
                
                <b className="EXPHead">Expiration date</b>
                <div className="Exp-Items">
                    <div>
                        <label>
                            <b>Month  </b>
                            <select name="slMonth" id="slMonth">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>
                            <b>Year  </b>
                            <select className="border rounded-lg p-2">
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                    {year}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>

                    <label>
                        <b>CVV  </b> 
                        <input className="Paymentbottxt" type:Text></input>
                    </label>
            <button className="btnCheck">Checkout</button>     
        </div>
    </section>
    );
}
export default checkout