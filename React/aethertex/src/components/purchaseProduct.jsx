import "../stylesheets/purchaseProduct.css";
import { Link } from "react-router";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";


function PurchaseProduct({Product}) {
    const { cart = [], addCart } = useContext(AuthContext);
    const [quantity, setQuantity] = useState(1);
    console.log(Product.productId, typeof(Product.productId))
    let stockInfo;
    if (Product.stock > 0) {
        stockInfo = <span>
                        <span className='InStock'>
                            Only {Product.stock} left
                        </span>
                    </span>;
    } else {
        stockInfo = <span className='OutStock'>Out of Stock</span>;
    }

    return (
        <div className="purchase-product">
            <div>{stockInfo}</div>
            <b>R {Product.price}</b>
            <div className='QuantitySec'>
                Quantity:
                <input className="txtQuantity" 
                        type="number" 
                        min="1" 
                        max={Product.stock} 
                        defaultValue={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                />
            </div>

            <Link to={`/checkout/${Product.productId}`} className="link">
                <button className="btnBuy">
                    Buy Now
                </button>
            </Link>
            <button className="btnAdd" 
                onClick={() => 
                            
                            addCart(Product.productId, Product.image1, Product.title, Product.price, true, parseInt(quantity))
                        }>
                Add to Cart
            </button>
        </div>
    );
}
export default PurchaseProduct