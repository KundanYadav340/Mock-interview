import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const SingleSelectOptions = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
        // sx={{ fontSize: "12px", m: "6px 0px" }}
      >
        <FormControlLabel
          value="Easy"
          control={<Radio sx={{ fontSize: "12px", p: "6px 12px" }} />}
          label="Easy"
        />
        <FormControlLabel
          value="Medium"
          control={<Radio sx={{ fontSize: "12px", p: "6px 12px" }} />}
          label="Medium"
        />
        <FormControlLabel
          value="Hard"
          control={<Radio sx={{ fontSize: "12px", p: "6px 12px" }} />}
          label="Hard"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default SingleSelectOptions;
