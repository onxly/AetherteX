import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import "../stylesheets/Sidebar.css";
import { red } from "@mui/material/colors";

function RadioButtonList({
  textcolor,
  title,
  labels,
  onChange,
  defaultValue,
  buttonColor,
}) {
  return (
    <FormControl>
      <FormLabel
        id={`${title}-group-label`}
        style={{ width: "100%", textAlign: "center", color: "white" }}
      >
        {title}
      </FormLabel>
      <RadioGroup
        name="radio-buttons-group"
        onChange={(value) => {
          onChange(value.target.value);
        }}
      >
        {labels.map((lbl, idx) => {
          return (
            <FormControlLabel
              key={"Radio#" + idx}
              value={defaultValue ? idx : lbl}
              control={<Radio sx={buttonColor} />}
              label={
  typeof lbl === "string"
    ? lbl.split("\n").map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))
    : lbl
}
              size="sm"
              sx={{ color: textcolor }}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonList;
