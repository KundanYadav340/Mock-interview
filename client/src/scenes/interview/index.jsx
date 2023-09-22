import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import PaperLayout from "components/PaperLayout";
import { useGetQuestionsQuery } from "state/api";
import { useParams } from "react-router-dom";
import StatusBox from "./StatusBox";
import { People } from "@mui/icons-material";
import { useSubmitAnswersMutation } from "state/api";
// import Timer from './Timer';
import MainTimer from "components/MainTimer";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Interview = () => {
  const { interviewId } = useParams();
  const { data, isLoading } = useGetQuestionsQuery(interviewId);
  const [submitAnswers, { result }] = useSubmitAnswersMutation();
  const userId = useSelector((state) => state.global.user._id);
  const questions = data;
  const [openedQuestion, setOpenedQuestion] = useState(0);
  const [totalTime, setTotalTime] = useState(120);
  const [completed, setCompleted] = useState("running");
  const [changingAnswers, setChangingAnsers] = useState(0);
  const [selectedOptions, setSelectedeOptions] = useState([]);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    if (data) {
      var temp = [];
      for (var i = 0; i < questions.length; i++) {
        var initial = {
          question_id: questions[i]._id,
          type: questions[i].type,
          selectedOptions: [],
          answerLink: "",
          timeTaken: 0,
          status: i === 0 ? "seen" : "notSeen",
          transcript:""
        };
        temp[i] = initial;
      }
      setAnswers(temp);
      console.log("answers", answers);
    }
  }, [data]);

  //function when user changes his answer
  useEffect(() => {
    console.log(answers);
  }, [answers]);
  //next question function
  const nextQuestion = (timeTaken) => {
    if (openedQuestion < data.length - 1) {
      setQuestionStatus(data[openedQuestion + 1]._id, "seen");
      setOpenedQuestion(openedQuestion + 1);
    } else {
      setOpenedQuestion(openedQuestion);
      finalSubmit();
    }
  };
  //change question status
  const setQuestionStatus = (id, newStatus) => {
    const updatedAnswer = answers.map((answer) =>
      answer.question_id === id ? { ...answer, status: newStatus } : answer
    );
    setAnswers(updatedAnswer);
  };

  //timer functions for monitoring questions time
  const getTime = (time) => {
    return time;
  };

  const answerChanged = (id, key, type, transcript="") => {
    //for single choice question
    if (type === "singleChoice") {
      //console.log("obtained key", key, "id", id);
      const status = key !== "-1" ? "attempted" : "seen";
      const options = key !== "-1" ? [key] : [];
      const updatedAnswer = answers.map((answer) =>
        answer.question_id === id
          ? { ...answer, status: status, selectedOptions: options }
          : answer
      );
      setAnswers(updatedAnswer);
    }
    //for multiple choice questions
    if (type === "multipleChoice") {
      console.log("obtained key", key, "id", id);
      const status = key.length !== 0 ? "attempted" : "seen";
      const options = key;
      const updatedAnswer = answers.map((answer) =>
        answer.question_id === id
          ? { ...answer, status: status, selectedOptions: options }
          : answer
      );
      setAnswers(updatedAnswer);
    }
    //for video solutions
    if (type === "video") {
      // console.log("qwww", key, transcript);
      const status = key !== "" ? "attempted" : "seen";
      const options = key !== "" ? [key] : [];
      console.log("op",options);
      const updatedAnswer = answers.map((answer) =>
        answer.question_id === id
          ? { ...answer, status: status, selectedOptions: options, transcript:transcript }
          : answer
      );
      setAnswers(updatedAnswer);
    }
  };

  const finalSubmit = () => {
    const dataToSend = {
      userId: userId,
      interviewId: interviewId,
      completed: completed,
      totalTime: totalTime,
      answers: [...answers],
    };
    submitAnswers({ ...dataToSend });
    console.log("qw", dataToSend);
    setCompleted("completed");
  };
  if (completed === "completed") {
    return (
      <>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: "#fff",
            zIndex: 999,
          }}
        >
          <Typography variant="h4">Test Ended Enjoy</Typography>
        </Box>
      </>
    );
  } else
    return (
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          width: "100%",
          maxHeight: "100vh",
          height: "100vh",
          p: "0px",
          m: "0px",
        }}
      >
        <FlexBetween
          width="100%"
          sx={{
            borderBottom: "1px solid #cfcfcf",
            boxShadow: "2px 2px 3px #dfdfdf",
          }}
        >
          <Typography variant="h6" ml="10px">
            Data Structures and Algorithms
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            <MainTimer duration={220} finalSubmit={finalSubmit} />
          </Typography>
          <FlexBetween gap="20px" mr="20px">
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ textTransform: "none" }}
              onClick={() => {
                finalSubmit();
              }}
            >
              Submit
            </Button>
            <IconButton>
              <People />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ flexGrow: "1" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              flexGrow: 1,
            }}
          >
            <Box flexGrow={1}>
              <Box width="100%" height="100%">
                <Paper
                  className="customPaper"
                  width="80%"
                  sx={{
                    ml: "4%",
                    mt: "2%",
                    overflowY: "scroll",
                    maxHeight: "82vh",
                    height: "98%",
                    boxShadow: "none",
                    borderBottom: "1px solid #dfdfdf",
                  }}
                >
                  <Box sx={{ mr: "50px", ml: "50px", mt: "0px" }}>
                    {data || !isLoading ? (
                      <PaperLayout
                        {...data[openedQuestion]}
                        qno={openedQuestion}
                        totalQuestion={data.length}
                        answerChanged={answerChanged}
                        nextQuestion={nextQuestion}
                      />
                    ) : (
                      <Box>Loading...</Box>
                    )}
                  </Box>
                </Paper>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ pt: "6px", pb: "16px" }}
            >
              <FlexBetween>
                {data && openedQuestion !== data.length - 1 ? (
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => {
                      nextQuestion();
                    }}
                  >
                    SAVE & NEXT
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ color: "white", background: "darkred" }}
                    onClick={() => {
                      finalSubmit();
                    }}
                  >
                    END TEST
                  </Button>
                )}
              </FlexBetween>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              width: "420px",
            }}
          >
            <Box flexGrow={1}>
              <StatusBox answers={answers} isChanging={changingAnswers} />
            </Box>
            <Box>
              <FlexBetween height="240px"></FlexBetween>
            </Box>
          </Box>
        </Box>
      </Box>
    );
};
//192.170.53.55
//255.255.255.0
//192.170.0.1
//192.162.0.201
export default Interview;
