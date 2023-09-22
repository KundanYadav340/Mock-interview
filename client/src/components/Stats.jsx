import PieChart from "./graphs/PieChart";
import { Box, Divider, Typography } from "@mui/material";
import { pieData } from "data";
import React from "react";

const Stats = () => {
  return (
    <>
      {/* <Box
        textAlign={"center"}
        sx={{ background: "#eeffee", p: "10px", border: "1px solid #ddeedd" }}
      >
        <Typography sx={{ color: "#606060" }}>Highest Marks</Typography>
        <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>
          97
        </Typography>
        <Typography>From Vaibhav Singh</Typography>
      </Box> */}
      <Box sx={{}}>
        <Typography sx={{ color: "#606060" }}>Highest Marks</Typography>
        <Typography
          sx={{ fontSize: "22px", fontWeight: "bold", lineHeight: 1 }}
        >
          97
        </Typography>
        <Typography sx={{ color: "#606060" }}>Median of Marks</Typography>
        <Typography
          sx={{ fontSize: "22px", fontWeight: "bold", lineHeight: 1 }}
        >
          88
        </Typography>
      </Box>
      <Box>
        <PieChart data={pieData} />
      </Box>
      <Box textAlign={"center"}>Color Wheel of marks</Box>
    </>
  );
};

export default Stats;
