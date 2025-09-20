import "../stylesheets/purchaseProduct.css";
import { Link } from "react-router";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";


function PurchaseProduct({Product}) {
    const { cart = [], addCart } = useContext(AuthContext);
    const [quantity, setQuantity] = useState(1);

    let stockInfo;
    if (Product.Stock > 0) {
        stockInfo = <span>
                        <span className='InStock'>
                            Only {Product.Stock} left
                        </span>
                    </span>;
    } else {
        stockInfo = <span className='OutStock'>Out of Stock</span>;
    }
    console.log("Product ID:", Product.ProductId, typeof Product.ProductId);
    console.log("Parsed Product ID:", parseInt(Product.ProductId), typeof parseInt(Product.ProductId))
    return (
        <div className="purchase-product">
            <div>{stockInfo}</div>
            <b>R {Product.Price}</b>
            <div className='QuantitySec'>
                Quantity:
                <input className="txtQuantity" 
                        type="number" 
                        min="1" 
                        max={Product.Stock} 
                        defaultValue={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                />
            </div>

            <Link to={`/checkout/${Product.ProductId}`} className="link">
                <button className="btnBuy">
                    Buy Now
                </button>
            </Link>
            <button className="btnAdd" 
                onClick={() => 
                            
                            addCart(parseInt(Product.ProductId), Product.Image1, Product.Title, Product.Price, true, parseInt(quantity))
                        }>
                Add to Cart
            </button>
        </div>
    );
}
export default PurchaseProduct