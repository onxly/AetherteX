import { useState, useEffect } from "react";
import RadioButtonList from "./RadioButtonList";
import Slider from "@mui/material/Slider";
import "../stylesheets/Sidebar.css";
//import {GetFilterProds} from "../jsfunctions/alljsfunctions";
function Sidebar({ isShowing, filters, setFilters }) {
  
  const [minPrice,setMinPrice]=useState();
  const [maxPrice,setMaxPrice]=useState();
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [CPUOption, setCPUOption] = useState();
  const [storageTypeOption, setStorageTypeOption] = useState();
  const [storageSizeOption, setStorageSizeOption] = useState();


  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
    setFilters(prev => ({ ...prev, priceRange: newValue }));
    console.log("Small value:", newValue[0]); // min
    console.log("Big value:", newValue[1]);   // max
  };
  

  async function handlePrice(value)
  {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  }
  
  const radioColor = {
    color: "white",
    "&.Mui-checked": {
      color: "#c29a39",
    },
  };

  async function handelCPUSelection(value) {
    setCPUOption(value);
    setFilters(prev => ({ ...prev, cpuOption: value }));
  }

  async function handelStorageSelection(value) {
  // Example value: "SSD 256GB"
  const [type, sizeWithUnit] = value.split(" "); // ["SSD", "256GB"]
  let size = parseFloat(sizeWithUnit); // 256

  if (sizeWithUnit.endsWith("TB")) {
    console.log("Size ::::",size)
    size *= 1024; // convert TB to GB
      console.log("Size ::::",size)
  }

  setStorageTypeOption(type);
  setStorageSizeOption(size);
  setFilters(prev => ({ ...prev, storageType: type, storageSize: size }));
}


  return (
    <>
      <p style={{ justifySelf: "center" }}>Fillter</p>
      <hr />
      <section className="radio-buttons">
        <RadioButtonList
          textcolor={"white"}
          labels={["Intel", "AMD"]}
          title={"CPU"}
          buttonColor={radioColor}
          onChange={handelCPUSelection}
        />

        <RadioButtonList
          textcolor={"white"}
          labels={["SSD 256GB","SSD 512GB","SSD 1TB","SSD 2TB"]}
          title={"Storage"}
          buttonColor={radioColor}
          onChange={handelStorageSelection}
        />
      </section>

      <section
        style={{
          width: "95%",
          alignItems: "center",
          justifySelf: "center",
          marginTop: 15,
        }}
      >
        <div style={{ textAlign: "center" }}>Price Range</div>
        <Slider
          value={priceRange}
          onChange={handleChange}
          max={100000}
          valueLabelDisplay="auto"
          sx={{
            marginTop: 2,
            width: "90%",
            color: "#c29a39",
          }}
        />
      </section>
    </>
  );
}

export default Sidebar;
