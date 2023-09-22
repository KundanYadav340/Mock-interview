import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Result = () => {
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          borderBottom: "1px solid #dfdfdf",
          p: "8px",
          position: "sticky",
          top: 0,
          background: "#f5f7fb",
          zIndex: 1000,
        }}
      >
        <IconButton>
          <ArrowBack />
        </IconButton>
        <Typography sx={{ fontWeight: "bold" }}>Result</Typography>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Result;
