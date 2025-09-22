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
    console.log("comPCs updated:", comPCs);

    async function fetchCPU() {
      const id = parseInt(comPCs[0]);
      console.log("Trying to fetch CPU with id:", id);
      if (!isNaN(id)) {
        const ascCpu = await GetCPU(id);
        console.log("Fetched CPU:", ascCpu);
        setCPU(prevCPU => [...prevCPU, ascCpu]);
      } else {
        console.log("Invalid CPU id:", comPCs[0]);
      }
    }

    if (comPCs.length === 2 && comPCs[0]) {
      fetchCPU();
    }
  }, [comPCs]);

  useEffect(() => {
    console.log("comPCs updated:", comPCs);

    async function fetchGPU() {
      const id = parseInt(comPCs[0]);
      console.log("Trying to fetch GPU with id:", id);
      if (!isNaN(id)) {
        const ascCpu = await GetGPU(id);
        console.log("Fetched GPU:", ascCpu);
        setGPU(prevCPU => [...prevCPU, ascCpu]);
      } else {
        console.log("Invalid GPU id:", comPCs[0]);
      }
    }

    if (comPCs.length === 2 && comPCs[0]) {
      fetchGPU();
    }
  }, [comPCs]);

  useEffect(() => {
    console.log("comPCs updated:", comPCs);

    async function fetchRAM() {
      const id = parseInt(comPCs[0]);
      console.log("Trying to fetch GPU with id:", id);
      if (!isNaN(id)) {
        const ascCpu = await GetRAM(id);
        console.log("Fetched GPU:", ascCpu);
        setRAM(prevCPU => [...prevCPU, ascCpu]);
      } else {
        console.log("Invalid GPU id:", comPCs[0]);
      }
    }

    if (comPCs.length === 2 && comPCs[0]) {
      fetchRAM();
    }
  }, [comPCs]);

  useEffect(() => {
    console.log("comPCs updated:", comPCs);

    async function fetchSto() {
      const id = parseInt(comPCs[0]);
      console.log("Trying to fetch GPU with id:", id);
      if (!isNaN(id)) {
        const ascCpu = await GetStorage(id);
        console.log("Fetched GPU:", ascCpu);
        setStorage(prevCPU => [...prevCPU, ascCpu]);
      } else {
        console.log("Invalid GPU id:", comPCs[0]);
      }
    }

    if (comPCs.length === 2 && comPCs[0]) {
      fetchSto();
    }
  }, [comPCs]);

//gggggggggggggggggggggggg
//Components for Product 2
  useEffect(() => {
    console.log("comPCs updated:", comPCs);

    async function fetchCPU() {
      const id = parseInt(comPCs[1]);
      console.log("Trying to fetch CPU with id:", id);
      if (!isNaN(id)) {
        const ascCpu = await GetCPU(id);
        console.log("Fetched CPU:", ascCpu);
        setCPU(prevCPU => [...prevCPU, ascCpu]);
      } else {
        console.log("Invalid CPU id:", comPCs[1]);
      }
    }

    if (comPCs.length === 2 && comPCs[1]) {
      fetchCPU();
    }
  }, [comPCs]);

  useEffect(() => {
    console.log("comPCs updated:", comPCs);

    async function fetchGPU() {
      const id = parseInt(comPCs[1]);
      console.log("Trying to fetch GPU with id:", id);
      if (!isNaN(id)) {
        const ascCpu = await GetGPU(id);
        console.log("Fetched GPU:", ascCpu);
        setGPU(prevCPU => [...prevCPU, ascCpu]);
      } else {
        console.log("Invalid GPU id:", comPCs[1]);
      }
    }

    if (comPCs.length === 2 && comPCs[1]) {
      fetchGPU();
    }
  }, [comPCs]);

  useEffect(() => {
    console.log("comPCs updated:", comPCs);

    async function fetchRAM() {
      const id = parseInt(comPCs[1]);
      console.log("Trying to fetch GPU with id:", id);
      if (!isNaN(id)) {
        const ascCpu = await GetRAM(id);
        console.log("Fetched GPU:", ascCpu);
        setRAM(prevCPU => [...prevCPU, ascCpu]);
      } else {
        console.log("Invalid GPU id:", comPCs[1]);
      }
    }

    if (comPCs.length === 2 && comPCs[1]) {
      fetchRAM();
    }
  }, [comPCs]);

  useEffect(() => {
    console.log("comPCs updated:", comPCs);

    async function fetchSto() {
      const id = parseInt(comPCs[1]);
      console.log("Trying to fetch GPU with id:", id);
      if (!isNaN(id)) {
        const ascCpu = await GetStorage(id);
        console.log("Fetched GPU:", ascCpu);
        setStorage(prevCPU => [...prevCPU, ascCpu]);
      } else {
        console.log("Invalid GPU id:", comPCs[1]);
      }
    }

    if (comPCs.length === 2 && comPCs[1]) {
      fetchSto();
    }
  }, [comPCs]);

let dataA, dataB;

if (CPU.length > 1 && GPU.length > 1 && RAM.length > 1 && Storage.length > 0) {
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
