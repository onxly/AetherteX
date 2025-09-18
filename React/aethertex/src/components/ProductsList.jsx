import React,{ useState } from "react";
import ProductCard from "./ProductCard";
import { GiHamburgerMenu } from "react-icons/gi";
import "../stylesheets/ProductsList.css";

function ProductsList({ toggleSidebar, isShowingSidebar }) {
  const[Items,setItems] = useState([
      {
        id: 1,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 2,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 3,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 4,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 5,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
        Discount: 0,
      },
      {
        id: 6,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 7,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 8,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 9,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 10,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 11,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 12,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 13,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 14,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 15,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 16,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 17,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 18,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 19,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 20,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://m.media-amazon.com/images/I/51DfICIDimL._SL500_.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      }
    
    ]);

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
        {Items.length !== 0 ?
            (
                Items.map
                (
                    item =>
                    {
                        return <ProductCard 
                                  key={item.id} 
                                  prodId={item.id} 
                                  price={item.price} 
                                  title={item.title} 
                                  discount={item.discount} 
                                  rating={item.rating} 
                                  ReviewsNum={item.ReviewsNum}
                                  imgSrc={item.imgSrc}
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
