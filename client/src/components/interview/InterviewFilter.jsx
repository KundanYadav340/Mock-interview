import {
  Box,
  Button,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Slider,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import React, { useState } from "react";
import { courseStructure } from "strings/string";
import SingleSelectOptions from "./SingleSelectOptions";

const InterviewFilter = () => {
  const [selectedValuesMultipleChoice, setSelectedValuesMultipleChoice] =
    useState([]);
  const [length, setLength] = useState(0);

  const handleChangeChecked = (event) => {
    console.log("fun");
    const value = event.target.value;
    console.log(value);
    const newValue = selectedValuesMultipleChoice.includes(value)
      ? selectedValuesMultipleChoice.filter((val) => val !== value)
      : [...selectedValuesMultipleChoice, value];
    setSelectedValuesMultipleChoice((prevValues) =>
      prevValues.includes(value)
        ? prevValues.filter((val) => val !== value)
        : [...prevValues, value]
    );
  };
  const handleLength = (event) => {
    setLength(event.target.value);
  };
  return (
    <Box
      mt="100px"
      sx={{
        width: "300px",
        minHeight: "60vh",
        maxHeight: "80vh",
        border: "1px solid #dfdfdf",
        borderRadius: "10px",
        background: "#fff",
        position: "sticky",
        top: "80px",
      }}
    >
      <FlexBetween p="10px 20px" sx={{ borderBottom: "1px solid #dfdfdf" }}>
        <Typography fontWeight="bold" sx={{ fontSize: "16px" }}>
          Filter
        </Typography>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Reset
        </Button>
      </FlexBetween>
      <Box p="15px 20px" sx={{ borderBottom: "1px solid #dfdfdf" }}>
        <FlexBetween>
          <Box sx={{ fontWeight: "bold", pb: "10px" }}>Rating</Box>
          <Box sx={{ fontSize: "12px", color: "#505050" }}>
            {length} and above
          </Box>
        </FlexBetween>

        <Slider
          defaultValue={0}
          aria-label="Default"
          valueLabelDisplay="auto"
          step={0.5}
          onChange={handleLength}
          marks
          min={0}
          max={4.5}
        />
      </Box>
      <Box p="15px 20px" sx={{ borderBottom: "1px solid #dfdfdf" }}>
        <FlexBetween>
          <Box sx={{ fontWeight: "bold", pb: "10px" }}>Difficulty</Box>
          <Box sx={{ fontSize: "12px", color: "#505050" }}></Box>
        </FlexBetween>
        <SingleSelectOptions />
      </Box>

      <Box>
        <Box m=" 15px 20px" overflow={"hidden"}>
          <Box sx={{ fontWeight: "bold", pb: "10px" }}>Subjects</Box>
          <Box>
            <FormGroup>
              {courseStructure.subjects.cse.map((val, key) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedValuesMultipleChoice.includes(`${key}`)}
                      onChange={handleChangeChecked}
                      value={key}
                      sx={{
                        fontSize: "12px",
                        p: "0px 0px",
                        m: "0px",
                        mr: "4px",
                      }}
                    />
                  }
                  sx={{ fontSize: "12px", m: "6px 0px" }}
                  label={
                    <Box
                      sx={{
                        display: "inline-flex",
                        whiteSpace: "nowrap",
                        width: "60%",
                      }}
                    >
                      {val}
                    </Box>
                  }
                  key={key}
                />
              ))}
            </FormGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InterviewFilter;
