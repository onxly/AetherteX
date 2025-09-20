import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductsList from "../components/ProductsList";
import "../stylesheets/Home.css";

function Home() {
  document.title = "Home | AetherteX";
  const [isShowingSidebar, setIsShowingSidebar] = useState(false);
  const [filters, setFilters] = useState({cpuOption: "Nothing", priceRange:[0,10000]});

  function toggleSidebar() {
    setIsShowingSidebar((c) => !c);
  }
  
  const filteredProducts = Array.isArray(products)
  ? products.filter(product => {
      const matchesCPU =
        filters.cpuOption === "Nothing" || product.cpu === filters.cpuOption;
      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];
      return matchesCPU && matchesPrice;
    })
  : [];

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
        <Sidebar isShowing={isShowingSidebar} />
      </div>
      <ProductsList
        toggleSidebar={toggleSidebar}
        isShowingSidebar={isShowingSidebar}
      />
    </div>
  );
}

export default Home;
