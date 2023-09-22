import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SidebarResult = () => {
  const { interviewId } = useParams();
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/");
  const lastPathSegment = pathSegments[pathSegments.length - 1];
  return (
    <Box>
      <Box
        onClick={() => {
          navigate(``);
        }}
        p="16px"
        sx={{
          border:
            lastPathSegment !== "QuestionAnalysis"
              ? "2px solid darkblue"
              : "1px solid #dfdfdf",
          borderRadius: "10px",
          textTransform: "none",
          mb: "10px",
          cursor: "pointer",
          fontWeight: "bold",
          color:
            lastPathSegment !== "QuestionAnalysis" ? "darkblue" : "#606060",
        }}
      >
        Dashboard
      </Box>
      <Box
        p="16px"
        sx={{
          border:
            lastPathSegment === "QuestionAnalysis"
              ? "2px solid darkblue"
              : "1px solid #dfdfdf",
          borderRadius: "10px",
          textTransform: "none",
          fontWeight: "bold",
          cursor: "pointer",
          color:
            lastPathSegment === "QuestionAnalysis" ? "darkblue" : "#606060",
        }}
        onClick={() => {
          navigate(`QuestionAnalysis`);
        }}
      >
        Question Analysis
      </Box>
    </Box>
  );
};

export default SidebarResult;
