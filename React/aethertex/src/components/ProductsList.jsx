import React,{ useState } from "react";
import ProductCard from "./ProductCard";
import { GiHamburgerMenu } from "react-icons/gi";
import "../stylesheets/ProductsList.css";
import {GetProducts} from "../jsfunctions/alljsfunctions"

function ProductsList({ toggleSidebar, isShowingSidebar, comPCs, setComPCs }) {
  const[items,setitems] = useState();
  
  async function getitemslist()
  {
    const itemslist=await Getitems();
    setitems(itemslist)
  }

  return (
    <div className="itemslist-container">
      <div className="sidebar-toggle-container">
        <GiHamburgerMenu
          size={25}
          className="sidebar-toggle-button"
          onClick={() => toggleSidebar()}
        />
      </div>
      <div
        className="itemslist-container-scrollview"
        style={{ width: isShowingSidebar ? "80vw" : "94vw" }}
      >
        {items.length !== 0 ?
            (
                items.map
                (
                    item =>
                    {
                        return <itemsCard 
                                  key={item.id} 
                                  prodId={item.id} 
                                  price={item.price} 
                                  title={item.title} 
                                  discount={item.discount} 
                                  rating={item.rating} 
                                  ReviewsNum={item.ReviewsNum}
                                  imgSrc={item.imgSrc}
                                  comPCs={comPCs}
                                  setComPCs={setComPCs}
                                />
                    }
                )
            ) 
            :
            (
                <p style={{padding:"20px", textAlign:"center",color:"black" ,backgroundColor:"tan"}}>Your cart is empty.</p>
            )}

      </div>
    </div>
  );
}

export default ProductsList;
