import { Box } from "@mui/material";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SpeedoMeter = () => {
  return (
    <Box width="60%" m="0 20%" overflow={"hidden"}>
      <CircularProgressbar
        value={(310 / 482) * 100}
        text={`${80}%`}
        circleRatio={1}
        strokeWidth={5}
        styles={buildStyles({
          // rotation: 1 / 2 + 1 / 4.45,
          //   strokeLinecap: "butt",
          trailColor: "#eee",
        })}
      />
    </Box>
  );
};

export default SpeedoMeter;
