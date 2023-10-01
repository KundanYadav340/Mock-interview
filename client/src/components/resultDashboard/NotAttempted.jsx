import { Box } from "@mui/material";
import React from "react";
import notAttempted from "assets/notAttempted.png";

const NotAttempted = () => {
  return (
    <Box
      textAlign={"center"}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box>
        <img src={notAttempted} alt="help" width="360px" />
      </Box>
      <Box width={"80%"} sx={{ fontFamily: "sans-serif", textAlign: "center" }}>
        Having trouble with the question? See the video answer to get a better
        understanding of the question.
      </Box>
    </Box>
  );
};

export default NotAttempted;
