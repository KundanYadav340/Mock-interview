import {
  Box,
  Divider,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  TextField,
  Avatar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FlexBetween from "./FlexBetween";
import Recorder from "./Recorder";
import { useTheme } from "@emotion/react";
import hourGlass from "assets/hourglass.svg";
import Timer from "scenes/interview/Timer";
import ChatGptHelp from "./ChatGptHelp";

const PaperLayout = ({
  _id,
  question,
  qno,
  totalQuestion,
  type,
  answerChanged,
  duration,
  nextQuestion,
}) => {
  const theme = useTheme();
  const [value, setValue] = useState(null); // state for singleChoice question
  const [selectedValuesMultipleChoice, setSelectedValuesMultipleChoice] =
    useState([]); // state for multipleChoice question
  if(question.options) var p = new Array(question.options.length).fill(false);
  const [checked, setChecked] = useState(p);
  // const type="multipleChoice";
  const handleChange = (event) => {
    console.log("handle");
  };
  //function for handling single Choice questions
  const handleRadioClick = (event) => {
    event.stopPropagation();
    const prevValue = value;
    const newValue = event.target.value;
    setValue((prevValue) => (prevValue === newValue ? "-1" : newValue));
    answerChanged(_id, newValue === prevValue ? "-1" : newValue, type);
  };

  //function for handling multiple choice questions
  const handleChangeChecked = (event) => {
    console.log("fun");
    const value = event.target.value;
    console.log(value);
    const newValue = selectedValuesMultipleChoice.includes(value)
      ? selectedValuesMultipleChoice.filter((val) => val !== value)
      : [...selectedValuesMultipleChoice, value];
    setSelectedValuesMultipleChoice((prevValues) =>
      prevValues.includes(value)
        ? prevValues.filter((val) => val !== value)
        : [...prevValues, value]
    );
    answerChanged(_id, newValue, type);
  };

  //function for handling video solution
  // const getUrl = (url) =>{
  //     answerChanged(_id, url, type);
  // }
  useEffect(() => {
    setValue(null);
    setSelectedValuesMultipleChoice([]);
  }, [_id]);
  return (
    <Box>
      <FlexBetween>
        <Typography variant="subtitle2" color={theme.palette.grey.main[600]}>
          Question {qno + 1} of {totalQuestion} ( {type} )
        </Typography>
        <FlexBetween
          sx={{
            background: theme.palette.background.main,
            p: "6px",
            borderRadius: "6px",
          }}
        >
          <Box
            component="img"
            alt="Remy Sharp"
            src={hourGlass}
            sx={{ height: 24 }}
          />
          <Typography variant="subtitle2" sx={{ fontFamily: "sans-serif" }}>
            <Timer duration={duration / 3} id={_id} next={nextQuestion} />
          </Typography>
        </FlexBetween>
      </FlexBetween>
      <Box maxWidth="800px" sx={{ mt: "15px", wordWrap: "break-word" }}>
        <Typography variant="subtitle2" fontSize="16px">
          {question.questionAsked}
        </Typography>
        <Divider sx={{ mt: "12px", mb: "16px" }} />
        <Box>
          {type === "singleChoice" && (
            <FormControl>
              {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                {question.options.map((val, key) => (
                  <FormControlLabel
                    value={key}
                    key={key}
                    control={<Radio onClick={handleRadioClick} />}
                    label={val}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )}
          {type === "multipleChoice" && (
            <FormGroup>
              {question.options.map((val, key) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedValuesMultipleChoice.includes(`${key}`)}
                      onChange={handleChangeChecked}
                      value={key}
                    />
                  }
                  label={val}
                  key={key}
                />
              ))}
            </FormGroup>
          )}
          {type === "text" && (
            <TextField
              id="outlined-multiline-static"
              label="Your Answer"
              multiline
              fullWidth
              rows={4}
              focused
            />
          )}
          {type === "video" && (
            <Recorder id={_id} answerChanged={answerChanged} />
          )}
          <Box>{question && <ChatGptHelp prompt={question} />}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaperLayout;
