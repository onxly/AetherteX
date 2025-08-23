import React from "react";
import Button from "./Button";

function ProductCard({ imgSrc, title, price }) {
  return (
    <div className="product-card">
      {/* Image Section */}
      <div className="product-card-img-container">
        <img
          src={
            imgSrc ||
            "https://blocks.astratic.com/img/general-img-landscape.png"
          }
          alt="Product"
        />
      </div>

      {/* Description Section */}
      <div className="product-card-description">
        <p className="product-title">{title}</p>
        <p className="product-price">R{price}</p>

        <div className="product-buttons-container">
          <Button buttonClassName={"product-card-button-buy"}>Buy now</Button>
          <Button buttonClassName={"product-card-button-cart"}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
