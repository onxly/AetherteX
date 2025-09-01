import { useState } from "react";
import RadioButtonList from "./RadioButtonList";
import Slider from "@mui/joy/Slider";
import "../stylesheets/Sidebar.css";

function Sidebar({ isShowing }) {
  const [cpuOption, setCPUOption] = useState("Nothing");

  function handelCPUSelection(value) {
    setCPUOption(value);
  }

  return (
    <>
      <p style={{ justifySelf: "center" }}>Fillter</p>
      <hr />
      <RadioButtonList
        textcolor={"white"}
        labels={["Intel", "AMD"]}
        title={"CPU"}
        //onChange={handelCPUSelection}
      />

      <RadioButtonList
        textcolor={"white"}
        labels={["500G", "1TB"]}
        title={"Storage"}
        //onChange={handelCPUSelection}
      />

      <section style={{ width: "80%", justifySelf: "center", marginBlock: 25 }}>
        <p style={{ marginBottom: 25, padding: 0 }}>Price Range</p>
        <Slider
          defaultValue={[0, 100000]}
          max={100000}
          valueLabelDisplay="auto"
          sx={{ margin: 0, padding: 0 }}
        />
      </section>
    </>
  );
}

export default Sidebar;
