import { useState } from "react";
import Header from "../components/Header.jsx";
import ImgProduct from "../components/ImgProduct.jsx";
import InfoProduct from "../components/InfoProduct.jsx";
import PurchaseProduct from "../components/PurchaseProduct.jsx";
import ReviewProduct from "../components/ReviewProduct.jsx";
import Footer from "../components/Footer.jsx";
import "../stylesheets/product.css";

function Product() {
  let price = "21 900.00";
  let stock = 5;
  let rating = 4.3;
  let reviews = 120;
  let name = "AetherteX Prometheus II i9 12900K PC Desktop";
  let imgMain = "https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg";
  let img1 = "https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg";
  let img2 = "https://m.media-amazon.com/images/I/51mzyMImf+L._SL500_.jpg";
  let img3 = "https://m.media-amazon.com/images/I/41Zs+nz-M0L._SL500_.jpg";
  let img4 = "https://m.media-amazon.com/images/I/41tlFlXd+rL._SL500_.jpg";
  let description = "This is a sample product description.";
  let specs = {
    CPU: "Intel Core i9-12900K",
    GPU: "NVIDIA GeForce RTX 3090",
    RAM: "32GB DDR4",
    Storage: "1TB NVMe SSD",
    Motherboard: "ASUS TUF GAMING B550M‑PLUS WiFi II (AMD)",
    PowerSupply: "850W 80+ Gold",
    Case: "Prometheus Metallic Gear Neo Qube Case",
  };

  let CPU = {
    Cores: 16,
    Theads: 24,
    ClockSpeed: 5.2,
    CPUCache: 30,
    Benchmark: 117.0,
  };

  let GPU = {
    VRAM: 16,
    ClockSpeed: 2321,
    Benchmark: 49.6,
  };

  let CusReviews = [
    { user: "Boyzn1", rating: 5, comment: "Excellent product!" },
    { user: "Boyzn2", rating: 4, comment: "Very good, but could be improved." },
    {
      user: "Boyzn3",
      rating: 3,
      comment: "Average performance for the price.",
    },
  ];

  return (
    <div className="cApp">
      <Header NumOf={4} AccName={"Account"} />
      <ImgProduct
        imgMain={imgMain}
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
      />
      <InfoProduct
        name={name}
        description={description}
        rating={rating}
        reviews={reviews}
        specs={specs}
        CPU={CPU}
        GPU={GPU}
      />
      <PurchaseProduct price={price} stock={stock} />
      <ReviewProduct rating={rating} CusReviews={CusReviews} />
      <Footer />
    </div>
  );

  /*
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
    */
}

export default Product;
