import ImgProduct from "../components/ImgProduct.jsx";
import InfoProduct from "../components/infoProduct.jsx";
import PurchaseProduct from "../components/purchaseProduct.jsx";
import ReviewProduct from "../components/ReviewProduct.jsx";
import Footer from "../components/Footer.jsx";
import { useParams } from "react-router-dom";
import "../stylesheets/product.css";

function Product() {
  const {id} = useParams();

  
  const Product = {
  ProductId: id,
  Title: "AetherteX Prometheus II i9 12900K PC Desktop",
  Price: 21900,
  Stock: 5,
  Rating: 4.3,
  Reviews: 120,
  Description: "This is a sample product description.",
  Image1: "https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg",
  Image2: "https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg",
  Image3: "https://m.media-amazon.com/images/I/51mzyMImf+L._SL500_.jpg",
  Image4: "https://m.media-amazon.com/images/I/41tlFlXd+rL._SL500_.jpg",
  Specs: {
    CPU: "Intel Core i9-12900K",
    GPU: "NVIDIA GeForce RTX 3090",
    RAM: "32GB DDR4",
    Storage: "1TB NVMe SSD",
    Motherboard: "ASUS TUF GAMING B550M‑PLUS WiFi II (AMD)",
    PowerSupply: "850W 80+ Gold",
    Case: "Prometheus Metallic Gear Neo Qube Case",
  }
}

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

  let RAM = {
    Name: "Corsair Vengeance RGB PRO",
    Speed: 3200,
    Channel: "Single channel",
    Benchmark: 88.5,
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
  document.title = Product.Title + " | AetherteX";

  return (
    <div className="cApp">
      <ImgProduct
        imgMain={Product.Image1}
        img1={Product.Image1}
        img2={Product.Image2}
        img3={Product.Image3}
        img4={Product.Image4}
      />
      <InfoProduct
        name={Product.Title}
        description={Product.Description}
        rating={Product.Rating}
        reviews={Product.Reviews}
        specs={Product.Specs}
        CPU={CPU}
        GPU={GPU}
        RAM={RAM}
      />
      <PurchaseProduct Product={Product} />
      <ReviewProduct rating={Product.Rating} CusReviews={CusReviews} />
      <Footer />
    </div>
  );
}

export default Product;
