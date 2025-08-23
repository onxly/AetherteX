import React from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <div className="home-container">
        <ProductCard
          imgSrc={
            "https://pcbuilder.co.za/wp-content/uploads/2025/08/PCB_SPECIALIST_06_PCBuilder-Ryzen-5-7600-SPECIALIST-Windows-11-Gaming-PC_wr_01.jpg"
          }
          title={"The Rumbler"}
          price={3000}
        />
      </div>
    </>
  );
}

export default Home;
