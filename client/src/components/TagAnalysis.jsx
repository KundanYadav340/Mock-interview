import { Box, Typography } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

const Chiplet = () => {
  return (
    <Box
      mb="12px"
      //   borderBottom="1px solid #dfdfdf"
      p="10px"
      sx={{ background: "#efefef", borderRadius: "10px" }}
    >
      <FlexBetween>
        <Typography sx={{ fontSize: "14px" }}> Binary Search</Typography>
        <FlexBetween gap="4px">
          <Typography
            sx={{ fontWeight: "bold", color: "#505050", fontSize: "14px" }}
          >
            80%
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#707070" }}>
            {" "}
            scored{" "}
          </Typography>
        </FlexBetween>
      </FlexBetween>
      <FlexBetween gap="3px">
        <Box
          sx={{
            background: "#6060ff",
            width: "50%",
            height: "4px",
            borderRadius: "4px",
          }}
        ></Box>
        <Box
          sx={{
            background: "#30dd30",
            width: "30%",
            height: "4px",
            borderRadius: "4px",
          }}
        ></Box>
        <Box
          sx={{
            background: "#ff8080",
            width: "20%",
            height: "4px",
            borderRadius: "4px",
          }}
        ></Box>
      </FlexBetween>
      <Box gap="3px" display="flex" mt="4px">
        <Box
          sx={{
            color: "blue",
            background: "#eeeeff",
            borderRadius: "4px",
            p: "4px 6px",
            fontSize: "10px",
          }}
        >
          Attempted : 16/20
        </Box>
        <Box
          sx={{
            color: "green",
            background: "#eeffee",
            borderRadius: "4px",
            p: "4px 6px",
            fontSize: "10px",
          }}
        >
          Correct : 12
        </Box>
        <Box
          sx={{
            color: "red",
            background: "#ffeeee",
            borderRadius: "4px",
            p: "4px 6px",
            fontSize: "10px",
          }}
        >
          Incorrect : 4
        </Box>
      </Box>
    </Box>
  );
};

const TagAnalysis = () => {
  return (
    <Box height="100%">
      <Box
        sx={{
          borderBottom: "1px solid #aaa",
          p: "12px",
          fontFamily: "verdana",
        }}
      >
        Topic wise Performance
      </Box>
      <Box
        className="resultTag"
        p="14px 24px"
        height="85%"
        sx={{ overflowY: "auto" }}
      >
        <Chiplet />
        <Chiplet />
        <Chiplet />
        <Chiplet />
        <Chiplet />
        <Chiplet />
        <Chiplet />
        <Chiplet />
        <Chiplet />
      </Box>
    </Box>
  );
};

export default TagAnalysis;
