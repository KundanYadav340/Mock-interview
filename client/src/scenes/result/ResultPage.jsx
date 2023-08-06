import { Box } from "@mui/material";
import TableStyled from "components/TableStyled";
import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useGetSubmissionsQuery } from "state/api";

const ResultPage = () => {
  const userId = useSelector((state) => state.global.user._id);
  const { data, isLoading } = useGetSubmissionsQuery(userId);
  return (
    <Box display="flex" width="100%">
      <Box width="100%" m="20px 15%">
        <Box>{data && <TableStyled data={data} />}</Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default ResultPage;
