import Button from "./Button";
import Checkbox from "@mui/joy/Checkbox";
import { Link } from "react-router";
import "../stylesheets/ProductCard.css";

function ProductCard({ imgSrc, title, price, discount, prodId }) {
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
        <p className="product-price">R{price}</p>

        <Button buttonClassName={"product-card-button-cart"}>
          Add to Cart
        </Button>
      </div>
      <div className="footer">
        <Checkbox label="Compare" sx={{ color: "white" }} size="sm" />
      </div>
    </div>
  );
}

export default ProductCard;
