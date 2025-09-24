import ImgProduct from "../components/ImgProduct.jsx";
import InfoProduct from "../components/infoProduct.jsx";
import PurchaseProduct from "../components/purchaseProduct.jsx";
import ReviewProduct from "../components/reviewProduct.jsx";
import Footer from "../components/Footer.jsx";
import { useParams } from "react-router-dom";
import "../stylesheets/product.css";
import { useState,useEffect } from "react";
import {GetRatingsforProduct, GetProductbyID, AvarageRatingforProduct, GetGPU, GetCPU, GetRAM ,GetStorage} from "../jsfunctions/alljsfunctions";


function Product() {
  const {id} = useParams();
  const [prod, setProd]=useState({});
  const [CPU, setCPU] = useState({});
  const [GPU, setGPU] = useState({});
  const [RAM, setRAM] = useState({});
  const [Storage, setStorage] = useState({});
  const [avgRating, setAvg] = useState(0);
  const [CusReviews, setCusReviews] = useState([]);
    useEffect(() => {
      async function getAvg() {
        const pId = parseInt(id);
        if (!isNaN(pId)) {
          const avg = await AvarageRatingforProduct(pId);
          if (avg === "No ratings found for this product")
          {
              setAvg(0);
          } else {
              setAvg(avg);
          }   
          console.log("Average retrived successfully");            
        } else {
          console.log("Average NOT!!! retrived successfully");
        }  
        }
          if (!isNaN(id)) {
            getAvg();
        }
          }, [id]);
      
    useEffect(() => {
      async function getReviews() {
        const pId = parseInt(id);
        if (!isNaN(pId)) {
          const revs = await GetRatingsforProduct(pId);
          if (revs === "No ratings found for this product"){
            setCusReviews([]);
          } else {
            setCusReviews(revs);
          }
          
          console.log("Average retrived successfully");            
        } else {
          console.log("Average NOT!!! retrived successfully");
        }  
        }
          if (!isNaN(id)) {
            getReviews();
        }
          }, [id]);

 useEffect(() => {
  async function fetchProductAndCPU() {
    try {
      const product = await GetProductbyID(parseInt(id));
      setProd(product);
      if (product?.cpuId) {
        const ascCpu = await GetCPU(product.cpuId);
        setCPU(ascCpu);
      }

      if (product?.gpuId) {
        const ascGpu = await GetGPU(product.gpuId);
        setGPU(ascGpu);
      }

      if (product?.ramId) {
        const ascGpu = await GetRAM(product.ramId);
        setRAM(ascGpu);
      }

      if (product?.storageId) {
        const ascGpu = await GetStorage(product.storageId);
        setStorage(ascGpu);
        
      }
    } catch (error) {
      console.error("Error fetching product/CPU:", error);
    }
  }

  fetchProductAndCPU();
}, [id]);
  
  document.title = prod.title+ " | AetherteX";
  
  return (
    <div className="cApp">
      {}
      <ImgProduct
        imgMain={prod.image1}
        img1={prod.image1}
        img2={prod.image2}
        img3={prod.image3}
        img4={prod.image4}
      />

      <InfoProduct
        product={prod}
        name={prod.title}
        description={prod.description}
        rating={avgRating}
        reviews={CusReviews.length}
        CPU={CPU}
        GPU={GPU}
        RAM={RAM}
        Storage={Storage}
      />

      <PurchaseProduct Product={prod} />
      <ReviewProduct Prodid={prod.productId} rating={avgRating} CusReviews={CusReviews} />
      <Footer />
    </div>
  );
}

export default Product;
