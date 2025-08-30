import "../stylesheets/purchaseProduct.css";

function purchaseProduct(info) {
    let stockInfo;
    if (info.stock > 0) {
        stockInfo = <span>
                        <span className='InStock'>
                            Only {info.stock} left
                        </span>
                    </span>;
    } else {
        stockInfo = <span className='OutStock'>Out of Stock</span>;
    }

    return (
        <div className="purchase-product">
            <div>{stockInfo}</div>
            <b>R {info.price}</b>
            <div className='QuantitySec'>
                Quantity: 
                <input type="number" min="1" max={info.stock} defaultValue="1"/>
            </div>
            <button className="btnBuy">
                Buy Now
            </button>
            <button className="btnAdd">
                Add to Cart
            </button>
        </div>
    );
}
export default purchaseProduct