import React from "react";
import ProductCard from "./ProductCard";
import { GiHamburgerMenu } from "react-icons/gi";
import "../stylesheets/ProductsList.css";

function ProductsList({ toggleSidebar, isShowingSidebar }) {
  return (
    <div className="productlist-container">
      <div className="sidebar-toggle-container">
        <GiHamburgerMenu
          size={25}
          className="sidebar-toggle-button"
          onClick={() => toggleSidebar()}
        />
      </div>
      <div
        className="productlist-container-scrollview"
        style={{ width: isShowingSidebar ? "80vw" : "94vw" }}
      >
        <ProductCard
          price={21900}
          title={"AetherteX Prometheus II i9 12900K PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg"}
        />
        <ProductCard
          price={18300}
          title={"AetherteX Athena Core 2.0 i9 12900K PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51KIj2JwxpL._SL500_.jpg"}
        />
        <ProductCard
          price={13100}
          title={"AetherteX Athena Core 3.0 i5 12400F PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17000}
          title={"AetherteX Zeusforge i5-10400F PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/512ewL55TVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
        <ProductCard
          price={17300}
          title={"AetherteX Zeusforge LC Ryzen 7 3800X PC Desktop"}
          imgSrc={"https://m.media-amazon.com/images/I/51piiTiBpVL._SL500_.jpg"}
        />
      </div>
    </div>
  );
}

export default ProductsList;
