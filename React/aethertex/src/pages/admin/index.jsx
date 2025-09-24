import React, { useState, useEffect } from "react";
  import Sidebar from "../../components/Sidebar";
import "../../stylesheets/AdminHome.css";
import AdminPanel from "../../components/AdminPanel";
import InputSubmit from "../../components/InputSubmit";
import AdminProductsList from "../../components/AdminProductsList";
import { GetProductbyID,getAllProducts,getAllCPUs,getAllStorageDevices } from "../../jsfunctions/alljsfunctions";

function AdminHome() {
const [isShowingSidebar, setIsShowingSidebar] = useState(false);
const [selectedProductId, setSelectedProductId] = useState(null);
const [products, setProducts] = useState([]);
    const [cpus, setCpus] = useState([]);
    const [stos, setstos] = useState([]);
   const [prodInstances, setProdInstances] = useState({});
   const [disableNavigation, setDisableNavigation] = useState(false);

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
    function handleSelectProduct(productId) {
      setSelectedProductId((prev) => (prev === productId ? null : productId));
    }

  return (
    <div className="main-container">
      <section className="panel">
        <AdminPanel />

        <div style={{ marginBottom: "10px" }}>
          <button onClick={() => setDisableNavigation(prev => !prev)} className="Admin-Nav-Edit-Remove-button">
              {disableNavigation ? "Enable Admin mode" : "Disable Admin mode"}
          </button>
         
        </div>

      </section>
      <section className="view-container">
        <div className="search-section">
          <InputSubmit
            buttonLabel={"Search"}
            containerClassName={"admin-search-container"}
            inputClassName={"admin-search-input"}
            buttonClassName={"admin-search-button"}
          />
          
          {isShowingSidebar && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.3)", // dim effect
                    zIndex: 9998, // just below sidebar
                  }}
                  onClick={toggleSidebar} // clicking overlay closes sidebar
                />
              )}
              <div
                className="sidebar-container"
                style={{
                  position: "fixed",
                  top: 0,
                  left: isShowingSidebar ? "0" : "-100%",
                  width: "20vw",
                  height: "100vh",
                  zIndex: 9999,
                  transition: "left 0.3s ease",
                  backgroundColor: "gray",
                  boxShadow: "2px 0px 10px rgba(0,0,0,0.3)",
                }}
              >
                <Sidebar
                  isShowing={isShowingSidebar}
                  filters={filters}
                  setFilters={setFilters}
                />
              </div>

         


          <AdminProductsList
          toggleSidebar={toggleSidebar}
          isShowingSidebar={isShowingSidebar}
          products={filteredProducts}
          disableNavigation={disableNavigation} 
        />
        </div>

      </section>
    </div>
  );
}

export default AdminHome;
