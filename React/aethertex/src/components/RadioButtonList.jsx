import { Radio, RadioGroup } from "@mui/joy";
import "../stylesheets/Sidebar.css";

function RadioButtonList({ textcolor, title, labels, onChange, defaultValue }) {
  return (
    <>
      <p style={{ justifySelf: "center" }}>{title}</p>
      <RadioGroup
        name="radio-buttons-group"
        onChange={(value) => {
          onChange(value.target.value);
        }}
      >
        {labels.map((lbl, idx) => {
          return (
            <Radio
              key={"Radio#" + idx}
              value={defaultValue ? idx : lbl}
              label={lbl}
              size="sm"
              sx={{ color: textcolor }}
            />
          );
        })}
      </RadioGroup>
    </>
  );
}

export default RadioButtonList;
