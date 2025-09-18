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
        imgSrc: "https://www.presse-citron.net/app/uploads/2020/09/evenement-playstation-5-ps5.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 2,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://helios-i.mashable.com/imagery/reviews/00NFEL8nNFtMySuAyzrCYiX/images-7.fill.size_2000x1125.v1749674789.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 3,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://www.cnet.com/a/img/resize/89db9c90737f64484345936daffef359dbf665e4/hub/2020/10/27/8a5b615a-c5ff-4d4d-bdbd-c58e9e6543af/xbox-series-x-s-console-hoyle-studio-promo-23.jpg?auto=webp&fit=crop&height=362&width=644",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 4,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://helios-i.mashable.com/imagery/reviews/00NFEL8nNFtMySuAyzrCYiX/images-7.fill.size_2000x1125.v1749674789.jpg",
        rating: 4.8,
        ReviewsNum: 183,
      },
      {
        id: 5,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://images.immediate.co.uk/production/volatile/sites/3/2023/07/xbox-controller-236e35e.jpg",
        rating: 4.8,
        ReviewsNum: 183,
        Discount: 0,
      },
      {
        id: 6,
        price: 21900,
        title: "AetherteX Prometheus II i9 12900K PC Desktop",
        imgSrc: "https://cdn.shopify.com/s/files/1/0550/0554/4682/files/Weixin_Screenshot_20250619164923.jpg?v=1750323409",
        rating: 4.8,
        ReviewsNum: 183,
      },
      
      
    
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
