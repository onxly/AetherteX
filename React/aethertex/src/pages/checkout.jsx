function checkout()
{
    return
    <>
    <div className="PGSection">
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

        <input type="text"></input>
        <button>aplly cuppon</button>
        <button className="Paymentbtn">pay now</button>
        </div>


        <div className="Paymentoptions">
                    <h1>Delivery address</h1>
                    <input type="radio" name="delivery adress 1" value="1">
                    </input>
                    <input type="radio" name="delivery adress 2" value="2">
                    </input>
                    <input type="radio" name="delivery adress 3" value="3">
                    </input>
                    
                    <label>add adress</label>
                    <label>pop up page</label>

                    <button>Deliver to this address</button>

        </div>
    </div>
    </>;
}
export default checkout