import { Box } from "@mui/material";
import React from "react";

const OthersVideoAnswer = () => {
  return (
    <Box
      sx={{
        minWidth: "260px",
        border: "1px solid #dfdfdf",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: "100%", height: "140px", background: "#dfdfdf" }}></Box>
      <Box sx={{ width: "100%", height: "48px", background: "#fff" }}>
        Some Text
      </Box>
    </Box>
  );
};

export default OthersVideoAnswer;
