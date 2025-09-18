import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductsList from "../components/ProductsList";
import "../stylesheets/Home.css";

function Home() {
  document.title = "Home | AetherteX";
  const [comPCs, setComPCs] = useState([]);
  const [isShowingSidebar, setIsShowingSidebar] = useState(false);

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
        <Sidebar isShowing={isShowingSidebar} />
      </div>
      <ProductsList
        toggleSidebar={toggleSidebar}
        isShowingSidebar={isShowingSidebar}
        comPCs={comPCs}
        setComPCs={setComPCs}
      />
    </div>
  );
}

export default Home;
