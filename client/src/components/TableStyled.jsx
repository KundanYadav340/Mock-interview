import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(sno, id, name, submitted, rank, status) {
  return { sno, id, name, submitted, rank, status };
}

const rows = [
  createData(
    1,
    "d4354th65y5rb5h",
    "Frozen yoghurt",
    "12 mar, 2023 ( 08:10 PM )",
    6.0,
    "new"
  ),
  createData(2, "yy57bu767un7v3", "Ice cream sandwich", 237, 9.0, "new"),
  createData(3, "h6u67ur4454f4a", "Eclair", 262, 16.0, "seen"),
  createData(4, "cv565v65yby2wer", "Cupcake", 305, 3.7, "seen"),
  createData(5, "by7u67bbvyghfer", "Gingerbread", 356, 16.0, "seen"),
];

export default function TableStyled({ data }) {
  const navigate = useNavigate();
  console.log("table", data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.No</StyledTableCell>
            <StyledTableCell>Interview ID</StyledTableCell>
            <StyledTableCell>Interview Name</StyledTableCell>
            <StyledTableCell>Submitted on</StyledTableCell>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, key) => (
            <StyledTableRow
              key={key}
              onClick={() => {
                navigate(`${row._id}`);
              }}
              sx={{ cursor: "pointer" }}
            >
              <StyledTableCell component="th" scope="row">
                {key + 1}
              </StyledTableCell>
              <StyledTableCell>{row._id}</StyledTableCell>
              <StyledTableCell>{row.createdAt}</StyledTableCell>
              <StyledTableCell>{row.updatedAt}</StyledTableCell>
              <StyledTableCell>{row.attemptNumber}</StyledTableCell>
              <StyledTableCell>
                {row.resultSeen ? (
                  "result seen"
                ) : (
                  <Typography
                    sx={{
                      color: "white",
                      backgroundImage: "linear-gradient(to right, red , blue)",
                      borderRadius: "4px",
                      textAlign: "center",
                    }}
                  >
                    new
                  </Typography>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
