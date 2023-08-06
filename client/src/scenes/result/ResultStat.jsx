import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const ResultStat = () => {
  return (
    <Box display="flex" width="100%">
      <Box width="360px" height="100%">
        sidebar
      </Box>
      <Box sx={{ flexGrow: 1, background: "#efefef" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default ResultStat;
