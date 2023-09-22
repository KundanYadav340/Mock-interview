import { Box } from "@mui/material";
import React from "react";
import SpeedoMeter from "./SpeedoMeter";

const RankBox = () => {
  return (
    <Box>
      <SpeedoMeter />
      <Box sx={{ textAlign: "center", p: "10px 16px" }}>
        Your Score Beaten 80% participants.
      </Box>
      <Box
        sx={{
          borderLeft: "3px solid green",
          background: "#efffef",
          minHeight: "40PX",
          width: "92%",
          m: "10px 2%",
          p: "8px",
        }}
      ></Box>
    </Box>
  );
};

export default RankBox;
