function checkout()
{
    return(
    <>
    <div className="Displaycheckout">
        <div className="AddressSection">
            <h1>Delivery address</h1>
                <div className="AddressOption">
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
                    
                    <button>add adress</button>
                    <label>pop up page</label>

                    <button>Deliver to this address</button>
        </div>
        <div className="PaymentOptions">
            <h1 className="heading">Payment options</h1>
                <div className="Paymentlayout">
                    <div className="nameandnum">
                        <label>Card holder name</label>
                        <input className="Paymenttoptxt" placeholder="type you name" type:Text></input>
                        <label>Card number</label>
                        <input className="Paymenttoptxt" placeholder="type you number" type:Text></input>
                    </div>
                    <div className="exp-cvv-Items">
                        <div className="Exp-Items">
                            <label>EXP</label>
                            <input className="Paymentbottxt" type:Text></input>
                        </div>

                        <div className="CVV-Items">
                            <label>CVV</label>
                            <input className="Paymentbottxt" type:Text></input>
                        </div>
                    </div>
                </div>  
        </div>

        <input type="text"></input>
        <button>aplly cuppon</button>
        <button className="Paymentbtn">pay now</button>
    </div>

    </>);
}
export default checkout