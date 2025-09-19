import Button from "./Button";
import Checkbox from "@mui/joy/Checkbox";
import { Link } from "react-router";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../stylesheets/ProductCard.css";

function ProductCard({ imgSrc, title, price, discount, prodId, rating, ReviewsNum, comPCs=[], setComPCs}) {
  const stars = [];
      for (let i = 1; i <= 5; i++) {
          if (rating >= i) {
              stars.push(<FaStar key={i} color="gold" />);
          } else if (rating >= i - 0.5) {
              stars.push(<FaStarHalfAlt key={i} color="gold" />);
          } else {
              stars.push(<FaRegStar key={i} color="gold" />);
          }
      }
  
      const addItem = (newID) => {
        CheckId = comPCs.find(c => c.id === newId)
        if  (CheckId)
        setComPCs([...comPCs, newID]); 
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
              imgSrc ||
              "https://blocks.astratic.com/img/general-img-landscape.png"
            }
            style={{ }}
            alt={"Image of " + title}
          />
          {/* Description Section */}
          <div className="Details_getCart">
              <h4 className="product-title">{title}</h4>
              <div className="description">
              <span className="ProdStars">{stars} ({ReviewsNum})</span>
              <p className="product-price">R{price}</p>
          </div>
             
          <div className="hiddenBox">
              
                  <div className="Prodbtn">
                    <Button buttonClassName={"product-card-button-cart"}>
                      Add to Cart
                    </Button>
                    <Checkbox label="Compare" sx={{ color: "white" }} size="sm" />
                  </div>
                </div>
          </div>
          
        </div>

<<<<<<< HEAD
=======
        {/* Description Section */}
        <h4 className="product-title">{title}</h4>
      </Link>
      <div className="description">
        <span className="ProdStars">{stars} ({ReviewsNum})</span>
        <p className="product-price">R{price}</p>

        <div className="Prodbtn">
          <Button buttonClassName={"product-card-button-cart"}>
            Add to Cart
          </Button>

            {comPCs.length < 2?(
              <Checkbox 
                onChange={() => addItem(prodId)}
                label="Compare" 
                sx={{ color: "white" }} 
                size="sm" 
              />
            ):(
              <Checkbox disabled="true" label="Compare" sx={{ color: "white" }} size="sm" />
            )}
          
        </div>
>>>>>>> e48dfe62e5aa848d4fc17fd53c2a1e5984d45155
        
      </Link>
     
    </div>
  );
}

export default ProductCard;
