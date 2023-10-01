import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
  DocumentScanner,
} from "@mui/icons-material";
import { Box, Button, Chip, Collapse, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetResultQuery } from "state/api";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import NotAttempted from "components/resultDashboard/NotAttempted";
import OthersVideoAnswer from "./OthersVideoAnswer";
const VideoShow = ({ link }) => {
  const [vlink, setVlink] = useState("");
  useEffect(() => {
    setVlink(link);
  }, [link]);
  return (
    // <>
    //   {link && (
    //     <video controls width={"600px"}>
    //       <source src={link} type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //   )}
    // </>
    <iframe
      width="600"
      height="360"
      src={link}
      title={`Video 12`}
      allowFullScreen
    ></iframe>
  );
};
const QuestionAnalysisComp = ({ data, changeQuestion, qno }) => {
  const [answerCollapse, setAnswerCollapse] = useState(true);
  const [pointsCollapse, setPointsCollapse] = useState(true);
  const [correctAnswerCollapse, setCorrectAnswerCollapse] = useState(false);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap="10px"
      maxWidth={"820px"}
      m=" 30px 60px"
      p="20px"
      sx={
        {
          // background: "white",
        }
      }
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Typography sx={{ fontWeight: "bold" }}>
          Question no. {qno + 1}
        </Typography>
        {data.status !== "attempted" ? (
          <Chip
            label="Not Attempted"
            variant="contained"
            color="error"
            size="small"
          />
        ) : (
          <Chip
            label="Attempted"
            variant="contained"
            color="success"
            size="small"
          />
        )}
      </Box>
      <Box>{data.question.questionAsked}</Box>
      {data.status === "attempted" ? (
        <>
          <Box display={"flex"} justifyContent={"center"}>
            <VideoShow link={data.selectedOptions[0]} />
          </Box>
          <Box
            sx={{
              background: "#fff",
              border: "1px solid #dfdfdf",
              p: "18px",
              borderRadius: "10px",
            }}
          >
            <Box display={"flex"} alignItems={"center"} mb="10px" gap="8px">
              <DocumentScanner sx={{ fontSize: "18px" }} />
              <Typography sx={{ fontWeight: "bold" }}>
                Transcribed Answer:
              </Typography>
            </Box>
            <Collapse
              in={answerCollapse}
              collapsedSize={60}
              onClick={() => {
                setAnswerCollapse(!answerCollapse);
              }}
              sx={{
                color: "#505050",
                cursor: "pointer",
                fontFamily: "sans-serif",
                ml: "16px",
              }}
            >
              {data.transcript}
            </Collapse>
          </Box>
          <Box>{/* AI generated strong and  */}</Box>
          <Box sx={{ border: "1px solid #008080" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#008080",
                p: "8px 12px",
              }}
            >
              <AutoModeIcon sx={{ color: "white" }} />
              <Typography color={"white"}>
                AI Generated Strong and Weak Points:
              </Typography>
            </Box>
            <Collapse
              in={pointsCollapse}
              collapsedSize={60}
              onClick={() => {
                setPointsCollapse(!pointsCollapse);
              }}
              sx={{
                color: "#505050",
                cursor: "pointer",
                fontFamily: "sans-serif",
                m: "16px",
              }}
            >
              <Box>
                The Virtual DOM also simplifies development by providing a more
                declarative programming model. Developers can focus on
                describing how the UI should look at any given time, and React
                takes care of efficiently updating the real DOM.
              </Box>
              <Box>
                In summary, the Virtual DOM in React is a key feature that
                optimizes web application performance by reducing unnecessary
                DOM manipulations and offering a more straightforward
                development workflow.
              </Box>
            </Collapse>
          </Box>
        </>
      ) : (
        <>
          <NotAttempted />
        </>
      )}
      <Box
        sx={{
          p: correctAnswerCollapse ? "16px" : "16px 16px 0px 16px",
          background: "#fff",
          border: "1px solid #dfdfdf",
          borderRadius: "12px",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Good to Talk About:</Typography>
        <Box>
          <Collapse
            in={correctAnswerCollapse}
            collapsedSize={80}
            onClick={() => {
              setCorrectAnswerCollapse(!correctAnswerCollapse);
            }}
            sx={{
              color: "#505050",
              cursor: "pointer",
              fontFamily: "sans-serif",
              m: "16px 16px 0px 16px",
            }}
          >
            <Box>
              The Virtual DOM also simplifies development by providing a more
              declarative programming model. Developers can focus on describing
              how the UI should look at any given time, and React takes care of
              efficiently updating the real DOM.
            </Box>
            <Box>
              In summary, the Virtual DOM in React is a key feature that
              optimizes web application performance by reducing unnecessary DOM
              manipulations and offering a more straightforward development
              workflow.
            </Box>
          </Collapse>
        </Box>
      </Box>
      <Box
        sx={{
          p: "16px",
          background: "#fff",
          border: "1px solid #dfdfdf",
          borderRadius: "12px",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Most Liked Answers:</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            p: "12px",
            overflowX: "auto",
          }}
        >
          <OthersVideoAnswer />
          <OthersVideoAnswer />
          <OthersVideoAnswer />
          <OthersVideoAnswer />
          <OthersVideoAnswer />
        </Box>
      </Box>
      <Box sx={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <Button
          variant="contained"
          startIcon={<ArrowBackIosNewRounded />}
          onClick={() => {
            changeQuestion(-2);
          }}
          sx={{ textTransform: "none" }}
        >
          Previous
        </Button>
        <Button
          // size="small"
          variant="contained"
          endIcon={<ArrowForwardIosRounded />}
          sx={{ ml: "10px", textTransform: "none" }}
          onClick={() => {
            changeQuestion(-1);
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

const QuestionAnalysis = () => {
  const { submissionId } = useParams();
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const { data, isLoading } = useGetResultQuery(submissionId);
  useEffect(() => {
    console.log("cvdfvdvdvad", data);
  }, [data]);
  const changeQuestion = (increment) => {
    if (increment === -1) {
      setSelectedQuestion((prev) => (prev + 1) % data.length);
    }
    if (increment === -2) {
      setSelectedQuestion((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    }
  };
  return (
    <>
      {data && (
        <QuestionAnalysisComp
          qno={selectedQuestion}
          changeQuestion={changeQuestion}
          data={{ ...data[selectedQuestion] }}
        />
      )}
    </>
  );
};

export default QuestionAnalysis;
