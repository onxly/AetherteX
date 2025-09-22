import React,{ useState } from "react";
import { Link, UNSAFE_useFogOFWarDiscovery } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";

import '../stylesheets/cart.css';
function Cart() {
  document.title = "Cart | AetherteX";
  const { isLoggedIn, cart =[], setCart } = useContext(AuthContext);
   
  function increaseCount(id) {
    setCart
    (
      cart.map
      (
        item=>
        {
          if(item.id==id)
          {
            return {...item, Quantity :item.Quantity+1}
          }
          return item;
        }
      )
    )
  }

    function decreaseCount(id) {
    setCart
    (
      cart.map
      (
        item=>
        {
          if(item.id==id)
          {
            return{...item, Quantity: item.Quantity > 0 ? item.Quantity - 1 : 0 }
          }
          return item;
        }
      )
    )
  }
  function removeItem(id)
  {
    setCart
    (
      cart.filter
      (
        item=>item.id!=id
      )
    )
  }

  {/*calculations for billing*/}
  const subtotal = cart.reduce((acc, item) => acc + item.Price * item.Quantity, 0);
  const DeliveryFee = subtotal > 0 ? 100 : 0;
  const total = subtotal > 5100 ? subtotal : subtotal - DeliveryFee;
  const totalItems = cart.reduce((acc, item) => acc + item.Quantity, 0);

  return (
  <section className="CartSec" >
      <div className="CartHeading">
        {isLoggedIn?(
          <h1>Cart - {totalItems}</h1>
        ):(
          <h1>Cart</h1>
        )}
      </div>
        
    <div className="items">
    {cart.length !== 0 && isLoggedIn ?
    (
        cart.map
        (
            item =>
            {
                return <div key={item.id} className="cartItem">
                    <img className="itemImage" src={"/PCS/"+item.Img} width={200} height={200}/>

                    <div className="itemDetails" >
                        <h3>{item.Title}</h3>
                        {item.Stock?(
                          <em>In stock</em>
                        ):(
                          <em>Out of stock</em>
                        )}
                        <div className="IncDecStyle">
                            <span id="Price"> R {item.Price}</span>
                            <button id="decrease" className="btnIncOrDec" onClick={() => decreaseCount(item.id)}>-</button>
                            <span>{item.Quantity}</span>
                            <button id="increase" className="btnIncOrDec" onClick={() => increaseCount(item.id)}>+</button>
                        </div>

                        <span className="btnRemoveItem" onClick={() => removeItem(item.id)} ><FaTrash color="rgba(209, 166, 61, 1)"/> Remove</span>                    
                    </div>{/*items details*/}
                </div>
            }
        )
    ) 
    :
    (
        <p style={{padding:"20px", textAlign:"center",color:"black" ,backgroundColor:"tan"}}>Your cart is empty.</p>
    )}

</div>{/*left column*/}  

{isLoggedIn && cart.length !== 0?(
  <div className="billing">{/*right column*/}
            <h3>Price details</h3>
            <p>
              <label htmlFor="items" style={{marginRight:30}} >No. Items </label>
              <input id="items" value={"R "+total} className="billingInput" />
            </p>

            <p>
              <label htmlFor="savings" style={{marginRight:45}}>Savings </label>
              <input id="savings" value="R 0" className="billingInput"/>
            </p>

            <p>
              <label htmlFor="Subtotal" style={{marginRight:40}}>Subtotal </label>
              <input id="Subtotal" value={"R "+subtotal} className="billingInput"/>
            </p>

            <p>
              <label htmlFor="Delivery" style={{marginRight:15}}>Delivery fee </label>
              <input id="Delivery" value={"R "+DeliveryFee} className="billingInput"/>
            </p>

            <p>
              <b><label htmlFor="Total amount" style={{marginRight:7}}>Total Amount</label><input id="Total amount" value={"R "+total} className="billingInput"/></b></p>

            <Link to={"/checkout"} className="link">
                <button className="btnCheckout">Checkout</button>
            </Link>
            
        </div>
):(
  <div></div>
)}
      
  </section>
  );
}

export default Cart;
