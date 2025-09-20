import React,{ useState } from "react";
import ProductCard from "./ProductCard";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMicrochip, FaDatabase } from "react-icons/fa";   // CPU + storage (alt)
import { MdGraphicEq } from "react-icons/md";               // GPU
import { RiRamLine } from "react-icons/ri";                 // RAM
import { BsHdd } from "react-icons/bs";  
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import "../stylesheets/ProductsList.css";

function ProductsList({ toggleSidebar, isShowingSidebar }) {
  const [comPCs, setComPCs] = useState([]);
  const[showModal, setShowModal] = useState(true)
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

    const dataA = [
    
    { y: "Avg", x: 25 },
    { y: "Storage", x: 10 },
    { y: "RAM", x: 30 },
    { y: "GPU", x: 70 },
    { y: "CPU", x: 20 }
  ];

  const dataB = [
    { y: "Avg", x: 55 },
    { y: "Storage", x: 40 },
    { y: "RAM", x: 60 },
    { y: "GPU", x: 50 },
    { y: "CPU", x: 40 }
  ];

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
                {Items.map
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
<<<<<<< HEAD
=======
                                  comPCs={comPCs}
                                  setComPCs={setComPCs}
>>>>>>> e48dfe62e5aa848d4fc17fd53c2a1e5984d45155
                                />
                    }
                )
               }
      </div>

      {comPCs.length >= 2 && showModal && (
          <div className="CompareModel">
            <div className="CompareContents">
              <span className="close" onClick={() => setShowModal(false)}>
                  ×
              </span>
              <h2>PC Comparision</h2>

              <div className="Product1">
                <img src={Items.find(i => i.id === comPCs[0]).imgSrc} alt={comPCs[0].title} width={100} height={100}/>
                <h3>{Items.find(i => i.id === comPCs[0]).title}</h3>
                <ul>
                  <li><FaMicrochip color="rgba(209, 166, 61, 1)"/> Intel i1</li>
                  <li><MdGraphicEq  color="rgba(209, 166, 61, 1)"/> Nvidia Geforce something</li>
                  <li><RiRamLine emoryLine  color="rgba(209, 166, 61, 1)"/> Some cool ram</li>
                  <li><BsHdd emoryLine  color="rgba(209, 166, 61, 1)"/> Something thing ssd</li>
                </ul>
              </div>

              <div className="ProductC">
                <ScatterChart
                  width={500}
                  height={500}
                  margin={{ top: 0, right: 40, bottom: 0, left: 10 }}
                >
                  <CartesianGrid horizontal={true} vertical={false} strokeWidth={3}/>
                  <XAxis
                    type="number"
                    dataKey="x"
                    name="Value" 
                    domain={[0, 100]} // scale 0–100
                  />
                  <YAxis
                    type="category"
                    dataKey="y"
                    name="Category"
                    axisLine={false}   // removes X axis line
                    tickLine={false} 
                  />
                  <Tooltip 
                    contentStyle={{ 
                        backgroundColor: "#121212",   
                        border: "1px solid #ccc",   // border style
                        borderRadius: "20px",        // rounded corners
                        color: "white",             // text color
                        fontSize: "14px"            // text size
                        }} 
                        itemStyle={{ 
                            color: "gold"           // color of each value inside
                        }}
                  />
                  
                  <Legend
                    formatter={(value, entry) => (
                      <span style={{ fontSize: "14px", fontFamily: "Arial", fontWeight: "bold", color: entry.color, gap: "2px" }}>
                        {value}
                      </span>
                    )}

                      wrapperStyle={{
                        paddingLeft: 0,  // reduce spacing from chart edge
                        paddingRight: 10,
                      }}
                      iconSize={10} 
                      layout="vertical"     
                  />

                  {/* Series A */}
                  <Scatter style={{fontSize: "10px"}} name={Items.find(i => i.id === comPCs[0]).title} data={dataA} fill="gold" />

                  {/* Series B */}
                  <Scatter style={{fontSize: "10px"}} name={Items.find(i => i.id === comPCs[0]).title} data={dataB} fill="white" />
              </ScatterChart>
              </div>

              <div className="Product2">
                <img src={Items.find(i => i.id === comPCs[1]).imgSrc} alt={comPCs[1].title} width={100} height={100}/>
                <h3>{Items.find(i => i.id === comPCs[1]).title}</h3>
                <ul>
                  <li><FaMicrochip color="white"/> Intel i1</li>
                  <li><MdGraphicEq  color="white"/> Nvidia Geforce something</li>
                  <li><RiRamLine emoryLine  color="white"/> Some cool ram</li>
                  <li><BsHdd emoryLine  color="white"/> Something thing ssd</li>
                </ul>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default ProductsList;
