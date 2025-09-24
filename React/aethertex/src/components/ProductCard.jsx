import Button from "./Button";

import Checkbox from "@mui/joy/Checkbox";
import { Link } from "react-router";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import {AvarageRatingforProduct} from "../jsfunctions/alljsfunctions";
import "../stylesheets/ProductCard.css";
 

function ProductCard({prodId, imgSrc, title, price, discount, rating, ReviewsNum, comPCs=[], setComPCs, fetchProductAndCPU}) {
  const { cart = [], addCart, isLoggedIn } = useContext(AuthContext);
  const [avgRating, setAvg] = useState(0);
    useEffect(() => {
      async function getAvg() {
        const pId = parseInt(prodId);
        if (!isNaN(pId)) {
          const avg = await AvarageRatingforProduct(pId);
          if (avg === "No ratings found for this product")
          {
              setAvg(0);
          } else {
              setAvg(avg);
          }   
          console.log("Average retrived successfully");            
        } else {
          console.log("Average NOT!!! retrived successfully");
        }  
        }
          if (!isNaN(prodId)) {
            getAvg();
        }
          }, [prodId]);
  
  const dbAvgRating = parseFloat(avgRating);
  const stars = [];
      for (let i = 1; i <= 5; i++) {
          if (avgRating >= i) {
              stars.push(<FaStar key={i} color="gold" />);
          } else if (avgRating >= i - 0.5) {
              stars.push(<FaStarHalfAlt key={i} color="gold" />);
          } else {
              stars.push(<FaRegStar key={i} color="gold" />);
          }
      }
      
      const toggleItem = (newID) => {
        // check if id already exists
        const exists = comPCs.includes(newID);

        if (exists) {
          // remove it
          setComPCs(comPCs.filter(id => id !== newID));
          fetchProductAndCPU(newID);
        } else {
          // add it
          setComPCs([...comPCs, newID]);
        }
      };
  return (
    <div className="product-card">
      {/* Badge */}
      {discount && (
        <div className="badge-container">
          <p>-{discount}%</p>
        </div>
      )}

      <Link to={`/product/${prodId}`} className="link">
        {/* Image Section */}
        <div className="product-card-img-container">
          <img
            src={
              "/PCS/"+imgSrc ||
              "https://blocks.astratic.com/img/general-img-landscape.png"
            }
            
            alt={"Image of " + title}
          />
        </div>

        {/* Description Section */}
        <h4 className="product-title">{title}</h4>
      </Link>
      <div className="description">
        <span className="ProdStars">{stars} {dbAvgRating.toFixed(1)}</span>
        <p className="product-price">R {Number(price).toLocaleString("fr-FR")}</p>

        <div className="Prodbtn">
          <Button buttonClassName={"product-card-button-cart"}
            onClick={()=> addCart(prodId, imgSrc, title, price, true, 1)}
          >
            Add to Cart
          </Button>

            <Checkbox 
              checked={comPCs.includes(prodId)}
              onChange={() => toggleItem(prodId)}
              disabled={comPCs.length >= 2 && !comPCs.includes(prodId)} 
              label="Compare" 
              sx={{ color: "white" }} 
              size="sm" 
            />
        </div>


              <div className="Prodbtn">

            
                    <Button buttonClassName={"product-card-button-cart"}
                  
                    onClick={()=> addCart(prodId, imgSrc, title, price, true, 1)}
                  >
                    Add to Cart
                  </Button>
            
                

                  
              </div>
        
      </div>
    </div>
  );
}

export default ProductCard;
