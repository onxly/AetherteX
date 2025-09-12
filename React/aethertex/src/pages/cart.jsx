import React,{ useState } from "react";
import { FaTrash } from "react-icons/fa";

import '../stylesheets/cart.css';
function Cart() {
  document.title = "Cart | AetherteX";
  const[Items,setItems] = useState([
    {
      id:1,
      count:1,
      name:"AetherteX Prometheus II i9 12900K PC Desktop",
      price: 2000 ,
      image: "https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg",
    }
    ,
    {
      id:2,
      count:1,
      name: "AetherteX Prometheus II i9 12900K PC Desktop",
      price: 1000,
      image: "https://m.media-amazon.com/images/I/51mzyMImf+L._SL500_.jpg",
    }
    ,
     {
      id:3,
      count:1,
      name: "AetherteX Prometheus II i9 12900K PC Desktop",
      price: 10000,
      image: "https://m.media-amazon.com/images/I/41Zs+nz-M0L._SL500_.jpg",
    },
    {
      id:4,
       count:1,
      name:"AetherteX Athena blade 32GB",
      price: 10000,
      image: "https://m.media-amazon.com/images/I/41tlFlXd+rL._SL500_.jpg",
    },
     {
      id:5,
      count:1,
      name:"AetherteX Athena blade 32GB",
      price: 10000,
      image: "https://m.media-amazon.com/images/I/41tlFlXd+rL._SL500_.jpg",
    }
   
  ]); 
   
   

  function increaseCount(id) {
    setItems
    (
      Items.map
      (
        item=>
        {
          if(item.id==id)
          {
            return {...item, count :item.count+1}
          }
          return item;
        }
      )
    )
  }

    function decreaseCount(id) {
    setItems
    (
      Items.map
      (
        item=>
        {
          if(item.id==id)
          {
            return{...item, count: item.count > 0 ? item.count - 1 : 0 }
          }
          return item;
        }
      )
    )
  }
  function removeItem(id)
  {
    setItems
    (
      Items.filter
      (
        item=>item.id!=id
      )
    )
  }

  {/*calculations for billing*/}
  const subtotal = Items.reduce((acc, item) => acc + item.price * item.count, 0);
  const DeliveryFee = subtotal > 0 ? 100 : 0;
  const total = subtotal > 5100 ? subtotal : subtotal - DeliveryFee;
  const totalItems = Items.reduce((acc, item) => acc + item.count, 0);

  return (
  <section className="CartSec" >
      <div className="CartHeading">
        <h1>Cart - {totalItems}</h1>
        <p>Home/Cart</p>
      </div>
        
    <div className="items">
    {Items.length !== 0 ?
    (
        Items.map
        (
            item =>
            {
                return <div key={item.id} className="cartItem">
                    <img className="itemImage" src={item.image} width={200} height={200}/>

                    <div className="itemDetails" >
                        <h3>{item.name}</h3>
                        <em>In stock</em>
                        <div className="IncDecStyle" style={{marginTop:20}}>
                            <span id="Price"> R {item.price}</span>
                            <button id="decrease" className="btnIncOrDec" onClick={() => decreaseCount(item.id)}>-</button>
                            <span>{item.count}</span>
                            <button id="increase" className="btnIncOrDec" onClick={() => increaseCount(item.id)}>+</button>
                        </div>

                        <button onClick={() => removeItem(item.id)} style={{fontSize:16, backgroundColor:"transparent", border:'none', color:"white",cursor:"pointer",marginTop:30}}><FaTrash color="rgba(209, 166, 61, 1)"/> Remove</button>                    
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

            <button className="btnCheckout">Checkout</button>
        </div>
      
  </section>
  );
}

export default Cart;
