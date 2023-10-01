import { Box, Button, Typography } from "@mui/material";
import SingleSelectOptions from "components/interview/SingleSelectOptions";
import React from "react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

const InterviewEndConfirmation = () => {
  const [value, setValue] = React.useState(2);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "#efefef",
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // pt: "15vh",
      }}
    >
      <Box sx={{ width: "60%", background: "#fff", p: "3% 5%" }}>
        <Box textAlign={"center"} mb="5vh">
          <Typography
            variant="h4"
            sx={{
              background: "-webkit-linear-gradient(blue, #991099)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            Your Interview Was Great
          </Typography>
        </Box>
        <Box textAlign={"center"} p={"20px"}>
          <Typography>
            Your feedback helps us improve our platform, and help other users to
            find there perfect choice.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ p: "0 5%", borderRight: "1px solid #dfdfdf" }}>
            <Box sx={{ fontWeight: "bold" }}>What was the difficulty Level</Box>
            <SingleSelectOptions />
          </Box>
          <Box sx={{ p: "0 5%" }}>
            <Box sx={{ fontWeight: "bold" }}>
              Rate your mock interview experience.
            </Box>
            <Box sx={{ fontSize: "14px", color: "#505050", mb: "10px" }}>
              ( Rating of Interview Questions only not Platform)
            </Box>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#005090",
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "5%",
            mt: "4vh",
          }}
        >
          <Button variant="outlined" color="success">
            See Result
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/")}
          >
            Attempt more Interview
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InterviewEndConfirmation;
