import { FaMapMarkerAlt, FaReceipt, FaBars  } from "react-icons/fa";
import "../stylesheets/profile.css";
import { useState } from "react";

function OrderDetModel({id, price, Date, Addr, products=[]}){
    
    return (
        <section className="OrderDetPage">
            <h2>Order Details</h2>
            <h3>Order #{id}</h3>
            <b>Delivery date:&nbsp; {Date}</b>
            <div className="OrdDetSec">
                <b><FaMapMarkerAlt color="rgba(209, 166, 61, 1)"/> &nbsp;Shipping Address</b>
                <p>
                    <u>{Addr.Name}</u>
                    <br />
                    <span>{Addr.Street}, {Addr.City}, {Addr.Postal}</span>
                    <br />
                    <em>{Addr.Phone}</em>
                </p>
            </div>

            <div className="OrdDetSec">
                <b><FaReceipt color="rgba(209, 166, 61, 1)"/>&nbsp; Order Summary</b>
                <p>
                    <b>NumOf Items:&#9;</b> {products.length}
                    <br />
                    <b>Delivery fee:&#9;</b> 0
                    <br />
                    <b>Discount:&#9;</b> 0
                    <br />
                    <b>Order Total:&#9;</b> {price}
                </p>
            </div>

            <div className="OrdDetSec">
                <b><FaBars color="rgba(209, 166, 61, 1)"/>&nbsp; Products</b>
                {products.map(product => (
                    <div key={product.id} className="OrderDetProduct">
                        <img className="OrderImg" alt="" src={product.imgSrc} width={100} height={100}/>
                            <div className="OrdProdDetails" >
                                <h3>{product.title}</h3>
                                <em>Price: {product.price}</em>
                                <em>Qty: {products.length}</em>                                  
                        </div>{/*items details*/}
                    </div>
                ))}
            </div>
        </section>
    );
} export default OrderDetModel