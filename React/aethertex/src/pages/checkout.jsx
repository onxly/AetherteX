import '../stylesheets/checkout.css'
import { Link } from "react-router";


function checkout()
{
    return(
    <>
    <div className="Displaycheckout">
        
        <div className="AddressSection">
            <h1>Delivery details</h1>
                <label>Name: </label>
                <label>Phone number:</label>
                <div className="AddressOption">
                    <label>Adress:</label>
                    <label>
                        <input type="radio" name="Address" value="delivery adress 1" ></input>
                        47 Maple Crescent, Silverbrook, Westshire, 45812
                    </label>
                    <label>
                        <input type="radio" name="Address" value="delivery adress 2"></input>
                        1020 Horizon Lane, Sunvale Heights, Riverton, 90214"
                    </label>
                    <label>                    
                        <input type="radio" name="Address" value="delivery adress 3"></input>
                        89 Willowbend Avenue, Crystalford, Northport, 77106                    
                    </label>
                </div>
                <Link> 
                    <p className='newaddresslink'>Use a different adress</p>
                </Link>  

                <textarea className='txtdeliverto'></textarea>
                <button className='btndeliverto'>Deliver to this address</button>
        </div>

        <div className="PaymentInfosection">
            <h1 className="heading">Payment info</h1>
                <div className="Paymentlayout">
                    <div className="nameandnum">
                        <div className='checkoutoptlbl'>
                        <label className='Paymenttoplbl'>Card holder name</label>
                        <label className='Paymenttoplbl'>Card number</label>
                        </div>
                        <div className='checkoutopttxt'>
                        <input className="Paymenttoptxt" placeholder="type you name" type:Text></input>
                        <input className="Paymenttoptxt" placeholder="type you number" type:Text></input>
                        </div>
                    </div>
                    <div className="exp-cvv-Items">
                        <div className="Exp-Items">
                            <label className='lblcheckoutitem'>EXP</label>
                            <input className="Paymentbottxt" type:Text></input>
                        </div>

                        <div className="CVV-Items">
                            <label className='lblcheckoutitem'>CVV</label>
                            <input className="Paymentbottxt" type:Text></input>
                        </div>
                    </div>
                        <input type="text"></input>
                        <button>aplly cuppon</button>
                        <button className="Paymentbtn">pay now</button>
                </div>  
        </div>
        
    </div>

    </>);
}
export default checkout