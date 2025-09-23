import { useState,useEffect } from "react";
import ProductCard from "./ProductCard";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMicrochip, FaDatabase } from "react-icons/fa"; 
import { MdGraphicEq } from "react-icons/md";          
import { RiRamLine } from "react-icons/ri";              
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
import {getAllProducts} from "../jsfunctions/alljsfunctions";
import {GetProductbyID, GetGPU, GetCPU, GetRAM ,GetStorage} from "../jsfunctions/alljsfunctions";

function ProductsList({ toggleSidebar, isShowingSidebar }) {
  const [comPCs, setComPCs] = useState([]);
  const [PCs, setPCs] = useState([]);
  const[showModal, setShowModal] = useState(true);
  const[Items,setItems] = useState([]);
  const [CPU, setCPU] = useState([]);
  const [GPU, setGPU] = useState([]);
  const [RAM, setRAM] = useState([]);
  const [Storage, setStorage] = useState([]);

    useEffect(()=>
      {
        async function setProductList()
          {
            const ProdList=await getAllProducts();
            
            setItems(ProdList);
          }
          setProductList();
      },[]);

      //Components for Product 1
  useEffect(() => {
    async function fetchPC1() {
      if (!isNaN(comPCs[0])) {
        const ascPC1 = await GetProductbyID(comPCs[0]);
        console.log("Fetched PC1:", ascPC1);
        setPCs(prevPC => [...prevPC, ascPC1]);
      } else {
        console.log("Invalid PC id:", comPCs[0]);
      }
    }
    if (comPCs.length === 2 && comPCs[0]) {
      fetchPC1();
    }
  }, [comPCs]);

  //Components for Product 2
  useEffect(() => {
    async function fetchPC1() {
      if (!isNaN(comPCs[0])) {
        const ascPC1 = await GetProductbyID(comPCs[1]);
        console.log("Fetched PC1:", ascPC1);
        setPCs(prevPC => [...prevPC, ascPC1]);
      } else {
        console.log("Invalid PC id:", comPCs[1]);
      }
    }
    if (comPCs.length === 2 && comPCs[1]) {
      fetchPC1();
    }
  }, [comPCs]);

  //Prod1 Components
  useEffect(() => {
    async function fetchCPU() {
      if (!isNaN(PCs[0].cpuId)) {
        const ascPC1 = await GetCPU(PCs[0].cpuId);
        console.log("Fetched CPU:", ascPC1);
        setCPU(prevCpu => [...prevCpu, ascPC1]);
      } else {
        console.log("Invalid CPU:", PCs[0].cpuId);
      }
    }
    if (PCs.length === 2 && PCs[0]) {
      fetchCPU();
    }
  }, [PCs]);

  useEffect(() => {
    async function fetchGPU() {
      if (!isNaN(PCs[0].gpuId)) {
        const ascPC1 = await GetGPU(PCs[0].gpuId);
        console.log("Fetched CPU:", ascPC1);
        setGPU(prevGpu => [...prevGpu, ascPC1]);
      } else {
        console.log("Invalid CPU:", PCs[0].gpuId);
      }
    }
    if (PCs.length === 2 && PCs[0]) {
      fetchGPU();
    }
  }, [PCs]);

  useEffect(() => {
    async function fetchRam() {
      if (!isNaN(PCs[0].ramId)) {
        const ascPC1 = await GetRAM(PCs[0].ramId);
        console.log("Fetched RAM:", ascPC1);
        setRAM(prevRam => [...prevRam, ascPC1]);
      } else {
        console.log("Invalid RAM:", PCs[0].ramId);
      }
    }
    if (PCs.length === 2 && PCs[0]) {
      fetchRam();
    }
  }, [PCs]);

  useEffect(() => {
    async function fetchSto() {
      if (!isNaN(PCs[0].storageId)) {
        const ascPC1 = await GetStorage(PCs[0].storageId);
        console.log("Fetched RAM:", ascPC1);
        setStorage(prevSto => [...prevSto, ascPC1]);
      } else {
        console.log("Invalid RAM:", PCs[0].storageId);
      }
    }
    if (PCs.length === 2 && PCs[0]) {
      fetchSto();
    }
  }, [PCs]);

  //Product 2
  //Prod1 Components
  useEffect(() => {
    async function fetchCPU() {
      if (!isNaN(PCs[1].cpuId)) {
        const ascPC1 = await GetCPU(PCs[1].cpuId);
        console.log("Fetched CPU:", ascPC1);
        setCPU(prevCpu => [...prevCpu, ascPC1]);
      } else {
        console.log("Invalid CPU:", PCs[1].cpuId);
      }
    }
    if (PCs.length === 2 && PCs[1]) {
      fetchCPU();
    }
  }, [PCs]);

  useEffect(() => {
    async function fetchGPU() {
      if (!isNaN(PCs[1].gpuId)) {
        const ascPC1 = await GetGPU(PCs[1].gpuId);
        console.log("Fetched CPU:", ascPC1);
        setGPU(prevGpu => [...prevGpu, ascPC1]);
      } else {
        console.log("Invalid CPU:", PCs[1].gpuId);
      }
    }
    if (PCs.length === 2 && PCs[1]) {
      fetchGPU();
    }
  }, [PCs]);

  useEffect(() => {
    async function fetchRam() {
      if (!isNaN(PCs[1].ramId)) {
        const ascPC1 = await GetRAM(PCs[1].ramId);
        console.log("Fetched RAM:", ascPC1);
        setRAM(prevRam => [...prevRam, ascPC1]);
      } else {
        console.log("Invalid RAM:", PCs[1].ramId);
      }
    }
    if (PCs.length === 2 && PCs[1]) {
      fetchRam();
    }
  }, [PCs]);

  useEffect(() => {
    async function fetchSto() {
      if (!isNaN(PCs[1].storageId)) {
        const ascPC1 = await GetStorage(PCs[1].storageId);
        console.log("Fetched RAM:", ascPC1);
        setStorage(prevSto => [...prevSto, ascPC1]);
      } else {
        console.log("Invalid RAM:", PCs[1].storageId);
      }
    }
    if (PCs.length === 2 && PCs[1]) {
      fetchSto();
    }
  }, [PCs]);

let dataA, dataB;

if (CPU.length > 1 && GPU.length > 1 && RAM.length > 1 && Storage.length > 1) {
  dataA = [
    { y: "Avg", x: (((Storage[0].benchmarkScore / 712) *100) + ((RAM[0].benchmarkScore / 243) *100 ) + ((GPU[0].benchmarkScore / 183) *100) + (CPU[0].benchmarkScore / 133) *100) / 4 },
    { y: "Storage", x: (Storage[0].benchmarkScore / 712) *100 },
    { y: "RAM", x: (RAM[0].benchmarkScore / 243) *100 },
    { y: "GPU", x: (GPU[0].benchmarkScore / 183) *100 },
    { y: "CPU", x: (CPU[0].benchmarkScore / 133) *100 }
  ];

  dataB = [
    { y: "Avg", x: (((Storage[1].benchmarkScore / 712) *100) + ((RAM[1].benchmarkScore / 243) *100 ) + ((GPU[1].benchmarkScore / 183) *100) + (CPU[1].benchmarkScore / 133) *100) / 4 },
    { y: "Storage", x: (Storage[1].benchmarkScore / 712) *100 },
    { y: "RAM", x: (RAM[1].benchmarkScore / 243) *100 },
    { y: "GPU", x: (GPU[1].benchmarkScore / 183) *100 },
    { y: "CPU", x: (CPU[1].benchmarkScore / 133) *100 }
  ];
} else {
  // fallback values
  dataA = [
    { y: "Avg", x: 0 },
    { y: "Storage", x: 0 },
    { y: "RAM", x: 0 },
    { y: "GPU", x: 0 },
    { y: "CPU", x: 0 }
  ];

  dataB = [
    { y: "Avg", x: 0 },
    { y: "Storage", x: 0 },
    { y: "RAM", x: 0 },
    { y: "GPU", x: 0 },
    { y: "CPU", x: 0 }
  ];
}
    
  console.log(CPU[0], typeof(CPU[0]));
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
                                  key={item.productId} 
                                  prodId={item.productId} 
                                  price={item.price} 
                                  title={item.title} 
                                  discount={item.discount} 
                                  rating={item.rating} 
                                  ReviewsNum={item.ReviewsNum}
                                  imgSrc={item.image1}
                                  comPCs={comPCs}
                                  setComPCs={setComPCs}
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
                <img src={"/PCS/"+Items.find(i => i.productId === comPCs[0]).image1} alt={comPCs[0].title} width={100} height={100}/>
                <h3>{Items.find(i => i.productId === comPCs[0]).title}</h3>
                <ul>
                  <li>
                    <FaMicrochip color="rgba(209, 166, 61, 1)" />{" "}
                    {CPU.length > 0 ? CPU[0].name : "Loading..."}
                  </li>
                  <li>
                    <MdGraphicEq  color="rgba(209, 166, 61, 1)"/> {" "}
                    {GPU.length > 0 ? GPU[0].name : "Loading..."}
                  </li>
                  <li>
                    <RiRamLine  color="rgba(209, 166, 61, 1)"/> {" "}
                    {RAM.length > 0 ? RAM[0].name + ", " + RAM[0].capacity + "GB": "Loading..."}
                  </li>
                  <li>
                    <BsHdd  color="rgba(209, 166, 61, 1)"/> {" "}
                    {Storage.length > 0 ? Storage[0].capacity+ "GB, " + Storage[0].type +", "+Storage[0].speed+"Hz": "Loading..."}
                  </li>
                  
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
                  <Scatter style={{fontSize: "10px"}} name={Items.find(i => i.productId === comPCs[0]).title} data={dataA} fill="gold" />

                  {/* Series B */}
                  <Scatter style={{fontSize: "10px"}} name={Items.find(i => i.productId === comPCs[1]).title} data={dataB} fill="white" />
              </ScatterChart>
              </div>

              <div className="Product2">
                <img src={"/PCS/"+Items.find(i => i.productId === comPCs[1]).image1} alt={comPCs[1].title} width={100} height={100}/>
                <h3>{Items.find(i => i.productId === comPCs[1]).title}</h3>
                <ul>
                  <li>
                    <FaMicrochip color="white" />{" "}
                    {CPU.length > 1 ? CPU[1].name : "Loading..."}
                  </li>
                  <li>
                    <MdGraphicEq  color="white"/> {" "}
                    {GPU.length > 1 ? GPU[1].name : "Loading..."}
                  </li>
                  <li>
                    <RiRamLine  color="white"/> {" "}
                    {RAM.length > 1 ? RAM[1].name + ", " + RAM[1].capacity + "GB": "Loading..."}
                  </li>
                  <li>
                    <BsHdd  color="white"/> {" "}
                    {Storage.length > 1 ? Storage[1].capacity+ "GB, " + Storage[1].type +", "+Storage[1].speed+"Hz": "Loading..."}
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default ProductsList;