// import {Box, Button, Typography, Paper } from '@mui/material';
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import cardImg from "assets/cardImage.jpg";
import Chip from "@mui/material/Chip";
import FlexBetween from "../FlexBetween";
import { Avatar, Button, Divider, Rating } from "@mui/material";
import AccessAlarmTwoToneIcon from "@mui/icons-material/AccessAlarmTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import QuizTwoToneIcon from "@mui/icons-material/QuizTwoTone";
import { useSelector } from "react-redux";
import {
  Alarm,
  Tag,
  People,
  Quiz,
  PeopleAltRounded,
  Verified,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import man from "./../../assets/man.jpg";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import CustomDialog from "../popovers/CustomDialog";

const InterviewCard = ({
  title,
  duration,
  rating,
  stream,
  tags,
  amount,
  _id,
}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const user = useSelector((state) => state.global.user);
  const openInterview = () => {
    if (user) {
      const windowFeatures = `toolbar=no,menubar=no,location=no,status=no,scrollbars=yes,height=${window.screen.availHeight},width=${window.screen.availWidth}`;
      navigate(`/interview/${_id}`);
    } else {
      setOpen(true);
    }
  };
  const closeDialog = () => {
    setOpen(false);
  };
  return (
    <>
      <CustomDialog isOpen={open} closeDialog={closeDialog} />
      <Card
        elevation={1}
        sx={{
          display: "flex",
          marginTop: "20px",
          pl: "10px",
          background: theme.palette.grey.main[0],
          borderBottom: "1px solid #dfdfdf",
        }}
      >
        {/* <CardMedia
          component="img"
          sx={{ width: 180, objectFit: "cover", height: 160 }}
          image={cardImg}
          alt="Live from space album cover"
        /> */}
        <Box flexGrow="1" sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              mb="10px"
              sx={{ justifyContent: "space-between" }}
            >
              <FlexBetween gap="12px">
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src={man}
                    sx={{ width: 40, height: 40 }}
                  />
                </Box>
                <Box>
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{
                      color: theme.palette.secondary.main,
                      lineHeight: 1,
                      fontSize: "18px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {title}
                  </Typography>
                  <FlexBetween>
                    <Typography
                      component="div"
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.grey.main[600],
                        lineHeight: 1.4,
                      }}
                    >
                      from Kundan Yadav
                    </Typography>
                    <TaskAltOutlinedIcon
                      sx={{ color: "darkblue", fontSize: "14px", ml: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "12px",
                        ml: "4px",
                        fontFamily: "sans-serif",
                        color: "darkblue",
                      }}
                    >
                      verified
                    </Typography>
                  </FlexBetween>
                </Box>
              </FlexBetween>
              <FlexBetween>
                <Rating
                  name="read-only"
                  value={rating}
                  size="small"
                  precision={0.1}
                  readOnly
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "darkblue",
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    ml: "6px",
                    color: theme.palette.grey.main[600],
                    letterSpacing: -0.5,
                  }}
                >
                  ( {rating} )
                </Typography>
              </FlexBetween>
            </Box>
            {/* <Divider sx={{mb:"10px"}} /> */}
            <Box ml="20px">
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  background: theme.palette.background.main,
                  p: "6px",
                  borderRadius: "6px",
                  borderLeft: "3px solid #9090bb",
                }}
              >
                {/* <IconButton size="small" sx={{background:theme.palette.grey.main[100], mr:"6px"}}>
                <Tag sx={{color:theme.palette.secondary.main, fontSize:"14px", fontWeight:"bold"}} />
              </IconButton> */}
                {tags.map((val, key) => (
                  <Chip
                    sx={{
                      mr: "6px",
                      fontSize: "12px",
                      color: theme.palette.secondary.main,
                    }}
                    key={key}
                    variant="outlined"
                    size="small"
                    label={`# ${val}`}
                  />
                ))}
              </Box>

              <Box
                sx={{
                  color: theme.palette.grey.main[500],
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                  mt: "10px",
                }}
              >
                This is an interview including strong area of DSA and dynamic
                programming. This will let you efficient in binary search and
                personal question. You have to join it if you know react and
                node js.
              </Box>
            </Box>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: "10px",
              gap: "24px",
              ml: "20px",
            }}
          >
            <FlexBetween gap="4px">
              <FlexBetween sx={{ borderRadius: "6px" }}>
                <AccessAlarmTwoToneIcon
                  sx={{ fontSize: "30px", p: "6px", color: "#6060aa" }}
                />
              </FlexBetween>
              <Box>
                <Typography variant="subtitle2">Duration</Typography>
                <Typography variant="subtitle2" lineHeight="1">
                  20 second
                </Typography>
              </Box>
            </FlexBetween>
            <FlexBetween gap="4px">
              <FlexBetween sx={{ borderRadius: "6px" }}>
                <PeopleAltTwoToneIcon
                  sx={{ fontSize: "30px", p: "6px", color: "#60aa60" }}
                />
              </FlexBetween>
              <Box>
                <Typography variant="subtitle2">Registered</Typography>
                <Typography variant="subtitle2" lineHeight="1">
                  20,106
                </Typography>
              </Box>
            </FlexBetween>
            <FlexBetween gap="4px">
              <FlexBetween sx={{ borderRadius: "6px" }}>
                <QuizTwoToneIcon
                  sx={{ fontSize: "30px", p: "6px", color: "#60aaaa" }}
                />
              </FlexBetween>
              <Box>
                <Typography variant="subtitle2">Questions</Typography>
                <Typography variant="subtitle2" lineHeight="1">
                  15
                </Typography>
              </Box>
            </FlexBetween>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              gap: "15px",
              alignItems: "center",
              pr: "15px",
              mb: "10px",
            }}
          >
            <Button
              startIcon={<DescriptionOutlinedIcon />}
              variant="outlined"
              size="small"
              sx={{ textTransform: "none" }}
            >
              See Details
            </Button>
            <Button
              endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
              color="success"
              size="small"
              variant="contained"
              sx={{ textTransform: "none" }}
              onClick={() => {
                openInterview();
              }}
            >
              Attempt Now
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default InterviewCard;
