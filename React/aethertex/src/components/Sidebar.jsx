import { useState } from "react";
import RadioButtonList from "./RadioButtonList";
import Slider from "@mui/material/Slider";
import "../stylesheets/Sidebar.css";

function Sidebar({ isShowing }) {
  const [cpuOption, setCPUOption] = useState("Nothing");

  const radioColor = {
    color: "white",
    "&.Mui-checked": {
      color: "#c29a39",
    },
  };

  function handelCPUSelection(value) {
    setCPUOption(value);
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
          //onChange={handelCPUSelection}
        />

        <RadioButtonList
          textcolor={"white"}
          labels={["500G", "1TB"]}
          title={"Storage"}
          buttonColor={radioColor}
          //onChange={handelCPUSelection}
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
          defaultValue={[0, 100000]}
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
