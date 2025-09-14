import Button from "./Button";
import Checkbox from "@mui/joy/Checkbox";
import { Link } from "react-router";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../stylesheets/ProductCard.css";

function ProductCard({ imgSrc, title, price, discount, prodId, rating, ReviewsNum}) {
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

          <Checkbox label="Compare" sx={{ color: "white" }} size="sm" />
        </div>
        
      </div>
    </div>
  );
}

export default ProductCard;
