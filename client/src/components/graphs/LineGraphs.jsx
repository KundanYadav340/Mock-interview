import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box } from "@mui/material";

const LineGraphs = ({ datanv }) => {
  console.log("nv", datanv);
  return (
    <>
      <Box height={"420px"} mt="10px">
        {datanv ? (
          <ResponsiveLine
            colors={{ scheme: "category10" }}
            data={datanv}
            margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: 30,
              max: 300,
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Tags",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Time Taken",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[]}
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </>
  );
};

export default LineGraphs;
