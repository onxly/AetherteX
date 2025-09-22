import ImgProduct from "../components/ImgProduct.jsx";
import InfoProduct from "../components/infoProduct.jsx";
import PurchaseProduct from "../components/purchaseProduct.jsx";
import ReviewProduct from "../components/ReviewProduct.jsx";
import Footer from "../components/Footer.jsx";
import { useParams } from "react-router-dom";
import "../stylesheets/product.css";
import { useState,useEffect } from "react";
import {GetProductbyID, GetGPU, GetCPU, GetRAM ,GetStorage} from "../jsfunctions/alljsfunctions";


function Product() {
  const {id} = useParams();
  const [prod, setProd]=useState({});
  const [CPU, setCPU] = useState({});
  const [GPU, setGPU] = useState({});
  const [RAM, setRAM] = useState({});
  const [Storage, setStorage] = useState({});

 useEffect(() => {
  async function fetchProductAndCPU() {
    try {
      const product = await GetProductbyID(parseInt(id));
      setProd(product);
      console.log("Product:", product);
      if (product?.cpuId) {
        const ascCpu = await GetCPU(product.cpuId);
        setCPU(ascCpu);
        console.log("CPU:", ascCpu);
      }

      if (product?.gpuId) {
        const ascGpu = await GetGPU(product.gpuId);
        setGPU(ascGpu);
        console.log("GPU:", ascGpu);
      }

      if (product?.ramId) {
        const ascGpu = await GetRAM(product.ramId);
        setRAM(ascGpu);
        console.log("RAM:", ascGpu);
      }

      if (product?.storageId) {
        const ascGpu = await GetStorage(product.storageId);
        setStorage(ascGpu);
        console.log("Storage:", ascGpu);
        
      }
    } catch (error) {
      console.error("Error fetching product/CPU:", error);
    }
  }

  fetchProductAndCPU();
}, [id]);
  
  let CusReviews = [
    { user: "Boyzn1", rating: 5, comment: "Excellent product!" },
    { user: "Boyzn2", rating: 4, comment: "Very good, but could be improved." },
    {
      user: "Boyzn3",
      rating: 3,
      comment: "Average performance for the price.",
    },
  ];
  document.title = prod.title+ " | AetherteX";
  
  return (
    <div className="cApp">
      <ImgProduct
        imgMain={prod.image1}
        img1={prod.image1}
        img2={prod.image2}
        img3={prod.image3}
        img4={prod.image4}
      />

      <InfoProduct
        name={prod.title}
        description={prod.description}
        rating={4.7}
        reviews={123}
        CPU={CPU}
        GPU={GPU}
        RAM={RAM}
        Storage={Storage}
      />

      <PurchaseProduct Product={prod} />
      <ReviewProduct Prodid={prod.productId} rating={prod.rating} CusReviews={CusReviews} />
      <Footer />
    </div>
  );
}

export default Product;
