import { Box, useMediaQuery } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import React from "react";
import { useTheme } from "@emotion/react";
import Score from "components/Score";
import TagAnalysis from "components/TagAnalysis";

const Dashboard = () => {
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem" mr="120px">
      <FlexBetween></FlexBetween>
      <Box>
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="160px"
          gap="20px"
          sx={{
            "& > div": {
              gridColumn: isNonMediumScreens ? undefined : "span 12",
            },
          }}
        >
          <Box
            gridColumn="span 7"
            gridRow="span 1"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="0rem 1rem"
            flex="1 1 100%"
            sx={{
              background: "white",
              backgroundImage: "linear-gradient(to left, cyan, blue)",
            }}
            borderRadius="0.55rem"
          >
            <Score />
          </Box>
          <Box
            gridColumn="span 5"
            gridRow="span 3"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            // p="1.25rem 1rem"
            border="1px solid #aaa"
            flex="1 1 100%"
            sx={{ background: "white" }}
            borderRadius="0.55rem"
            overflow="hidden"
          >
            <TagAnalysis />
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 1"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="1.25rem 1rem"
            flex="1 1 100%"
            sx={{ background: "white" }}
            borderRadius="0.55rem"
          >
            hey
          </Box>
          <Box
            gridColumn="span 3"
            gridRow="span 2"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="1.25rem 1rem"
            flex="1 1 100%"
            sx={{ background: "white" }}
            borderRadius="0.55rem"
          >
            hey
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 1"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="1.25rem 1rem"
            flex="1 1 100%"
            sx={{ background: "white" }}
            borderRadius="0.55rem"
          >
            hey
          </Box>
          <Box
            gridColumn="span 12"
            gridRow="span 2"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="1.25rem 1rem"
            flex="1 1 100%"
            sx={{ background: "white" }}
            borderRadius="0.55rem"
          >
            hey
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
