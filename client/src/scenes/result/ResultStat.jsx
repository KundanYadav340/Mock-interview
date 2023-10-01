import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useGetOneSubmissionQuery } from "state/api";
import { useGetEvaluateMutation } from "state/api";
import SidebarResult from "components/resultDashboard/SidebarResult";

const ResultStat = () => {
  const { submissionId } = useParams();
  const { data, isLoading } = useGetOneSubmissionQuery(submissionId);
  const [checked, setChecked] = useState(false);
  const [getEvaluate, { isError, isSuccess }] = useGetEvaluateMutation();
  useEffect(() => {
    console.log("oneSubmission", data);
    if (data) {
      if (!data.marked) {
        setChecked(false);
        getEvaluate(submissionId);
      } else {
        setChecked(true);
      }
    }
  }, [data]);
  if (checked) {
    return (
      <>
        <Box>Your Answeres are not evaluated yet...</Box>
      </>
    );
  }
  return (
    <Box display="flex" width="100%" sx={{ background: "white" }}>
      <Box
        width="300px"
        height="100vh"
        sx={{ position: "fixed", borderRight: "1px solid #dfdfdf" }}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"right"}
          p="80px 20px"
        >
          <SidebarResult />
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          background: "#f5f7fb",
          marginLeft: "300px",
          paddingLeft: "20px",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default ResultStat;
