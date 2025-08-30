import '../stylesheets/index.css'

function purchaseProduct(info) {
    let stockInfo;
    if (info.stock > 0) {
        stockInfo = <span>
                        <span style={{color: "white", backgroundColor: "rgba(209, 166, 61, 1)", padding: "5px 15px 5px 15px", borderRadius: "0px 10px 10px 0px", marginRight: "5px"}}>
                            Only {info.stock} left
                        </span>
                    </span>;
    } else {
        stockInfo = <span style={{ color: "pink" }}>Out of Stock</span>;
    }

    return (
        <div className="purchase-product">
            <div>
                {stockInfo}
            </div>
            <b style={{marginTop: "10px"}}>R {info.price}</b>
            <div style={{color: "white", fontSize: "16px", marginTop: "10px"}}>
                Quantity: 
                <input type="number" min="1" max={info.stock} defaultValue="1"
                style={{width: "50px", marginLeft: "10px", borderRadius: "5px"}} />
            </div>
            <button className="buy-now"
            style={{backgroundColor: "gold", marginLeft: "10px"}}>
                Buy Now
            </button>
            <button className="add-to-cart"
            style={{backgroundColor: "#FFA41C", marginLeft: "10px"}}>
                Add to Cart
            </button>
        </div>
    );
}
export default purchaseProduct