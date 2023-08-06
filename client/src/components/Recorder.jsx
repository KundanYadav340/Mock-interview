import React, { useState, useEffect } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
  put,
} from "firebase/storage";
import { storage } from "./../firebase/index";
import { useRecordWebcam } from "react-record-webcam";
import { Box, Button, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";
import {
  Camera,
  Close,
  Download,
  FileUpload,
  PhotoCamera,
  ReplayCircleFilled,
  Start,
  VideoCall,
  VideoCameraBack,
  VideocamOff,
} from "@mui/icons-material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { v4 as uuidv4 } from "uuid";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const Recorder = ({ id, answerChanged }) => {
  const [textToCopy, setTextToCopy] = useState();

  const userId = useSelector((state) => state.global.user._id);
  const [videoUrl, setVideoUrl] = useState(null);
  const [progress, setProgress] = useState("null");

  const recordWebcam = useRecordWebcam({
    frameRate: 60,
    width: 480,
    height: 300,
    mimeType: "video/mp4",
  });

  //for transcription the functions are written here
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListening = () => SpeechRecognition.stopListening();
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();
  useEffect(() => {
    recordWebcam.close();
    setProgress("null");
    setVideoUrl(null);
    stopListening();
    return () => {
      recordWebcam.close();
      setProgress("null");
      setVideoUrl(null);
      resetTranscript();
      stopListening();
      resetTranscript();
    };
  }, [id]);
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();

    const metadata = {
      contentType: "video/mp4",
    };

    // const name = uuidv4()+id+"userId";
    const storageRef = ref(
      storage,
      `interviewVideoAnswers/${uuidv4()}${id}${userId}`
    );
    const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

    //Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setProgress("done");
          setVideoUrl(downloadURL);
          // getUrl(downloadURL);
          answerChanged(id, [downloadURL, transcript], "video");
        });
      }
    );
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontWeight: "bold",
          mb: "16px",
        }}
      >
        Camera status:
        <Typography
          sx={{
            color:
              recordWebcam.status === "INIT" || recordWebcam.status === "CLOSED"
                ? "red"
                : "green",
            background:
              recordWebcam.status === "INIT" || recordWebcam.status === "CLOSED"
                ? "#eedddd"
                : "#ddeedd",
            p: "4px",
            fontSize: "14px",
            borderRadius: "2px",
          }}
        >
          {recordWebcam.status}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Box
          sx={{
            width: "480px",
            height: "300px",
            background: "#efefef",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          {recordWebcam.status === "CLOSED" && progress !== "done" && (
            <Box p="15px" textAlign="center">
              Click on Open Camera to start recording your answer
            </Box>
          )}
          {recordWebcam.status !== "CLOSED" &&
            recordWebcam.status !== "PREVIEW" &&
            progress !== "done" && (
              <video ref={recordWebcam.webcamRef} autoPlay muted />
            )}
          <Box
            sx={{
              width: "480px",
              height: "300px",
              background: "#efefef",
              borderRadius: "6px",
              overflow: "hidden",
              display:
                recordWebcam.status !== "PREVIEW"
                  ? "none"
                  : progress === "done" || progress === "null"
                  ? "block"
                  : "none",
            }}
          >
            <video ref={recordWebcam.previewRef} loop autoPlay controls />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            pt="20px"
          >
            {progress !== "null" && progress !== "done" && (
              <>
                <Box>Uploading Video</Box>
                <Box width="80px" mt="15px">
                  <CircularProgressbar
                    value={progress}
                    text={`${Math.floor(progress)}%`}
                  />
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
      {progress === "null" && (
        <Box
          display="flex"
          justifyContent="center"
          gap="15px"
          alignItems="center"
          p="15px"
        >
          {recordWebcam.status === "INIT" && (
            <Button
              variant="text"
              color="alert"
              startIcon={<Camera />}
              sx={{ textTransform: "none" }}
              onClick={recordWebcam.open}
            >
              Starting cam...
            </Button>
          )}
          {recordWebcam.status === "CLOSED" && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<PhotoCamera />}
              sx={{ textTransform: "none" }}
              onClick={recordWebcam.open}
            >
              Open camera
            </Button>
          )}
          {(recordWebcam.status === "OPEN" ||
            recordWebcam.status === "RECORDING") && (
            <Button
              variant="outlined"
              color="error"
              startIcon={<Close />}
              sx={{ textTransform: "none" }}
              onClick={recordWebcam.close}
            >
              Close
            </Button>
          )}
          {recordWebcam.status === "OPEN" && (
            <Button
              variant="contained"
              color="success"
              startIcon={<VideoCall />}
              sx={{ textTransform: "none" }}
              onClick={() => {
                recordWebcam.start();
                startListening();
              }}
            >
              Start recording
            </Button>
          )}
          {recordWebcam.status === "RECORDING" && (
            <Button
              variant="outlined"
              color="primary"
              startIcon={<VideocamOff />}
              sx={{ textTransform: "none" }}
              onClick={() => {
                recordWebcam.stop();
                setTextToCopy(transcript);
                SpeechRecognition.stopListening();
              }}
            >
              Stop recording
            </Button>
          )}
          {recordWebcam.status === "PREVIEW" && (
            <Button
              variant="outlined"
              color="primary"
              startIcon={<ReplayCircleFilled />}
              sx={{ textTransform: "none" }}
              onClick={() => {
                recordWebcam.retake();
                resetTranscript();
                startListening();
              }}
            >
              Retake
            </Button>
          )}
          {recordWebcam.status === "PREVIEW" && (
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<Download />}
              sx={{ textTransform: "none" }}
              onClick={recordWebcam.download}
            >
              Download recording
            </Button>
          )}
          {recordWebcam.status === "PREVIEW" && (
            <Button
              variant="contained"
              color="success"
              startIcon={<FileUpload />}
              sx={{ textTransform: "none" }}
              onClick={() => {
                saveFile();
              }}
            >
              Submit
            </Button>
          )}
        </Box>
      )}
      {progress === "done" && (
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          gap="15px"
          alignItems="center"
          p="15px"
        >
          <Typography
            sx={{
              color: "darkgreen",
              p: "0px 6px",
              background: "#ccddcc",
              mb: "8px",
            }}
          >
            {" "}
            Preview of Uploaded video
          </Typography>
          {recordWebcam.status === "PREVIEW" && (
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<Download />}
              sx={{ textTransform: "none" }}
              onClick={recordWebcam.download}
            >
              Download recording
            </Button>
          )}
        </Box>
      )}

      {/* transcription code goes here */}
      <div className="main-content" onClick={() => setTextToCopy(transcript)}>
        {transcript}
      </div>

      <div className="btn-style">
        {/* <button onClick={setCopied}>
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </button> */}
        <button onClick={startListening}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>
          Stop Listening
        </button>
      </div>
    </div>
  );
};

export default Recorder;
