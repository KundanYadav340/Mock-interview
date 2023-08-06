import { DocumentScanner } from "@mui/icons-material";
import { Box, Button, Collapse, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetResultQuery } from "state/api";
const VideoShow = ({ link }) => {
  return (
    <video controls width={"600px"}>
      <source src={link} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
const QuestionAnalysisComp = ({ data }) => {
  const [answerCollapse, setAnswerCollapse] = useState(false);
  const [pointsCollapse, setPointsCollapse] = useState(false);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap="10px"
      maxWidth={"820px"}
      m=" 30px 60px"
      p="20px"
      sx={{
        background: "white",
      }}
    >
      <Box>Question no. {1}</Box>
      <Box>
        {data.question.questionAsked}
        What is react hooks? Explain the concept of Virtual DOM in React and its
        significance in web development?
      </Box>
      {data.status === "attempted" && (
        <>
          <Box
            sx={{
              background: "#fcfffc",
              p: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #aaffaa",
            }}
          >
            Scored: 9/20 | Average score: 6/20 | Highest score: 17/20
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <VideoShow
              link={
                "https://firebasestorage.googleapis.com/v0/b/interview-812a9.appspot.com/o/interviewVideoAnswers%2F4b210b8e-9cd4-41fe-9f89-4386f1f5844664adb28dac417ed6f01e456864c696f9262b82c0fdecc98b?alt=media&token=86dcd23a-a4b2-4a79-8d54-be3f0828dec4"
              }
            />
          </Box>
          <Box sx={{ background: "#efefef", p: "16px", borderRadius: "10px" }}>
            <Box display={"flex"} alignItems={"center"} mb="10px" gap="8px">
              <DocumentScanner />
              <Typography sx={{ fontWeight: "bold" }}>
                Transcribed Answer:
              </Typography>
            </Box>
            <Collapse
              in={answerCollapse}
              collapsedSize={40}
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
              In React, the Virtual DOM is a lightweight copy of the actual DOM,
              a representation of the UI components' structure and state. When
              changes occur in a React application, they are first made to the
              Virtual DOM, not the real DOM. The Virtual DOM then performs a
              diffing process, comparing the changes with the previous Virtual
              DOM state. Only the necessary changes are computed, and React
              updates the real DOM efficiently with these minimal changes.
            </Collapse>
          </Box>
          <Box sx={{ border: "1px solid #008080" }}>
            <Box sx={{ background: "#008080", p: "8px 12px" }}>
              <Typography color={"white"}>Strong and Weak Points:</Typography>
            </Box>
            <Collapse
              in={pointsCollapse}
              collapsedSize={40}
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
      )}
      <Box sx={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <Button size="small" variant="contained" startIcon={"<<"}>
          Previous
        </Button>
        <Button
          size="small"
          variant="contained"
          endIcon={">>"}
          sx={{ ml: "10px" }}
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

  return (
    <>{data && <QuestionAnalysisComp data={{ ...data[selectedQuestion] }} />}</>
  );
};

export default QuestionAnalysis;
