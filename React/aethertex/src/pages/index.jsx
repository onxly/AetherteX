  import React, { useState,useEffect } from "react";
  import Sidebar from "../components/Sidebar";
  import ProductsList from "../components/ProductsList";
  import "../stylesheets/Home.css";
  import { GetProductbyID,getAllProducts,getAllCPUs,getAllStorageDevices } from "../jsfunctions/alljsfunctions";

  function Home() {
    document.title = "Home | AetherteX";
    const [isShowingSidebar, setIsShowingSidebar] = useState(false);
    const [products, setProducts] = useState([]);
    const [cpus, setCpus] = useState([]);
    const [stos, setstos] = useState([]);
   const [prodInstances, setProdInstances] = useState({});

    const [filters, setFilters] = useState({
    cpuOption: "Nothing",
    storageType: null,
    storageSize: null,
    priceRange: [0, 100000],
  });

  useEffect(() => {
    async function fetchProducts() {
      const ProdList = await getAllProducts();
      setProducts(ProdList);
    }
    fetchProducts();
  }, []);
  useEffect(() => {
      async function fetchCPUs() {
        const allCPUs = await getAllCPUs();
       // console.log(JSON.stringify(allCPUs));
        setCpus(allCPUs);
      }
      fetchCPUs();
    }, []);
  useEffect(()=>{
    async function fetchStorages()
    {
      const AllSto = await getAllStorageDevices();
      setstos(AllSto);
    }
    fetchStorages();
  },[]);  
  
    useEffect(() => {
      async function fetchAllInstances()
       {
          const instances = {};
          for (const prod of products)
          {
           // console.log("my Instance :",prod)
            const myProd = await GetProductbyID(prod.productId);
           
            instances[prod.productId] = myProd;
           // console.log("my Instance in array :",instances[prod.productId])
          }
    setProdInstances(instances);
       }

  if (products.length > 0) {
    fetchAllInstances();
  }
}, [products]);
    
    const filteredProducts = products.filter(prod => {

    const _prod = prodInstances[prod.productId];
  console.log("My Product boom : ", _prod);
  if (!_prod)
  {
      return false
   } // skip if not yet loaded//this actually has teh attribute that i need;
      for(const c of cpus)
      {
        //console.log("my cpu :",c.cpuId);
      }
    const cpuObj = cpus.find(c => c.cpuId==_prod.cpuId);
    
    const cpuMatch =
  filters.cpuOption === "Nothing" || 
  (cpuObj && cpuObj.brand?.trim().toLowerCase() === filters.cpuOption.trim().toLowerCase());

    for(const s of stos)
      {
      //  console.log("my sto :",s);
      }
  const stoObj = stos.find(s => s.storageId==_prod.storageId);

    const storageMatch =
      (!filters.storageType && !filters.storageSize) ||
      (stoObj.type === filters.storageType &&
      stoObj.capacity === filters.storageSize);
      console.log("type: ",stoObj)

    const priceMatch =
      prod.price >= filters.priceRange[0] && prod.price <= filters.priceRange[1];

    return cpuMatch && storageMatch && priceMatch;
  });

    function toggleSidebar() {
      setIsShowingSidebar((c) => !c);
    }
    
    return (
      <div className="home-container" style={{ height: "100vh" }}>
        <div
          className="sidebar-container"
          style={{
            height: "100vh",
            width: isShowingSidebar ? "20vw" : 0,
            position: !isShowingSidebar && "absolute",
            left: isShowingSidebar ? "0px" : "-999px",
          }}
        >
          <Sidebar
          isShowing={isShowingSidebar}
          filters={filters}
            setFilters={setFilters}
          />
        </div>
        <ProductsList
          toggleSidebar={toggleSidebar}
          isShowingSidebar={isShowingSidebar}
          products={filteredProducts}
        />
      </div>
    );
  }

  export default Home;
