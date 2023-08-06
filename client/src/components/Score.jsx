import React from "react";
import FlexBetween from "./FlexBetween";
import { Box, Typography } from "@mui/material";
// import cup from "assets/cup.svg";
// import cups from "assets/cups.jpg";
import trophy from "assets/tropy2.gif";

const Score = () => {
  return (
    <FlexBetween>
      <Box ml="30px">
        <Box>
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: "bold",
              lineHeight: 1,
              color: "white",
            }}
          >
            91/100
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#dfdfdf" }}>
            Score{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#60cc60",
            borderRadius: "6px",
            p: "4px 10px",
            color: "white",
            mt: "10px",
          }}
        >
          {" "}
          Rank : 23/456
        </Box>
      </Box>
      <Box
        position="relative"
        // width="160px"
        flexGrow={1}
        height="160px"
        ml="70px"
        mb="8px"
        sx={{ overflow: "visible" }}
      >
        <Box
          component="img"
          src={trophy}
          alt="cup"
          position="absolute"
          height="230px"
          // width="200px"
          sx={{
            top: "-70px",
            right: "0px",
            zIndex: 1,
            transform: "rotate(0deg)",
          }}
        />
        {/* </Box> */}
      </Box>
    </FlexBetween>
  );
};

export default Score;
