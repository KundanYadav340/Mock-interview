import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useGetHelpMutation } from "state/api";
import { useDispatch } from "react-redux";
// import { getHelp } from "./apiSlice";

const ChatGptHelp = ({ prompt }) => {
  const [contentToShow, setContentToShow] = React.useState(null);
  const dispatch = useDispatch();
  const [getHelp, { isLoading, isError, isSuccess, data }] =
    useGetHelpMutation();
  useEffect(() => {
    setContentToShow(null);
  }, [prompt]);
  useEffect(() => {
    if (data) {
      setContentToShow(data.doc.content);
      console.log(data.doc.content);
      // console.log("content", contentToShow.split("\n"));
    }
  }, [data]);
  const handleButtonClick = () => {
    getHelp({
      prompt: prompt.questionAsked,
    });
  };
  const renderBulletPoint = (item, index) => {
    if (item.startsWith("- ")) {
      return (
        <div key={index} style={{ margin: "10px" }}>
          &bull; <b>{item.substring(2)}</b>
        </div>
      );
    } else if (item.startsWith("## ")) {
      return (
        <div key={index} margin="10px" sx={{ margin: "10px" }}>
          <strong>{item.substring(3)}</strong>
        </div>
      );
    } else if (item.startsWith("### ")) {
      return (
        <div margin="10px" key={index} sx={{ margin: "10px" }}>
          <strong>{item.substring(4)}</strong>
        </div>
      );
    }
    return (
      <div margin="10px" key={index} sx={{ margin: "10px" }}>
        {item}
      </div>
    );
  };
  return (
    <Box
      mt="18px"
      mb="60px"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        width="96%"
        sx={{
          background: "#ededed",
          p: "6px",
          borderRadius: "6px",
          mb: "12px",
        }}
      >
        {isLoading && (
          <Box
            sx={{
              color: "darkcyan",
              fontFamily: "verdana",
              fontWeight: "bold",
              p: "0px 8px",
            }}
          >
            Generating Content...
          </Box>
        )}
        {!contentToShow && !isLoading && (
          <Button
            variant="outlined"
            sx={{ textTransform: "none", background: "white" }}
            onClick={handleButtonClick}
          >
            Get AI suggestions
          </Button>
        )}
        {contentToShow && (
          <Box sx={{ fontWeight: "bold" }}>AI generated content</Box>
        )}
      </Box>
      <Box width="94%" sx={{ color: "#606060" }}>
        {data &&
          contentToShow &&
          contentToShow.split("\n").map((item, index) => (
            <div style={{ marginBottom: "10px" }} key={index}>
              {item}
            </div>
          ))}
      </Box>
    </Box>
  );
};

export default ChatGptHelp;
