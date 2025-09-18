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
  

      const toggleItem = (newID) => {
        // check if id already exists
        const exists = comPCs.includes(newID);

        if (exists) {
          // remove it
          setComPCs(comPCs.filter(id => id !== newID));
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
              imgSrc ||
              "https://blocks.astratic.com/img/general-img-landscape.png"
            }
            style={{ objectFit: "contain" }}
            alt={"Image of " + title}
          />
        </div>

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

            <Checkbox 
              checked={comPCs.includes(prodId)}
              onChange={() => toggleItem(prodId)}
              disabled={comPCs.length >= 2 && !comPCs.includes(prodId)} 
              label="Compare" 
              sx={{ color: "white" }} 
              size="sm"   z
            />
          
        </div>
        
      </div>
    </div>
  );
}

export default ProductCard;
